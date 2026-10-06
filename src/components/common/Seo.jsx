import { useEffect } from "react";

const SITE_NAME = "KRUPA ELEVATORS";
const DEFAULT_TITLE = "Best Elevator Company in Ahmedabad | Top Manufacturing Plant & Affordable Lifts";
const DEFAULT_DESC =
  "KRUPA ELEVATORS is the #1 best elevator company and top manufacturing plant in Ahmedabad, Gujarat. Direct manufacturer of affordable passenger, home, capsule, hospital, goods, car, MRL and hydraulic elevators with factory-direct best price guarantee.";
const DEFAULT_KEYWORDS =
  "best elevator company in Ahmedabad, elevator manufacturing plant Ahmedabad, affordable elevator solution, best price lift in Ahmedabad, passenger elevator manufacturer Ahmedabad, home lift price Ahmedabad, capsule elevator Gujarat, goods lift Kathwada GIDC, MRL elevator Ahmedabad, hydraulic lift manufacturer, elevator AMC Ahmedabad";
const DEFAULT_IMAGE = "https://www.krupaelevators.com/assets/hero/building.jpg";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function upsertSchema(schemaData) {
  const SCRIPT_ID = "dynamic-route-schema";
  let existingScript = document.getElementById(SCRIPT_ID);

  if (!schemaData) {
    if (existingScript) existingScript.remove();
    return;
  }

  if (!existingScript) {
    existingScript = document.createElement("script");
    existingScript.id = SCRIPT_ID;
    existingScript.type = "application/ld+json";
    document.head.appendChild(existingScript);
  }

  existingScript.textContent = JSON.stringify(schemaData);
}

/**
 * Enterprise SEO Component:
 * Synchronizes document title, descriptions, open graph, twitter cards,
 * canonical links, and rich JSON-LD structured schemas on route transitions.
 */
export default function Seo({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  type = "website",
  path,
  schema
}) {
  useEffect(() => {
    // 1. Title formatting
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | ${DEFAULT_TITLE}`;
    document.title = fullTitle;

    // 2. Primary Meta Tags
    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);

    // 3. Open Graph Tags
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);

    // 4. Twitter Card Tags
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertMeta("name", "twitter:card", "summary_large_image");

    // 5. Canonical Link
    const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
    const routePath = path || window.location.pathname.replace(base, "") || "/";
    const canonicalHref = `${window.location.origin}${base}${
      routePath === "/" ? "/" : routePath
    }`;
    upsertCanonical(canonicalHref);
    upsertMeta("property", "og:url", canonicalHref);

    // 6. Dynamic JSON-LD Schema
    upsertSchema(schema);

    return () => {
      // Cleanup custom route schema on unmount
      const script = document.getElementById("dynamic-route-schema");
      if (script) script.remove();
    };
  }, [title, description, keywords, image, type, path, schema]);

  return null;
}
