import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Generic "Related Products / Services" card row.
 * items: [{ label, description?, to, image? }]
 */
export default function RelatedLinks({ title = "Related", items = [], className = "" }) {
  if (!items.length) return null;

  return (
    <section className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-teal hover:shadow-md transition-all"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.label}
                className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-100"
              />
            )}
            <div className="flex-1 min-w-0">
              <span className="block text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors truncate">
                {item.label}
              </span>
              {item.description && (
                <span className="block text-xs text-slate-500 mt-0.5 line-clamp-2">{item.description}</span>
              )}
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-teal transition-colors shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}
