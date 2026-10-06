import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Download, ArrowRight, MapPin, Search, Building2, X } from "lucide-react";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import { buildingTypeIcons } from "../components/common/InstallationsTeaser";
import { companyData } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/common/Seo";
import {
  installations,
  installationStats,
  BUILDING_TYPES,
  DRIVE_TYPES,
  driveOf,
  isGoodsLift,
  formatSpeed,
  matchesSearch,
} from "../utils/installations";

const driveLabel = Object.fromEntries(DRIVE_TYPES.map((d) => [d.id, d.label]));
const typeLabel = Object.fromEntries(BUILDING_TYPES.map((t) => [t.id, t.label]));

const driveStyles = {
  mrl: "bg-teal-50 text-teal-800 border-teal-100",
  mr: "bg-slate-100 text-slate-700 border-slate-200",
  hydraulic: "bg-orange-50 text-orange-800 border-orange-100",
};

function InstallationCard({ client }) {
  const Icon = buildingTypeIcons[client.buildingType] || Building2;
  return (
    <article className="flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all">
      <header className="p-5 pb-4 space-y-2 border-b border-slate-100">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Icon className="w-3.5 h-3.5 text-brand-teal" />
            {typeLabel[client.buildingType]}
          </span>
          <span className="shrink-0">
            {client.elevators.length} {client.elevators.length === 1 ? "lift" : "lifts"}
          </span>
        </div>
        <h3 className="text-sm font-bold text-slate-900 leading-snug uppercase">{client.clientName}</h3>
        <p className="inline-flex items-center gap-1 text-xs text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-brand-orange" />
          <span className="capitalize">{client.location.toLowerCase()}</span>
          {client.state !== "Gujarat" && <span>, {client.state}</span>}
        </p>
      </header>

      <ul className="divide-y divide-slate-100 text-xs">
        {client.elevators.map((lift, idx) => {
          const drive = driveOf(lift.type);
          return (
            <li key={idx} className="px-5 py-3 space-y-1.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className={`px-2 py-0.5 rounded-md border text-[10px] font-bold ${driveStyles[drive]}`}>
                  {driveLabel[drive]}
                </span>
                {isGoodsLift(lift.type) && (
                  <span className="px-2 py-0.5 rounded-md border border-slate-200 text-[10px] font-bold text-slate-600">
                    Goods
                  </span>
                )}
                {!/^\d+\s*LIFT$/i.test(lift.unit) && (
                  <span className="text-[11px] text-slate-500 uppercase">{lift.unit}</span>
                )}
              </div>
              <dl className="grid grid-cols-3 gap-2 text-slate-700">
                <div>
                  <dt className="text-[10px] text-slate-400">Floors</dt>
                  <dd className="font-semibold">{lift.floors}</dd>
                </div>
                <div>
                  <dt className="text-[10px] text-slate-400">Capacity</dt>
                  <dd className="font-semibold">{lift.capacity.replace(/\s*CAPACITY/i, "")}</dd>
                </div>
                <div>
                  <dt className="text-[10px] text-slate-400">Speed</dt>
                  <dd className="font-semibold">{formatSpeed(lift.speed)}</dd>
                </div>
              </dl>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default function Projects() {
  // Filters live in the URL (?type=industrial&drive=mrl&q=nikol) so links from the
  // home page — or a shared link — open the directory already filtered.
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const driveParam = searchParams.get("drive");
  const activeType = BUILDING_TYPES.some((t) => t.id === typeParam) ? typeParam : "all";
  const activeDrive = DRIVE_TYPES.some((d) => d.id === driveParam) ? driveParam : "all";
  const query = searchParams.get("q") || "";

  const setFilter = (key, value) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (!value || value === "all") next.delete(key);
        else next.set(key, value);
        return next;
      },
      { replace: true, preventScrollReset: true }
    );
  };
  const setActiveType = (id) => setFilter("type", id);
  const setActiveDrive = (id) => setFilter("drive", id);
  const setQuery = (text) => setFilter("q", text);

  const filtered = useMemo(
    () =>
      installations.filter(
        (c) =>
          (activeType === "all" || c.buildingType === activeType) &&
          (activeDrive === "all" || c.drives.includes(activeDrive)) &&
          matchesSearch(c, query)
      ),
    [activeType, activeDrive, query]
  );

  const hasFilters = activeType !== "all" || activeDrive !== "all" || query;

  const selectType = (id) => {
    setActiveType(id);
    document.getElementById("installations")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-50 space-y-12 sm:space-y-16 pb-4">
      <Seo
        title="Projects & Clients"
        description={`Krupa Elevators installation record — ${installationStats.projects} projects across ${installationStats.locations} locations: residential towers, temples, hospitals, bungalows, showrooms and factories in Gujarat and beyond.`}
      />

      <PageHero
        breadcrumbs={[{ label: "About", to: "/about" }, { label: "Projects & Clients" }]}
        icon={Building2}
        badge="Our Installation Record"
        title="Where Our Elevators Are Running"
        description="Residential towers in Ahmedabad, temples and yatrik bhavans across Gujarat, hospitals, private bungalows, showrooms and factories — these are the buildings our clients trust Krupa Elevators with."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center space-x-2"
            >
              <span>Book Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {/* <a
              href={companyData.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center space-x-2"
            >
              <Download className="w-4 h-4 text-brand-teal" />
              <span>Download Brochure</span>
            </a> */}
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Headline numbers */}
        <ScrollReveal direction="up" distance={15}>
          <dl className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl border border-slate-200 divide-x divide-y lg:divide-y-0 divide-slate-200">
            {[
              { label: "Projects completed", value: installationStats.projects },
              { label: "Towns & cities", value: installationStats.locations },
              { label: "States", value: installationStats.states },
              { label: "Building types", value: installationStats.byType.length },
            ].map((s) => (
              <div key={s.label} className="p-5 sm:p-6">
                <dd className="font-display text-3xl sm:text-4xl font-bold text-slate-900">{s.value}</dd>
                <dt className="text-xs text-slate-500 mt-1">{s.label}</dt>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        {/* Building types overview */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Applications</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Buildings We Have Equipped</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every building has different needs — heavy daily traffic in apartments, stretcher access in
              hospitals, large pilgrim crowds at temples, or a compact lift for a family home. Select a
              category to see the projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {installationStats.byType.map((t) => {
              const Icon = buildingTypeIcons[t.id] || Building2;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => selectType(t.id)}
                  className="group text-left p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-teal hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-display text-2xl font-bold text-slate-900">{t.projects.length}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                      {t.label}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {t.projects
                        .slice(0, 3)
                        .map((c) => c.clientName.replace(/\s*\(.*$/, "").replace(/\s*-\s*$/, ""))
                        .join(" · ")}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Full project directory */}
        <section id="installations" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Project Directory</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">All Installations</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full lg:w-auto">
              <label className="relative flex-1 sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search client, area, city or district"
                  className="w-full pl-10 pr-3 py-3 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-base sm:text-sm min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all"
                />
              </label>
              <select
                value={activeDrive}
                onChange={(e) => setActiveDrive(e.target.value)}
                className="w-full sm:w-auto px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-base sm:text-sm text-slate-700 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all"
              >
                <option value="all">All lift types</option>
                {DRIVE_TYPES.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Horizontally scrollable filter pills on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
            {[{ id: "all", short: "All", projects: installations }, ...installationStats.byType].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveType(t.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all shrink-0 min-h-[38px] flex items-center justify-center active:scale-95 cursor-pointer ${activeType === t.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                  }`}
              >
                {t.short} <span className="opacity-60 ml-1">({t.projects.length})</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing {filtered.length} of {installations.length} projects
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={() => setSearchParams({}, { replace: true, preventScrollReset: true })}
                className="inline-flex items-center gap-1 font-semibold text-brand-teal hover:text-teal-700"
              >
                <X className="w-3.5 h-3.5" />
                Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
              {filtered.map((client) => (
                <InstallationCard key={client.id} client={client} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-sm text-slate-500 bg-white rounded-2xl border border-slate-200">
              No projects match your search.
            </p>
          )}
        </section>
      </div>

      <CTASection contained
        title="Planning an Elevator for Your Building?"
        subtitle="Whether it is an apartment tower, a temple, a hospital or your own home, our team will survey the site and recommend the right lift for it."
        badge="Free Site Inspection"
      />
    </div>
  );
}
