import React from "react";
import { Sparkles } from "lucide-react";
import { servicesMaster } from "../data/servicesMaster";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import Seo from "../components/common/Seo";
import ScrollReveal from "../components/ScrollReveal";

export default function ServiceModernization() {
  return (
    <>
      <Seo
        title="Elevator Modernization & Retrofitting"
        description="Upgrade aging elevators with modern V3F drives, microprocessor controllers, automatic door systems, and refreshed cabin interiors — without rebuilding the existing hoistway."
      />
      <div className="min-h-screen bg-slate-50 pb-12 overflow-x-hidden">
        <PageHero
          breadcrumbs={[{ label: "Services", to: "/services" }, { label: "Modernization" }]}
          icon={Sparkles}
          badge="Elevator Modernization"
          title="Upgrade Aging Elevators with Green Tech"
          description="Transform existing legacy elevators with modern V3F drives, automatic doors, microprocessor controllers, and luxury cabin aesthetics without rebuilding the entire concrete hoistway."
        />

        <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 space-y-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">
                Elevator Modernization
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Retrofit Options
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                {servicesMaster.subheadline}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {servicesMaster.modernizationServices.map((mod, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  distance={20}
                  delay={idx * 60}
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2"
                >
                  <h4 className="text-sm font-bold text-white">{mod.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mod.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection contained
        title="Ready to Modernize Your Building's Elevator?"
        subtitle="Our engineers assess your existing shaft, controller, and drive system to recommend the right modernization scope — no unnecessary civil work."
        variant="gradient"
        className="rounded-none"
      />
    </>
  );
}
