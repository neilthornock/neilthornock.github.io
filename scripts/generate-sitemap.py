#!/usr/bin/env python3
from __future__ import annotations

import pathlib
import re
from collections import OrderedDict
from html import escape
from html.parser import HTMLParser
from urllib.parse import quote, urljoin, urlparse

SITE = "https://neilthornock.org"
ROOT = pathlib.Path(__file__).resolve().parent.parent
PIECES_PATH = ROOT / "pieces.js"
OUT_PATH = ROOT / "sitemap.xml"

BASE_URLS = [
    f"{SITE}/",
    f"{SITE}/projects/",
    f"{SITE}/projects/new-ragtime.html",
    f"{SITE}/projects/waltzes.html",
    f"{SITE}/projects/piano-sonatas.html",
    f"{SITE}/projects/microtonal-piano.html",
    f"{SITE}/blog/",
    f"{SITE}/blog/2026-04-10-all-the-goods.html",
    f"{SITE}/blog/2026-04-15-minifesto.html",
    f"{SITE}/blog/2026-04-25-fragments.html",
    f"{SITE}/blog/2026-06-01-more-fragments.html",
    f"{SITE}/gallery/",
    f"{SITE}/bio/",
]

SCAN_DIRS = ["blog", "projects", "gallery", "bio"]

EXCLUDED_BASENAMES = {
    "404.html",
    "index-bak.html",
    "index-redir.html",
    "search_index.html",
}

EXCLUDED_IMAGE_NAMES = {
    "favicon.ico",
    "favicon.svg",
    "favicon-32x32.png",
    "favicon-96x96.png",
    "apple-touch-icon.png",
}

KEY_RE = re.compile(
    r'''^[ \t]*(?:(?:["'])([^"']+)["']|([A-Za-z_$][A-Za-z0-9_$]*))\s*:\s*{\s*$'''
)
RELATED_RE = re.compile(r"relatedPages\s*:\s*\[(.*?)\]", re.DOTALL)
RELATED_URL_RE = re.compile(r"url\s*:\s*['\"]([^'\"]+)['\"]")
OG_IMAGE_RE = re.compile(
    r'<meta\b[^>]*\bproperty=["\']og:image["\'][^>]*\bcontent=["\']([^"\']+)["\']',
    re.IGNORECASE,
)


class ImageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.images: set[str] = set()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() != "img":
            return
        src = dict(attrs).get("src")
        if src:
            self.images.add(src.strip())


def normalize_html_url(rel_path: pathlib.Path) -> str:
    rel = rel_path.as_posix()
    if rel == "index.html":
        return f"{SITE}/"
    if rel.endswith("/index.html"):
        return f"{SITE}/{rel[:-len('index.html')]}"
    return f"{SITE}/{rel}"


def iter_html_pages() -> list[tuple[pathlib.Path, str]]:
    pages: list[tuple[pathlib.Path, str]] = []
    seen: set[pathlib.Path] = set()

    for p in ROOT.glob("*.html"):
        if p.name in EXCLUDED_BASENAMES:
            continue
        seen.add(p.resolve())
        pages.append((p, normalize_html_url(p.relative_to(ROOT))))

    for dirname in SCAN_DIRS:
        d = ROOT / dirname
        if not d.is_dir():
            continue
        for p in d.rglob("*.html"):
            if p.name in EXCLUDED_BASENAMES or p.resolve() in seen:
                continue
            seen.add(p.resolve())
            pages.append((p, normalize_html_url(p.relative_to(ROOT))))

    return pages


def scan_html_files() -> set[str]:
    return {url for _, url in iter_html_pages()}


def _advance_js_lex_state(line: str, state: str, depth: int) -> tuple[str, int]:
    """Advance a lightweight JS lexer over one line.

    We only need enough lexical awareness to count braces outside strings/comments.
    Template literals are treated as strings; the pieces file does not rely on
    template-literal interpolation for object structure.
    """
    i = 0
    escaped = False
    while i < len(line):
        c = line[i]
        n = line[i + 1] if i + 1 < len(line) else ""

        if state == "line_comment":
            break
        if state == "block_comment":
            if c == "*" and n == "/":
                state = "normal"
                i += 2
                continue
            i += 1
            continue
        if state in {"'", '"', "`"}:
            if escaped:
                escaped = False
            elif c == "\\":
                escaped = True
            elif c == state:
                state = "normal"
            i += 1
            continue

        if c == "/" and n == "/":
            state = "line_comment"
            break
        if c == "/" and n == "*":
            state = "block_comment"
            i += 2
            continue
        if c in {"'", '"', "`"}:
            state = c
        elif c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
        i += 1

    if state == "line_comment":
        state = "normal"
    return state, depth


def extract_piece_keys(text: str) -> list[str]:
    """Extract only top-level keys of `const pieces = { ... }`.

    Supports both bare keys and quoted keys, and avoids nested object properties
    such as `extScore: { ... }`.
    """
    keys: list[str] = []
    state = "normal"
    depth = 0

    for line in text.splitlines():
        if depth == 1:
            match = KEY_RE.match(line)
            if match:
                keys.append(match.group(1) or match.group(2))
        state, depth = _advance_js_lex_state(line, state, depth)

    # Preserve source order while removing duplicate object keys. In JavaScript,
    # a later duplicate key overwrites the earlier one, so only one sitemap URL
    # should be emitted.
    return list(OrderedDict.fromkeys(keys))


def extract_related_pages(text: str) -> set[str]:
    urls: set[str] = set()
    for block in RELATED_RE.finditer(text):
        for match in RELATED_URL_RE.finditer(block.group(1)):
            url = match.group(1)
            if url.startswith("/"):
                urls.add(f"{SITE}{url}")
    return urls


def is_usable_image_url(image_url: str) -> bool:
    parsed = urlparse(image_url)
    if parsed.scheme not in {"http", "https"}:
        return False
    basename = pathlib.PurePosixPath(parsed.path).name.lower()
    return basename not in EXCLUDED_IMAGE_NAMES


def extract_page_images(page_path: pathlib.Path, page_url: str) -> set[str]:
    try:
        text = page_path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError):
        return set()

    parser = ImageParser()
    try:
        parser.feed(text)
    except Exception:
        pass

    candidates = set(parser.images)
    candidates.update(m.group(1).strip() for m in OG_IMAGE_RE.finditer(text))

    images: set[str] = set()
    for src in candidates:
        if not src or src.startswith(("data:", "blob:", "#")):
            continue
        image_url = urljoin(page_url, src)
        if is_usable_image_url(image_url):
            images.add(image_url)
    return images


def main() -> None:
    text = PIECES_PATH.read_text(encoding="utf-8")
    piece_keys = extract_piece_keys(text)

    urls: set[str] = set(BASE_URLS)
    urls.update(scan_html_files())
    urls.update(f"{SITE}/?piece={quote(slug, safe='')}" for slug in piece_keys)
    urls.update(extract_related_pages(text))

    page_images: dict[str, set[str]] = {}
    for page_path, page_url in iter_html_pages():
        images = extract_page_images(page_path, page_url)
        if images:
            page_images.setdefault(page_url, set()).update(images)

    sorted_urls = sorted(urls)
    xml_parts = [
        '<?xml version="1.0" encoding="UTF-8"?>\n',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
        'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n',
    ]

    for url in sorted_urls:
        xml_parts.append("  <url>\n")
        xml_parts.append(f"    <loc>{escape(url)}</loc>\n")
        for image_url in sorted(page_images.get(url, set())):
            xml_parts.append("    <image:image>\n")
            xml_parts.append(f"      <image:loc>{escape(image_url)}</image:loc>\n")
            xml_parts.append("    </image:image>\n")
        xml_parts.append("  </url>\n")

    xml_parts.append("</urlset>\n")
    OUT_PATH.write_text("".join(xml_parts), encoding="utf-8")

    print(f"Found {len(piece_keys)} unique piece entries in {PIECES_PATH.name}.")
    print(f"Found {len(scan_html_files())} HTML pages.")
    print(f"Found {len(extract_related_pages(text))} related pages.")
    print(f"Found {len(sorted_urls)} total sitemap URLs.")
    print(f"Wrote sitemap to {OUT_PATH}")


if __name__ == "__main__":
    main()
