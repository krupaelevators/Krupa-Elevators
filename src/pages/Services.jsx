import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Users,
  Radio,
  AlertTriangle,
  Clock,
  Sparkles,
  ClipboardList,
  ArrowRight,
  LockOpen
} from "lucide-react";
import { servicesMaster } from "../data/servicesMaster";
import { ownershipPolicy } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import Seo from "../components/common/Seo";

const teasers = [
  {
    to: "/services/amc-maintenance",
    icon: Wrench,
    badge: "Maintenance Contracts",
    title: "AMC & Maintenance",
    desc: "Three SLA-backed Annual Maintenance Contract tiers — Routine, Semi-Comprehensive, and Comprehensive — backed by certified technicians, supervisors, and genuine spare parts.",
    cta: "View AMC Packages"
  },
  {
    to: "/services/modernization",
    icon: Sparkles,
    badge: "Elevator Modernization",
    title: "Modernization & Retrofitting",
    desc: "Upgrade aging elevators with V3F drives, microprocessor controllers, automatic door systems, and refreshed cabin interiors without rebuilding the hoistway.",
    cta: "Explore Modernization"
  },
  {
    to: "/services/installation",
    icon: ClipboardList,
    badge: "Engineering Workflow",
    title: "Installation Process",
    desc: "Our 8-step process — from requirement consultation and building survey through manufacturing, on-site installation, and commissioning.",
    cta: "See the Process"
  },
  {
    to: "/services/emergency-support",
    icon: AlertTriangle,
    badge: "24/7 Breakdown Dispatch",
    title: "Emergency Support",
    desc: "30–45 minute emergency response guarantee with dedicated mobile service vans across Ahmedabad, Gandhinagar, and Sanand/Bavla.",
    cta: "Get Emergency Help"
  }
];

export default function Services() {
  const pillarIcons = {
    "specialized-team": Users,
    supervisors: ShieldCheck,
    "spare-parts": Layers,
    "preventive-maintenance": Wrench,
    "elevator-monitoring": Radio
  };

  return (<>
    <Seo
      title="Elevator Installation & AMC Services in Ahmedabad | Krupa Elevators"
      description="Professional elevator installation, 100% monopoly-free AMC maintenance, modernization, and 24/7 emergency support across Ahmedabad and Gujarat from Krupa Elevators."
      keywords="elevator installation Ahmedabad, elevator AMC service, lift modernization Gujarat, elevator repair Ahmedabad, best elevator company in Ahmedabad"
    />
    <div className="min-h-screen bg-slate-50 pb-12 overflow-x-hidden">
      {/* Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "Services" }]}
        icon={Wrench}
        badge="Certified Engineering • Lifecycle Support"
        title="Reliable Support Throughout the Life of Your Elevator"
        description={servicesMaster.subheadline}
      />

      <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Ownership policy note — full policy lives on the AMC page */}
        <Link
          to="/services/amc-maintenance#ownership-policy"
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-teal transition-colors"
        >
          <span className="flex items-start sm:items-center gap-3 text-sm text-slate-700">
            <LockOpen className="w-5 h-5 text-brand-teal shrink-0" />
            <span>
              <strong className="font-bold text-slate-900">{ownershipPolicy.badge}.</strong>{" "}
              No password locks, no restricted protocols — you are free to choose any service provider.
            </span>
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-teal shrink-0 pl-8 sm:pl-0">
            Read the policy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>

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

        {/* Service Sub-Pages Teaser Grid */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
              Explore Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Maintenance, Modernization & Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Dedicated pages for each stage of your elevator's lifecycle — from AMC contracts to emergency dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teasers.map((t) => {
              const Icon = t.icon;
              return (
                <ScrollReveal
                  key={t.to}
                  direction="up"
                  distance={20}
                  className="h-full"
                >
                  <Link
                    to={t.to}
                    className="group h-full bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 hover:border-brand-teal/60 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                          {t.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {t.desc}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-bold text-brand-teal pt-2 border-t border-slate-100">
                      <span>{t.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Compact emergency strip */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-5 sm:p-8 border border-slate-800 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider shrink-0">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>24/7 Dispatch</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="flex items-center gap-1.5 font-mono text-slate-400 mb-0.5">
                    <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    30–45 minute emergency response guarantee
                  </span>
                  <span>Breakdown? Get immediate help across Ahmedabad, Gandhinagar &amp; Sanand/Bavla.</span>
                </div>
              </div>
              <Link
                to="/services/emergency-support"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 min-h-[44px] rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 w-full sm:w-auto"
              >
                <span>Emergency Support</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
