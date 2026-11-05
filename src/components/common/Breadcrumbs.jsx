import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { absoluteUrl } from "../../config/site";

/** BreadcrumbList JSON-LD matching the visible trail. Crumbs with no page of their own are skipped. */
function breadcrumbSchema(items, pathname) {
  const last = items.length - 1;
  const crumbs = [
    { name: "Home", url: "/" },
    ...items
      .map((item, idx) => ({ name: item.label, url: idx === last ? pathname : item.to }))
      .filter((crumb) => crumb.url),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.url),
    })),
  };
}

/**
 * items: [{ label, to? }] — the last item (no `to`) renders as the current page.
 */
export default function Breadcrumbs({ items = [], className = "" }) {
  const { pathname } = useLocation();
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(items, pathname)).replace(/</g, "\\u003c"),
        }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="flex items-center gap-1 hover:text-brand-teal transition-colors" aria-label="Home">
            <Home className="w-3.5 h-3.5" />
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-brand-teal transition-colors font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-800 font-semibold" aria-current="page">
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-300" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
