import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Download,
  ArrowRight,
  MapPin,
  Search,
  Building2,
  X,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import { buildingTypeIcons } from "../components/common/InstallationsTeaser";
import { companyData } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/common/Seo";
import { absoluteUrl } from "../config/site";
import {
  installations,
  installationStats,
  clientShowcase,
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
    <article className="flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all overflow-hidden group">
      <header className="p-5 pb-4 space-y-3 border-b border-slate-100">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Icon className="w-3.5 h-3.5 text-brand-teal" />
            {typeLabel[client.buildingType]}
          </span>
          <span className="shrink-0 font-medium">
            {client.elevators.length} {client.elevators.length === 1 ? "lift" : "lifts"}
          </span>
        </div>

        <div className="flex items-start gap-3.5">
          {client.logo ? (
            <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-white border border-slate-200/90 p-1.5 shadow-2xs flex items-center justify-center overflow-hidden group-hover:border-brand-teal/40 transition-colors">
              <img
                src={client.logo}
                alt={client.logoAlt || `${client.clientName} logo - Krupa Elevators passenger lift installation in ${client.location}, Gujarat`}
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
              <Icon className="w-6 h-6 text-slate-400" />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-slate-900 leading-snug uppercase group-hover:text-brand-teal transition-colors">
              {client.clientName}
            </h3>
            <p className="inline-flex items-center gap-1 text-xs text-slate-500 mt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="capitalize">{client.location.toLowerCase()}</span>
              {client.state !== "Gujarat" && <span>, {client.state}</span>}
            </p>
          </div>
        </div>
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

  // Pagination states: default 12 cards per page (fast load & compact layout)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState("12"); // "12" | "24" | "all"

  // Reset to page 1 whenever any filter or page size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeType, activeDrive, query, pageSize]);

  const totalPages = useMemo(() => {
    if (pageSize === "all") return 1;
    return Math.max(1, Math.ceil(filtered.length / Number(pageSize)));
  }, [filtered.length, pageSize]);

  // Keep page within bounds if filter reduces total items
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const paginatedProjects = useMemo(() => {
    if (pageSize === "all") return filtered;
    const size = Number(pageSize);
    const start = (currentPage - 1) * size;
    return filtered.slice(start, start + size);
  }, [filtered, currentPage, pageSize]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    document.getElementById("installations")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectType = (id) => {
    setActiveType(id);
    setCurrentPage(1);
    document.getElementById("installations")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clientListSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Krupa Elevators - Client Installations & Landmark Projects",
      "description": `Comprehensive installation record of ${installationStats.projects} projects across ${installationStats.locations} towns and cities including Salangpur Hanumanji Mandir, Vadtal Dham, Joyalukkas, and major residential townships in Gujarat.`,
      "numberOfItems": installations.length,
      "itemListElement": installations.map((c, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "Place",
          "name": c.clientName,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": c.location,
            "addressRegion": c.state,
            "addressCountry": "IN",
          },
          ...(c.logo ? { "image": absoluteUrl(c.logo) } : {}),
        },
      })),
    }),
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 space-y-12 sm:space-y-16 pb-4">
      <Seo
        title="Elevator Installation Projects in Gujarat"
        description={`Krupa Elevators installation record — ${installationStats.projects} projects across ${installationStats.locations} locations: residential towers, temples, hospitals, bungalows, showrooms and factories in Gujarat and beyond.`}
        keywords="Krupa Elevators clients, elevator installations Ahmedabad, lift installation Gujarat, Salangpur mandir lift, Joyalukkas elevator, hospital lifts Gujarat, passenger elevator projects"
        schema={clientListSchema}
      />

      <PageHero
        breadcrumbs={[{ label: "About", to: "/about" }, { label: "Project Portfolio" }]}
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

        {/* Clients now have their own page */}
        <Link
          to="/clients"
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-teal hover:shadow-md transition-all"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Our Clients</span>
            <p className="mt-1 text-base sm:text-lg font-bold text-slate-900">
              Salangpur Hanumanji Mandir, Vadtal Dham, Joyalukkas and {clientShowcase.length - 3}+ more
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal shrink-0">
            See all client logos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

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
                id="project-drive-type"
                aria-label="Filter projects by elevator drive type"
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
                {t.short} <span className="ml-1 font-semibold opacity-80">({t.projects.length})</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 bg-white p-3.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3">
              <span>
                Showing {filtered.length === 0 ? 0 : (currentPage - 1) * Number(pageSize === "all" ? filtered.length : pageSize) + 1}–
                {pageSize === "all" ? filtered.length : Math.min(currentPage * Number(pageSize), filtered.length)} of {filtered.length} projects
                {filtered.length !== installations.length && ` (filtered from ${installations.length})`}
              </span>
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => setSearchParams({}, { replace: true, preventScrollReset: true })}
                  className="inline-flex items-center gap-1 font-semibold text-brand-teal hover:text-teal-700 ml-2"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear filters
                </button>
              )}
            </div>

            {/* Page Size View Switcher */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Per page:
              </span>
              {["12", "24", "all"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setPageSize(size)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    pageSize === size
                      ? "bg-brand-teal text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {size === "all" ? "All" : size}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
                {paginatedProjects.map((client) => (
                  <InstallationCard key={client.id} client={client} />
                ))}
              </div>

              {/* Numbered Pagination Nav */}
              {pageSize !== "all" && totalPages > 1 && (
                <nav
                  aria-label="Installation pagination"
                  className="pt-6 flex flex-wrap items-center justify-center gap-2"
                >
                  <button
                    type="button"
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:border-brand-teal hover:text-brand-teal disabled:opacity-40 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          currentPage === pageNum
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-white border border-slate-200 text-slate-600 hover:border-brand-teal hover:text-brand-teal"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:border-brand-teal hover:text-brand-teal disabled:opacity-40 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </nav>
              )}
            </>
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
