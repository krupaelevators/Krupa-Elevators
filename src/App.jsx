import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useParams, Navigate } from "react-router-dom";
import { Phone } from "lucide-react";
import WhatsAppIcon from "./components/common/WhatsAppIcon";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { companyData } from "./data/companyData";

// Route code-splitting: keep Home eager for immediate FCP/LCP, lazy load secondary routes
const About = lazy(() => import("./pages/About"));
const ProductsHub = lazy(() => import("./pages/Products"));
const ElevatorsIndex = lazy(() => import("./pages/ElevatorsIndex"));
const ElevatorDetail = lazy(() => import("./pages/ElevatorDetail"));
const DoorSystems = lazy(() => import("./pages/DoorSystems"));
const DoorDetail = lazy(() => import("./pages/DoorDetail"));
const Interior = lazy(() => import("./pages/Interior"));
const InteriorDetail = lazy(() => import("./pages/InteriorDetail"));
const Technologies = lazy(() => import("./pages/Technologies"));
const Services = lazy(() => import("./pages/Services"));
const ServiceAmcMaintenance = lazy(() => import("./pages/ServiceAmcMaintenance"));
const ServiceModernization = lazy(() => import("./pages/ServiceModernization"));
const ServiceInstallation = lazy(() => import("./pages/ServiceInstallation"));
const ServiceEmergencySupport = lazy(() => import("./pages/ServiceEmergencySupport"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const ArchitectsCorner = lazy(() => import("./pages/ArchitectsCorner"));
const BrochureModal = lazy(() => import("./components/BrochureModal"));

function RouteFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center py-20">
      <div className="w-8 h-8 border-3 border-brand-teal border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Preserves deep links into the old dynamic routes (/elevators/:id, /interiors/:id)
// by forwarding to their new prefixed equivalents.
function ParamRedirect({ toPrefix, param }) {
  const params = useParams();
  return <Navigate to={`${toPrefix}/${params[param]}`} replace />;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));
      // Where the section should sit: just below the sticky navbar.
      const targetTop = () => {
        const element = document.getElementById(targetId);
        if (!element) return null;
        const navHeight = document.querySelector("header")?.offsetHeight ?? 64;
        return element.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      };

      // Images above the section can finish loading after the first scroll and push it
      // down, so re-check a few times and correct — unless the visitor starts scrolling.
      let userScrolled = false;
      const stop = () => { userScrolled = true; };
      const opts = { passive: true };
      window.addEventListener("wheel", stop, opts);
      window.addEventListener("touchstart", stop, opts);
      window.addEventListener("keydown", stop);

      // Correct only when the section itself has moved (layout shift) — not merely because
      // the first smooth scroll is still on its way there.
      let aimedAt = null;
      const timers = [120, 600, 1200, 2000].map((delay) =>
        setTimeout(() => {
          if (userScrolled) return;
          const top = targetTop();
          if (top === null) return;
          if (aimedAt === null || Math.abs(top - aimedAt) > 8) {
            window.scrollTo({ top, behavior: "smooth" });
            aimedAt = top;
          }
        }, delay)
      );
      return () => {
        timers.forEach(clearTimeout);
        window.removeEventListener("wheel", stop, opts);
        window.removeEventListener("touchstart", stop, opts);
        window.removeEventListener("keydown", stop);
      };
    } else {
      // New page: jump to the top instantly while the page fades in, rather than
      // visibly scrolling up through the previous page.
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  // Clean legacy '#' hashes from old cached/bookmarked URLs (e.g. #/elevators -> /elevators)
  useEffect(() => {
    if (window.location.hash.startsWith("#/")) {
      const cleanSubpath = window.location.hash.slice(2);
      const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
      window.history.replaceState(null, "", (base ? base : "") + "/" + cleanSubpath);
    }
  }, []);

  return null;
}

// Fades each new page in. Keyed on the path only, so filter (?type=) and in-page
// (#section) changes update instantly without replaying the animation.
function PageTransition({ children }) {
  const { pathname, hash } = useLocation();
  // Links to a section (#id) scroll there instead — that movement is the transition.
  return (
    <div key={pathname} className={hash ? undefined : "page-transition"}>
      {children}
    </div>
  );
}

export default function App() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureModalPage, setBrochureModalPage] = useState(1);

  const handleOpenBrochure = (page = 1) => {
    setBrochureModalPage(page);
    setBrochureModalOpen(true);
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
        <Navbar onOpenBrochure={() => handleOpenBrochure(1)} />

        <main className="flex-1">
          <PageTransition>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                {/* 1. Home */}
                <Route
                  path="/"
                  element={
                    <Home
                      onOpenBrochure={() => handleOpenBrochure(1)}
                      onOpenBrochurePage={(pg) => handleOpenBrochure(pg)}
                    />
                  }
                />

                {/* 2. About */}
                <Route path="/about" element={<About onOpenBrochure={() => handleOpenBrochure(1)} />} />
                <Route path="/about/projects" element={<Projects onOpenBrochure={() => handleOpenBrochure(1)} />} />

                {/* 3. Products Hub */}
                <Route path="/products" element={<ProductsHub />} />

                {/* Elevators Index & Detail Pages */}
                <Route
                  path="/products/elevators"
                  element={<ElevatorsIndex onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />}
                />
                <Route
                  path="/products/elevators/:elevatorId"
                  element={<ElevatorDetail onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />}
                />

                {/* Door Systems */}
                <Route
                  path="/products/doors"
                  element={<DoorSystems onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />}
                />
                <Route
                  path="/products/doors/:doorId"
                  element={<DoorDetail onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />}
                />

                {/* Interiors */}
                <Route
                  path="/products/interiors"
                  element={<Interior onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />}
                />
                <Route
                  path="/products/interiors/:id"
                  element={<InteriorDetail onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />}
                />

                {/* Technology */}
                <Route
                  path="/products/technology"
                  element={<Technologies onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />}
                />

                {/* Architects & Civil Engineers Hub */}
                <Route
                  path="/products/architects-corner"
                  element={<ArchitectsCorner onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />}
                />

                {/* 4. Services */}
                <Route path="/services" element={<Services onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />} />
                <Route path="/services/amc-maintenance" element={<ServiceAmcMaintenance />} />
                <Route path="/services/modernization" element={<ServiceModernization />} />
                <Route path="/services/installation" element={<ServiceInstallation />} />
                <Route path="/services/emergency-support" element={<ServiceEmergencySupport />} />

                {/* 5. Contact / Enquiry */}
                <Route path="/contact" element={<Contact onOpenBrochure={() => handleOpenBrochure(1)} />} />

                {/* Legacy redirects — keep old bookmarks/search-engine links working */}
                <Route path="/elevators" element={<Navigate to="/products/elevators" replace />} />
                <Route path="/elevators/:elevatorId" element={<ParamRedirect toPrefix="/products/elevators" param="elevatorId" />} />
                <Route path="/doors" element={<Navigate to="/products/doors" replace />} />
                <Route path="/doors/:category/:doorId" element={<ParamRedirect toPrefix="/products/doors" param="doorId" />} />
                <Route path="/interiors" element={<Navigate to="/products/interiors" replace />} />
                <Route path="/interiors/:id" element={<ParamRedirect toPrefix="/products/interiors" param="id" />} />
                <Route path="/interior" element={<Navigate to="/products/interiors" replace />} />
                <Route path="/technology" element={<Navigate to="/products/technology" replace />} />
                <Route path="/technologies" element={<Navigate to="/products/technology" replace />} />
                <Route path="/architects-corner" element={<Navigate to="/products/architects-corner" replace />} />
                <Route path="/civil-drawings" element={<Navigate to="/products/architects-corner" replace />} />
                <Route path="/drawings" element={<Navigate to="/products/architects-corner" replace />} />
                <Route path="/specifications" element={<Navigate to="/products/elevators" replace />} />
                <Route path="/service" element={<Navigate to="/services" replace />} />
                <Route path="/projects" element={<Navigate to="/about/projects" replace />} />

                {/* Catch-all */}
                <Route
                  path="*"
                  element={
                    <Home
                      onOpenBrochure={() => handleOpenBrochure(1)}
                      onOpenBrochurePage={(pg) => handleOpenBrochure(pg)}
                    />
                  }
                />
              </Routes>
            </Suspense>
          </PageTransition>
        </main>

        <Footer onOpenBrochure={() => handleOpenBrochure(1)} />

        {/* Global Technical Brochure Modal — lazy loaded on demand */}
        {brochureModalOpen && (
          <Suspense fallback={null}>
            <BrochureModal
              isOpen={brochureModalOpen}
              initialPage={brochureModalPage}
              onClose={() => setBrochureModalOpen(false)}
            />
          </Suspense>
        )}

        {/* Floating Call & WhatsApp buttons — all screen sizes */}
        <div className="flex fixed bottom-4 right-4 sm:bottom-6 sm:right-6 mb-[env(safe-area-inset-bottom)] z-40 flex-col items-end space-y-3">
          {/* Quick Call Button */}
          <a
            href="tel:+919727764868"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 hover:bg-brand-teal text-white shadow-lg border border-slate-700/60 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-brand-teal/40"
            title="Call Technical Desk: +91 97277 64868"
            aria-label="Call Krupa Elevators"
          >
            <Phone className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors" />
            <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md border border-slate-700/50">
              Call: +91 97277 64868
            </span>
          </a>

          {/* Quick WhatsApp Button */}
          <a
            href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
              "Hello Krupa Elevators, I would like to inquire about elevator specifications and request a quotation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
            title="Chat with Technical Engineer on WhatsApp"
            aria-label="WhatsApp technical consultation"
          >
            {/* Subtle animated ambient ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
            <WhatsAppIcon className="w-7 h-7 text-white relative z-10" />
            <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md border border-slate-700/50">
              WhatsApp Us
            </span>
          </a>
        </div>
      </div>
    </Router>
  );
}
