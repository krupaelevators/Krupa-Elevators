import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import { companyData } from "../data/companyData";

const navGroups = [
  { name: "Home", path: "/" },
  {
    name: "Products",
    path: "/products",
    children: [
      { name: "Products Overview", path: "/products", desc: "Full catalogue in one place" },
      { name: "Elevator Models", path: "/products/elevators", desc: "8 engineered elevator classes" },
      { name: "Door Systems", path: "/products/doors", desc: "Manual & automatic landing doors" },
      { name: "Interior Cabins", path: "/products/interiors", desc: "11 cabin finish series" },
      { name: "Technology & Drive Systems", path: "/products/technology", desc: "PMSM, V3F, ARD, safety" },
      { name: "Architects & CAD Hub", path: "/products/architects-corner", desc: "Civil drawings & dimensions" },
    ],
  },
  {
    name: "Services",
    path: "/services",
    children: [
      { name: "Services Overview", path: "/services", desc: "All support & AMC offerings" },
      { name: "AMC & Maintenance", path: "/services/amc-maintenance", desc: "Preventive maintenance plans" },
      { name: "Modernization", path: "/services/modernization", desc: "Retrofit & upgrade services" },
      { name: "Installation Process", path: "/services/installation", desc: "Site survey to commissioning" },
      { name: "Emergency Support", path: "/services/emergency-support", desc: "24/7 breakdown dispatch" },
    ],
  },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "About Us", path: "/about", desc: "Company, mission & facilities" },
      { name: "Projects & Clients", path: "/about/projects", desc: "Our installation record" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState(null);
  const [desktopOpenGroup, setDesktopOpenGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef(null);
  const location = useLocation();

  // Matches the path itself or any page beneath it ("/about" ≠ "/aboutus").
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  // Dropdown items: an "Overview" item that shares its group's path is active only on
  // that exact page, so e.g. /about/projects doesn't also highlight "About Us".
  const isChildActive = (child, group) =>
    child.path === group.path ? location.pathname === child.path : isActive(child.path);

  const isGroupActive = (group) => {
    if (isActive(group.path)) return true;
    return (group.children || []).some((c) => isActive(c.path));
  };

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      if (window.location.hash) {
        const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
        window.history.replaceState(null, "", base ? base + "/" : "/");
      }
      scrollToHero();
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, path) => {
    if (path === "/" && location.pathname === "/") {
      e.preventDefault();
      if (window.location.hash) {
        const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
        window.history.replaceState(null, "", base ? base + "/" : "/");
      }
      scrollToHero();
    }
    setMobileMenuOpen(false);
  };

  // Opening the mobile menu expands the section you are currently in.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const current = navGroups.find((g) => g.children && isGroupActive(g));
    setMobileOpenGroup(current ? current.name : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileMenuOpen]);

  // Close when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileOpenGroup(null);
    setDesktopOpenGroup(null);
  }, [location.pathname]);

  // Scroll listener for elevation effect & smooth reading progress
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation when tapping/clicking anywhere outside the navbar
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
        setDesktopOpenGroup(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setDesktopOpenGroup(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    // Lock page scrolling while the mobile menu is open. This must be set on <html>, not
    // <body>: index.css gives <html> `overflow-x: clip`, so `overflow: hidden` on <body>
    // turns the body into its own scroll box and the sticky navbar (with the open menu)
    // scrolls away off the top of the screen.
    const root = document.documentElement;
    root.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      root.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header ref={navRef} className="sticky top-0 z-50 transition-all duration-300">
      {/* Mobile backdrop — dims the page and closes the menu on tap. Kept outside <nav>:
          the nav's backdrop-blur would otherwise confine this fixed layer to the navbar. */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs -z-10 lg:hidden animate-in fade-in duration-300"
          aria-hidden="true"
        />
      )}
      {/* Main Compact Navbar */}
      <nav
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 ease-out ${
          scrolled
            ? "shadow-sm border-slate-200/90 py-0"
            : "border-slate-200/70 py-0.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-15">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center shrink-0 group focus:outline-none cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Krupa Elevators Home"
            >
              <picture>
                <source srcSet={companyData.logoWebp} type="image/webp" />
                <img
                  src={companyData.logo}
                  alt="Krupa Elevators"
                  width="169"
                  height="36"
                  fetchPriority="high"
                  decoding="async"
                  className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </picture>
            </Link>

            {/* Desktop Navigation Links with Dropdowns */}
            <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
              {navGroups.map((group) => {
                const active = isGroupActive(group);
                const hasChildren = Array.isArray(group.children) && group.children.length > 0;

                if (!hasChildren) {
                  return (
                    <Link
                      key={group.name}
                      to={group.path}
                      onClick={(e) => handleNavClick(e, group.path)}
                      className={`px-3 py-1.5 rounded-xl text-xs xl:text-[13px] font-semibold transition-all duration-200 ease-out ${
                        active
                          ? "text-brand-teal bg-brand-teal-light font-bold shadow-2xs"
                          : "text-slate-600 hover:text-brand-teal hover:bg-slate-100/70"
                      }`}
                    >
                      {group.name}
                    </Link>
                  );
                }

                const open = desktopOpenGroup === group.name;
                return (
                  <div
                    key={group.name}
                    className="relative"
                    onMouseEnter={() => setDesktopOpenGroup(group.name)}
                    onMouseLeave={() => setDesktopOpenGroup((prev) => (prev === group.name ? null : prev))}
                  >
                    <Link
                      to={group.path}
                      onClick={() => setDesktopOpenGroup(null)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs xl:text-[13px] font-semibold transition-all duration-200 ease-out cursor-pointer ${
                        active
                          ? "text-brand-teal bg-brand-teal-light font-bold shadow-2xs"
                          : "text-slate-600 hover:text-brand-teal hover:bg-slate-100/70"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={open}
                    >
                      <span>{group.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                          open ? "rotate-180 text-brand-teal" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {open && (
                      <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in zoom-in-95 slide-in-from-top-1.5 duration-200 ease-out">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-2 divide-y divide-slate-100 ring-1 ring-black/5">
                          {group.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`block px-3.5 py-2.5 rounded-xl transition-all duration-200 ease-out group/item ${
                                isChildActive(child, group)
                                  ? "bg-brand-teal-light text-brand-teal font-bold"
                                  : "hover:bg-slate-50 text-slate-700 hover:text-brand-teal hover:translate-x-1"
                              }`}
                            >
                              <span className="block text-xs font-bold transition-colors">{child.name}</span>
                              {child.desc && (
                                <span className="block text-[11px] text-slate-500 mt-0.5 group-hover/item:text-slate-600">
                                  {child.desc}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                to="/#estimator"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
              >
                <span>60s Estimate</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold shadow-xs hover:bg-brand-orange-hover transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <span>Request Survey</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger (Original Clean Sleek Design) */}
            <div className="flex items-center lg:hidden space-x-1.5">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-brand-teal focus:outline-none active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-brand-orange transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="w-5 h-5 transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Menu (Clean original accordion design with smooth transitions) */}
        {mobileMenuOpen && (
          <div className="relative z-50 lg:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-5 space-y-1.5 shadow-xl animate-in slide-in-from-top-3 fade-in duration-300 ease-out max-h-[78vh] overflow-y-auto">
            {navGroups.map((group) => {
              const active = isGroupActive(group);
              const hasChildren = Array.isArray(group.children) && group.children.length > 0;

              if (!hasChildren) {
                return (
                  <Link
                    key={group.name}
                    to={group.path}
                    onClick={(e) => handleNavClick(e, group.path)}
                    className={`flex justify-between items-center px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                      active
                        ? "text-brand-teal bg-brand-teal-light"
                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-teal"
                    }`}
                  >
                    <span>{group.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                );
              }

              const expanded = mobileOpenGroup === group.name;
              return (
                <div key={group.name} className="rounded-xl overflow-hidden transition-all duration-200">
                  {/* The whole row toggles the sub-menu; the group's overview page is its first item. */}
                  <button
                    type="button"
                    onClick={() => setMobileOpenGroup((prev) => (prev === group.name ? null : group.name))}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition-all duration-200 cursor-pointer ${
                      active
                        ? "text-brand-teal bg-brand-teal-light"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    aria-expanded={expanded}
                    aria-controls={`mobile-sub-${group.name}`}
                  >
                    <span>{group.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                        expanded ? "rotate-180 text-brand-teal" : "text-slate-400"
                      }`}
                    />
                  </button>
                  {expanded && (
                    <div
                      id={`mobile-sub-${group.name}`}
                      className="pl-3 pr-1 py-1 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200"
                    >
                      {group.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-3.5 py-2 rounded-lg text-[11px] font-semibold transition-all duration-200 ${
                            isChildActive(child, group)
                              ? "text-brand-teal bg-brand-teal-light font-bold"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:translate-x-0.5"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                to="/#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex justify-center items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold shadow-sm transition-all duration-200 active:scale-98"
              >
                <span>60s Lift Estimator</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex justify-center items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-sm hover:bg-brand-orange-hover transition-all duration-200 active:scale-98"
              >
                <span>Request Free Site Survey & Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Subtle Scroll Reading Progress Bar (Smooth 2px line) */}
      <div className="h-[2px] w-full bg-slate-200/50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-teal via-teal-400 to-brand-orange transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
