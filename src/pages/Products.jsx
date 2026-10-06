import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  DoorClosed,
  Sofa,
  Cpu,
  Compass,
  ArrowRight
} from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";

const PRODUCT_CATEGORIES = [
  {
    icon: Building2,
    title: "Elevator Models",
    description:
      "8 engineered elevator classes — Passenger, Capsule, Hospital, Goods, Car, MRL, Home & Hydraulic — each with full civil dimension tables, structural component breakdowns, and CAD hoistway drawings.",
    to: "/products/elevators",
    cta: "Browse Elevator Models"
  },
  {
    icon: DoorClosed,
    title: "Door Systems",
    description:
      "Manual and automatic entrance door systems — from collapsible lattice gates to VVVF-driven panoramic glass autodoors — engineered for safe, reliable operation.",
    to: "/products/doors",
    cta: "Explore Door Systems"
  },
  {
    icon: Sofa,
    title: "Interior Cabins",
    description:
      "11 cabin interior models spanning Basic, Standard, Semi Designer & Premium series — stainless steel finishes, mirror walls, and designer COP/LOP panels.",
    to: "/products/interiors",
    cta: "View Interior Cabins"
  },
  {
    icon: Cpu,
    title: "Technology & Drive Systems",
    description:
      "PMS gearless & geared traction machines, V3F inverter drives, microprocessor control panels, and the passenger safety ecosystem behind every installation.",
    to: "/products/technology",
    cta: "See Drive Technology"
  },
  {
    icon: Compass,
    title: "Architects & CAD Hub",
    description:
      "Civil shaft dimensions, CAD drawings, and engineering legends for every elevator class — organized for architects and structural engineers planning a hoistway.",
    to: "/products/architects-corner",
    cta: "Open CAD Hub"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Seo
        title="Products"
        description="Explore Krupa Elevators' full product range — passenger, capsule, hospital, goods, car, MRL, home & hydraulic elevators, door systems, interior cabins, drive technology, and the architects' CAD hub."
      />

      <PageHero
        breadcrumbs={[{ label: "Products" }]}
        icon={Building2}
        badge="Complete Product Catalogue"
        title="Elevators, Doors, Interiors & Drive Technology"
        description="Everything Krupa Elevators manufactures, organized in one place — engineered elevator classes, entrance door systems, cabin interior series, drive technology, and CAD resources for architects."
        whatsappMessage="Hello Krupa Elevators, I would like to consult regarding your product range."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        <ScrollReveal direction="up" distance={20}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.to}
                  to={cat.to}
                  className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-teal/60 transition-all"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-brand-teal transition-colors">
                      <Icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900">{cat.title}</h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="pt-5 flex items-center space-x-1.5 text-xs font-bold text-brand-teal">
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>

        <CTASection
          title="Need Custom Hoistway Layouts or Non-Standard Dimensions?"
          subtitle="Our engineering team creates bespoke AutoCAD GA drawings for narrow shafts, shallow pits, and high-tonnage cargo hoists."
          badge="Direct Engineering & CAD Team"
          variant="gradient"
        />
      </div>
    </div>
  );
}
