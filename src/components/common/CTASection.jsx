import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { companyData } from "../../data/companyData";
import ScrollReveal from "../ScrollReveal";

export default function CTASection({
  title = "Ready to Plan Your Custom Elevator Installation?",
  subtitle = "Our engineering team provides complimentary site surveys, custom CAD layouts, and verified civil shaft calculations across Gujarat and Western India.",
  badge = "Direct Factory, Ahmedabad",
  variant = "gradient", // "gradient" | "dark" | "teal"
  className = "",
  // Wrap in the standard page container — for pages that place the CTA outside one.
  contained = false
}) {
  const variantStyles = {
    gradient: "bg-gradient-to-r from-brand-teal via-teal-800 to-slate-950 text-white border border-teal-700/50",
    dark: "bg-slate-900 text-white border border-slate-800",
    teal: "bg-brand-teal text-white border border-teal-600",
  };

  const section = (
    <section
      className={`w-full m-auto px-4 sm:px-6 lg:px-8 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl ${className
        } ${variantStyles[variant] || variantStyles.gradient
        } overflow-hidden`}
    >
      <ScrollReveal direction="up" distance={20} duration={500}>
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative`}
        >
          {/* Ambient light blur */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-teal-100/90 leading-relaxed font-normal">
              {subtitle}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1.5 pt-2 text-xs text-teal-200">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Zero Cost Site Consultation</span>
              </span>
              <span className="hidden sm:inline" aria-hidden="true">&bull;</span>
              <span>24/7 Breakdown Assistance</span>
              <span className="hidden sm:inline" aria-hidden="true">&bull;</span>
              <span>Kathwada Works Delivery</span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 relative z-10 shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-xl transition-all transform active:scale-95 flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <span>Request Free Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-bold hover:bg-slate-100 transition-all flex items-center justify-center space-x-2 shadow-md min-h-[44px] active:scale-95"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call {companyData.contacts.phone}</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );

  return contained ? (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">{section}</div>
  ) : (
    section
  );
}
