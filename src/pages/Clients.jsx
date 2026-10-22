import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import RelatedLinks from "../components/common/RelatedLinks";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/common/Seo";
import { absoluteUrl } from "../config/site";
import { clientShowcase, installationStats, BUILDING_TYPES } from "../utils/installations";

const typeLabel = Object.fromEntries(BUILDING_TYPES.map((t) => [t.id, t.short]));

// Best-known names, shown large at the top of the page.
const LANDMARK_IDS = [
  "shree-kashtbhanjan-dev-hanumanji-mandir-salangpur",
  "swaminarayan-mandir-vadtal",
  "joylukkas-showroom-cgroad",
  "shree-swaminarayan-mandir-chhapaiya",
  "kalrav-children-hospital-amreli",
  "vedam-international-school-vastral",
];
const landmarks = LANDMARK_IDS.map((id) => clientShowcase.find((c) => c.id === id)).filter(Boolean);

// Filter tabs in BUILDING_TYPES order, only for categories that have clients.
const tabs = [
  { id: "all", label: "All", count: clientShowcase.length },
  ...BUILDING_TYPES.map((t) => ({
    id: t.id,
    label: t.short,
    count: clientShowcase.filter((c) => c.category === t.id).length,
  })).filter((t) => t.count > 0),
];

const totalLifts = clientShowcase.reduce((n, c) => n + c.lifts, 0);

const projectsLink = (client) => `/about/projects?q=${encodeURIComponent(client.name)}#installations`;

function LiftCount({ lifts }) {
  if (!lifts) return null;
  return (
    <span>
      {lifts} {lifts === 1 ? "lift" : "lifts"}
    </span>
  );
}

function LandmarkCard({ client }) {
  return (
    <Link
      to={projectsLink(client)}
      rel="nofollow"
      className="group relative flex flex-col bg-white rounded-3xl border border-slate-200 hover:border-brand-teal hover:shadow-elevate-hover transition-all overflow-hidden"
    >
      <div className="h-28 sm:h-44 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-slate-50 to-white">
        <img
          src={client.src}
          alt={client.alt}
          width="200"
          height="128"
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5 pt-4 border-t border-slate-100 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
            {typeLabel[client.category]}
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900 leading-snug group-hover:text-brand-teal transition-colors">
            {client.name}
          </h3>
          <p className="mt-1.5 text-xs text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{client.location}</span>
            {client.lifts > 0 && <span aria-hidden="true">·</span>}
            <LiftCount lifts={client.lifts} />
          </p>
        </div>
        <ArrowUpRight className="w-5 h-5 shrink-0 text-slate-300 group-hover:text-brand-teal transition-colors" />
      </div>
    </Link>
  );
}

function ClientCard({ client }) {
  return (
    <li>
      <Link
        to={projectsLink(client)}
        rel="nofollow"
        title={`See Krupa Elevators installations at ${client.name}`}
        className="group h-full flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-brand-teal hover:shadow-md transition-all overflow-hidden"
      >
        <div className="h-28 flex items-center justify-center p-4">
          <img
            src={client.src}
            alt={client.alt}
            width="160"
            height="80"
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 px-4 py-3 border-t border-slate-100 space-y-1">
          <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-brand-teal transition-colors">
            {client.name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-1">{client.location}</p>
          <p className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
            <span className="text-brand-teal">{typeLabel[client.category]}</span>
            {client.lifts > 0 && <span aria-hidden="true">·</span>}
            <LiftCount lifts={client.lifts} />
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function Clients() {
  const [activeTab, setActiveTab] = useState("all");

  const visible = useMemo(
    () => (activeTab === "all" ? clientShowcase : clientShowcase.filter((c) => c.category === activeTab)),
    [activeTab]
  );

  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Krupa Elevators Clients",
      url: absoluteUrl("/clients"),
      description: `Temples, hospitals, retail brands, schools, factories and residential builders who chose Krupa Elevators for ${totalLifts}+ lifts.`,
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#organization") },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: clientShowcase.length,
        itemListElement: clientShowcase.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Organization",
            name: c.name,
            logo: absoluteUrl(c.logo),
            address: { "@type": "PostalAddress", addressLocality: c.location, addressCountry: "IN" },
          },
        })),
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 space-y-12 sm:space-y-16 pb-4">
      <Seo
        title="Our Clients & Projects | Krupa Elevators"
        description={`${clientShowcase.length}+ clients trust Krupa Elevators: Salangpur Hanumanji Mandir, Vadtal Dham, Joyalukkas, hospitals, schools, factories and residential towers across Gujarat.`}
        keywords="Krupa Elevators clients, elevator company clients Ahmedabad, Salangpur mandir lift, Vadtal Dham elevator, Joyalukkas lift, hospital elevator Gujarat, builder lift supplier Ahmedabad"
        schema={schema}
      />

      <PageHero
        breadcrumbs={[{ label: "Clients" }]}
        icon={Award}
        badge="Our Clients"
        title={`Trusted by ${clientShowcase.length}+ Clients Across Gujarat`}
        description="From pilgrimage trusts and children's hospitals to jewellery showrooms and residential towers, these are the organisations that chose Krupa Elevators to design, install and maintain their lifts."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* Headline numbers */}
        <ScrollReveal direction="up" distance={15}>
          <dl className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl border border-slate-200 divide-x divide-y lg:divide-y-0 divide-slate-200">
            {[
              { label: "Clients", value: `${clientShowcase.length}+` },
              { label: "Lifts installed for them", value: `${totalLifts}+` },
              { label: "Temples & trusts", value: tabs.find((t) => t.id === "religious")?.count ?? 0 },
              { label: "Towns & cities served", value: installationStats.locations },
            ].map((s) => (
              <div key={s.label} className="p-5 sm:p-6 flex flex-col-reverse">
                <dt className="text-xs text-slate-500 mt-1">{s.label}</dt>
                <dd className="font-display text-3xl sm:text-4xl font-bold text-slate-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        {/* Landmark clients */}
        <section className="space-y-6" aria-labelledby="landmark-clients">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Landmark Clients</span>
            <h2 id="landmark-clients" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Names Gujarat Knows
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pilgrimage sites that move thousands of devotees a day, a national jewellery brand, a children's
              hospital and a school: buildings where a lift simply has to work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {landmarks.map((c) => (
              <LandmarkCard key={c.id} client={c} />
            ))}
          </div>
        </section>

        {/* All clients */}
        <section id="all-clients" className="space-y-6 scroll-mt-24" aria-labelledby="all-clients-heading">
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Client Directory</span>
              <h2 id="all-clients-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Every Client, by Building Type
              </h2>
            </div>
            <div
              role="tablist"
              aria-label="Filter clients by building type"
              className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible"
            >
              {tabs.map((t) => {
                const active = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(t.id)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold border transition-colors min-h-[38px] ${active
                      ? "bg-slate-900 border-slate-900 text-white"
                      : "bg-white border-slate-200 text-slate-700 hover:border-brand-teal hover:text-brand-teal"
                      }`}
                  >
                    {t.label} <span className={active ? "text-teal-300" : "text-slate-500"}>{t.count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {visible.map((c) => (
              <ClientCard key={c.id} client={c} />
            ))}
          </ul>

          <p className="text-sm text-slate-600">
            Want lift-by-lift details (drive type, capacity, stops, speed)?{" "}
            <Link to="/about/projects" className="font-semibold text-brand-teal hover:underline inline-flex items-center gap-1">
              Browse the full project portfolio <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </section>

        <RelatedLinks
          title="Explore more"
          items={[
            { label: "Project Portfolio", description: "Every installation, with lift specifications", to: "/about/projects" },
            { label: "Elevator Models", description: "Passenger, home, hospital, goods & more", to: "/products/elevators" },
            { label: "AMC & Maintenance", description: "Keep your lifts running safely", to: "/services/amc-maintenance" },
          ]}
        />
      </div>

      <CTASection
        contained
        title="Join Our Client List"
        subtitle="Building a tower, temple, hospital or home? Get a free site survey and a factory-direct quotation from our Kathwada GIDC plant."
      />
    </div>
  );
}
