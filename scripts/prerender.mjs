/**
 * Post-build step: turns the client bundle in dist/ into one static HTML file
 * per route, each with its own <title>, description, canonical, Open Graph and
 * JSON-LD, plus the fully rendered page body. Search engines, social previews
 * and AI crawlers (which often don't run JavaScript) all see real content.
 *
 * Also writes dist/sitemap.xml (with every image on each page) and dist/404.html.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const { render, routes, SITE_URL, absoluteUrl } = await import(
  pathToFileURL(path.join(serverDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--seo:start-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html is missing the <!--seo:start--> block or the empty #root div");
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\u003c");

function headFor(seo, { noindex = false } = {}) {
  return [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="keywords" content="${esc(seo.keywords)}" />`,
    `<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}" />`,
    `<link rel="canonical" href="${esc(seo.canonical)}" />`,
    `<meta property="og:type" content="${esc(seo.type)}" />`,
    `<meta property="og:url" content="${esc(seo.canonical)}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:image" content="${esc(seo.image)}" />`,
    seo.imageSize ? `<meta property="og:image:width" content="${seo.imageSize.width}" />` : "",
    seo.imageSize ? `<meta property="og:image:height" content="${seo.imageSize.height}" />` : "",
    `<meta property="og:image:alt" content="${esc(seo.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:url" content="${esc(seo.canonical)}" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(seo.image)}" />`,
    seo.schema
      ? `<script type="application/ld+json" id="dynamic-route-schema">${jsonLd(seo.schema)}</script>`
      : "",
  ].filter(Boolean).join("\n  ");
}

// The home hero image is preloaded in index.html; other pages don't show it.
const HERO_PRELOAD = /\s*<link rel="preload" as="image" href="\/assets\/hero\/building\.webp"[^>]*>/;

function page(html, seo, opts = {}) {
  const base = opts.isHome ? template : template.replace(HERO_PRELOAD, "");
  return base
    // Function replacers: page text may contain "$&"-style sequences
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => headFor(seo, opts))
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
}

function outFile(route) {
  // "/" -> index.html, "/about" -> about.html (served at /about via vercel.json cleanUrls)
  return path.join(dist, route === "/" ? "index.html" : `${route.slice(1)}.html`);
}

// Images on a page, for the image sitemap (Google Images).
function imagesIn(html) {
  const found = new Map();
  for (const tag of html.match(/<img\b[^>]*>/g) || []) {
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    if (!src || src.startsWith("data:")) continue;
    const alt = tag.match(/\salt="([^"]*)"/)?.[1] || "";
    const loc = absoluteUrl(src.replace(/&amp;/g, "&"));
    if (!found.has(loc)) found.set(loc, alt);
  }
  return [...found].map(([loc, title]) => ({ loc, title }));
}

const today = new Date().toISOString().slice(0, 10);
const sitemapEntries = [];
let failures = 0;

for (const route of routes) {
  try {
    const { html, seo } = await render(route);
    if (!seo) throw new Error("page rendered no <Seo> component");
    const file = outFile(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page(html, seo, { isHome: route === "/" }));
    sitemapEntries.push({ route, seo, images: imagesIn(html) });
  } catch (err) {
    failures++;
    console.error(`✗ ${route}: ${err?.stack || err}`);
  }
}

// 404: served by Vercel (with a real 404 status) for any unknown URL. The app's
// catch-all route shows the home page, so render that, but keep it out of the index.
{
  const { html, seo } = await render("/");
  fs.writeFileSync(path.join(dist, "404.html"), page(html, seo, { noindex: true, isHome: true }));
}

const priority = (r) =>
  r === "/" ? "1.0" : r.split("/").length === 2 ? "0.9" : r.split("/").length === 3 ? "0.8" : "0.7";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries
  .map(
    ({ route, images }) => `  <url>
    <loc>${esc(absoluteUrl(route))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${priority(route)}</priority>
${images
  .map(
    (img) => `    <image:image>
      <image:loc>${esc(img.loc)}</image:loc>${img.title ? `
      <image:title>${esc(img.title)}</image:title>` : ""}
    </image:image>`
  )
  .join("\n")}
  </url>`
  )
  .join("\n")}
</urlset>
`.replace(/\n\n/g, "\n");
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
try {
  fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);
} catch {}

// llms.txt (https://llmstxt.org): a plain-text map of the site for AI assistants,
// generated from the same titles/descriptions the pages use.
const section = (title, prefix) => {
  const items = sitemapEntries.filter((e) => prefix(e.route));
  return items.length
    ? `## ${title}\n\n${items.map((e) => `- [${e.seo.title}](${e.seo.canonical}): ${e.seo.description}`).join("\n")}\n`
    : "";
};
const llms = `# KRUPA ELEVATORS

> Elevator manufacturer in Kathwada GIDC, Ahmedabad, Gujarat, India. Designs, manufactures, installs and maintains passenger, home (villa), capsule (panoramic glass), hospital (stretcher), goods (freight), car (parking), MRL (machine-room-less) and hydraulic elevators, with factory-direct pricing and monopoly-free AMC (annual maintenance contracts).

- Website: ${SITE_URL}
- Phone / WhatsApp: +91 82008 59171
- Email: info@krupaelevators.com, sales@krupaelevators.com
- Manufacturing works: 1, Heritage Industrial Hub, Nr. Global Industrial Estate, Nr. Kotak Mahindra Bank, Kathwada GIDC Road No 5, Ahmedabad-382430, Gujarat, India
- Hours: Monday to Saturday, 09:00 to 20:00 IST
- Service area: Ahmedabad, Gandhinagar, Vadodara, Surat, Rajkot and across Gujarat and India
- Product brochure (PDF): ${absoluteUrl("/assets/krupa-brochure.pdf")}

${section("Company", (r) => r === "/" || r.startsWith("/about") || r === "/clients" || r === "/contact")}
${section("Elevators", (r) => r.startsWith("/products/elevators") || r === "/products")}
${section("Door systems", (r) => r.startsWith("/products/doors"))}
${section("Cabin interiors", (r) => r.startsWith("/products/interiors"))}
${section("Technology and planning", (r) => r === "/products/technology" || r === "/products/architects-corner")}
${section("Services", (r) => r.startsWith("/services"))}`.replace(/\n{3,}/g, "\n\n");
fs.writeFileSync(path.join(dist, "llms.txt"), llms);
try {
  fs.writeFileSync(path.join(root, "public", "llms.txt"), llms);
} catch {}

fs.rmSync(serverDir, { recursive: true, force: true });

const imageCount = sitemapEntries.reduce((n, e) => n + e.images.length, 0);
console.log(`Prerendered ${sitemapEntries.length}/${routes.length} pages for ${SITE_URL} (${imageCount} images in sitemap.xml)`);
if (failures) process.exit(1);
