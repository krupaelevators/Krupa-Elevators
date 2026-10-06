import React from "react";
import ScrollReveal from "../ScrollReveal";

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  badgeColor = "teal",
  action,
  className = ""
}) {
  const isCenter = align === "center";
  const badgeClasses =
    badgeColor === "orange"
      ? "bg-orange-50 border-orange-200/80 text-brand-orange"
      : "bg-brand-teal-light text-brand-teal border-teal-200/60";

  return (
    <ScrollReveal direction="up" distance={20} duration={500} className={`mb-8 sm:mb-12 ${className}`}>
      <div
        className={`flex flex-col ${
          isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-3xl"
        } space-y-3`}
      >
        {badge && (
          <span
            className={`inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${badgeClasses}`}
          >
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
        {action && <div className="pt-2">{action}</div>}
      </div>
    </ScrollReveal>
  );
}
