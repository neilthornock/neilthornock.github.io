#!/usr/bin/env python3
from __future__ import annotations

import pathlib
import re


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


def skip_ws_and_comments(text: str, i: int) -> int:
    n = len(text)
    while i < n:
        if text[i].isspace():
            i += 1
            continue
        if text.startswith("//", i):
            i = text.find("\n", i)
            if i == -1:
                return n
            continue
        if text.startswith("/*", i):
            j = text.find("*/", i + 2)
            if j == -1:
                return n
            i = j + 2
            continue
        return i
    return n


def find_matching_block(text: str, start: int) -> str:
    """
    Given the index of an opening delimiter ({ or [), return the text inside
    the matching block, excluding the outer delimiters.
    """
    opening = text[start]
    closing = {"{": "}", "[": "]"}[opening]

    depth = 0
    i = start
    in_string: str | None = None
    escape = False
    in_line_comment = False
    in_block_comment = False

    while i < len(text):
        ch = text[i]
        nxt = text[i + 1] if i + 1 < len(text) else ""

        if in_line_comment:
            if ch == "\n":
                in_line_comment = False
            i += 1
            continue

        if in_block_comment:
            if ch == "*" and nxt == "/":
                in_block_comment = False
                i += 2
                continue
            i += 1
            continue

        if in_string:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_string:
                in_string = None
            i += 1
            continue

        if ch == "/" and nxt == "/":
            in_line_comment = True
            i += 2
            continue

        if ch == "/" and nxt == "*":
            in_block_comment = True
            i += 2
            continue

        if ch in "\"'`":
            in_string = ch
            i += 1
            continue

        if ch == opening:
            depth += 1
        elif ch == closing:
            depth -= 1
            if depth == 0:
                return text[start + 1 : i]

        i += 1

    raise ValueError(f"Unmatched {opening}")


def extract_pieces_object(text: str) -> str:
    marker = "const pieces ="
    idx = text.find(marker)
    if idx == -1:
        raise ValueError("Could not find `const pieces =` in pieces.js")

    brace = text.find("{", idx)
    if brace == -1:
        raise ValueError("Could not find opening brace for pieces object")

    return find_matching_block(text, brace)


def parse_piece_entries(object_text: str) -> dict[str, str]:
    entries: dict[str, str] = {}
    i = 0
    n = len(object_text)

    while i < n:
        i = skip_ws_and_comments(object_text, i)
        if i >= n:
            break

        key_match = re.match(r"[A-Za-z_$][A-Za-z0-9_$]*", object_text[i:])
        if not key_match:
            i += 1
            continue

        key = key_match.group(0)
        i += len(key_match.group(0))
        i = skip_ws_and_comments(object_text, i)

        if i >= n or object_text[i] != ":":
            continue

        i += 1
        i = skip_ws_and_comments(object_text, i)

        if i >= n or object_text[i] != "{":
            continue

        block = find_matching_block(object_text, i)
        entries[key] = block
        i += len(block) + 2  # account for the outer braces we stripped

        i = skip_ws_and_comments(object_text, i)
        if i < n and object_text[i] == ",":
            i += 1

    return entries


def related_page_urls(piece_block: str) -> set[str]:
    urls: set[str] = set()
    rp_idx = piece_block.find("relatedPages")
    if rp_idx == -1:
        return urls

    arr_start = piece_block.find("[", rp_idx)
    if arr_start == -1:
        return urls

    arr = find_matching_block(piece_block, arr_start)
    for m in re.finditer(r'url\s*:\s*["\']([^"\']+)["\']', arr):
        url = m.group(1)
        if url.startswith("/"):
            urls.add(f"{SITE}{url}")
    return urls


def main() -> None:
    text = PIECES_PATH.read_text(encoding="utf-8")
    pieces_object = extract_pieces_object(text)
    pieces = parse_piece_entries(pieces_object)

    urls: set[str] = set(BASE_URLS)

    for slug, block in pieces.items():
        urls.add(f"{SITE}/?piece={slug}")
        urls.update(related_page_urls(block))

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
