import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Calculator, FileText, Send, Layers } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { companyData } from "../../data/companyData";

export default function MobileBottomBar({ onOpenBrochure }) {
  const location = useLocation();

  const handleEstimatorClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("estimator");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      aria-label="Mobile Quick Action Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(15,23,42,0.10)] pb-safe transition-transform"
    >
      <div className="grid grid-cols-5 items-center h-15 px-1 max-w-lg mx-auto">
        {/* 1. Direct Phone Call */}
        <a
          href={`tel:${companyData.contacts.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 text-slate-600 hover:text-brand-orange active:scale-95 transition-all text-center group"
          aria-label="Call Krupa Elevators"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-50 flex items-center justify-center transition-colors">
            <Phone className="w-4 h-4 text-brand-orange" />
          </div>
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">Call</span>
        </a>

        {/* 2. WhatsApp Instant Consultation */}
        <a
          href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
            "Hello Krupa Elevators, I would like to inquire about elevator specifications and get a price quote."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-slate-600 hover:text-emerald-600 active:scale-95 transition-all text-center group"
          aria-label="WhatsApp Technical Consultation"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          </div>
          <span className="text-[10px] font-bold mt-0.5 tracking-tight text-emerald-700">WhatsApp</span>
        </a>

        {/* 3. Interactive 60s Lift Estimator (Center Highlight) */}
        <Link
          to="/#estimator"
          onClick={handleEstimatorClick}
          className="flex flex-col items-center justify-center py-1 px-1 -mt-3.5 group active:scale-95 transition-transform"
          aria-label="60-Second Lift Estimator"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-teal to-teal-400 text-white shadow-lg shadow-teal-500/30 flex items-center justify-center border-2 border-white group-hover:scale-105 transition-transform">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <span className="text-[10px] font-extrabold text-brand-teal mt-0.5 tracking-tight whitespace-nowrap">
            60s Estimate
          </span>
        </Link>

        {/* 4. Products Hub */}
        <Link
          to="/products/elevators"
          className={`flex flex-col items-center justify-center py-1.5 px-1 transition-all text-center group ${
            location.pathname.startsWith("/products")
              ? "text-brand-teal"
              : "text-slate-600 hover:text-brand-teal"
          }`}
          aria-label="View 8 Elevator Models"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-teal-50 flex items-center justify-center transition-colors">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">Models</span>
        </Link>

        {/* 5. Request Quote / Survey */}
        <Link
          to="/contact"
          className={`flex flex-col items-center justify-center py-1.5 px-1 transition-all text-center group ${
            location.pathname === "/contact"
              ? "text-brand-orange"
              : "text-slate-600 hover:text-brand-orange"
          }`}
          aria-label="Request Free Site Survey"
        >
          <div className="w-8 h-8 rounded-full bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
            <Send className="w-4 h-4 text-brand-orange" />
          </div>
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">Get Quote</span>
        </Link>
      </div>
    </nav>
  );
}
