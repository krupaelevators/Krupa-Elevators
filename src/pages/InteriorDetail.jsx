import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import {
  basicSeries,
  standardSeries,
  semiDesignerSeries,
  premiumSeries
} from "../data/interiorsSeriesData";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import RelatedLinks from "../components/common/RelatedLinks";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";

// Accent color tokens per series, matching the index page
const SERIES_META = {
  basic: { accentText: "text-brand-teal", chipBg: "bg-teal-50", chipBorder: "border-teal-200", chipText: "text-teal-950", check: "text-brand-teal" },
  standard: { accentText: "text-brand-orange", chipBg: "bg-orange-50", chipBorder: "border-orange-200", chipText: "text-orange-950", check: "text-brand-orange" },
  "semi-designer": { accentText: "text-amber-600", chipBg: "bg-amber-50", chipBorder: "border-amber-200", chipText: "text-amber-950", check: "text-amber-600" },
  premium: { accentText: "text-brand-teal", chipBg: "bg-teal-50", chipBorder: "border-teal-200", chipText: "text-teal-950", check: "text-brand-teal" }
};

// Flatten all 4 series groups into one lookup array, tagging each model with
// its parent series identity so the detail page can render breadcrumbs,
// accent styling, and "other models in this series" links.
const seriesGroups = [basicSeries, standardSeries, semiDesignerSeries, premiumSeries];
const allModels = seriesGroups.flatMap((series) =>
  series.models.map((m) => ({
    ...m,
    seriesId: series.id,
    seriesName: series.seriesName,
    seriesBadge: series.badge
  }))
);

export default function InteriorDetail({ onOpenBrochure }) {
  const { id } = useParams();
  const model = allModels.find((m) => m.id === id);

  if (!model) {
    return <Navigate to="/products/interiors" replace />;
  }

  const meta = SERIES_META[model.seriesId] || SERIES_META.basic;

  // Other models in the same series (excludes current model)
  const sameSeriesModels = allModels.filter(
    (m) => m.seriesId === model.seriesId && m.id !== model.id
  );

  // Fallback related links when the series has no sibling models (Basic,
  // Standard, Semi Designer are each single-model series) — point to the
  // other series groups plus the index page's AG/COP-LOP sections instead
  // of inventing relations that don't exist in the data.
  const relatedItems = sameSeriesModels.length > 0
    ? sameSeriesModels.slice(0, 3).map((m) => ({
        label: m.name,
        description: m.tagline,
        to: `/products/interiors/${m.id}`,
        image: m.image
      }))
    : [
        ...premiumSeries.models.slice(0, 2).map((m) => ({
          label: m.name,
          description: m.tagline,
          to: `/products/interiors/${m.id}`,
          image: m.image
        })),
        {
          label: "AG Series Surface Detailing",
          description: "PVD-coated & laser-etched decorative wall patterns available across cabin series.",
          to: "/products/interiors#ag-series-section"
        }
      ];

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Seo
        title={model.name}
        description={model.clientOverview.slice(0, 155)}
      />

      {/* ========================================================================= */}
      {/* 1. UNIFIED PAGE HERO                                                      */}
      {/* ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Interior Cabins", to: "/products/interiors" },
          { label: model.name }
        ]}
        badge={`${model.seriesBadge} • ${model.seriesName}`}
        title={model.name}
        tagline={model.tagline}
        description={model.clientOverview}
        actions={
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <span>Request This Cabin Finish</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              to="/products/interiors"
              className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center min-h-[44px]"
            >
              All Cabin Finishes
            </Link>
          </div>
        }
        media={
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="font-bold">{model.model}</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-teal-300 font-mono text-[11px] border border-slate-700">
                Kathwada Works
              </span>
            </div>
          </div>
        }
      />

      {/* ========================================================================= */}
      {/* 2. CLIENT OVERVIEW & KEY HIGHLIGHTS                                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className={`text-xs font-bold ${meta.accentText} uppercase tracking-widest block mb-1`}>
                Client Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {model.name}
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {model.clientOverview}
            </p>

            <div className={`p-5 rounded-2xl ${meta.chipBg} border ${meta.chipBorder} space-y-2`}>
              <strong className={`text-xs font-bold ${meta.chipText} uppercase tracking-wider block`}>
                Client-Focused Design Highlights
              </strong>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                {model.keyHighlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className={`w-3.5 h-3.5 ${meta.check} shrink-0 mt-0.5`} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 3. SPECIFICATIONS TABLE                                                    */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white space-y-6 shadow-xl">
            <div>
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-1">
                Mechanical & Material Specifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {model.model} Specification Sheet
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3 sm:p-4">Component</th>
                    <th className="p-3 sm:p-4">Material & Finish Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {model.specifications.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-semibold text-slate-800 whitespace-nowrap">{row.parameter}</td>
                      <td className="p-3 sm:p-4">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 4. RELATED CABIN FINISHES                                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ScrollReveal direction="up" distance={20}>
          <RelatedLinks
            title={sameSeriesModels.length > 0 ? `Other Models in the ${model.seriesName}` : "Explore Other Cabin Finishes"}
            items={relatedItems}
          />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 5. CTA                                                                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <CTASection
          title={`Interested in the ${model.name}?`}
          subtitle="Our design team provides bespoke cabin material samples and site-specific mockups for architects, developers, and homeowners."
          badge="Bespoke Cabin Studio"
          variant="gradient"
        />
      </section>
    </div>
  );
}
