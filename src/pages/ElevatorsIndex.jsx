import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ArrowRight,
  Gauge,
  Users,
  Ruler,
  Tag,
  Factory,
  ShieldCheck,
  CheckCircle2,
  IndianRupee,
  HelpCircle,
  Sparkles
} from "lucide-react";
import { elevatorMaster } from "../data/elevatorMaster";
import { companyData } from "../data/companyData";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";

export default function ElevatorsIndex() {
  const elevatorListSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Affordable Elevator Models & Best Price Solutions in Ahmedabad",
        description:
          "Comprehensive catalog of certified passenger, home villa, capsule, hospital, freight, car, MRL, and hydraulic elevators manufactured by Krupa Elevators in Kathwada GIDC, Ahmedabad.",
        numberOfItems: elevatorMaster.length,
        itemListElement: elevatorMaster.map((elev, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: elev.seoName || elev.name,
          url: `https://www.krupaelevators.com/products/elevators/${elev.id}`
        }))
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
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Seo
        title="Affordable Elevators & Best Price Lifts in Ahmedabad"
        description="Explore 8 certified affordable elevator models with direct factory best price guarantee in Ahmedabad. Passenger, Home Villa, Capsule, Hospital, Goods, Car, MRL and Hydraulic lifts manufactured at Kathwada GIDC Works."
        keywords="best elevator company in Ahmedabad, affordable elevator solution, best price lift in Ahmedabad, elevator manufacturing plant Kathwada GIDC, passenger elevator best price, home lift Ahmedabad, goods lift Gujarat, MRL elevator manufacturer"
        schema={elevatorListSchema}
      />

      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Elevator Models & Best Prices" }
        ]}
        icon={Building2}
        badge="Best Price Direct from Kathwada Manufacturing Works, Ahmedabad"
        title="Affordable Elevators & Lift Models"
        description="From residential passenger elevators and luxury home villa lifts to heavy-tonnage industrial freight hoists, every Krupa elevator is manufactured in-house at Kathwada GIDC, Ahmedabad. Sourcing direct from the manufacturer saves 20% to 30% in dealer commissions with our 100% monopoly-free AMC guarantee."
        whatsappMessage="Hello Krupa Elevators Ahmedabad, I would like to inquire about affordable elevator solutions and request the best price quote."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        {/* Value Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-xs">
          <div className="flex items-center space-x-3 p-2">
            <Factory className="w-5 h-5 text-brand-orange shrink-0" />
            <div>
              <strong className="block font-bold text-slate-900">Direct Kathwada Plant</strong>
              <span className="text-slate-500">Zero middleman markup</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <Tag className="w-5 h-5 text-brand-teal shrink-0" />
            <div>
              <strong className="block font-bold text-slate-900">Best Price Guarantee</strong>
              <span className="text-slate-500">Transparent factory estimates</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
            <div>
              <strong className="block font-bold text-slate-900">100% Monopoly-Free</strong>
              <span className="text-slate-500">No locked passwords on AMC</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <Sparkles className="w-5 h-5 text-brand-teal shrink-0" />
            <div>
              <strong className="block font-bold text-slate-900">Tested Before Dispatch</strong>
              <span className="text-slate-500">Full-height safety testing</span>
            </div>
          </div>
        </div>

        {/* 8 Elevator Cards Grid */}
        <ScrollReveal direction="up" distance={20}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elevatorMaster.map((elev) => (
              <Link
                key={elev.id}
                to={`/products/elevators/${elev.id}`}
                className="group flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:border-brand-teal/60 transition-all duration-300"
              >
                <div className="relative h-52 bg-slate-950 overflow-hidden">
                  <img
                    src={elev.image}
                    alt={elev.seoName || elev.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Category & Best Price Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                      {elev.category}
                    </span>
                    <span className="bg-brand-orange/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black text-white shadow-xs">
                      Best Price
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block mb-0.5">
                      Affordable Solution
                    </span>
                    <h2 className="text-lg font-black leading-tight group-hover:text-teal-200 transition-colors">
                      {elev.name}
                    </h2>
                    <p className="text-[11px] text-slate-300 font-medium line-clamp-1">{elev.tagline}</p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Price Range Banner */}
                  <div className="p-3 rounded-2xl bg-teal-50/70 border border-teal-200/60 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-teal-800 tracking-wider block">
                        Estimated Factory Price
                      </span>
                      <strong className="text-slate-900 font-extrabold text-sm">
                        {elev.pricing?.priceRange || "Affordable Factory Rate"}
                      </strong>
                    </div>
                    <span className="text-[10px] font-bold text-teal-700 bg-white px-2 py-1 rounded-lg border border-teal-200 shadow-2xs">
                      Direct Factory
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {elev.standardSpecs?.capacity && (
                      <div className="flex items-start space-x-2 text-slate-600">
                        <Users className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-800">Capacity:</strong>{" "}
                          {elev.standardSpecs.capacity}
                        </span>
                      </div>
                    )}
                    {elev.standardSpecs?.ratedSpeed && (
                      <div className="flex items-start space-x-2 text-slate-600">
                        <Gauge className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-800">Speed:</strong>{" "}
                          {elev.standardSpecs.ratedSpeed}
                        </span>
                      </div>
                    )}
                    {elev.standardSpecs?.application && (
                      <div className="flex items-start space-x-2 text-slate-600">
                        <Building2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong className="text-slate-800">Application:</strong>{" "}
                          {elev.standardSpecs.application}
                        </span>
                      </div>
                    )}
                    {elev.standardSpecs?.pitDepth && (
                      <div className="flex items-start space-x-2 text-slate-600">
                        <Ruler className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-800">Pit Depth:</strong>{" "}
                          {elev.standardSpecs.pitDepth}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal group-hover:text-teal-700">
                    <span>View Specifications &amp; CAD Layout</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* SEO AUTHORITY SECTION: Why Krupa is #1 Best Elevator Company in Ahmedabad */}
        {/* ========================================================================= */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal">
              Ahmedabad Elevator Manufacturing Authority
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Krupa Elevators is the Best Elevator Company &amp; Manufacturing Plant in Ahmedabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When architects, developers, and homeowners search for an <strong>affordable elevator solution</strong> or the <strong>best price lift in Ahmedabad</strong>,
              they choose KRUPA ELEVATORS for our in-house engineering precision, direct factory transparency, and monopoly-free maintenance freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center font-black">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                Direct Kathwada Plant
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our plant in Kathwada GIDC Road No 5 houses CNC fiber laser cutting, precision press brakes, and a dynamic safety testing tower. No third-party trading, no middleman markups.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center font-black">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                Best Price Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                By purchasing direct from the manufacturer, clients save 20% to 30% on initial capital investment, plus up to 40% on annual electrical consumption using our PMS gearless machines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                100% Monopoly-Free AMC
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero password locks and open-protocol controllers. You are the true owner of your elevator, free to renew maintenance at honest, competitive market rates.
              </p>
            </div>
          </div>

          {/* Quick Price & Application Reference Table */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider font-mono">
              Quick Price &amp; Model Comparison Guide (Ahmedabad Direct Factory Rates)
            </h3>
            <p className="sm:hidden text-[11px] font-semibold text-brand-teal">Swipe the table sideways to see prices &rarr;</p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[720px] text-left text-xs text-slate-700">
                <thead className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Elevator Model</th>
                    <th className="py-3 px-4">Building Application</th>
                    <th className="py-3 px-4">Capacity Range</th>
                    <th className="py-3 px-4">Estimated Price</th>
                    <th className="py-3 px-4">Direct Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-sans">
                  {elevatorMaster.map((e) => (
                    <tr key={e.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        <Link to={`/products/elevators/${e.id}`} className="hover:text-brand-teal transition-colors flex items-center gap-1.5">
                          <span>{e.name}</span>
                          <ArrowRight className="w-3 h-3 text-brand-teal" />
                        </Link>
                      </td>
                      <td className="py-3 px-4">{e.category}</td>
                      <td className="py-3 px-4 font-mono">{e.standardSpecs?.capacity?.split("(")[0] || "Custom"}</td>
                      <td className="py-3 px-4 font-bold text-brand-teal">{e.pricing?.priceRange || "Affordable Direct Rate"}</td>
                      <td className="py-3 px-4 text-slate-500 font-medium">{e.pricing?.pricingBadge?.split("•")[0] || "Best Price Direct"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 font-mono text-right">
              *All prices are indicative direct factory estimates subject to site visits, stops/floors, speed, and finishes.
            </p>
          </div>
        </section>

        <CTASection
          title="Need Custom Hoistway Layouts or Non-Standard Dimensions?"
          subtitle="Our Ahmedabad engineering team creates bespoke AutoCAD GA drawings for narrow shafts, shallow pits, and high-tonnage cargo hoists with best price guarantee."
          badge="Direct Kathwada Engineering & CAD Team"
          variant="gradient"
        />
      </div>
    </div>
  );
}
