// scripts/generate-sitemap.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const SITE = "https://neilthornock.org";
const ROOT = process.cwd();
const PIECES_PATH = path.join(ROOT, "pieces.js");
const OUT_PATH = path.join(ROOT, "sitemap.xml");

// Keep the URLs that are already in your current sitemap.
const baseUrls = [
  `${SITE}/`,
  `${SITE}/projects/`,
  `${SITE}/projects/new-ragtime.html`,
  `${SITE}/projects/waltzes.html`,
  `${SITE}/projects/piano-sonatas.html`,
  `${SITE}/projects/microtonal-piano.html`,
  `${SITE}/blog/`,
  `${SITE}/blog/2026-04-10-all-the-goods.html`,
  `${SITE}/blog/2026-04-15-minifesto.html`,
  `${SITE}/blog/2026-04-25-fragments.html`,
  `${SITE}/blog/2026-06-01-more-fragments.html`,
  `${SITE}/gallery/`,
  `${SITE}/bio/`,
];

// Load the pieces object from pieces.js.
const piecesCode = fs.readFileSync(PIECES_PATH, "utf8") + "\n;pieces;";
const pieces = vm.runInNewContext(piecesCode, {}, { filename: "pieces.js" });

// Build a de-duplicated URL set.
const urls = new Set(baseUrls);

// Add one URL per piece.
for (const [slug, piece] of Object.entries(pieces)) {
  urls.add(`${SITE}/?piece=${encodeURIComponent(slug)}`);

  // Add internal related pages that are already declared in pieces.js.
  for (const rel of piece.relatedPages ?? []) {
    if (rel?.url && rel.url.startsWith("/")) {
      urls.add(new URL(rel.url, SITE).href);
    }
  }
}

// Sort for stable output.
const sortedUrls = [...urls].sort();

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sortedUrls.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`).join("\n") +
  `\n</urlset>\n`;

fs.writeFileSync(OUT_PATH, xml, "utf8");
console.log(`Wrote ${sortedUrls.length} URLs to ${OUT_PATH}`);
