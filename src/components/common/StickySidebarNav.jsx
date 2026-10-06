import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

/**
 * StickySidebarNav.jsx
 * 
 * Responsive, mobile-first sticky navigation component for detailed pages.
 * - Mobile (< lg): Sticky horizontal swipe-bar directly below the navbar (top-16)
 *   with auto-centering active pills.
 * - Desktop (>= lg): Sticky left-hand sidebar with hierarchical section tree
 *   and smooth jump-to-section.
 */
export default function StickySidebarNav({
  sections = [],
  title = "Page Navigation",
  className = ""
}) {
  const [activeId, setActiveId] = useState("");
  const mobileContainerRef = useRef(null);
  const activePillRef = useRef(null);

  // Set default active ID
  useEffect(() => {
    if (sections.length > 0 && !activeId) {
      setActiveId(sections[0].id);
    }
  }, [sections]);

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    const allIds = [];
    sections.forEach((sec) => {
      allIds.push(sec.id);
      if (sec.subItems) {
        sec.subItems.forEach((sub) => allIds.push(sub.id));
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Header + buffer offset
      let currentSectionId = "";

      for (const id of allIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSectionId = id;
          }
        }
      }

      if (currentSectionId && currentSectionId !== activeId) {
        setActiveId(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeId]);

  // Auto-scroll active pill into view in mobile horizontal bar
  useEffect(() => {
    if (activePillRef.current && mobileContainerRef.current) {
      const container = mobileContainerRef.current;
      const pill = activePillRef.current;
      const pillLeft = pill.offsetLeft;
      const pillWidth = pill.offsetWidth;
      const containerWidth = container.offsetWidth;

      container.scrollTo({
        left: pillLeft - containerWidth / 2 + pillWidth / 2,
        behavior: "smooth"
      });
    }
  }, [activeId]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80; // Offset for sticky navbar + spacing
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveId(id);
    }
  };

  // Flattened items for mobile horizontal bar
  const flatMobileItems = [];
  sections.forEach((sec) => {
    flatMobileItems.push({ id: sec.id, label: sec.label, isSub: false });
    if (sec.subItems) {
      sec.subItems.forEach((sub) => {
        flatMobileItems.push({ id: sub.id, label: sub.label, isSub: true, parentId: sec.id });
      });
    }
  });

  return (
    <>
      {/* ------------------------------------------------------------------- */}
      {/* 1. MOBILE FIRST: HORIZONTAL STICKY BAR (Below top navbar, < lg)     */}
      {/* ------------------------------------------------------------------- */}
      <div className="w-full block lg:hidden sticky top-14 sm:top-15 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs px-3 py-2">
        <div
          ref={mobileContainerRef}
          className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth touch-pan-x"
        >
          {flatMobileItems.map((item) => {
            const isActive =
              activeId === item.id ||
              (item.parentId && activeId === item.parentId);

            return (
              <button
                key={item.id}
                ref={isActive ? activePillRef : null}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer min-h-[38px] flex items-center space-x-1.5 active:scale-95 ${isActive
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  } ${item.isSub ? "text-[11px] font-medium" : ""}`}
              >
                {item.isSub && <span className="opacity-50 text-[10px]">•</span>}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 2. DESKTOP: SLEEK STICKY SIDEBAR (>= lg)                            */}
      {/* ------------------------------------------------------------------- */}
      <aside className={`hidden lg:block sticky top-24 w-56 xl:w-64 shrink-0 space-y-4 self-start ${className}`}>
        <div className="bg-white rounded-3xl border border-slate-200/90 p-4 xl:p-5 shadow-xs space-y-3">
          <div className="border-b border-slate-100 pb-2.5">
            <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">
              Quick Navigation
            </span>
            <h4 className="text-sm font-black text-slate-900">
              {title}
            </h4>
          </div>

          <nav className="space-y-1.5 text-xs font-medium">
            {sections.map((section) => {
              const isDirectlyActive = activeId === section.id;
              const hasActiveChild =
                section.subItems &&
                section.subItems.some((sub) => sub.id === activeId);
              const isSectionHighlighted = isDirectlyActive || hasActiveChild;

              return (
                <div key={section.id} className="space-y-1">
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${isDirectlyActive
                      ? "bg-slate-900 text-white font-bold shadow-xs"
                      : isSectionHighlighted
                        ? "bg-slate-100 text-slate-900 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                  >
                    <span className="truncate">{section.label}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${isSectionHighlighted
                        ? "translate-x-0.5 text-brand-teal"
                        : "opacity-40 group-hover:opacity-100"
                        }`}
                    />
                  </button>

                  {/* Nested Subsections */}
                  {section.subItems && section.subItems.length > 0 && (
                    <div className="pl-3 space-y-0.5 border-l-2 border-slate-100 ml-3">
                      {section.subItems.map((sub) => {
                        const isSubActive = activeId === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => scrollToSection(sub.id)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] transition-colors truncate block cursor-pointer ${isSubActive
                              ? "bg-teal-50 text-teal-900 font-bold border-l-2 border-brand-teal"
                              : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                              }`}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
