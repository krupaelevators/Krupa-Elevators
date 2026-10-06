import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Maximize2,
  X,
  CheckCircle2,
  DoorClosed,
  DoorOpen
} from "lucide-react";
import { allDoors } from "../data/doorsMaster";
import { elevatorMaster } from "../data/elevatorMaster";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import RelatedLinks from "../components/common/RelatedLinks";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";

export default function DoorDetail() {
  const { doorId } = useParams();
  const door = allDoors.find((d) => d.id === doorId);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!door) {
    return <Navigate to="/products/doors" replace />;
  }

  const isManual = door.category === "manual";
  const CategoryIcon = isManual ? DoorClosed : DoorOpen;

  // Resolve compatible elevators against the shared elevator catalog
  const compatibleElevatorItems = (door.compatibleElevators || [])
    .map((eid) => elevatorMaster.find((e) => e.id === eid))
    .filter(Boolean)
    .map((e) => ({
      label: e.name,
      description: e.tagline,
      to: `/products/elevators/${e.id}`,
      image: e.image
    }));

  return (
    <div className="min-h-screen bg-slate-50 space-y-12 sm:space-y-16 pb-20 overflow-x-hidden">
      <Seo
        title={door.name}
        description={door.summary.slice(0, 155)}
      />

      {/* ========================================================================= */}
      {/* 1. UNIFIED PAGE HERO                                                      */}
      {/* ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Door Systems", to: "/products/doors" },
          { label: door.name }
        ]}
        icon={CategoryIcon}
        badge={isManual ? "Manual Door" : "Automatic Door"}
        title={door.name}
        tagline={door.tagline}
        description={door.summary}
        actions={
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <span>Request Custom Door Quote</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <a
              href={`https://wa.me/919727764868?text=${encodeURIComponent(
                `Hello Krupa Elevators, I would like to inquire about ${door.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer min-h-[44px]"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        }
        media={
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
            <div className="h-72 sm:h-80 flex items-center justify-center p-4 bg-white">
              <img
                src={door.image}
                alt={door.name}
                className="max-h-full max-w-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-105"
                onClick={() => setLightboxOpen(true)}
              />
            </div>
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/80 text-teal-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              title="Enlarge Technical Drawing"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        }
      />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW                                                                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-start">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-4 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Door System Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {door.name}
              </h2>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {door.description}
            </p>
            {/* </ScrollReveal>
      </section>

     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}> */}
            <div >
              <div>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                  Engineering Data
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Technical Specifications
                </h2>
              </div>
              <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-2 text-xs sm:text-sm">
                {Object.entries(door.specs).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 last:border-0 py-2 gap-1"
                  >
                    <span className="text-slate-500 capitalize font-medium">
                      {k.replace(/([A-Z])/g, " $1")}:
                    </span>
                    <span className="font-bold text-slate-800 sm:text-right">{v}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                All dimensions in millimeters (mm).
              </div>
            </div>
            {door.applications && door.applications.length > 0 && (
              <section className="">
                <ScrollReveal direction="up" distance={20}>
                  <div className="bg-white rounded-xl sm:p-6 border border-slate-200 shadow-sm space-y-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Recommended Applications
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {door.applications.map((app, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </section>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 4. APPLICATIONS                                                            */}
      {/* ========================================================================= */}
      {/* {door.applications && door.applications.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Recommended Applications
              </span>
              <div className="flex flex-wrap gap-2.5">
                {door.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      )} */}

      {/* ========================================================================= */}
      {/* 5. COMPATIBLE ELEVATORS                                                    */}
      {/* ========================================================================= */}
      {compatibleElevatorItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <RelatedLinks title="Compatible Elevators" items={compatibleElevatorItems} />
          </ScrollReveal>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. CTA                                                                     */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          title={`Need a ${door.name} for Your Project?`}
          subtitle="Our engineering consultants evaluate your clear entrance width, sill depth, and wall fire rating to configure the exact door system required."
          variant="gradient"
        />
      </div>

      {/* Lightbox for Zooming Drawing */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-4 sm:p-6 max-w-3xl w-full max-h-[92vh] sm:max-h-[90vh] flex flex-col items-center shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-3 sm:pb-4 border-b border-slate-100 gap-2">
              <h3 className="text-sm sm:text-base font-black text-slate-900 truncate">
                {door.name} — Technical Drawing
              </h3>
              <button
                onClick={() => setLightboxOpen(false)}
                className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close drawing preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto max-h-[72vh] w-full flex items-center justify-center p-2 sm:p-4 bg-slate-50/60 rounded-2xl my-3">
              <img
                src={door.image}
                alt={`${door.name} Technical Drawing`}
                className="max-h-[65vh] object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full text-center text-xs text-slate-500 pt-2">
              All dimensions in millimeters (mm).
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
