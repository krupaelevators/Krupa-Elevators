import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DoorClosed,
  DoorOpen,
  SlidersHorizontal,
  Maximize2,
  X
} from "lucide-react";
import { manualDoors, automaticDoors, allDoors } from "../data/doorsMaster";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import Seo from "../components/common/Seo";
import ScrollReveal from "../components/ScrollReveal";

export default function DoorSystems() {
  const [selectedCategory, setSelectedCategory] = useState("all"); // "all", "manual", "automatic"
  const [lightboxDrawing, setLightboxDrawing] = useState(null);

  const displayedDoors =
    selectedCategory === "all"
      ? allDoors
      : selectedCategory === "manual"
        ? manualDoors
        : automaticDoors;

  return (
    <div className="min-h-screen bg-slate-50 space-y-12 sm:space-y-16 pb-20 overflow-x-hidden">
      <Seo
        title="Elevator Door Systems & Auto Doors in Ahmedabad | Krupa Elevators"
        description="Complete catalog of manual and automatic elevator doors, center-opening, telescopic, and fire-rated doors engineered by Krupa Elevators in Kathwada, Ahmedabad."
        keywords="elevator door systems, automatic elevator door Ahmedabad, telescopic elevator doors, stainless steel elevator doors Gujarat"
      />

      {/* Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Door Systems" }
        ]}
        icon={DoorClosed}
        badge="Certified Landing Entrances • Manual & Automatic Doors"
        title="Elevator Door Systems"
        description="Complete catalog of manual and automatic elevator entrance door configurations. Focused on three core engineering pillars: safety, reliability, and speed."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Selector Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex overflow-x-auto no-scrollbar touch-pan-x items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2.5 min-h-[40px] whitespace-nowrap rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${selectedCategory === "all"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100"
                }`}
            >
              All Doors ({allDoors.length})
            </button>
            <button
              onClick={() => setSelectedCategory("manual")}
              className={`px-4 py-2.5 min-h-[40px] whitespace-nowrap rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${selectedCategory === "manual"
                ? "bg-brand-orange text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100"
                }`}
            >
              <DoorClosed className="w-3.5 h-3.5" />
              <span>Manual Doors ({manualDoors.length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory("automatic")}
              className={`px-4 py-2.5 min-h-[40px] whitespace-nowrap rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 ${selectedCategory === "automatic"
                ? "bg-brand-teal text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100"
                }`}
            >
              <DoorOpen className="w-3.5 h-3.5" />
              <span>Automatic Doors ({automaticDoors.length})</span>
            </button>
          </div>

          <span className="text-xs text-slate-500 hidden md:inline">
            Engineered for safe, reliable operation
          </span>
        </div>

        {/* Section Intro Notice */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-bold">
              {selectedCategory === "manual"
                ? "Manual Doors — Economic & Space-Saving"
                : selectedCategory === "automatic"
                  ? "Automatic Doors — High-Speed & High-Safety Cycling"
                  : "Manual & Automatic Door Entrance Solutions"}
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              From economic collapsible gates and full-glass residential swing doors to heavy 4-panel center-opening automotive entrance operators, every door is engineered for durable duty cycles.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold shadow-md transition-all shrink-0 self-start md:self-auto"
          >
            Consult Engineering Team
          </Link>
        </div>

        {/* Doors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDoors.map((door, idx) => {
            const isManual = door.category === "manual";
            return (
              <ScrollReveal
                key={door.id}
                direction="up"
                delay={idx * 40}
                distance={20}
                className="h-full"
              >
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    {/* Image / Drawing Header */}
                    <div className="h-52 relative overflow-hidden flex items-center justify-center p-3">
                      <img
                        src={door.image}
                        alt={door.name}
                        className="max-h-44 object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase backdrop-blur-md ${isManual
                            ? "bg-orange-500/90 text-white"
                            : "bg-teal-500/90 text-white"
                            }`}
                        >
                          {isManual ? "Manual Door" : "Automatic Door"}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <button
                          onClick={() => setLightboxDrawing(door.drawing || door.image)}
                          className="p-1.5 rounded-lg bg-slate-900/80 text-teal-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                          title="Enlarge Technical Drawing"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 block uppercase">
                          {door.tagline}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                          {door.name}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {door.description}
                      </p>

                      {/* Specs Summary Table */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                        {door.specs.standardOpening && (
                          <div className="flex justify-between gap-3">
                            <span className="text-slate-400 text-[11px] shrink-0">Clear Opening:</span>
                            <span className="font-bold text-slate-900 text-right">
                              {door.specs.standardOpening}
                            </span>
                          </div>
                        )}
                        {door.specs.material && (
                          <div className="flex justify-between gap-3">
                            <span className="text-slate-400 text-[11px] shrink-0">Material:</span>
                            <span className="font-medium text-slate-800 text-right">
                              {door.specs.material}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-4 sm:p-6 pt-0 flex gap-2">
                    <Link
                      to={`/products/doors/${door.id}`}
                      className="flex-1 py-2.5 px-3 min-h-[42px] rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5 text-teal-300" />
                      <span>View Details</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="py-2.5 px-3.5 min-h-[42px] rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-colors flex items-center justify-center"
                    >
                      <span>Inquire</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox for Zooming Drawing */}
      {lightboxDrawing && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxDrawing(null)}
        >
          <div
            className="relative bg-white rounded-3xl p-4 sm:p-6 max-w-3xl w-full max-h-[92vh] sm:max-h-[90vh] flex flex-col items-center shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-3 sm:pb-4 border-b border-slate-100 gap-2">
              <h3 className="text-sm sm:text-base font-black text-slate-900 truncate">
                Door Technical Drawing
              </h3>
              <button
                onClick={() => setLightboxDrawing(null)}
                className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close drawing preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto max-h-[72vh] w-full flex items-center justify-center p-2 sm:p-4 bg-slate-50/60 rounded-2xl my-3">
              <img
                src={lightboxDrawing}
                alt="Door Drawing"
                className="max-h-[65vh] object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          title="Need Custom Entrance Dimensions for Your Shaft?"
          subtitle="Our engineering consultants evaluate your clear entrance width, sill depth, and wall fire rating to configure the exact door system required."
          variant="gradient"
        />
      </div>
    </div>
  );
}
