import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { clientShowcase } from "../../utils/installations";

function LogoTile({ client, hidden }) {
  return (
    <Link
      to="/clients"
      title={`${client.name}, ${client.location}`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className="shrink-0 w-24 h-14 sm:w-28 sm:h-16 rounded-xl bg-white border border-slate-200/80 hover:border-brand-teal hover:shadow-sm transition-all flex items-center justify-center p-2"
    >
      <img
        src={client.src}
        alt={hidden ? "" : client.alt}
        width="96"
        height="48"
        loading="lazy"
        decoding="async"
        className="max-w-full max-h-full object-contain rounded-md"
      />
    </Link>
  );
}

/**
 * Home-page "trusted by" band: one slim row of client logos drifting left
 * (pauses on hover, static under prefers-reduced-motion), linking to /clients.
 */
export default function ClientLogoStrip() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6">
        <p className="text-sm sm:text-base text-slate-600">
          <span className="font-bold text-slate-900">Trusted by {clientShowcase.length}+ clients</span>
          {" "}— temples, hospitals, brands &amp; builders across Gujarat
        </p>
        <Link
          to="/clients"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark shrink-0 group"
        >
          See all clients
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="logo-marquee-mask pause-on-hover flex overflow-hidden">
        <div className="animate-marquee-left gap-3 pr-3" style={{ animationDuration: "90s" }}>
          {clientShowcase.map((c) => (
            <LogoTile key={c.id} client={c} />
          ))}
          {/* Second copy makes the loop seamless; hidden from screen readers and tab order. */}
          {clientShowcase.map((c) => (
            <LogoTile key={`${c.id}-dup`} client={c} hidden />
          ))}
        </div>
      </div>
    </div>
  );
}
