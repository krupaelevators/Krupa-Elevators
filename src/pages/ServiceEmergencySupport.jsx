import React from "react";
import {
  AlertTriangle,
  Clock,
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  Radio,
  Wrench,
  MapPin
} from "lucide-react";
import { companyData } from "../data/companyData";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import Seo from "../components/common/Seo";
import ScrollReveal from "../components/ScrollReveal";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

export default function ServiceEmergencySupport() {
  return (
    <>
      <Seo
        title="24/7 Emergency Elevator Breakdown Support"
        description="Dedicated mobile service vans across Ahmedabad, Gandhinagar, and Sanand/Bavla with a 30-45 minute emergency response guarantee, genuine OEM spare parts, and certified technicians."
      />
      <div className="min-h-screen bg-slate-50 pb-12 overflow-x-hidden">
        <PageHero
          breadcrumbs={[{ label: "Services", to: "/services" }, { label: "Emergency Support" }]}
          icon={AlertTriangle}
          badge="24/7 Emergency Breakdown Dispatch"
          title="30–45 Minute Emergency Response Guarantee"
          description="We operate dedicated mobile service vans across Ahmedabad, Gandhinagar, and Sanand/Bavla industrial zones. Every Krupa elevator under contract is supported with genuine OEM spare parts, emergency battery backups (ARD), and certified technicians."
        />

        <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main breakdown banner / dispatch card */}
          <ScrollReveal direction="up" distance={20}>
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>24/7 Emergency Breakdown Dispatch</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                    Stuck Elevator? We Dispatch Within Minutes.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We operate dedicated mobile service vans across <strong>Ahmedabad, Gandhinagar, and Sanand/Bavla</strong> industrial zones. Every Krupa elevator under contract is supported with genuine OEM spare parts, emergency battery backups (ARD), and certified technicians.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-mono pt-1">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-orange" />
                      365 Days Unbroken Coverage
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                      32-Point Monthly Safety Check
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-teal" />
                      Gujarat Lift Act Approved
                    </span>
                  </div>
                </div>

                {/* Direct Emergency Callouts */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
                      "URGENT BREAKDOWN: I need emergency technical assistance for an elevator in Ahmedabad/Gujarat. Please dispatch a technician."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Report Breakdown on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${companyData.contacts.phoneRaw}`}
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-brand-orange" />
                    <span>Call Helpline: {companyData.contacts.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Coverage area + trust badges expanded */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal
              direction="up"
              distance={20}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Coverage Area</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated mobile service vans stationed across <strong>Ahmedabad, Gandhinagar, and Sanand/Bavla</strong> industrial zones, dispatched from our Kathwada manufacturing works.
              </p>
            </ScrollReveal>

            <ScrollReveal
              direction="up"
              distance={20}
              delay={100}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Response Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                30–45 minute emergency response guarantee, with priority dispatch within 60 minutes across Ahmedabad for Semi-Comprehensive and Comprehensive AMC customers, 365 days a year.
              </p>
            </ScrollReveal>

            <ScrollReveal
              direction="up"
              distance={20}
              delay={200}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Remote Diagnostics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                24/7 IoT telemetry and automated alert dispatch mean technicians often arrive already knowing the fault code and carrying the exact replacement component.
              </p>
            </ScrollReveal>
          </div>

          {/* What's included */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 space-y-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">
                Every Emergency Callout Includes
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Certified Technicians, Genuine Parts
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  title: "Genuine OEM Spare Parts",
                  desc: "100% factory-tested components direct from our Kathwada works, with transparent warranty coverage and traceability on all replaced parts."
                },
                {
                  title: "Emergency Battery Backup (ARD)",
                  desc: "Automatic rescue devices safeguard passengers during grid blackouts, bringing the cabin safely to the nearest floor."
                },
                {
                  title: "Certified Technicians",
                  desc: "Engineers trained on advanced microprocessor systems, closed-loop V3F drives, and safety gear protocols."
                },
                {
                  title: "Statutory Compliance",
                  desc: "Gujarat Lift Act approved procedures and documentation on every emergency service visit."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2 flex items-start gap-3"
                >
                  <Wrench className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection contained
        title="Facing an Elevator Breakdown Right Now?"
        subtitle="Report it on WhatsApp or call our helpline directly — our nearest mobile service van will be dispatched immediately."
        variant="gradient"
        className="rounded-none"
      />
    </>
  );
}
