import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Download } from "lucide-react";
import { companyData } from "../data/companyData";
import WhatsAppIcon from "./common/WhatsAppIcon";

export default function Footer({ onOpenBrochure }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <picture>
                <source srcSet={companyData.logoWebp} type="image/webp" />
                <img
                  src={companyData.logo}
                  alt={companyData.name}
                  width="226"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-auto object-contain bg-white p-1 rounded-md"
                />
              </picture>
              <div>
                <span className="block text-xl font-black tracking-tight text-white">
                  KRUPA <span className="text-brand-teal">ELEVATORS</span>
                </span>
                <span className="block text-xs font-semibold text-brand-orange uppercase tracking-wider">
                  {companyData.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {companyData.servicesSummary}. Comprehensive vertical transportation solutions engineered for residential, commercial, hospital, industrial, and luxury private villa applications in Ahmedabad, Gujarat and nationwide.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={companyData.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-white hover:bg-slate-800 hover:border-brand-teal transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-brand-teal" />
                <span>Original Technical PDF</span>
              </a>
              {onOpenBrochure && (
                <button
                  onClick={onOpenBrochure}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                >
                  <span>12-Page Viewer</span>
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-brand-teal pl-2">
              Explore Site
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products Hub
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Krupa Elevators
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/products/architects-corner" className="hover:text-white transition-colors text-brand-teal font-semibold">
                  Architects CAD Hub (Drawings)
                </Link>
              </li>
              <li>
                <Link to="/#estimator" className="hover:text-white transition-colors text-brand-orange font-semibold">
                  60s Lift Estimator Wizard
                </Link>
              </li>
              <li>
                <Link to="/about/projects" className="hover:text-white transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-brand-orange pl-2">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/elevators" className="hover:text-white transition-colors">
                  Elevator Models
                </Link>
              </li>
              <li>
                <Link to="/products/doors" className="hover:text-white transition-colors">
                  Door Systems
                </Link>
              </li>
              <li>
                <Link to="/products/interiors" className="hover:text-white transition-colors">
                  Interior Cabin Series
                </Link>
              </li>
              <li>
                <Link to="/products/technology" className="hover:text-white transition-colors">
                  Technology & Drive Systems
                </Link>
              </li>
              <li>
                <Link to="/products/elevators/passenger" className="hover:text-white transition-colors">
                  Passenger Elevators
                </Link>
              </li>
              <li>
                <Link to="/products/elevators/capsule" className="hover:text-white transition-colors">
                  Capsule Panoramic Lifts
                </Link>
              </li>
              <li>
                <Link to="/products/elevators/hospital" className="hover:text-white transition-colors">
                  Hospital Bed Elevators
                </Link>
              </li>
              <li>
                <Link to="/products/elevators/goods" className="hover:text-white transition-colors">
                  Goods & Freight Lifts
                </Link>
              </li>
              <li>
                <Link to="/products/elevators/mrl" className="hover:text-white transition-colors">
                  MRL Gearless Lifts
                </Link>
              </li>
              <li>
                <Link to="/products/elevators/home" className="hover:text-white transition-colors">
                  Home Villa Elevators
                </Link>
              </li>
            </ul>
          </div>

          {/* Facilities & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-brand-teal pl-2">
              Reach Us
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">Works & Factory:</strong>
                  {companyData.contacts.factory.address}
                </span>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href={`tel:${companyData.contacts.phoneRaw}`}
                  className="text-white font-semibold hover:text-brand-orange transition-colors"
                >
                  {companyData.contacts.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
                    "Hello Krupa Elevators, I would like to inquire about elevator solutions."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <a
                  href={`mailto:${companyData.contacts.emailPrimary}`}
                  className="text-slate-300 hover:text-brand-teal transition-colors"
                >
                  {companyData.contacts.emailPrimary}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {companyData.name}. All rights reserved. Reliable Riding Experience.
          </p>
          {/* <p className="max-w-xl text-center sm:text-right text-[11px] text-slate-600">
            Note: Technical engineering data is subject to site survey and customized architectural requirements. Consult KRUPA ELEVATORS engineering team for exact site hoistway and pit drawings.
          </p> */}
        </div>
      </div>
    </footer>
  );
}
