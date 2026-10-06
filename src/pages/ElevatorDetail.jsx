import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Compass,
  Maximize2,
  X,
  SlidersHorizontal,
  CheckCircle2,
  Building2,
  Sparkles,
  Cpu,
  DoorClosed,
  Layers,
  Anchor,
  Minimize2,
  ArrowDownCircle,
  ArrowUpCircle,
  Tag,
  IndianRupee,
  HelpCircle,
  Factory,
  ChevronDown
} from "lucide-react";
import { elevatorMaster, getElevatorSingleTable } from "../data/elevatorMaster";
import { allDoors } from "../data/doorsMaster";
import { companyData } from "../data/companyData";
import StandardSpecTable from "../components/StandardSpecTable";
import CustomizationProcess from "../components/CustomizationProcess";
import MergedCivilTable from "../components/MergedCivilTable";
import ScrollReveal from "../components/ScrollReveal";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import MergedSpecTable from "../components/MergedSpecTable";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";

const componentIcons = {
  machine: Cpu,
  controller: Layers,
  hoistRopes: Anchor,
  guideRails: Minimize2,
  counterweight: Maximize2,
  doorSystem: DoorClosed,
  landingDoors: DoorClosed,
  pit: ArrowDownCircle,
  overhead: ArrowUpCircle
};

const componentLabels = {
  machine: "Traction Machine",
  controller: "Microprocessor Controller",
  hoistRopes: "Suspension / Hoist Ropes",
  guideRails: "Machined Steel Guide Rails",
  counterweight: "Counterweight System",
  doorSystem: "Cabin Door Operator",
  landingDoors: "Landing Entrances & Interlocks",
  pit: "Pit & Buffers",
  overhead: "Overhead Clearance & Safety"
};

export default function ElevatorDetail({ onOpenBrochure }) {
  const { elevatorId } = useParams();

  // Find the elevator model
  const elevator = elevatorMaster.find((e) => e.id === elevatorId);

  // If not found, redirect to elevators hub
  if (!elevator) {
    return <Navigate to="/products/elevators" replace />;
  }

  // Active layout drawing tab
  const drawingKeys = Object.keys(elevator.drawings || {});
  const [activeDrawingKey, setActiveDrawingKey] = useState(drawingKeys[0] || "main");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Active visual sub-tab for layout
  const activeDrawingUrl = elevator.drawings[activeDrawingKey] || elevator.drawings.main;

  // Find compatible doors from doorsMaster
  const compatibleDoorObjects = allDoors.filter((d) =>
    elevator.compatibleDoors?.includes(d.id)
  );

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Dynamic Structured Data Schema (Product + BreadcrumbList + FAQPage)
  const dynamicSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://www.krupaelevators.com/products/elevators/${elevator.id}#product`,
        name: elevator.seoName || `${elevator.name} (Affordable Solution & Best Price)`,
        description: elevator.overview,
        image: `https://www.krupaelevators.com${elevator.image}`,
        brand: {
          "@type": "Brand",
          name: "KRUPA ELEVATORS"
        },
        manufacturer: {
          "@type": "Organization",
          name: "KRUPA ELEVATORS Kathwada Manufacturing Works Ahmedabad"
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: elevator.pricing?.priceNumeric || 350000,
          priceValidUntil: "2027-12-31",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "KRUPA ELEVATORS"
          }
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "54"
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.krupaelevators.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Elevator Models",
            "item": "https://www.krupaelevators.com/products/elevators"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": elevator.name,
            "item": `https://www.krupaelevators.com/products/elevators/${elevator.id}`
          }
        ]
      },
      ...(elevator.faq && elevator.faq.length > 0
        ? [
          {
            "@type": "FAQPage",
            mainEntity: elevator.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a
              }
            }))
          }
        ]
        : [])
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 space-y-12 sm:space-y-16 pb-20 overflow-x-hidden">
      <Seo
        title={elevator.seoTitle || `${elevator.name} — Affordable Solution & Best Price in Ahmedabad`}
        description={`Affordable ${elevator.name} at direct factory best price by Krupa Elevators Ahmedabad. Manufactured in Kathwada GIDC. ${elevator.overview?.slice(0, 130)}`}
        keywords={elevator.seoKeywords}
        schema={dynamicSchema}
      />

      {/* ========================================================================= */}
      {/* 1. UNIFIED PAGE HERO                                                      */}
      {/* ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Elevator Models", to: "/products/elevators" },
          { label: elevator.name }
        ]}
        icon={Building2}
        badge={elevator.category}
        title={elevator.name}
        tagline={elevator.tagline}
        description={elevator.overview}
        actions={
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <span>Request Site Survey & Layout</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <button
              onClick={() => {
                document.getElementById("civil-specifications")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xs min-h-[44px]"
            >
              <SlidersHorizontal className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Specifications Matrix</span>
            </button>

            {/* <a
              href={`https://wa.me/919727764868?text=${encodeURIComponent(
                `Hello Krupa Elevators, I would like to inquire about ${elevator.name} specifications and request a quote.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer min-h-[44px]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
              <span>WhatsApp</span>
            </a> */}
          </div>
        }
        media={
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
            <img
              src={elevator.image}
              alt={elevator.name}
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2 text-xs text-white">
              <span className="font-bold min-w-0">{elevator.name}</span>
              <span className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-teal-300 font-mono text-[11px] border border-slate-700">
                Direct Kathwada Factory
              </span>
            </div>
          </div>
        }
      />

      {/* ========================================================================= */}
      {/* 1B. BEST PRICE GUARANTEE & FACTORY-DIRECT PRICING BANNER                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-teal-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-brand-orange" />
                <span>{elevator.pricing?.pricingBadge || "Direct Factory Best Price Guarantee • Affordable Solution"}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {elevator.seoName || `Affordable ${elevator.name} at Best Price in Ahmedabad`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Direct manufacturing from our Kathwada GIDC works eliminates agent commissions and middleman markups.
                Includes 100% monopoly-free non-proprietary open controllers, cutting recurring AMC costs by up to 50%.
              </p>

              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 pt-1 text-xs text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Price Range: <strong className="text-white font-bold">{elevator.pricing?.priceRange || "₹3,50,000 – ₹8,50,000*"}</strong></span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Factory className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Kathwada GIDC Works, Ahmedabad</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Zero Password Locks</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>Request Best Price Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/918200859171?text=${encodeURIComponent(
                  `Hello Krupa Elevators Ahmedabad, I am looking for the best price quotation for ${elevator.name}. Please share details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all text-center flex items-center justify-center space-x-2 border border-white/20"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Chat for Instant Estimate</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW & TYPICAL APPLICATIONS                                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                  Purpose-Built Engineering
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Elevator Overview & Operational Scope
                </h2>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                <Building2 className="w-4 h-4 text-brand-orange" />
                <span>Engineered for Modern Architecture</span>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {elevator.overview}
            </p>

            {/* Typical Applications Pills */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Target Buildings & Installations:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {elevator.typicalApplications.map((app, idx) => (
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

            {/* Engineering Highlights */}
            {elevator.features && (
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                  Key Technical Highlights:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {elevator.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 p-3 rounded-xl bg-teal-50/40 border border-teal-100 text-slate-700 text-xs"
                    >
                      <Sparkles className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Annotated Engineering Breakdown */}
            {elevator.structure && (
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                    Engineering Sub-Assemblies
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Annotated Structural & Mechanical Breakdown
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Core electro-mechanical sub-assemblies engineered for {elevator.name}.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
                  {Object.entries(elevator.structure).map(([key, value]) => {
                    const Icon = componentIcons[key] || Layers;
                    const label = componentLabels[key] || key;
                    return (
                      <div
                        key={key}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                      >
                        <div className="flex items-center space-x-2.5 text-slate-900 font-bold text-xs">
                          <div className="w-7 h-7 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5 text-brand-teal" />
                          </div>
                          <span className="truncate">{label}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOISTWAY LAYOUT DRAWINGS: Plan, Elevation, Machine & Door Views         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white space-y-6 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2 border border-teal-500/30">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Architectural Layout & Design</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Official Hoistway General Arrangement (GA) Drawings
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  General Arrangement engineering layout drawings showing structural shaft, cabin interior, entrance width, and machine room parameters.
                </p>
              </div>

              {/* Drawing Sub-View Switcher Tabs */}
              <div className="flex overflow-x-auto no-scrollbar touch-pan-x items-center gap-1.5 bg-slate-800 p-1.5 rounded-2xl border border-slate-700 w-full sm:w-auto max-w-full">
                {drawingKeys.map((key) => {
                  const isSelected = activeDrawingKey === key;
                  const label =
                    key === "main"
                      ? "Main GA"
                      : key === "plan"
                        ? "Plan View"
                        : key === "elevation"
                          ? "Elevation View"
                          : key === "door" || key === "doors"
                            ? "Door Details"
                            : key === "threeD" || key === "threeDShafts"
                              ? "3D Shaft"
                              : key === "terrace"
                                ? "Terrace Level"
                                : key === "parkingSystems"
                                  ? "Parking Stacker"
                                  : key.toUpperCase();

                  return (
                    <button
                      key={key}
                      onClick={() => setActiveDrawingKey(key)}
                      className={`px-3.5 py-2 sm:py-1.5 min-h-[38px] rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${isSelected
                        ? "bg-brand-teal text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-slate-700"
                        }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawing Preview Container */}
            <div className="relative bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[480px] overflow-hidden group">
              <img
                src={activeDrawingUrl}
                alt={`${elevator.name} - ${activeDrawingKey}`}
                className="max-h-[320px] sm:max-h-[500px] w-auto object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01]"
                onClick={() => setLightboxOpen(true)}
              />

              {/* Enlarge CTA Overlay */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-2 sm:py-1.5 min-h-[38px] rounded-xl bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold shadow-md transition-all flex items-center space-x-1.5 border border-slate-700 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-brand-teal" />
                <span>Enlarge</span>
              </button>

              <div className="w-full text-center text-xs text-slate-500 pt-3 border-t border-slate-100 mt-3">
                All dimensions in millimeters (mm).
              </div>
            </div>

            {/* Parameter Guide Key */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <strong className="text-teal-300 block font-mono text-sm">A × B</strong>
                <span className="text-slate-400 text-[11px]">
                  {elevator.isCarElevator ? "Platform Inside (Width × Depth)" : "Cabin Inside (Width × Depth)"}
                </span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <strong className="text-teal-300 block font-mono text-sm">C × D</strong>
                <span className="text-slate-400 text-[11px]">Lift-Well / Shaft Dimensions</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <strong className="text-brand-orange block font-mono text-sm">E</strong>
                <span className="text-slate-400 text-[11px]">Clear Entrance Opening Width</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <strong className="text-teal-300 block font-mono text-sm">K × L</strong>
                <span className="text-slate-400 text-[11px]">Machine Room Finished Dimensions</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNICAL SPECIFICATIONS & MERGED CIVIL DIMENSIONS MATRIX               */}
      {/* ========================================================================= */}
      <section id="civil-specifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Standard Technical Specifications */}
        <ScrollReveal direction="up" distance={20}>
          <StandardSpecTable
            specs={elevator.standardSpecs}
            title={`${elevator.name} — Technical Specifications`}
            subtitle="Standardized baseline engineering parameters for architectural planning and tender verification."
          />
        </ScrollReveal>

        {/* Technical Hoistway & Civil Engineering Dimensions Matrix (ONLY ONE TABLE WITH MERGED CELLS) */}
        {(() => {
          const singleTable = getElevatorSingleTable(elevator.id);

          return (
            <ScrollReveal direction="up" distance={20}>
              <div className="bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <MergedSpecTable tableData={singleTable} />
              </div>
            </ScrollReveal>
          );
        })()}
      </section>

      {/* ========================================================================= */}
      {/* 5. COMPATIBLE DOOR SYSTEMS & MACHINES                                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Sub-System Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Compatible Door Systems & Traction Machines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Configure your {elevator.name} with certified door entrance mechanisms and high-efficiency drive machines from the Krupa manufacturing catalog.
              </p>
            </div>

            {/* Compatible Doors Grid */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <DoorClosed className="w-4 h-4 text-brand-teal" />
                <span>Compatible Door Configurations</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {compatibleDoorObjects.map((door) => (
                  <div
                    key={door.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal/60 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white text-brand-teal border border-slate-200 uppercase">
                        {door.category} Door
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Page 05
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{door.name}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {door.summary}
                    </p>
                    <div className="pt-2 text-[11px] text-slate-500 font-medium">
                      Standard Opening: <strong className="text-slate-800">{door.specs.standardOpening}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatible Machines */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-brand-orange" />
                <span>Recommended Traction Machines</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {elevator.compatibleMachines?.map((mach, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    <span>{mach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUSTOMIZATION WORKFLOW: 8-Step Engineering Process                     */}
      {/* ========================================================================= */}
      <CustomizationProcess />

      {/* ========================================================================= */}
      {/* 7B. FREQUENTLY ASKED QUESTIONS (FAQ) — SEO & SPECIFICATIONS IN AHMEDABAD  */}
      {/* ========================================================================= */}
      {elevator.faq && elevator.faq.length > 0 && (
        <section id="elevator-faq-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                {elevator.name} Prices, Specs &amp; Installation in Ahmedabad
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Direct answers from our Ahmedabad engineering desk
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {elevator.faq.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-brand-teal/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-brand-teal text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      Q
                    </span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {item.a}
                  </p>
                </div>
                <div className="pl-7 pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>KRUPA ELEVATORS AHMEDABAD</span>
                  <span className="text-brand-teal font-semibold">Verified Spec</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 8. BOTTOM CTA BANNER: Site Survey & Consultation                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-teal via-teal-800 to-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-200">
              Kathwada Factory, Ahmedabad
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Planning a {elevator.name} Installation?
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Get in touch with our engineering team for free site surveys, custom CAD layout design, and verified civil shaft calculations across Gujarat and Western India.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-7 py-3.5 min-h-[44px] rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg transition-all text-center flex items-center justify-center"
            >
              Request Free Site Survey
            </Link>
            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="px-6 py-3.5 min-h-[44px] rounded-xl bg-white text-slate-900 text-xs sm:text-sm font-bold hover:bg-slate-100 transition-colors flex items-center justify-center space-x-2 shadow-md text-center"
            >
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Call +91 82008 59171</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox for Zooming CAD Drawing */}
      {
        lightboxOpen && (
          <div
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative bg-white rounded-3xl p-4 sm:p-6 max-w-4xl w-full max-h-[92vh] sm:max-h-[90vh] flex flex-col items-center shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-between items-center pb-3 sm:pb-4 border-b border-slate-100 gap-2">
                <div className="flex items-center space-x-2 min-w-0">
                  <Compass className="w-5 h-5 text-brand-teal shrink-0" />
                  <h3 className="text-xs sm:text-base font-black text-slate-900 truncate">
                    {elevator.name} — GA Hoistway Drawing
                  </h3>
                </div>
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
                  src={activeDrawingUrl}
                  alt={`${elevator.name} Engineering Drawing`}
                  className="max-h-[65vh] object-contain rounded-lg shadow-sm"
                />
              </div>
              <div className="w-full text-center text-xs text-slate-500 pt-2">
                All civil dimensions in millimeters (mm).
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}
