#!/usr/bin/env python3
from __future__ import annotations

import pathlib
import re
from html import unescape
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

# Directories to scan for HTML pages automatically.
SCAN_DIRS = ["blog", "projects", "gallery", "bio"]

# Obvious non-content / helper pages to skip if they exist.
EXCLUDED_IMAGE_BASENAMES = {
    "favicon.ico",
    "favicon.svg",
    "favicon-32x32.png",
    "favicon-96x96.png",
    "apple-touch-icon.png",
}

# Open Graph images are useful for discovery, but skip obvious generic icons.
INCLUDE_OG_IMAGES = True

EXCLUDED_BASENAMES = {
    "404.html",
    "index-bak.html",
    "index-redir.html",
    "search_index.html",
}


def normalize_html_url(rel_path: pathlib.Path) -> str:
    rel = rel_path.as_posix()
    if rel == "index.html":
        return f"{SITE}/"
    if rel.endswith("/index.html"):
        return f"{SITE}/{rel[:-len('index.html')]}"
    return f"{SITE}/{rel}"


class ImageExtractor(HTMLParser):
    """Collect image URLs from <img src> and Open Graph image metadata."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.images: list[str] = []
        self.og_images: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_dict = {k.lower(): v for k, v in attrs}
        if tag.lower() == "img":
            src = attrs_dict.get("src")
            if src:
                self.images.append(src)

        if tag.lower() == "meta":
            prop = (attrs_dict.get("property") or attrs_dict.get("name") or "").lower()
            content = attrs_dict.get("content")
            if INCLUDE_OG_IMAGES and prop == "og:image" and content:
                self.og_images.append(content)


def image_is_indexable(image_url: str) -> bool:
    """Skip data URLs, SVG/XML-style resources, and obvious site icons."""
    image_url = image_url.strip()
    if not image_url or image_url.startswith("data:"):
        return False
    parsed = urlparse(image_url)
    filename = pathlib.PurePosixPath(parsed.path).name.lower()
    return filename not in EXCLUDED_IMAGE_BASENAMES


def extract_images_for_html(path: pathlib.Path) -> list[str]:
    """Return absolute image URLs referenced by one HTML page."""
    text = path.read_text(encoding="utf-8", errors="ignore")
    parser = ImageExtractor()
    parser.feed(text)

    page_url = normalize_html_url(path.relative_to(ROOT))
    image_urls: list[str] = []
    seen: set[str] = set()

    for raw_url in parser.images + parser.og_images:
        absolute_url = unescape(urljoin(page_url, raw_url.strip()))
        if not image_is_indexable(absolute_url):
            continue
        parsed = urlparse(absolute_url)
        if parsed.scheme not in {"http", "https"}:
            continue
        if absolute_url not in seen:
            seen.add(absolute_url)
            image_urls.append(absolute_url)

    return image_urls


def scan_html_images() -> dict[str, list[str]]:
    """Map each scanned HTML page URL to its discoverable image URLs."""
    image_map: dict[str, list[str]] = {}

    paths: list[pathlib.Path] = []

    for p in ROOT.glob("*.html"):
        if p.name not in EXCLUDED_BASENAMES:
            paths.append(p)

    for dirname in SCAN_DIRS:
        d = ROOT / dirname
        if not d.is_dir():
            continue
        for p in d.rglob("*.html"):
            if p.name not in EXCLUDED_BASENAMES:
                paths.append(p)

    for path in paths:
        page_url = normalize_html_url(path.relative_to(ROOT))
        images = extract_images_for_html(path)
        if images:
            image_map[page_url] = images

    return image_map


def scan_html_files() -> set[str]:
    urls: set[str] = set()

    # Root-level HTML pages.
    for p in ROOT.glob("*.html"):
        if p.name in EXCLUDED_BASENAMES:
            continue
        urls.add(normalize_html_url(p.relative_to(ROOT)))

    # Common content directories.
    for dirname in SCAN_DIRS:
        d = ROOT / dirname
        if not d.is_dir():
            continue
        for p in d.rglob("*.html"):
            if p.name in EXCLUDED_BASENAMES:
                continue
            urls.add(normalize_html_url(p.relative_to(ROOT)))

    return urls


def extract_piece_keys(text: str) -> list[str]:
    # Top-level piece keys are flush-left in pieces.js.
    keys = []
    for m in re.finditer(r"(?m)^([A-Za-z_$][A-Za-z0-9_$]*):\s*{\s*$", text):
        keys.append(m.group(1))
    return keys


def extract_related_pages(text: str) -> set[str]:
    urls: set[str] = set()
    for block in re.finditer(r"relatedPages\s*:\s*\[(.*?)\]", text, re.DOTALL):
        inner = block.group(1)
        for m in re.finditer(r"url\s*:\s*['\"]([^'\"]+)['\"]", inner):
            url = m.group(1)
            if url.startswith("/"):
                urls.add(f"{SITE}{url}")
    return urls


def main() -> None:
    text = PIECES_PATH.read_text(encoding="utf-8")

    urls: set[str] = set(BASE_URLS)
    urls.update(scan_html_files())

    for slug in extract_piece_keys(text):
        urls.add(f"{SITE}/?piece={quote(slug)}")

    urls.update(extract_related_pages(text))

    sorted_urls = sorted(urls)
    image_map = scan_html_images()

    url_entries: list[str] = []
    for u in sorted_urls:
        lines = ["  <url>", f"    <loc>{u}</loc>"]
        for image_url in image_map.get(u, []):
            lines.extend(["    <image:image>", f"      <image:loc>{image_url}</image:loc>", "    </image:image>"])
        lines.append("  </url>")
        url_entries.append("\n".join(lines) + "\n")

    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
        '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
        + "".join(url_entries)
        + "</urlset>\n"
    )

    OUT_PATH.write_text(xml, encoding="utf-8")
    image_count = sum(len(images) for images in image_map.values())
    print(f"Wrote {len(sorted_urls)} URLs and {image_count} image references to {OUT_PATH}")


if __name__ == "__main__":
    main()
