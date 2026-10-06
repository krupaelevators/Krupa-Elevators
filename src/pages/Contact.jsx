import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Download,
  Factory,
  MessageSquare,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Lock
} from "lucide-react";
import { companyData } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/common/PageHero";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import Seo from "../components/common/Seo";

export default function Contact({ onOpenBrochure }) {
  const location = useLocation();
  const [decodedInquiry, setDecodedInquiry] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    buildingType: "Residential Apartment",
    floors: "4 to 7 Floors",
    capacity: "6 to 8 Passengers (408 - 544 kg)",
    doorType: "Automatic Center Opening",
    city: "Ahmedabad",
    message: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token") || params.get("spec");
    if (token) {
      try {
        const jsonStr = decodeURIComponent(escape(atob(token)));
        const data = JSON.parse(jsonStr);
        setDecodedInquiry(data);
        if (data.application) {
          setFormData((prev) => ({
            ...prev,
            buildingType: data.application,
            floors: data.floors || prev.floors,
            capacity: data.capacity || prev.capacity,
            message: `[Decoded Inquiry Ref: ${data.inquiryId}] Shaft: ${data.hoistwayClear}, Car: ${data.internalCar}, Pit: ${data.pitDepth}, OH: ${data.overheadClearance}, Aesthetic: ${data.aesthetic}`
          }));
        }
      } catch (err) {
        console.warn("Unable to decode token:", err);
      }
    }
  }, [location.search]);

  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inquiryRef =
      decodedInquiry?.inquiryId ||
      `KE-INQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const messageLines = [
      `*KRUPA ELEVATORS — NEW TECHNICAL INQUIRY*`,
      `*Reference ID:* ${inquiryRef}`,
      `*Date:* ${new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}`,
      ``,
      `👤 *CLIENT DETAILS*`,
      `• *Name:* ${formData.name}`,
      `• *Phone:* ${formData.phone}`,
      formData.email ? `• *Email:* ${formData.email}` : null,
      formData.city ? `• *City / Location:* ${formData.city}` : null,
      ``,
      `🏢 *PROJECT SPECIFICATIONS*`,
      `• *Building Category:* ${formData.buildingType}`,
      `• *Floors / Stops:* ${formData.floors}`,
      `• *Passenger Capacity:* ${formData.capacity}`,
      `• *Door System:* ${formData.doorType}`,
    ];

    if (formData.message && formData.message.trim()) {
      messageLines.push(
        ``,
        `📝 *PROJECT REMARKS / ARCHITECTURAL CONSTRAINTS*`,
        formData.message.trim()
      );
    }

    if (decodedInquiry) {
      messageLines.push(
        ``,
        `📐 *ATTACHED SPECIFICATION DETAILS (${decodedInquiry.inquiryId})*`,
        `• *Shaft Clear (W x D):* ${decodedInquiry.hoistwayClear || "Standard"}`,
        `• *Internal Car (W x D):* ${decodedInquiry.internalCar || "Standard"}`,
        `• *Pit Depth:* ${decodedInquiry.pitDepth || "Standard"}`,
        `• *Overhead Clearance:* ${decodedInquiry.overheadClearance || "Standard"}`,
        decodedInquiry.aesthetic ? `• *Aesthetic Finish:* ${decodedInquiry.aesthetic}` : null,
        decodedInquiry.motor ? `• *Drive Motor:* ${decodedInquiry.motor}` : null,
        decodedInquiry.power ? `• *Power Supply:* ${decodedInquiry.power}` : null
      );
    }

    messageLines.push(
      ``,
      `----------------------------------------`,
      `_Sent via Krupa Elevators Web Inquiry Portal_`
    );

    const messageText = messageLines.filter(Boolean).join("\n");
    const targetUrl = `https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(messageText)}`;

    setSubmissionData({
      ref: inquiryRef,
      messageText,
      targetUrl,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      buildingType: formData.buildingType,
      floors: formData.floors,
      capacity: formData.capacity,
      doorType: formData.doorType,
      message: formData.message,
    });

    setFormSubmitted(true);

    // Asynchronous background email backup via FormSubmit without blocking UI
    try {
      fetch(`https://formsubmit.co/ajax/${companyData.contacts.emailSales}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[NEW TECHNICAL INQUIRY] Ref: ${inquiryRef} - ${formData.name}`,
          inquiryReference: inquiryRef,
          ...formData,
          decodedInquiry: decodedInquiry || null,
        }),
      }).catch(() => { });
    } catch (_) { }

    // Open WhatsApp
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const faqs = [
    {
      q: "Can KRUPA elevators run on domestic single-phase electrical supply?",
      a: "Yes! Our Home Elevator range is specifically engineered with high-efficiency mini gearless PMS drives designed to operate seamlessly on single-phase 220V domestic power, eliminating the need for expensive commercial three-phase substation connections."
    },
    {
      q: "What are the minimal pit and overhead clearances required?",
      a: "For our compact Home Lifts, the required pit depth is just 550 mm and overhead is 3100 mm. For standard commercial and residential passenger lifts, standard pit depth is 1600 mm and overhead clearance is 4900 to 5185 mm as outlined in our technical specification tables."
    },
    {
      q: "What safety systems protect passengers during power grid blackouts?",
      a: "Every KRUPA elevator can be equipped with an Automatic Rescue Device (ARD/ERD) powered by sealed maintenance-free batteries. During utility outages, the ARD automatically takes over, drives the elevator smoothly to the closest floor, and opens the car doors to let passengers exit safely."
    },
    {
      q: "Where are KRUPA elevators manufactured?",
      a: "Our advanced manufacturing facility is located at 1, Heritage Industrial Hub, Nr. Global Industrial Estate, Nr. Kotak Mahindra Bank, Kathwada GIDC Road No 5, Ahmedabad-382430. All structural frames, car sling assemblies, and electrical control cabinets undergo stringent testing before site delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Seo
        title="Get Best Price Elevator Quote | Best Elevator Company in Ahmedabad"
        description="Contact Krupa Elevators — rated #1 best elevator company in Ahmedabad. Request a free site survey, custom AutoCAD hoistway layout, or affordable elevator quotation direct from our Kathwada manufacturing plant."
        keywords="best elevator company in Ahmedabad, elevator quotation Ahmedabad, affordable elevator solution, best price lift in Ahmedabad, elevator contact Kathwada GIDC"
      />

      {/* Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        icon={Phone}
        badge="Direct Factory, Ahmedabad"
        title="Let's Plan Your Elevator Solution"
        description="Reach our manufacturing facility in Ahmedabad, Gujarat. Speak with our application engineers for custom architectural CAD assistance, site surveys, or immediate quotation requests."
      />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Facilities & Quick Contacts Cards */}
        <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Facilities & Quick Contacts
          </span>
          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:text-teal-700"
          >
            <span>View full company & facilities info</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Manufacturing Works — compact; full facility detail lives on /about */}
          <ScrollReveal direction="up" distance={18} delay={60} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-lg transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-brand-teal-light text-brand-teal flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <strong className="text-sm font-black text-slate-900 block">{companyData.contacts.factory.title}</strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                {companyData.contacts.factory.address}
              </p>
              <a
                href={`tel:${companyData.contacts.phoneRaw}`}
                className="block text-xs font-bold text-slate-800 hover:text-brand-teal"
              >
                {companyData.contacts.phone}
              </a>
            </div>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
              Visitors welcome by appointment
            </div>
          </ScrollReveal>

          {/* Phone & WhatsApp */}
          <ScrollReveal direction="up" distance={18} delay={120} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <strong className="text-sm font-black text-slate-900 block">Phone & Direct Contact</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our engineering coordinators for quick dimensional inquiries and price estimates.
              </p>
              <div className="space-y-1.5 text-xs pt-1">
                <a
                  href={`tel:${companyData.contacts.phoneRaw}`}
                  className="block font-black text-sm text-slate-900 hover:text-brand-orange transition-colors"
                >
                  {companyData.contacts.phone}
                </a>
                <span className="text-[11px] text-slate-400 block">24/7 Breakdown: +91 82008 59171</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href={`https://wa.me/${companyData.contacts.whatsapp}?text=Hi%20KRUPA%20Elevators%2C%20I%20would%20like%20to%20inquire%20about%20your%20elevators.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Email & Inquiries */}
          <ScrollReveal direction="up" distance={18} delay={180} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <strong className="text-sm font-black text-slate-900 block">Corporate Email Desk</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send structural CAD drawings, tender specifications, and architectural requirements to our team.
              </p>
              <div className="space-y-1 text-xs pt-1">
                <a
                  href={`mailto:${companyData.contacts.emailPrimary}`}
                  className="block text-slate-800 font-bold hover:text-brand-teal truncate"
                >
                  {companyData.contacts.emailPrimary}
                </a>
                <a
                  href={`mailto:${companyData.contacts.emailSales}`}
                  className="block text-slate-600 hover:text-brand-teal truncate"
                >
                  {companyData.contacts.emailSales}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href={companyData.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
              >
                <Download className="w-4 h-4 text-brand-teal" />
                <span>Download PDF Brochure</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
        </div>

        {/* INQUIRY FORM & SITE VISIT REQUEST */}
        <ScrollReveal direction="up" distance={20} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 lg:p-10 rounded-3xl border border-slate-200 shadow-lg space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
                Direct Quotation
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 mt-1">
                Request a Project Quote &amp; Site Survey
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the technical requirements below and our sales engineering division will provide a comprehensive proposal.
              </p>
            </div>

            {/* Decoded WhatsApp Token Specifications Banner */}
            {decodedInquiry && (
              <div className="p-4 rounded-2xl bg-teal-50/90 border border-teal-200 text-teal-950 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-teal" />
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-900">
                      Decoded WhatsApp Specification ({decodedInquiry.inquiryId})
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-200/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Verified Token
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs pt-1 border-t border-teal-200/60">
                  <div>
                    <span className="text-[10px] text-teal-700 block">Category:</span>
                    <strong className="text-teal-950">{decodedInquiry.application}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-teal-700 block">Stops / Floors:</span>
                    <strong className="text-teal-950">{decodedInquiry.floors}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-teal-700 block">Capacity:</span>
                    <strong className="text-teal-950">{decodedInquiry.capacity}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-teal-700 block">Shaft Size (W x D):</span>
                    <strong className="text-teal-950">{decodedInquiry.hoistwayClear}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-teal-700 block">Pit / Overhead:</span>
                    <strong className="text-teal-950">{decodedInquiry.pitDepth} / {decodedInquiry.overheadClearance}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-teal-700 block">Aesthetic Finish:</span>
                    <strong className="text-teal-950">{decodedInquiry.aesthetic}</strong>
                  </div>
                </div>
              </div>
            )}

            {formSubmitted && submissionData ? (
              <div className="p-5 sm:p-8 rounded-3xl bg-emerald-50/90 border border-emerald-200 text-emerald-950 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
                  <WhatsAppIcon className="w-9 h-9 text-white" />
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full inline-block mb-2">
                    Inquiry Ref: {submissionData.ref}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-slate-900">
                    Inquiry Ready to Send to WhatsApp!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed mt-2">
                    Thank you, <strong className="text-slate-900">{submissionData.name}</strong>. WhatsApp has been opened with your complete project details for <strong className="text-slate-900">{submissionData.buildingType}</strong>.
                  </p>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="max-w-md mx-auto space-y-2.5 pt-1">
                  <a
                    href={submissionData.targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer min-h-[48px]"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span>Open Chat in WhatsApp ({companyData.contacts.whatsapp})</span>
                  </a>
                  <p className="text-[11px] text-slate-500">
                    If WhatsApp did not launch automatically, tap the green button above to deliver your message.
                  </p>
                </div>

                {/* Summary of what was sent */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-emerald-200/80 text-left text-xs text-slate-700 max-w-md mx-auto space-y-2 shadow-xs">
                  <div className="font-bold text-slate-900 border-b border-slate-100 pb-2 mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Form Details Transmitted
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{submissionData.ref}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500 block text-[10.5px]">Client:</span>
                      <strong>{submissionData.name}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10.5px]">Phone:</span>
                      <strong>{submissionData.phone}</strong>
                    </div>
                    {submissionData.email && (
                      <div>
                        <span className="text-slate-500 block text-[10.5px]">Email:</span>
                        <span className="truncate block">{submissionData.email}</span>
                      </div>
                    )}
                    {submissionData.city && (
                      <div>
                        <span className="text-slate-500 block text-[10.5px]">City:</span>
                        <span>{submissionData.city}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-slate-500 block text-[10.5px]">Building:</span>
                      <span>{submissionData.buildingType}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10.5px]">Floors:</span>
                      <span>{submissionData.floors}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10.5px]">Capacity:</span>
                      <span>{submissionData.capacity}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10.5px]">Door:</span>
                      <span>{submissionData.doorType}</span>
                    </div>
                  </div>
                  {submissionData.message && (
                    <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                      <span className="text-slate-500 block text-[10.5px]">Remarks:</span>
                      <p className="italic bg-slate-50 p-2 rounded-lg mt-0.5 border border-slate-100">
                        "{submissionData.message}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setSubmissionData(null);
                    }}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px]"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mukesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs min-h-[44px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98250 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs min-h-[44px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs min-h-[44px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project City / State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmedabad, Surat, Rajkot"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs min-h-[44px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Building Category
                    </label>
                    <select
                      value={formData.buildingType}
                      onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs min-h-[44px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                    >
                      <option>Residential Apartment</option>
                      <option>Commercial Office Tower</option>
                      <option>Private Villa / Bungalow Lift</option>
                      <option>Hospital & Trauma Center</option>
                      <option>Industrial Freight / Warehouse</option>
                      <option>Automotive Car Park</option>
                      <option>Panoramic Glass Capsule</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Number of Floors / Stops
                    </label>
                    <select
                      value={formData.floors}
                      onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs min-h-[44px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                    >
                      <option>G+1 to G+3 (Low Rise / Villa)</option>
                      <option>4 to 7 Floors</option>
                      <option>8 to 14 Floors</option>
                      <option>15 to 22+ Floors</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Rated Passenger Capacity
                    </label>
                    <select
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs min-h-[44px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                    >
                      <option>3 to 4 Passengers (204 - 272 kg)</option>
                      <option>5 to 6 Passengers (340 - 408 kg)</option>
                      <option>8 Passengers (544 kg)</option>
                      <option>10 to 13 Passengers (680 - 884 kg)</option>
                      <option>15 to 26 Passengers (Hospital Stretcher)</option>
                      <option>Freight Heavy Load (500 to 4000 kg)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Preferred Door System
                    </label>
                    <select
                      value={formData.doorType}
                      onChange={(e) => setFormData({ ...formData, doorType: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs min-h-[44px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                    >
                      <option>Automatic Center Opening</option>
                      <option>Automatic Telescopic Door</option>
                      <option>Glass Vision Door</option>
                      <option>Manual Collapsible Gate</option>
                      <option>Manual Swing Door</option>
                      <option>Vertical Bi-Parting (Freight)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Remarks or Special Architectural Constraints
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Shaft dimensions (if existing), preferred cabin finish (e.g. KEC-03, Rose Gold), timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-sm sm:text-xs focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer min-h-[48px]"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <Send className="w-4 h-4 text-emerald-100" />
                  <span>Send Technical Inquiry via WhatsApp</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center pt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>All form specifications are packaged and sent directly to WhatsApp ({companyData.contacts.phone}).</span>
                </div>
              </form>
            )}
          </div>

          {/* Brochure Download & Fast Assist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                Brochure Archive
              </span>
              <h3 className="text-xl font-black">Official Technical Product Catalogue</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Download the comprehensive KRUPA ELEVATORS brochure in high resolution PDF format containing complete hoistway layouts, motor ratings, and architectural finishes.
              </p>
              <div className="pt-2 space-y-2">
                <a
                  href={companyData.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold transition-colors shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Brochure (16 MB)</span>
                </a>
                {onOpenBrochure && (
                  <button
                    onClick={onOpenBrochure}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors border border-slate-700"
                  >
                    <span>Open Interactive Page Viewer</span>
                  </button>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-orange/10 to-amber-50 p-6 rounded-3xl border border-brand-orange/20 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                Immediate Assistance
              </span>
              <h4 className="text-base font-bold text-slate-900">Need Immediate Site Advice?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with our Chief Technical Coordinator for urgent hoistway dimension checks, custom pricing, or breakdown reports.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={`tel:${companyData.contacts.phoneRaw}`}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Call: {companyData.contacts.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
                    "Hello Krupa Elevators, I need urgent site advice and information regarding elevator specifications."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <ScrollReveal direction="up" distance={20} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-1">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-3 divide-y divide-slate-100">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="pt-3 first:pt-0">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
                  >
                    <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-brand-teal" : ""
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-xs text-slate-600 leading-relaxed pb-3 pt-1 animate-in fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
