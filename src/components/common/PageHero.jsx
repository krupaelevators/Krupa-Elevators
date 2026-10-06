import React from "react";
import { Phone } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import Breadcrumbs from "./Breadcrumbs";
import WhatsAppIcon from "./WhatsAppIcon";

export default function PageHero({
  breadcrumbs,
  icon: Icon,
  badge,
  title,
  tagline,
  description,
  phone = "+91 97277 64868",
  whatsappMessage,
  actions,
  media,
  children,
}) {
  const phoneNumber = phone.replace(/\D/g, "");

  const defaultActions = (
    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 self-start md:self-auto">
      {/* Call */}
      <a
        href={`tel:${phoneNumber}`}
        className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold flex items-center space-x-2 transition-all shadow-xs cursor-pointer min-h-[42px] active:scale-95"
      >
        <Phone className="w-3.5 h-3.5 text-brand-orange" />
        <span>Call: {phone}</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage ||
          `Hello, I would like to consult regarding ${typeof title === "string" ? title : "elevators"}.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center space-x-2 shadow-xs transition-all cursor-pointer min-h-[42px] active:scale-95"
      >
        <WhatsAppIcon className="w-4 h-4 text-white" />
        <span>WhatsApp Us</span>
      </a>
    </div>
  );

  const actionContent = actions !== undefined ? actions : defaultActions;

  return (
    <div className="border-b border-slate-200 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-6 sm:pt-6 sm:pb-8">
        {/* Breadcrumb Path */}
        {breadcrumbs && (
          <div className="mb-3 sm:mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {media ? (
          /* Two-Column Grid for Detail Pages with Media */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-3">
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal direction="up" distance={20} duration={500}>
                <div className="pt-3">
                  {badge && (
                    <div className="flex items-center space-x-2 text-brand-teal text-xs font-bold uppercase tracking-widest mb-1.5">
                      {Icon && <Icon className="w-4 h-4 text-brand-orange" />}
                      <span>{badge}</span>
                    </div>
                  )}

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    {title}
                  </h1>

                  {tagline && (
                    <p className="text-sm sm:text-base text-brand-teal font-semibold mt-1">
                      {tagline}
                    </p>
                  )}

                  {description && (
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-2 leading-relaxed">
                      {description}
                    </p>
                  )}

                  {children}
                </div>
              </ScrollReveal>

              {actionContent && (
                <div className="pt-2">
                  {actionContent}
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="left" distance={20} duration={500} delay={100}>
                {media}
              </ScrollReveal>
            </div>
          </div>
        ) : (
          /* Standard Flex Layout */
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <ScrollReveal
              direction="up"
              distance={20}
              duration={500}
              className="max-w-3xl"
            >
              <div>
                {badge && (
                  <div className="flex items-center space-x-2 text-brand-teal text-xs font-bold uppercase tracking-widest mb-1">
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{badge}</span>
                  </div>
                )}

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  {title}
                </h1>

                {tagline && (
                  <p className="text-sm sm:text-base text-brand-teal font-semibold mt-1">
                    {tagline}
                  </p>
                )}

                {description && (
                  <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
                    {description}
                  </p>
                )}

                {children}
              </div>
            </ScrollReveal>

            {actionContent && (
              <ScrollReveal
                direction="right"
                distance={20}
                duration={500}
                delay={150}
              >
                {actionContent}
              </ScrollReveal>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


