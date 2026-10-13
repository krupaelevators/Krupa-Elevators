import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_NAME, absoluteUrl } from "../../config/site";

const DEFAULT_TITLE = "Best Elevator Company in Ahmedabad | Top Manufacturing Plant & Affordable Lifts";
const DEFAULT_DESC =
  "KRUPA ELEVATORS is the #1 best elevator company and top manufacturing plant in Ahmedabad, Gujarat. Direct manufacturer of affordable passenger, home, capsule, hospital, goods, car, MRL and hydraulic elevators with factory-direct best price guarantee.";
const DEFAULT_KEYWORDS =
  "best elevator company in Ahmedabad, elevator manufacturing plant Ahmedabad, affordable elevator solution, best price lift in Ahmedabad, passenger elevator manufacturer Ahmedabad, home lift price Ahmedabad, capsule elevator Gujarat, goods lift Kathwada GIDC, MRL elevator Ahmedabad, hydraulic lift manufacturer, elevator AMC Ahmedabad";
const DEFAULT_IMAGE = absoluteUrl("/assets/hero/building.jpg");

/**
 * During the build-time prerender (src/entry-server.jsx) this context holds an
 * object that <Seo> fills in, so the generated HTML ships the page's real head
 * tags. In the browser it is null and <Seo> updates document.head instead.
 */
export const SeoContext = createContext(null);

/** Resolves props + current path into the final head values (shared by server and client). */
export function resolveSeo({ title, description, keywords, image, type, path, schema }, pathname) {
  const fullTitle = !title
    ? `${SITE_NAME} | ${DEFAULT_TITLE}`
    : /krupa elevators/i.test(title)
      ? title
      : `${title} | ${SITE_NAME}`;
  return {
    title: fullTitle,
    description: description || DEFAULT_DESC,
    keywords: keywords || DEFAULT_KEYWORDS,
    image: image ? absoluteUrl(image) : DEFAULT_IMAGE,
    type: type || "website",
    canonical: absoluteUrl(path || pathname || "/"),
    schema: schema || null,
  };
}

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
export default function Seo(props) {
  const { pathname } = useLocation();
  const collector = useContext(SeoContext);
  const seo = resolveSeo(props, pathname);

  // Prerender: hand the values to entry-server.jsx (effects don't run on the server).
  if (collector) collector.seo = seo;

  const { title, description, keywords, image, type, canonical, schema } = seo;

  useEffect(() => {
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:url", canonical);

    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertMeta("name", "twitter:card", "summary_large_image");

    upsertCanonical(canonical);
    upsertSchema(schema);

    return () => {
      // Cleanup custom route schema on unmount
      const script = document.getElementById("dynamic-route-schema");
      if (script) script.remove();
    };
  }, [title, description, keywords, image, type, canonical, schema]);

  return null;
}
