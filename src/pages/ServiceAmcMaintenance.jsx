import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Users,
  Radio,
  LockOpen
} from "lucide-react";
import { servicesMaster } from "../data/servicesMaster";
import { ownershipPolicy } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import Seo from "../components/common/Seo";

export default function ServiceAmcMaintenance() {
  const pillarIcons = {
    "specialized-team": Users,
    supervisors: ShieldCheck,
    "spare-parts": Layers,
    "preventive-maintenance": Wrench,
    "elevator-monitoring": Radio
  };

  return (
    <>
      <Seo
        title="Elevator AMC & Maintenance in Ahmedabad | 100% Monopoly-Free"
        description="Affordable elevator AMC packages in Ahmedabad with 100% monopoly-free non-proprietary controllers. Zero locked passwords, certified technicians, 24/7 breakdown support, and genuine spares in Gujarat."
        keywords="elevator AMC in Ahmedabad, lift maintenance Ahmedabad, affordable elevator AMC, monopoly free elevator maintenance, lift repair Kathwada GIDC"
      />
      <div className="min-h-screen bg-slate-50 pb-12 overflow-x-hidden">
        <PageHero
          breadcrumbs={[{ label: "Services", to: "/services" }, { label: "AMC & Maintenance" }]}
          icon={Wrench}
          badge="Certified Engineering • Lifecycle Support"
          title="AMC & Maintenance Contracts"
          description={servicesMaster.subheadline}
        />

        <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Monopoly-Free Ownership Policy */}
          <ScrollReveal direction="up" distance={18}>
            <div
              id="ownership-policy"
              className="scroll-mt-24 rounded-3xl border-2 border-brand-orange/30 bg-white shadow-sm overflow-hidden"
            >
              <div className="bg-gradient-to-r from-brand-orange-light to-white px-6 sm:px-10 py-6 border-b border-orange-100 space-y-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  <LockOpen className="w-4 h-4" />
                  Our Ownership Policy
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {ownershipPolicy.badge}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {ownershipPolicy.summary}
                </p>
              </div>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 px-6 sm:px-10 py-8">
                {ownershipPolicy.commitments.map((item, idx) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          {/* 5 Service Pillars */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Five Core Support Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Professional Service Architecture
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                Engineered to ensure zero unexpected breakdowns, absolute passenger safety, and prolonged mechanical longevity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesMaster.pillars.map((pillar) => {
                const Icon = pillarIcons[pillar.id] || Wrench;
                return (
                  <ScrollReveal
                    key={pillar.id}
                    direction="up"
                    distance={20}
                    className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 hover:border-brand-teal/60 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black font-mono px-2.5 py-1 rounded-lg bg-teal-50 text-brand-teal border border-teal-200">
                          PILLAR {pillar.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                        <span className="text-[11px] font-bold text-brand-orange block mt-0.5">
                          {pillar.tagline}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>

                      <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                        {pillar.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                            <span className="leading-snug">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* AMC Packages Grid */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Maintenance Contracts
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Annual Maintenance Contract (AMC) Packages
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                Transparent, SLA-backed maintenance plans tailored to residential societies, high-traffic commercial complexes, and 24/7 hospitals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicesMaster.amcPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${pkg.popular
                    ? "bg-slate-900 text-white border-brand-teal shadow-xl md:scale-[1.02]"
                    : "bg-white text-slate-900 border-slate-200 shadow-xs"
                    }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${pkg.popular
                          ? "bg-brand-teal text-white"
                          : "bg-slate-100 text-slate-600"
                          }`}
                      >
                        {pkg.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {pkg.priceIndicator}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p
                      className={`text-xs leading-relaxed ${pkg.popular ? "text-slate-300" : "text-slate-600"
                        }`}
                    >
                      Ideal for: <strong>{pkg.idealFor}</strong>
                    </p>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                      {pkg.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-teal-300" : "text-brand-teal"
                              }`}
                          />
                          <span className="leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to="/contact"
                      className={`w-full py-3.5 min-h-[44px] rounded-xl text-xs font-bold text-center flex items-center justify-center transition-colors ${pkg.popular
                        ? "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-md"
                        : "bg-slate-900 hover:bg-brand-teal text-white"
                        }`}
                    >
                      Get Package Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection contained
        title="Schedule an On-Site Maintenance & Safety Audit"
        subtitle="Our technical supervisors inspect your elevator hoist ropes, brake holding torque, leveling switches, and controller logs to ensure 100% statutory compliance."
        variant="gradient"
        className="rounded-none"
      />
    </>
  );
}
