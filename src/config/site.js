/**
 * Canonical site origin. Every absolute URL (canonical links, Open Graph,
 * JSON-LD, sitemap) is built from this, so preview deployments on *.vercel.app
 * never leak into search results.
 */
export const SITE_URL = "https://krupaelevators.com";
export const SITE_NAME = "KRUPA ELEVATORS";

/** "/products/elevators" -> "https://krupaelevators.com/products/elevators" */
export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  // No trailing slash except on the root, matching vercel.json "trailingSlash": false
  const normalized = clean.length > 1 ? clean.replace(/\/+$/, "") : clean;
  return `${SITE_URL}${normalized}`;
}
