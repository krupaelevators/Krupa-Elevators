import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Compass,
  Factory,
  ShieldCheck,
  Sparkles,
  Activity,
  Cpu,
  Maximize2,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { companyData, trustedSolutionSection } from "../data/companyData";
import { elevatorMaster } from "../data/elevatorMaster";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";
import { assetUrl } from "../utils/assetPath";

const attributeIcons = [Cpu, Sparkles, ShieldCheck, Maximize2, Activity];

export default function About({ onOpenBrochure }) {

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Seo
        title="Best Elevator Manufacturing Plant in Ahmedabad | About Krupa Elevators"
        description="Learn about KRUPA ELEVATORS — rated the #1 best elevator company and manufacturing plant in Kathwada GIDC, Ahmedabad. Direct factory manufacturing of affordable passenger, home, and commercial lifts with 100% monopoly-free AMC."
        keywords="best manufacturing plant, best elevator company in Ahmedabad, elevator factory Kathwada GIDC, elevator manufacturer Gujarat, affordable elevator solutions, Krupa Elevators"
      />

      <PageHero
        breadcrumbs={[{ label: "About" }]}
        icon={Building2}
        badge="Company Overview"
        title={`About ${companyData.name}`}
        description={companyData.mission}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-12">
        {/* ================= Company Overview / Mission ================= */}
        <ScrollReveal direction="up" distance={18}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-[1.08]">
                {trustedSolutionSection.heading}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {companyData.servicesSummary} — {companyData.tagline}, engineered from our
                Ahmedabad, Gujarat headquarters.
              </p>
            </div>

            <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l-2 border-brand-teal">
              <Quote className="w-5 h-5 text-brand-teal/40 absolute -left-2.5 top-0" />
              <p className="text-lg sm:text-2xl text-slate-800 font-light italic leading-relaxed tracking-tight">
                "{trustedSolutionSection.quote}"
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-mono">
                <span className="font-bold text-brand-teal tracking-wider">KRUPA ELEVATORS DIRECTIVE</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-600">Unified Form &amp; Architectural Function</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ================= Modern Elevator Narrative ================= */}
        <ScrollReveal direction="up" distance={18}>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-5">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {trustedSolutionSection.modernElevatorHeading}
            </h3>
            <div className="space-y-4">
              {trustedSolutionSection.modernElevatorParagraphs.map((para, idx) => (
                <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ================= 4 Pillars ================= */}
        <ScrollReveal direction="up" distance={18}>
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal block mb-1">
                Core Engineering Pillars
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Elevate Your Experience
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyData.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <span className="font-mono text-[10px] font-bold text-brand-orange">0{idx + 1}</span>
                  <h4 className="text-base font-black text-slate-900">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ================= 5 Core Attributes ================= */}
        <ScrollReveal direction="up" distance={18}>
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
              Five Core Attributes Defining Every Krupa Installation
            </span>
            <div className="border-y border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
              {companyData.attributes.map((attr, idx) => {
                const Icon = attributeIcons[idx] || Sparkles;
                return (
                  <div key={attr.title} className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-slate-400">0{idx + 1}</span>
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="text-base font-black text-slate-900">{attr.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{attr.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ================= Facilities ================= */}
        <div id="facilities" className="space-y-6 scroll-mt-24">
          <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
            <Compass className="w-4 h-4 text-brand-teal" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-700">
              Manufacturing &amp; Facilities — Direct In-House Infrastructure
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 items-stretch">
            {/* Manufacturing Works — Kathwada */}
            <ScrollReveal direction="up" distance={18} delay={60} className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 group">
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <img
                  src={assetUrl("/assets/facilities/bakrol-facility.jpg")}
                  alt="Kathwada Manufacturing Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-orange-300 border border-orange-500/20">
                  HUB 02 // KATHWADA MANUFACTURING PLANT
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-lg font-bold text-white leading-tight">{companyData.contacts.factory.title}</h4>
                  <span className="text-xs text-orange-200 font-mono">
                    CNC Laser Cutting, Press Brakes &amp; Dynamic Safety Testing
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fully equipped manufacturing plant featuring CNC fiber laser cutting, CNC hydraulic press brakes,
                  precision welding fixtures, and full-height test towers verifying safety gears, governors, and
                  car balances before dispatch.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center space-x-1">
                    <Factory className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{companyData.contacts.factory.address}</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ================= Standards & Compliance ================= */}
        <ScrollReveal direction="up" distance={18}>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-brand-teal" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal">
                Quality &amp; Testing
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              Every elevator class in our catalogue — from Passenger and Capsule elevators to Goods, Car, MRL,
              Home and Hydraulic lifts — is engineered and built in-house. All
              structural frames, car sling assemblies, and electrical control cabinets are bench-tested at our
              Kathwada works before dispatch to site.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {elevatorMaster.map((e) => (
                <span
                  key={e.id}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-brand-teal text-[11px] font-bold border border-teal-100"
                >
                  {e.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ================= Links out ================= */}
        <ScrollReveal direction="up" distance={18}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              to="/about/projects"
              className="group flex items-center justify-between p-6 rounded-2xl bg-slate-900 text-white hover:bg-brand-teal transition-all"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-teal-300 group-hover:text-white/80">
                  Track Record
                </span>
                <h4 className="text-lg font-black mt-1">Projects &amp; Clients</h4>
                <p className="text-xs text-slate-300 group-hover:text-white/90 mt-1">
                  See completed installations across Gujarat.
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0" />
            </Link>

            <Link
              to="/products/architects-corner"
              className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-teal hover:shadow-md transition-all"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                  For Architects &amp; Consultants
                </span>
                <h4 className="text-lg font-black text-slate-900 mt-1">Architects &amp; CAD Hub</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Download GA drawings and specification sheets for every model.
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-brand-teal shrink-0" />
            </Link>
          </div>
        </ScrollReveal>

        <CTASection
          title="Ready to Plan Your Custom Elevator Installation?"
          subtitle="Our engineering team and Kathwada manufacturing works deliver complimentary site surveys, custom CAD layouts, and verified civil shaft calculations across Gujarat."
        />
        {onOpenBrochure && (
          <div className="flex justify-center -mt-8">
            <button
              onClick={onOpenBrochure}
              className="text-xs font-bold text-brand-teal hover:text-teal-700 underline underline-offset-4"
            >
              Or download our brochure
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
