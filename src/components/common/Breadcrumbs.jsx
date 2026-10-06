import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

/**
 * items: [{ label, to? }] — the last item (no `to`) renders as the current page.
 */
export default function Breadcrumbs({ items = [], className = "" }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${className}`}>
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
