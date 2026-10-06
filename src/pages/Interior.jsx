import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  Check,
  Sparkles,
  ArrowRight,
  X
} from "lucide-react";
import {
  basicSeries,
  standardSeries,
  semiDesignerSeries,
  premiumSeries,
  architecturalSurfaceDetailing,
  copLopFixtures
} from "../data/interiorsSeriesData";
import StickySidebarNav from "../components/common/StickySidebarNav";
import CTASection from "../components/common/CTASection";
import Seo from "../components/common/Seo";
import { assetUrl } from "../utils/assetPath";
import PageHero from "../components/common/PageHero";

// Accent color tokens reused across series card groups
const ACCENTS = {
  teal: {
    badgeText: "text-brand-teal",
    chipBg: "bg-teal-50",
    chipBorder: "border-teal-200",
    chipText: "text-teal-950",
    check: "text-brand-teal",
    button: "bg-slate-900 hover:bg-brand-teal"
  },
  orange: {
    badgeText: "text-brand-orange",
    chipBg: "bg-orange-50",
    chipBorder: "border-orange-200",
    chipText: "text-orange-950",
    check: "text-brand-orange",
    button: "bg-slate-900 hover:bg-brand-orange"
  },
  amber: {
    badgeText: "text-amber-600",
    chipBg: "bg-amber-50",
    chipBorder: "border-amber-200",
    chipText: "text-amber-950",
    check: "text-amber-600",
    button: "bg-slate-900 hover:bg-amber-600"
  }
};

// Compact model summary card — image + name + tagline + 2-3 highlights + link to detail page
function ModelSummaryCard({ model, accent = "teal" }) {
  const a = ACCENTS[accent] || ACCENTS.teal;
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50/60 overflow-hidden flex flex-col hover:shadow-md hover:border-slate-300 transition-all">
      <div className="relative h-48 sm:h-56 w-full bg-slate-950">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md text-[11px] font-black font-mono text-white border border-slate-700">
          {model.model}
        </span>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="text-sm font-black leading-snug">{model.name}</h3>
          <p className="text-[11px] text-slate-300 line-clamp-1">{model.tagline}</p>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col space-y-3">
        <div className={`p-3 rounded-xl ${a.chipBg} border ${a.chipBorder} space-y-1.5 flex-1`}>
          <strong className={`text-[10px] font-bold ${a.chipText} uppercase tracking-wider block`}>
            Design Highlights
          </strong>
          <ul className="space-y-1 text-xs text-slate-700">
            {model.keyHighlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start space-x-1.5">
                <Check className={`w-3.5 h-3.5 ${a.check} shrink-0 mt-0.5`} />
                <span className="line-clamp-2">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/products/interiors/${model.id}`}
          className={`w-full px-4 py-3 min-h-[42px] rounded-xl ${a.button} text-white text-xs font-bold flex items-center justify-center space-x-2 transition-all`}
        >
          <span>View Full Details &amp; Specifications</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </Link>
      </div>
    </div>
  );
}

export default function Interior({ onOpenBrochure }) {
  // Lightbox state for zooming AG swatches & COP/LOP fixture images
  const [lightboxImg, setLightboxImg] = useState(null);

  // Thumbnail quick-nav derived from the 11 real cabin models across all series
  const thumbnailModels = [
    ...basicSeries.models,
    ...standardSeries.models,
    ...semiDesignerSeries.models,
    ...premiumSeries.models
  ];

  // Sticky navigation items — all anchors point within this index page
  const sidebarSections = [
    { id: "cabin-finishes-section", label: "11 Cabin Finishes" },
    { id: "basic-series-section", label: "Basic Series (KEC-01)" },
    { id: "standard-series-section", label: "Standard Series (KEC-02)" },
    { id: "semi-series-section", label: "Semi Designer (KEC-03)" },
    { id: "premium-series-section", label: "Premium Series (KEC-04 to 11)" },
    { id: "ag-series-section", label: "AG Surface Detailing" },
    { id: "cop-lop-section", label: "COP & LOP Fixtures" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Seo
        title="Luxury Elevator Cabin Interiors in Ahmedabad | Krupa Elevators"
        description="Explore Krupa Elevators' 11 luxury cabin interior series across Basic, Standard, Semi Designer, and Premium collections. Stainless steel, titanium gold, laser-etched AG patterns, and LED ceilings at affordable direct factory prices in Ahmedabad."
        keywords="elevator cabin interior Ahmedabad, luxury elevator cabin, stainless steel lift interior, titanium gold elevator cabin, lift interior manufacturer Gujarat"
      />

      {/* ========================================================================= */}
      {/* 1. PAGE HEADER                                                            */}
      {/* ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Interior Cabins" }
        ]}
        icon={Palette}
        badge="Architectural Interior Aesthetics & Fixtures"
        title="Cabin Interior Series & Operating Panels"
        description="Discover Krupa's architectural cabin interiors categorized across Basic, Standard, Semi Designer, and Premium series, complemented by PVD laser-etched AG Series motifs and certified COP/LOP fixtures."
      />

      {/* Main Container with Sticky Navigation + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
          {/* Sticky Navigation (Mobile Horizontal Bar + Desktop Left Sidebar) */}
          <StickySidebarNav
            sections={sidebarSections}
            title="Interior Hub"
          />

          {/* Main Content Body */}
          <div className="flex-1 w-full min-w-0 space-y-16">

            {/* Quick 11-Cabin Finishes Visual Explorer */}
            <div
              id="cabin-finishes-section"
              className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-5 scroll-mt-24"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-teal block">
                    Bespoke Architectural Finishes
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    11 Cabin Finishes &amp; Material Series
                  </h2>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span>Click any cabin to view full specifications</span>
                </div>
              </div>

              {/* 11 Cabin Thumbnail Quick Navigation — links to real detail pages */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {thumbnailModels.map((m) => (
                  <Link
                    key={m.id}
                    to={`/products/interiors/${m.id}`}
                    className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-1.5 hover:border-brand-teal transition-all text-left flex flex-col cursor-pointer"
                  >
                    <div className="h-24 sm:h-28 w-full rounded-xl overflow-hidden bg-slate-900 relative">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2 text-[11px] font-black font-mono text-white">
                        {m.model}
                      </span>
                    </div>
                    <div className="p-1.5">
                      <span className="text-[11px] font-semibold text-slate-300 group-hover:text-brand-teal transition-colors line-clamp-1">
                        {m.tagline}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ===================================================================== */}
            {/* 1. BASIC SERIES (KEC-01)                                              */}
            {/* ===================================================================== */}
            <section
              id="basic-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    {basicSeries.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {basicSeries.seriesName}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">{basicSeries.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {basicSeries.models.map((m) => (
                  <ModelSummaryCard key={m.id} model={m} accent="teal" />
                ))}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 2. STANDARD SERIES (KEC-02)                                           */}
            {/* ===================================================================== */}
            <section
              id="standard-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                    {standardSeries.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {standardSeries.seriesName}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">{standardSeries.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {standardSeries.models.map((m) => (
                  <ModelSummaryCard key={m.id} model={m} accent="orange" />
                ))}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 3. SEMI DESIGNER SERIES (KEC-03)                                      */}
            {/* ===================================================================== */}
            <section
              id="semi-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                    {semiDesignerSeries.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {semiDesignerSeries.seriesName}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">{semiDesignerSeries.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {semiDesignerSeries.models.map((m) => (
                  <ModelSummaryCard key={m.id} model={m} accent="amber" />
                ))}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 4. PREMIUM SERIES (KEC-04 to KEC-11)                                  */}
            {/* ===================================================================== */}
            <section
              id="premium-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    {premiumSeries.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {premiumSeries.seriesName}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
                    {premiumSeries.headline}
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200 px-3 py-1 rounded-full shrink-0">
                  8 Bespoke Masterpieces
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {premiumSeries.models.map((m) => (
                  <ModelSummaryCard key={m.id} model={m} accent="teal" />
                ))}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 5. ARCHITECTURAL SURFACE DETAILING — AG SERIES                        */}
            {/* ===================================================================== */}
            <section
              id="ag-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1 max-w-2xl">
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                    {architecturalSurfaceDetailing.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {architecturalSurfaceDetailing.name}
                  </h2>
                  <p className="text-xs text-slate-600">
                    {architecturalSurfaceDetailing.description}
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-orange bg-orange-50 border border-orange-200 px-3 py-1 rounded-full shrink-0">
                  7 Decorative Motifs
                </span>
              </div>

              {/* Authentic Swatch Plates from Brochure Pages 06 & 07 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center space-y-3">
                  <span className="text-xs font-bold text-slate-700">
                    AG Series Surface Swatches (Page 06: AG 139, AG 155, AG 179)
                  </span>
                  <img
                    src={assetUrl("/assets/interiors/ag_swatches/ag_series_p6_swatches.png")}
                    alt="AG Series Swatches"
                    className="max-h-36 object-contain cursor-pointer rounded-xl"
                    onClick={() => setLightboxImg(assetUrl("/assets/interiors/ag_swatches/ag_series_p6_swatches.png"))}
                  />
                  <p className="text-[11px] text-slate-500 text-center">
                    Featured on Rose Gold & Titanium Mirror Premium Cabins
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center space-y-3">
                  <span className="text-xs font-bold text-slate-700">
                    AG Series Surface Swatches (Page 07: AG 117, AG 102, AG 112, AG 108)
                  </span>
                  <img
                    src={assetUrl("/assets/interiors/ag_swatches/ag_series_p7_swatches.png")}
                    alt="AG Series Geometric Swatches"
                    className="max-h-36 object-contain cursor-pointer rounded-xl"
                    onClick={() => setLightboxImg(assetUrl("/assets/interiors/ag_swatches/ag_series_p7_swatches.png"))}
                  />
                  <p className="text-[11px] text-slate-500 text-center">
                    Featured on Stainless Steel Strip Designer & Executive Suites
                  </p>
                </div>
              </div>

              {/* Grid of 7 AG Patterns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {architecturalSurfaceDetailing.patterns.map((pat) => (
                  <div
                    key={pat.code}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 hover:bg-slate-100/80 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-orange bg-orange-100 px-2 py-0.5 rounded">
                        {pat.code}
                      </span>
                    </div>
                    <strong className="text-xs font-black text-slate-900 block">
                      {pat.name}
                    </strong>
                    <span className="text-[11px] text-slate-600 block">
                      {pat.finish}
                    </span>
                    <span className="text-[10px] text-brand-teal block pt-1 border-t border-slate-200/80">
                      {pat.featuredOn}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical PVD Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {architecturalSurfaceDetailing.technicalFeatures.map((f, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200/80 space-y-1">
                    <strong className="text-xs font-bold text-teal-950 block">{f.title}</strong>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 6. COP & LOP OPERATING FIXTURES (PDF Page 9 Grounded)                 */}
            {/* ===================================================================== */}
            <section
              id="cop-lop-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-10 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1 max-w-3xl">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    Operating Fixtures
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    COP & LOP Operating Panels
                  </h2>
                  <p className="text-xs text-slate-600">
                    {copLopFixtures.description}
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200 px-3 py-1 rounded-full shrink-0">
                  Brochure Page 17 (PDF Page 9)
                </span>
              </div>

              {/* Clear Distinction: COP vs LOP (Client Education) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-brand-teal" />
                    <h3 className="font-black text-sm text-teal-950">
                      {copLopFixtures.systemsDistinction.cop.term}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-teal-700 block uppercase">
                    Location: {copLopFixtures.systemsDistinction.cop.location}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {copLopFixtures.systemsDistinction.cop.role}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-brand-orange" />
                    <h3 className="font-black text-sm text-orange-950">
                      {copLopFixtures.systemsDistinction.lop.term}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-orange-700 block uppercase">
                    Location: {copLopFixtures.systemsDistinction.lop.location}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {copLopFixtures.systemsDistinction.lop.role}
                  </p>
                </div>
              </div>

              {/* Visual Showcase: Left Hero COP Column | Right 6 Paired Models */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Hero Luxury Brushed Stainless Steel COP */}
                <div className="lg:col-span-4 rounded-3xl p-6 border border-slate-800 text-white flex flex-col items-center space-y-4">
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block">
                      In-Cabin Masterpiece
                    </span>
                    <h4 className="text-sm text-slate-900 font-black">Full-Height Column COP</h4>
                    <p className="text-[11px] text-slate-400">
                      Brushed stainless steel with red digital floor matrix & round luminous buttons.
                    </p>
                  </div>
                  <img
                    src={assetUrl("/assets/interiors/cop_lop/hero_cabin_cop.png")}
                    alt="Hero Car Operating Panel"
                    className="max-h-96 w-auto object-contain cursor-pointer hover:scale-102 transition-transform"
                    onClick={() => setLightboxImg(assetUrl("/assets/interiors/cop_lop/hero_cabin_cop.png"))}
                  />
                  <div className="w-full text-center text-[10px] text-slate-400 pt-2 border-t border-slate-800">
                    Laser-engraved Krupa Elevators brandplate & emergency intercom.
                  </div>
                </div>

                {/* Right: 6 Verified Models Grid */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-base font-black text-slate-900">
                      The 6 Paired COP & LOP Operating Suites
                    </h4>
                    <p className="text-xs text-slate-600">
                      Each suite provides a matching aesthetic between the in-cabin column (COP) and the landing hall station (LOP).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {copLopFixtures.models.map((item, idx) => {
                      const imageFile = assetUrl(`/assets/interiors/cop_lop/ke_cop_lop_00${idx + 1}.png`);
                      return (
                        <div
                          key={item.code}
                          className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between p-3.5 space-y-3 hover:shadow-md transition-all"
                        >
                          <div className="space-y-2">
                            <div className=" rounded-xl p-2 flex items-center justify-center h-48">
                              <img
                                src={imageFile}
                                alt={item.code}
                                className="max-h-44 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => setLightboxImg(imageFile)}
                              />
                            </div>
                            <span className="font-mono text-[11px] font-bold text-brand-teal bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block">
                              {item.code}
                            </span>
                            <h5 className="font-bold text-xs text-slate-900 leading-snug">
                              {item.title}
                            </h5>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              {item.finish}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                            <div>Display: <strong className="text-slate-700">{item.display}</strong></div>
                            <div>Buttons: <strong className="text-slate-700">{item.buttons}</strong></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Calling Box Display Screens (From Bottom of Page 17) */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                    Display of Calling Box
                  </span>
                  <h4 className="text-base font-black text-slate-900">
                    High-Definition Landing & In-Car Floor Display Screens
                  </h4>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 shrink-0">
                    <img
                      src={assetUrl("/assets/interiors/cop_lop/calling_box_displays.png")}
                      alt="Calling Box Display Screens"
                      className="max-h-28 w-auto object-contain cursor-pointer"
                      onClick={() => setLightboxImg(assetUrl("/assets/interiors/cop_lop/calling_box_displays.png"))}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                    {copLopFixtures.displayCallingBoxes.map((box) => (
                      <div key={box.id} className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                        <strong className="text-xs font-bold text-slate-900 block">{box.name}</strong>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{box.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Call To Action */}
            <CTASection
              title="Need Custom Cabin Materials or Architectural Swatches?"
              subtitle="Our design team provides bespoke samples of titanium gold, rose gold hairline, and custom laser-etched ceiling diffusers for architects and developers."
              badge="Bespoke Cabin Studio"
              variant="gradient"
            />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-[60] bg-slate-950/85 backdrop-blur-sm p-3 sm:p-10 flex items-center justify-center animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl p-4 sm:p-6 max-w-4xl w-full max-h-[92vh] sm:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
          >
            <div className="flex justify-between items-center pb-3 border-b border-slate-200 gap-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider truncate">
                Full Resolution View
              </span>
              <button
                onClick={() => setLightboxImg(null)}
                className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-2 sm:p-4 flex items-center justify-center">
              <img
                src={lightboxImg}
                alt="Enlarged View"
                className="max-h-[72vh] max-w-full object-contain rounded-lg"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLightboxImg(null)}
                className="px-5 py-2.5 min-h-[40px] rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
