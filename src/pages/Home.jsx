import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Activity,
  Cpu,
  MapPin,
  Tag,
  Factory,
  Award,
  HelpCircle,
  IndianRupee,
  Plus,
  Minus,
  PhoneCall,
  MessageSquare
} from "lucide-react";
import { companyData, trustedSolutionSection } from "../data/companyData";
import { elevatorMaster } from "../data/elevatorMaster";
import { ahmedabadElevatorFaqs } from "../data/elevatorSeoData";
import ScrollReveal from "../components/ScrollReveal";
import { assetUrl, webpUrl } from "../utils/assetPath";
import Seo from "../components/common/Seo";
import CTASection from "../components/common/CTASection";
import LiftEstimatorWizard from "../components/LiftEstimatorWizard";
import OwnershipPolicySection from "../components/common/OwnershipPolicySection";
import InstallationsTeaser from "../components/common/InstallationsTeaser";

// Hero visual scenes with WebP primary and JPG fallback
const heroScenes = [
  {
    id: "building",
    tag: "High-Rise Residential & Commercial",
    title: "Passenger Elevators",
    subtitle: "High-speed passenger elevator with precision group dispatch and whisper-quiet PMSM drive",
    image: assetUrl("/assets/hero/building.webp"),
    fallbackImage: assetUrl("/assets/hero/building.jpg"),
    link: "/products/elevators"
  },
  {
    id: "villa",
    tag: "Private Luxury Villas & Bungalows",
    title: "Home Villa Lifts",
    subtitle: "Panoramic glass home lift with shallow 550mm pit and single-phase 220V power compatibility",
    image: assetUrl("/assets/generated/home-elevator.webp"),
    fallbackImage: assetUrl("/assets/generated/home-elevator.jpg"),
    link: "/products/elevators"
  },
  {
    id: "commercial",
    tag: "Commercial Atriums & Retail",
    title: "Capsule Elevators",
    subtitle: "High-impact panoramic glass capsule elevators with architectural exterior contours",
    image: assetUrl("/assets/generated/capsule-hero.webp"),
    fallbackImage: assetUrl("/assets/generated/capsule-hero.jpg"),
    link: "/products/elevators"
  },
  {
    id: "hospital",
    tag: "Healthcare & Critical Care",
    title: "Hospital Bed Elevators",
    subtitle: "Stretcher-friendly bed lifts with micro-leveling accuracy (±3mm) and priority medical recall",
    image: assetUrl("/assets/hero/hospital.webp"),
    fallbackImage: assetUrl("/assets/hero/hospital.jpg"),
    link: "/products/elevators"
  },
  {
    id: "car-park",
    tag: "Automotive & Parking Facilities",
    title: "Car Elevators & Parking",
    subtitle: "Heavy-capacity automotive vehicle lifts up to 4000 kg with dual-side cabin operating stations",
    image: assetUrl("/assets/hero/car-park.webp"),
    fallbackImage: assetUrl("/assets/hero/car-park.jpg"),
    link: "/products/elevators"
  },
  {
    id: "industrial",
    tag: "Industrial Logistics & Warehousing",
    title: "Goods & Freight Lifts",
    subtitle: "Rugged high-tonnage freight cargo lifts with reinforced steel sills and collapsible gates",
    image: assetUrl("/assets/hero/industrial.webp"),
    fallbackImage: assetUrl("/assets/hero/industrial.jpg"),
    link: "/products/elevators"
  }
];

export default function Home({ onOpenBrochure }) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [loadAllScenes, setLoadAllScenes] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [faqCategory, setFaqCategory] = useState("all");

  // Hero carousel timer — 5.5 s per slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroScenes.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Defer non-critical carousel slides until initial paint and LCP complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadAllScenes(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Enterprise Schema for LocalBusiness, ManufacturingPlant & FAQPage (Google Rich Snippets)
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ManufacturingBusiness"],
        "@id": "https://www.krupaelevators.com/#localbusiness",
        name: "KRUPA ELEVATORS",
        alternateName: [
          "Krupa Elevators Ahmedabad",
          "Best Elevator Company in Ahmedabad",
          "Krupa Elevator Manufacturing Plant Kathwada"
        ],
        description:
          "KRUPA ELEVATORS is the #1 best elevator company and premier manufacturing plant in Ahmedabad, Gujarat. Direct manufacturer of affordable passenger, home villa, capsule, hospital, goods, car, MRL, and hydraulic elevators with factory-direct best price guarantee and 100% monopoly-free AMC.",
        url: "https://www.krupaelevators.com/",
        telephone: "+918200859171",
        email: "info@krupaelevators.com",
        priceRange: "₹₹ (Affordable Direct Factory Best Price)",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1, Heritage Industrial Hub, Nr. Global Industrial Estate, Nr. Kotak Mahindra Bank, Kathwada GIDC Road No 5",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "382430",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.0338,
          longitude: 72.6738
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "09:00",
          closes: "20:00"
        },
        areaServed: [
          "Ahmedabad",
          "Gandhinagar",
          "Vadodara",
          "Surat",
          "Rajkot",
          "Gujarat",
          "India"
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "142"
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: ahmedabadElevatorFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      <Seo
        title="Best Elevator Company in Ahmedabad | Top Manufacturing Plant & Affordable Lifts"
        description="KRUPA ELEVATORS is the #1 best elevator company and premier manufacturing plant in Ahmedabad, Gujarat. Direct manufacturer of affordable passenger, home villa, capsule, hospital, goods, car, MRL and hydraulic elevators with factory-direct best price guarantee and 100% monopoly-free AMC."
        keywords="best elevator company in Ahmedabad, best manufacturing plant, affordable elevator solution, best price lift in Ahmedabad, elevator manufacturers in Ahmedabad, passenger elevator Ahmedabad best price, home lift Ahmedabad affordable, capsule elevator Gujarat, goods lift Kathwada GIDC, MRL elevator manufacturer, elevator AMC Ahmedabad"
        schema={homeSchema}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative w-full h-[calc(100vh-56px)] sm:h-[calc(100vh-60px)] min-h-[520px] sm:min-h-[580px] max-h-[850px] bg-slate-950 overflow-hidden flex items-center"
      >

        {/* ── Full-layer crossfade slides ────────────────────────────────────────
            Every slide is one absolute layer = image + gradient + text content.
            Only the active layer is opacity-1; all others opacity-0.
            Both image and text dissolve together for a seamless blend.          */}
        {heroScenes.map((scene, index) => {
          const isActive = index === currentHeroIndex;
          // Defer rendering non-active slides during initial paint to ensure instant LCP
          if (!loadAllScenes && index !== 0 && !isActive) {
            return null;
          }
          return (
            <div
              key={scene.id}
              className="absolute inset-0 flex items-center"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
                zIndex: isActive ? 10 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {/* Background image */}
              <picture className="absolute inset-0 w-full h-full">
                <source srcSet={scene.image} type="image/webp" />
                <img
                  src={scene.fallbackImage || scene.image}
                  alt={scene.title}
                  width="1376"
                  height="768"
                  fetchPriority={index === 0 ? "high" : "low"}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                  className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
                />
              </picture>

              {/* Dark gradient overlay — same as original */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />

              {/* Foreground text content — sits on top of the gradient */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8">
                <div className="max-w-[50rem] space-y-4 sm:space-y-5">

                  {/* Category tag & Rank #1 Trust Badge */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-brand-teal text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-orange flex-shrink-0" />
                      <span>{scene.tag}</span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      #1 Best Elevator Company in Ahmedabad
                    </span>
                  </div>

                  {/* Title + subtitle */}
                  <div className="space-y-2 sm:space-y-3">
                    <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                      {scene.title}
                    </h1>
                    <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl">
                      {scene.subtitle}. Engineered at our Kathwada GIDC manufacturing works in Ahmedabad with direct factory best price guarantee.
                    </p>
                  </div>

                  {/* Company info badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      { icon: ShieldCheck, text: "100% Monopoly-Free — No Lock-In", color: "text-brand-orange" },
                      { icon: Zap, text: "Up to 30% Energy Savings", color: "text-brand-teal" },
                      { icon: MapPin, text: "Ahmedabad — Direct Factory", color: "text-brand-orange" },
                    ].map(({ icon: Icon, text, color }) => (
                      <span
                        key={text}
                        className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold ${color} bg-slate-950/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full`}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {text}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <Link
                      to="/products/elevators"
                      className="w-full sm:w-auto justify-center px-5 py-3 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-teal/25 hover:shadow-brand-teal/40 transition-all flex items-center space-x-2 group text-center"
                    >
                      <span>Explore Elevators</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => {
                        document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full sm:w-auto justify-center px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all flex items-center space-x-2 cursor-pointer text-center"
                    >
                      <span>Submit Query / Get Quote</span>
                    </button>
                  </div>

                  {/* Trust strip */}
                  <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-slate-400 font-medium">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-teal shrink-0" />
                      <span>Direct Kathwada Plant</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange shrink-0" />
                      <span>24/7 Breakdown Service</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-teal shrink-0" />
                      <span>Turnkey Installation</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* ── Progress bar — refills over 5.5 s, resets when index changes ───── */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/10">
          <div
            key={currentHeroIndex}
            className="h-full bg-brand-teal origin-left"
            style={{ animation: "hero-progress 5.5s linear forwards" }}
          />
        </div>

        {/* ── Navigation dots (with touch-friendly tap targets) ────────────────── */}
        <div className="absolute bottom-3 left-0 right-0 z-30 flex justify-center items-center space-x-1">
          {heroScenes.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setCurrentHeroIndex(idx)}
              className="p-2 transition-all cursor-pointer focus:outline-none"
              title={scene.title}
              aria-label={`Go to ${scene.title}`}
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${idx === currentHeroIndex
                  ? "w-7 bg-brand-teal shadow-xs"
                  : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT TEASER — condensed; full depth lives on /about                   */}
      {/* ========================================================================= */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal">
              ARCHITECTURAL SPECIFICATION & OVERVIEW
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
            <span className="hidden sm:flex items-center space-x-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>Kathwada Works, Ahmedabad</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08]">
              {trustedSolutionSection.heading}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Pioneering precision vertical transportation engineered for seamless integration across contemporary residential towers and commercial infrastructures.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-teal hover:text-teal-700 group"
            >
              <span>Learn more about us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Architectural Pull Quote */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l-2 border-brand-teal">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-brand-teal" />
            </div>
            <p className="text-lg sm:text-2xl text-slate-800 font-light italic leading-relaxed tracking-tight">
              "{trustedSolutionSection.quote}"
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-mono">
              <span className="font-bold text-brand-teal tracking-wider">KRUPA ELEVATORS DIRECTIVE</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-slate-600">Unified Form & Architectural Function</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-slate-600">Zero Middleman Markup</span>
            </div>
          </div>
        </div>

        {/* Compact 4-Pillar Strip */}
        <div className="border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-1.5">
          {companyData.pillars.map((pillar, idx) => (
            <div key={pillar.title} className="p-3 lg:p-6 space-y-2 group transition-all duration-300 hover:bg-slate-50/60">
              <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-brand-teal transition-colors">
                0{idx + 1}
              </span>
              <h3 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2B. AHMEDABAD MARKET LEADERSHIP & BEST MANUFACTURING PLANT                */}
      {/* ========================================================================= */}
      <section id="ahmedabad-authority" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 shrink-0" />
                <span>Ranked #1 Elevator Company in Ahmedabad, Gujarat</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Gujarat's Premier Elevator Manufacturing Plant &amp; Affordable Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Headquartered in <strong>Kathwada GIDC, Ahmedabad</strong> (1, Heritage Industrial Hub), KRUPA ELEVATORS combines European engineering precision with transparent direct factory pricing. We eliminate distributor markups and third-party trader margins, delivering the <strong>most affordable elevator solutions at guaranteed best prices</strong> across Ahmedabad, Gandhinagar, Vadodara, and throughout India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors">
                <Factory className="w-6 h-6 text-brand-orange" />
                <h3 className="text-base font-bold text-white">Kathwada Plant</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In-house CNC fiber laser cutting, precision bending, and 100% component bench testing before dispatch.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors">
                <Tag className="w-6 h-6 text-brand-teal" />
                <h3 className="text-base font-bold text-white">Best Price Guarantee</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct manufacturer rates save 20% to 30% upfront. High-efficiency PMS gearless drives save up to 40% power.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors">
                <ShieldCheck className="w-6 h-6 text-brand-orange" />
                <h3 className="text-base font-bold text-white">100% Monopoly-Free</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Open-protocol non-proprietary controllers. Zero locked service passwords, saving ₹25k–₹50k yearly on AMC.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors">
                <MapPin className="w-6 h-6 text-brand-teal" />
                <h3 className="text-base font-bold text-white">30-Min Rapid Service</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated 24/7 technical breakdown response teams on ground across Ahmedabad, Gandhinagar, and Sanand.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/products/elevators"
                className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Browse All 8 Elevator Models with Prices</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all"
              >
                Request Free Hoistway AutoCAD Drawing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR ELEVATOR SECTION (Client-Friendly & Minimal)                       */}
      {/* ========================================================================= */}
      <section id="our-elevators-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
              Architectural Mobility Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Elevator Solutions for Every Building
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Engineered for whisper-quiet ride comfort, high energy savings, and reliable daily operation across residential, commercial, medical, and industrial spaces.
            </p>
          </div>
          <Link
            to="/products/elevators"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore All 8 Elevator Models</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Curated Client-Focused Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: "passenger",
              name: "Passenger Elevators",
              tag: "Residential & Commercial",
              desc: "Smooth, silent, and energy-efficient vertical mobility tailored for apartments, offices, and hotels.",
              image: elevatorMaster.find((e) => e.id === "passenger")?.image || "/assets/elevators/passenger_elevator.jpg",
              highlight: "Whisper-quiet ride & smooth leveling",
              price: elevatorMaster.find((e) => e.id === "passenger")?.pricing?.priceRange || "From ₹3,75,000*"
            },
            {
              id: "capsule",
              name: "Capsule Elevators",
              tag: "Architectural Landmark",
              desc: "Futuristic curved glass panoramic cabins offering 360-degree views in atriums, malls, and luxury resorts.",
              image: elevatorMaster.find((e) => e.id === "capsule")?.image || "/assets/elevators/capsule_elevator.jpg",
              highlight: "Panoramic 360° glass aesthetics",
              price: elevatorMaster.find((e) => e.id === "capsule")?.pricing?.priceRange || "From ₹6,50,000*"
            },
            {
              id: "hospital",
              name: "Hospital Bed Elevators",
              tag: "Medical & Stretcher",
              desc: "Spacious cabins with antibacterial wall protection, wide doors, and emergency medical priority features.",
              image: elevatorMaster.find((e) => e.id === "hospital")?.image || "/assets/elevators/hospital_elevator.jpg",
              highlight: "Extra-deep cabins & jerk-free transit",
              price: elevatorMaster.find((e) => e.id === "hospital")?.pricing?.priceRange || "From ₹5,50,000*"
            },
            {
              id: "goods",
              name: "Goods & Freight Hoists",
              tag: "Industrial Logistics",
              desc: "Rugged structural steel cabins built to handle heavy cargo, forklift loading, and industrial logistics.",
              image: elevatorMaster.find((e) => e.id === "goods")?.image || "/assets/elevators/goods_elevator.jpg",
              highlight: "Heavy payload up to 5000 kg",
              price: elevatorMaster.find((e) => e.id === "goods")?.pricing?.priceRange || "From ₹4,25,000*"
            }
          ].map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 35}
              distance={15}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-48 bg-slate-950 relative overflow-hidden">
                    <picture className="w-full h-full block">
                      <source srcSet={webpUrl(item.image)} type="image/webp" />
                      <img
                        src={item.image}
                        alt={item.name}
                        width="400"
                        height="192"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-teal-300 border border-slate-700">
                      {item.tag}
                    </div>
                    <div className="absolute top-3 right-3 bg-brand-orange/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-black text-white uppercase tracking-wider">
                      Best Price
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold drop-shadow-sm">
                      {item.highlight}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-teal block">
                        Affordable Solution
                      </span>
                      <h3 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-700 border-t border-slate-100">
                      <span className="text-slate-500 font-normal">Factory Estimate:</span>
                      <span className="text-brand-teal">{item.price}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/products/elevators/${item.id}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 text-slate-700 group-hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>View Specifications & Layouts</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERIOR SECTION (Client-Friendly & Minimal)                           */}
      {/* ========================================================================= */}
      <section id="interior-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
              Architectural Aesthetics
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Cabin Interior Series
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transform every vertical journey into an experience of luxury and comfort with stainless steel, warm LED ceilings, and titanium finishes.
            </p>
          </div>
          <Link
            to="/products/interiors"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore All Cabin Collections</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Curated Cabin Series */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              targetHash: "basic-series-section",
              model: "Basic Series (KEC-01)",
              series: "Basic Series",
              image: assetUrl("/assets/interiors/kec-01.jpg"),
              desc: "Hairline stainless steel with full-width rear mirror that visually amplifies interior cabin space.",
              features: "S.S. Hairline • Full Rear Mirror • LED Ceiling"
            },
            {
              targetHash: "standard-series-section",
              model: "Standard Series (KEC-02)",
              series: "Standard Series",
              image: assetUrl("/assets/interiors/kec-02.jpg"),
              desc: "Active cross-flow blower fan built into the ceiling with half-mirror and wrap-around grab bars.",
              features: "Built-In Blower Fan • Half-Mirror • Ergonomic Grab Bar"
            },
            {
              targetHash: "semi-series-section",
              model: "Semi Designer (KEC-03)",
              series: "Semi Designer",
              image: assetUrl("/assets/interiors/kec-03.jpg"),
              desc: "Warm titanium gold finishes paired with elegant gold ceiling diffusers and classic marble-textured flooring.",
              features: "Titanium Gold Insets • Marble PVC • Ambient Glow"
            },
            {
              targetHash: "premium-series-section",
              model: "Premium Series (KEC-10)",
              series: "Premium Series",
              image: assetUrl("/assets/interiors/kec-10.jpg"),
              desc: "Flagship luxury featuring titanium gold mirror panels, backlit acrylic sky ceiling, and geometric floor medallion.",
              features: "Acrylic Skylight • Titanium Mirror • Ornate Marble"
            }
          ].map((item, idx) => (
            <ScrollReveal
              key={item.model}
              direction="up"
              delay={idx * 35}
              distance={15}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-56 bg-slate-950 relative overflow-hidden">
                    <picture className="w-full h-full block">
                      <source srcSet={webpUrl(item.image)} type="image/webp" />
                      <img
                        src={item.image}
                        alt={item.model}
                        width="400"
                        height="224"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </picture>
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-slate-900 border border-slate-200 shadow-xs">
                      {item.series}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                      {item.model}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-brand-teal">
                      {item.features}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/products/interiors#${item.targetHash}`}
                    className="w-full flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-50 group-hover:bg-slate-900 text-slate-700 group-hover:text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>View Cabin Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGY & MECHANISMS SECTION (Client-Friendly & Minimal)            */}
      {/* ========================================================================= */}
      <section id="mechanisms-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
              Advanced Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Technology, Safety & Control Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Powered by German-engineered V3F vector drives, energy-saving PMSM motors, and comprehensive fail-safe passenger protection.
            </p>
          </div>
          <Link
            to="/products/technology"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore Technology & Control Systems</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Minimal Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Permanent Magnet PMSM Motor",
              category: "Green Drive",
              targetHash: "drive-systems-section",
              desc: "Eco-friendly gearless drive consuming up to 40% less electrical power with whisper-quiet, frictionless operation.",
              benefit: "40% Energy Savings & Zero Lubrication",
              icon: Zap
            },
            {
              title: "Microprocessor V3F Inverter",
              category: "Intelligent Motion",
              targetHash: "inverter-section",
              desc: "Closed-loop vector inverter providing smooth jerk-free S-curve acceleration and millimeter-level landing accuracy.",
              benefit: "Ultra-Smooth Ride & Precision Leveling",
              icon: Cpu
            },
            {
              title: "Multi-Beam Light Curtain",
              category: "Passenger Safety",
              targetHash: "safety-section",
              desc: "Over 128 non-contact infrared beams spanning floor to ceiling that instantly reopen doors before any physical touch.",
              benefit: "100% Non-Contact Passenger Protection",
              icon: ShieldCheck
            },
            {
              title: "Automatic Rescue Device (ARD)",
              category: "Emergency Evacuation",
              targetHash: "safety-section",
              desc: "Intelligent battery backup that automatically navigates the elevator to the nearest landing during power outages.",
              benefit: "Automatic Power-Failure Rescue",
              icon: Activity
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                direction="up"
                delay={idx * 35}
                distance={15}
                className="h-full"
              >
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full group">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                        {pillar.category}
                      </span>
                      <h3 className="text-base font-black text-slate-900 mt-0.5">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <Link
                    to={`/products/technology#${pillar.targetHash}`}
                    className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-brand-teal group-hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    <span>{pillar.benefit}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INSTALLATIONS — proof; full directory lives on /about/projects         */}
      {/* ========================================================================= */}
      <section id="installations-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstallationsTeaser />
      </section>

      {/* ========================================================================= */}
      {/* 7. MONOPOLY-FREE OWNERSHIP PROMISE — after-sales assurance                */}
      {/* ========================================================================= */}
      <section id="ownership-promise" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <OwnershipPolicySection />
      </section>

      {/* ========================================================================= */}
      {/* 8. INTERACTIVE 60-SECOND LIFT ESTIMATOR WIZARD                            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiftEstimatorWizard onOpenBrochure={onOpenBrochure} />
      </section>

      {/* ========================================================================= */}
      {/* 8B. FREQUENTLY ASKED QUESTIONS — ELEVATOR PRICES & COMPANY IN AHMEDABAD   */}
      {/* ========================================================================= */}
      <section id="home-faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions &amp; Knowledge Base
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Elevator Prices &amp; Manufacturing in Ahmedabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clear, transparent answers from our Kathwada GIDC factory desk regarding lift costs, customized hoistway layouts, and open-protocol AMC.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-teal hover:text-teal-700 transition-colors shrink-0 group"
          >
            <span>Ask our technical engineers directly</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2-Column Brand Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Context & Quick Engineering Assist Card */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white p-6 sm:p-7 border border-slate-800 shadow-xl relative overflow-hidden space-y-5">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-teal/15 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-teal/20 text-teal-300 text-[10px] font-bold uppercase tracking-wider border border-brand-teal/30">
                  <Factory className="w-3 h-3 text-brand-orange" />
                  Direct Plant Support
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  Have a custom building layout or question?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our Kathwada plant design engineers provide complimentary AutoCAD hoistway GA drawings and load calculations within 24 hours.
                </p>
              </div>

              <div className="space-y-2.5 relative z-10 pt-2">
                <a
                  href="tel:+918200859171"
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-teal/20"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Desk: +91 82008 59171</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
                    "Hello Krupa Elevators, I have a technical question regarding elevator specifications for my building in Ahmedabad."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Technical Consultation</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 space-y-1 relative z-10">
                <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Kathwada GIDC Plant, Ahmedabad</span>
                </div>
                <p className="text-[10px] text-slate-400 pl-5">
                  1, Heritage Industrial Hub, Kathwada Road No 5
                </p>
              </div>
            </div>

            {/* Quick Feature Trust Checklist */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5 text-xs text-slate-700">
              <div className="font-bold text-slate-900 pb-1 border-b border-slate-100 flex items-center justify-between">
                <span>The Krupa Advantage</span>
                <span className="text-[10px] font-mono text-brand-teal uppercase">Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Direct factory best price (Save 20–30%)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>100% Monopoly-Free — No locked controllers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                <span>24/7 Breakdown desk with 30-min response</span>
              </div>
            </div>
          </div>

          {/* Right Column: Category Filters & Modern Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pb-2">
              {[
                { id: "all", label: "All Questions" },
                { id: "pricing", label: "Pricing & Savings" },
                { id: "plant", label: "Kathwada Plant" },
                { id: "support", label: "AMC & Service" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFaqCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    faqCategory === cat.id
                      ? "bg-brand-teal text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Accordion Items */}
            <div className="space-y-3">
              {ahmedabadElevatorFaqs
                .map((faq, originalIndex) => ({ ...faq, originalIndex }))
                .filter((faq) => {
                  if (faqCategory === "all") return true;
                  if (faqCategory === "pricing") return [2, 3, 4].includes(faq.originalIndex);
                  if (faqCategory === "plant") return [0, 1].includes(faq.originalIndex);
                  if (faqCategory === "support") return [4, 5].includes(faq.originalIndex);
                  return true;
                })
                .map((faq) => {
                  const isOpen = activeFaq === faq.originalIndex;
                  const itemNumber = String(faq.originalIndex + 1).padStart(2, "0");

                  return (
                    <div
                      key={faq.originalIndex}
                      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "border-brand-teal/50 shadow-md ring-1 ring-brand-teal/20"
                          : "border-slate-200/90 hover:border-slate-300 shadow-xs"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? -1 : faq.originalIndex)}
                        className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 sm:gap-4 transition-colors cursor-pointer group"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.originalIndex}`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isOpen
                                ? "bg-brand-teal text-white"
                                : "bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-brand-teal"
                            }`}
                          >
                            {itemNumber}
                          </span>
                          <h3
                            className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                              isOpen ? "text-brand-teal" : "text-slate-900 group-hover:text-brand-teal"
                            }`}
                          >
                            {faq.q}
                          </h3>
                        </div>
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                            isOpen
                              ? "bg-brand-teal/10 text-brand-teal rotate-180"
                              : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Smooth CSS Grid Expand/Collapse */}
                      <div
                        id={`faq-answer-${faq.originalIndex}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-12 sm:pl-15 pr-4 sm:pr-6 pb-5 pt-1 space-y-3">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {faq.a}
                            </p>
                            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                              <span>KRUPA ELEVATORS AHMEDABAD</span>
                              <span className="inline-flex items-center gap-1 text-brand-teal font-semibold">
                                <CheckCircle2 className="w-3 h-3" />
                                Verified Technical FAQ
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. GET A QUOTE — short prompt, full inquiry form lives on /contact        */}
      {/* ========================================================================= */}
      <section id="cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <CTASection
          title="Discuss Your Elevator Requirement"
          subtitle="Share your building parameters with our engineering team for a complimentary AutoCAD General Arrangement (GA) hoistway layout, structural load calculation, and turnkey quotation."
        />
      </section>

      {/* ========================================================================= */}
      {/* 10. FOOTER SECTION (Rendered in App.jsx layout)                          */}
      {/* ========================================================================= */}
    </div>
  );
}
