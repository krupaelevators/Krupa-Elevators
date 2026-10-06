import React from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  Building,
  CheckCircle2,
  Compass,
  Sliders,
  Factory,
  Wrench,
  Headphones,
  ArrowRight,
  Sparkles
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Requirement",
    desc: "Initial consultation understanding traffic load, passenger volume, building usage, and architectural vision.",
    icon: ClipboardList,
    color: "teal"
  },
  {
    step: "02",
    title: "Building Analysis",
    desc: "Physical on-site survey evaluating available shaft footprint, pit depth, overhead clearance, and power supply.",
    icon: Building,
    color: "teal"
  },
  {
    step: "03",
    title: "Elevator Selection",
    desc: "Recommending optimal elevator type (Passenger, MRL, Hydraulic, Villa, Goods) and drive mechanism.",
    icon: CheckCircle2,
    color: "teal"
  },
  {
    step: "04",
    title: "Layout & Design",
    desc: "Preparation of custom civil General Arrangement (GA) drawings and structural calculations for consultants.",
    icon: Compass,
    color: "teal"
  },
  {
    step: "05",
    title: "Customization",
    desc: "Selection of door systems, cabin wall finishes (KEC 01–11), ceiling fixtures, flooring, and smart operating panels.",
    icon: Sliders,
    color: "orange"
  },
  {
    step: "06",
    title: "Manufacturing",
    desc: "Precision fabrication at our direct Kathwada manufacturing plant with multi-stage quality and safety testing.",
    icon: Factory,
    color: "orange"
  },
  {
    step: "07",
    title: "Installation",
    desc: "On-site erection by certified engineering crews with plumb line calibration and statutory safety audits.",
    icon: Wrench,
    color: "orange"
  },
  {
    step: "08",
    title: "Service & Maintenance",
    desc: "Ongoing lifecycle care with 24/7 breakdown support, genuine spare parts inventory, and IoT telemetry.",
    icon: Headphones,
    color: "orange"
  }
];

export default function CustomizationProcess({ className = "" }) {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Tailored Engineering Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Built Around Your Requirements
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Every building has distinct structural requirements. We deliver fully customized vertical transit solutions based on traffic application, rated capacity, travel speed, shaft configuration, available space, door arrangement, interior finishes, and technical specifications.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center space-x-2 shrink-0 self-start md:self-auto"
          >
            <span>Request Free Site Survey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8-Step Interactive Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isOrange = item.color === "orange";

            return (
              <div
                key={item.step}
                className="bg-slate-800/70 border border-slate-700/70 rounded-2xl p-5 hover:border-brand-teal/60 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 text-teal-300 border border-slate-700">
                      STEP {item.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isOrange
                          ? "bg-orange-500/20 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                          : "bg-teal-500/20 text-brand-teal group-hover:bg-brand-teal group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-teal-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Micro step connection arrow for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block pt-3 border-t border-slate-700/40 text-right">
                    <span className="text-[10px] text-slate-500 font-mono">
                      Next &rarr;
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
