import React, { useState } from "react";
import {
  Zap,
  Cpu,
  ShieldCheck,
  BatteryCharging,
  CheckCircle2,
  Layers,
  Check,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { technologiesMaster } from "../data/technologiesMaster";
import { assetUrl } from "../utils/assetPath";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import StickySidebarNav from "../components/common/StickySidebarNav";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import Seo from "../components/common/Seo";

export default function Technologies() {
  const { pillars, machineComparison, safetyEcosystem } = technologiesMaster;

  // Find specific tech pillars for dedicated showcases
  const gearlessTech = pillars.find((p) => p.id === "gearless") || pillars[1];
  const gearedTech = pillars.find((p) => p.id === "geared") || pillars[2];
  const v3fTech = pillars.find((p) => p.id === "inverter") || pillars[3];
  const ardTech = pillars.find((p) => p.id === "ard") || pillars[6];
  const mrlTech = pillars.find((p) => p.id === "mrl-controller") || pillars[7];
  const ledTech = pillars.find((p) => p.id === "led") || pillars[4];

  // State to toggle detailed specifications in Control Panel
  const [showControlSpecs, setShowControlSpecs] = useState(false);

  // Sidebar navigation definition
  const sidebarSections = [
    { id: "drive-systems-section", label: "1. Drive Machines (PMSM vs Geared)" },
    { id: "control-panel-section", label: "2. Control Panel Systems" },
    { id: "inverter-section", label: "3. V3F Inverter & Motion" },
    { id: "safety-section", label: "4. Passenger Safety Ecosystem" },
    { id: "comparison-section", label: "5. Drive Comparison Matrix" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Seo
        title="Elevator Drive Technology & Safety Systems in Ahmedabad | Krupa Elevators"
        description="High-efficiency PMSM gearless motors, German V3F vector inverters, open-protocol controllers, and failsafe ARD passenger safety technology engineered by Krupa Elevators in Kathwada, Ahmedabad."
        keywords="elevator technology Ahmedabad, PMSM gearless elevator drive, V3F inverter lift, automatic rescue device elevator, open protocol elevator controller"
      />

      {/* ========================================================================= */}
      {/* 1. PAGE HEADER                                                            */}
      {/* ========================================================================= */}

      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Technology & Drive Systems" }
        ]}
        icon={Cpu}
        badge="Advanced Vertical Mobility • German Engineering Know-How"
        title="Traction Drive Systems & Advanced Elevator Technology"
        description="Combining Permanent Magnet Synchronous (PMSM) gearless direct drives, heavy-duty helical geared machines, and intelligent microprocessor control panels for up to 30% electricity savings."
      />



      {/* Main Container with Sticky Navigation + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sticky Navigation (Mobile Horizontal Bar + Desktop Left Sidebar) */}
          <StickySidebarNav
            sections={sidebarSections}
            title="Technology Hub"
          />

          {/* Main Content Body */}
          <div className="flex-1 w-full min-w-0 space-y-16">
            {/* Quick Efficiency Strip */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 max-w-xl">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">
                  High Energy Efficiency Benchmark
                </span>
                <h3 className="text-lg sm:text-xl font-black">
                  Engineering That Lowers Power & Operating Costs
                </h3>
                <p className="text-xs text-slate-300">
                  Direct-drive PMSM motors combined with smart idle sleep circuits reduce peak electrical kVA demand by up to 30%.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0 text-center">
                <div className="bg-slate-800/90 p-3 rounded-2xl border border-slate-700">
                  <strong className="text-xl font-black text-brand-teal block">30%</strong>
                  <span className="text-[10px] text-slate-300">Power Saved</span>
                </div>
                <div className="bg-slate-800/90 p-3 rounded-2xl border border-slate-700">
                  <strong className="text-xl font-black text-brand-orange block">&lt;50 dB</strong>
                  <span className="text-[10px] text-slate-300">Whisper Quiet</span>
                </div>
                <div className="bg-slate-800/90 p-3 rounded-2xl border border-slate-700">
                  <strong className="text-xl font-black text-teal-300 block">&plusmn;3 mm</strong>
                  <span className="text-[10px] text-slate-300">Leveling</span>
                </div>
                <div className="bg-slate-800/90 p-3 rounded-2xl border border-slate-700">
                  <strong className="text-xl font-black text-emerald-400 block">100%</strong>
                  <span className="text-[10px] text-slate-300">Oil-Free PMS</span>
                </div>
              </div>
            </div>

            {/* ===================================================================== */}
            {/* SECTION 1: TRACTION MACHINES (GEARLESS PMSM vs GEARED)                 */}
            {/* ===================================================================== */}
            <section
              id="drive-systems-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    Primary Drive Motors
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Traction Machine Architecture: Gearless PMSM vs. Geared
                  </h2>
                </div>
              </div>

              {/* Side-by-Side Comparison Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Gearless PMSM Card */}
                <div className="rounded-3xl border overflow-hidden bg-slate-50 flex flex-col justify-between group hover:shadow-md transition-all">
                  <div>
                    <div className="h-60 bg-slate-50  relative overflow-hidden">
                      <img
                        src={assetUrl("/assets/technologies/M67.png")}
                        alt="Permanent Magnet Synchronous Motor"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-brand-teal text-white font-bold text-[10px] px-3 py-1 rounded-full uppercase shadow-sm">
                        High-Efficiency PMSM Gearless
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider">
                          Next-Gen Direct Drive
                        </span>
                        <h3 className="text-lg font-black text-slate-900 mt-0.5">
                          Permanent Magnet Synchronous Motor (PMSM)
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        Friction-free, oil-less motor with direct drive rotor sheave. Delivers immediate torque, silent vibration-free acceleration, and eliminates mechanical gearbox maintenance.
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                        <div className="flex items-center space-x-2 text-slate-700">
                          <Check className="w-4 h-4 text-brand-teal shrink-0" />
                          <span>Consumes 30% to 40% less electrical power</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-700">
                          <Check className="w-4 h-4 text-brand-teal shrink-0" />
                          <span>No oil changes or gearbox lubrication required</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-700">
                          <Check className="w-4 h-4 text-brand-teal shrink-0" />
                          <span>Compact footprint enables Machine Roomless (MRL) designs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Geared Traction Machine Card */}
                <div className="rounded-3xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between group hover:shadow-md transition-all">
                  <div>
                    <div className="h-60 bg-slate-50 relative overflow-hidden">
                      <img
                        src={assetUrl("/assets/technologies/I127.png")}
                        alt="Geared Traction Machine"
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-brand-orange text-white font-bold text-[10px] px-3 py-1 rounded-full uppercase shadow-sm">
                        Heavy-Duty Geared Traction
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider">
                          High-Tonnage Industrial Workhorse
                        </span>
                        <h3 className="text-lg font-black text-slate-900 mt-0.5">
                          High-Torque Reduction Gear Machine
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        Precision centrifugally-cast bronze worm wheel coupled to a case-hardened alloy steel worm shaft in a rigid cast-iron oil bath. Built for extreme cargo and freight duty cycles.
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                        <div className="flex items-center space-x-2 text-slate-700">
                          <Check className="w-4 h-4 text-brand-orange shrink-0" />
                          <span>Extreme torque capacity for heavy cargo up to 5000 kg</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-700">
                          <Check className="w-4 h-4 text-brand-orange shrink-0" />
                          <span>Withstands dynamic shock loads during forklift loading</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-700">
                          <Check className="w-4 h-4 text-brand-orange shrink-0" />
                          <span>Proven 25+ year lifespan in intense industrial environments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===================================================================== */}
            {/* SECTION 2: DEDICATED CONTROL PANEL SYSTEMS (NEW SECTION)              */}
            {/* Hierarchy: Overview → 4 Subsystems → Progressive Specs Disclosure     */}
            {/* ===================================================================== */}
            <section
              id="control-panel-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    Central Intelligence
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Microprocessor High-Technology Control Panel
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    The electronic brain of the elevator orchestrating motor torque, door safety, and emergency backup power.
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200 px-3 py-1 rounded-full shrink-0">
                  4 Core Control Systems
                </span>
              </div>

              {/* Client-Friendly Controller Overview Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center gap-6">
                <div className="w-28 h-28 bg-slate-800 rounded-2xl p-2 border border-slate-700 shrink-0 flex items-center justify-center">
                  <img
                    src={assetUrl("/assets/technologies/v3f-control.jpg")}
                    alt="Control Panel Cabinet"
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">
                    Integrated Architecture
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Unified Logic & Power Inverter Electronics
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike traditional systems with separate relay banks and third-party inverters, Krupa uses an integrated motherboard architecture. This cuts electrical connection points by 70%, prevents wire oxidation faults, and speeds up building commissioning.
                  </p>
                </div>
              </div>

              {/* The 4 Subsystems Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Integrated Drive */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Type 1</span>
                      <h4 className="font-black text-sm text-slate-900">Integrated Drive (Elevator Management)</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Combines elevator management logic and variable-frequency motor inverter on a single unified motherboard. Eliminates intermediate terminal wiring for maximum system stability.
                  </p>
                  <div className="text-[11px] font-medium text-brand-teal flex items-center space-x-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Real-time S-curve motion calculation</span>
                  </div>
                </div>

                {/* 2. Microprocessor DSP Controller */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Type 2</span>
                      <h4 className="font-black text-sm text-slate-900">Microprocessor with Integrated Controller</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-speed 32-Bit Dual-Core DSP running full CAN Bus 2.0 serial communications. Records up to 100 historical system events to ensure swift, transparent maintenance.
                  </p>
                  <div className="text-[11px] font-medium text-brand-teal flex items-center space-x-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>70% fewer traveling cable wires</span>
                  </div>
                </div>

                {/* 3. Automatic Rescue Device */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                      <BatteryCharging className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Type 3</span>
                      <h4 className="font-black text-sm text-slate-900">Automatic Rescue Device (ARD)</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Smart emergency battery module that instantly activates when municipal power fails. Calculates lightest load direction, delivers passengers to the nearest landing, and opens doors.
                  </p>
                  <div className="text-[11px] font-medium text-brand-orange flex items-center space-x-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>100% fail-safe entrapment prevention</span>
                  </div>
                </div>

                {/* 4. MRL Gearless Integrated Controller */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Type 4</span>
                      <h4 className="font-black text-sm text-slate-900">MRL Gearless Integrated Controller</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ultra-slim vertical control cabinet specifically engineered to be embedded inside the top floor entrance architrave or hoistway pocket, eliminating rooftop machine rooms.
                  </p>
                  <div className="text-[11px] font-medium text-brand-teal flex items-center space-x-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Zero penthouse structure required</span>
                  </div>
                </div>
              </div>

              {/* Progressive Disclosure: Toggle Detailed Controller Specs */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => setShowControlSpecs(!showControlSpecs)}
                  className="w-full py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-brand-teal" />
                    <span>{showControlSpecs ? "Hide Detailed Controller Specifications" : "View Detailed Controller Engineering Parameters"}</span>
                  </span>
                  {showControlSpecs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showControlSpecs && (
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 text-xs animate-in fade-in duration-200">
                    <table className="w-full text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3">Parameter</th>
                          <th className="p-3">Specification Standard</th>
                          <th className="p-3">Client Advantage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-slate-800">Processor Core</td>
                          <td className="p-3">32-Bit Dual-Core Digital Signal Processor (DSP)</td>
                          <td className="p-3">Microsecond dispatch response & accurate leveling</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-slate-800">Communication Protocol</td>
                          <td className="p-3">CAN Bus 2.0 Serial Multi-Drop Interface</td>
                          <td className="p-3">Cuts wiring faults & increases long-term reliability</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-slate-800">Leveling Accuracy</td>
                          <td className="p-3">&plusmn;3 mm flush landing threshold</td>
                          <td className="p-3">Barrier-free wheelchair and stretcher roll-in</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-slate-800">Cabinet Enclosure</td>
                          <td className="p-3">IP21 / IP54 Sheet Steel Powder-Coated</td>
                          <td className="p-3">Dust protection in residential & industrial shafts</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-slate-800">Emergency Rescue (ARD)</td>
                          <td className="p-3">Automated battery inverter, 48V/72V DC bank</td>
                          <td className="p-3">Instant passenger release during power outage</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* SECTION 3: V3F INVERTER & MOTION CONTROL                              */}
            {/* ===================================================================== */}
            <section
              id="inverter-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    Motion Control
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    German V3F Variable Frequency Drive
                  </h2>
                </div>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Closed-Loop Vector Control
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-black text-sm text-slate-900">S-Curve Motion Profiling</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Parabolic velocity curves modulate frequency millisecond by millisecond, eliminating chest sensations and starting jerk.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-black text-sm text-slate-900">Millimeter Leveling Precision</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Optical encoder feedback brings the elevator cabin flush with the landing threshold within &plusmn;3 mm, preventing trip hazards.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-black text-sm text-slate-900">Regenerative Dynamic Braking</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dissipates counterweight overhauling energy safely while reducing heat buildup inside the shaft.
                  </p>
                </div>
              </div>
            </section>

            {/* ===================================================================== */}
            {/* SECTION 4: PASSENGER SAFETY ECOSYSTEM                                 */}
            {/* ===================================================================== */}
            <section
              id="safety-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                    Fail-Safe Protection
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Passenger Safety & Protection Ecosystem
                  </h2>
                </div>
                <span className="text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                  100% Bench Tested
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-black text-sm text-slate-900">Inbuilt Car Door Lock (CDL)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prevents cabin doors from being forced open from inside while the elevator is in motion or outside the leveling zone.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="font-black text-sm text-slate-900">128+ Beam Infrared Light Curtain</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Continuous cross-beams protect passengers from floor to 1800 mm, reversing doors instantly before any physical touch.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <h4 className="font-black text-sm text-slate-900">Over-Speed Governor (OSG)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mechanical flyball governor activates instantaneous progressive safety wedges to lock the car firmly to guide rails on overspeed.
                  </p>
                </div>
              </div>
            </section>

            {/* ===================================================================== */}
            {/* SECTION 5: TRACTION MACHINE COMPARISON MATRIX                         */}
            {/* ===================================================================== */}
            <section
              id="comparison-section"
              className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 space-y-6 scroll-mt-24 shadow-xl"
            >
              <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    Engineering Decision Guide
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    {machineComparison.title}
                  </h2>
                </div>
              </div>

              {/* Mobile swipe hint banner */}
              <div className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-teal-300 text-[11px] font-medium border border-slate-700">
                <span>↔ Swipe horizontally to compare drive specs</span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 text-xs touch-pan-x">
                <table className="w-full text-left">
                  <thead className="bg-slate-800 text-slate-300 font-bold border-b border-slate-700">
                    <tr>
                      <th className="p-3">Engineering Parameter</th>
                      <th className="p-3 text-teal-300">Gearless PMSM Machine</th>
                      <th className="p-3 text-amber-300">Heavy-Duty Geared Traction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {machineComparison.parameters.map((param, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/60">
                        <td className="p-3 font-semibold text-white">{param.feature}</td>
                        <td className="p-3">{param.gearless}</td>
                        <td className="p-3">{param.geared}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Call To Action */}
            <CTASection
              title="Need Motor Sizing or Control Panel Schematics?"
              subtitle="Our electrical engineering team provides motor power calculation sheets, ARD battery bank ratings, and CAD wiring diagrams."
              badge="Electrical & Drive Engineering"
              variant="gradient"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
