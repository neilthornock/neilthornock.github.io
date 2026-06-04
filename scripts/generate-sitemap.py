#!/usr/bin/env python3
from __future__ import annotations

import pathlib
import re
from urllib.parse import quote

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
SCAN_DIRS = ["blog", "projects", "gallery", "bio", "compositions"]

# Obvious non-content / helper pages to skip if they exist.
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
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "".join(
            f"  <url>\n    <loc>{u}</loc>\n  </url>\n"
            for u in sorted_urls
        )
        + "</urlset>\n"
    )

    OUT_PATH.write_text(xml, encoding="utf-8")
    print(f"Wrote {len(sorted_urls)} URLs to {OUT_PATH}")


if __name__ == "__main__":
    main()
