import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { companyData } from "../data/companyData";
import { assetUrl } from "../utils/assetPath";

export default function BrochureModal({ isOpen, onClose, initialPage = 1 }) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = 12;

  useEffect(() => {
    if (initialPage) {
      setCurrentPage(initialPage);
    }
  }, [initialPage, isOpen]);

  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const pageDescriptions = [
    "Cover Page & Official Corporate Contacts (Ahmedabad Office & Factory)",
    "Form, Function & Architectural Flexibility — Modern Passenger Elevators",
    "High Energy Efficiency PMS Machine, Inverters, LED & KEC-01 to 03 Interiors",
    "Premium Series Cabin Design (KEC-04 to KEC-11) & Stainless Etching Patterns",
    "Economic Manual Doors & High-Speed Automatic Door Systems",
    "Panoramic Capsule Elevators & Hospital Bed Stretcher Elevators",
    "Heavy-Duty Goods Elevators & Car Elevators with Parking Systems",
    "MRL Machine-Roomless Elevators & Luxury Home Villa Elevators",
    "Hydraulic Elevators & Operating Panels Catalog (COP / LOP 001-006)",
    "Geared/Gearless Machine Specs, Microprocessor Control & Passenger Dimensions",
    "Hospital, Goods, Car & MRL Technical Dimension & Hoistway Drawings",
    "Home & Hydraulic Dimensions, Specialized Service Team & Monitoring System"
  ];

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-slate-900 rounded-2xl max-w-6xl w-full shadow-2xl border border-slate-800 flex flex-col max-h-[96vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 text-white">
          <div className="flex items-center space-x-3">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
              KRUPA ELEVATORS <span className="text-brand-teal">Technical Brochure</span>
            </span>
            <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-brand-orange border border-slate-700">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={companyData.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-2 min-h-[38px] rounded-xl bg-brand-teal text-white text-xs font-bold hover:bg-teal-600 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download Full PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main View */}
        <div className="relative flex-1 overflow-hidden flex flex-col items-center justify-center p-2 sm:p-4 bg-black/40">
          <div className="relative max-h-[68vh] w-auto overflow-auto rounded-xl border border-slate-800 shadow-inner flex items-center justify-center">
            <img
              src={assetUrl(`/assets/pages/page-${currentPage}.webp`)}
              alt={`KRUPA ELEVATORS Brochure Page ${currentPage}`}
              className="max-h-[66vh] w-auto object-contain rounded-lg transition-opacity duration-200"
            />
          </div>

          {/* Page Info */}
          <div className="mt-3 text-center px-4 max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-slate-200">
              Page {currentPage}: {pageDescriptions[currentPage - 1]}
            </p>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-800/80 text-white hover:bg-brand-teal transition-colors shadow-lg cursor-pointer"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-800/80 text-white hover:bg-brand-teal transition-colors shadow-lg cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/80 overflow-x-auto touch-pan-x no-scrollbar flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
            <button
              key={pg}
              onClick={() => setCurrentPage(pg)}
              className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all p-0.5 ${
                currentPage === pg
                  ? "border-brand-teal scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={assetUrl(`/assets/pages/page-${pg}.webp`)}
                alt={`Thumb ${pg}`}
                className="w-14 h-10 object-cover rounded"
              />
              <span className="block text-[10px] text-slate-400 font-bold text-center mt-0.5">
                p.{pg}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
