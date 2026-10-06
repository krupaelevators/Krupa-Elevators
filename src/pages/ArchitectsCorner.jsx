import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Compass, 
  Ruler, 
  Maximize2, 
  Download, 
  FileText, 
  Layers, 
  CheckCircle2, 
  Building2, 
  Info, 
  Share2, 
  PhoneCall, 
  ExternalLink,
  ZoomIn,
  X
} from "lucide-react";
import { getElevatorSingleTable } from "../data/elevatorMaster";
import { assetUrl } from "../utils/assetPath";
import { companyData } from "../data/companyData";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";

const ARCHITECT_MODELS = [
  {
    id: "passenger",
    name: "Passenger Elevator",
    tag: "Residential & Commercial",
    badge: "Auto & Manual Doors",
    drawing: assetUrl("/assets/drawings/auto_passenger_technical_drawing.png"),
    planDrawing: assetUrl("/assets/drawings/auto_door_plan.png"),
    elevationDrawing: assetUrl("/assets/drawings/auto_door_elevation.png"),
    description: "Full General Arrangement (GA) hoistway dimensional matrix for residential and commercial multi-story buildings."
  },
  {
    id: "mrl",
    name: "MRL (Machine-Room-Less)",
    tag: "Top-Floor Space Saving",
    badge: "Gearless PMSM",
    drawing: assetUrl("/assets/drawings/mrl_technical_drawing.png"),
    planDrawing: assetUrl("/assets/drawings/mrl_liftwell_plan.png"),
    elevationDrawing: assetUrl("/assets/drawings/mrl_section_elevation.png"),
    description: "Compact architectural design eliminating rooftop machine room penthouse structures. Motor mounts directly on guide rails."
  },
  {
    id: "home",
    name: "Private Home & Villa Lift",
    tag: "Low Pit / Low Overhead",
    badge: "Single-Phase 220V",
    drawing: assetUrl("/assets/drawings/home_technical_drawing.png"),
    planDrawing: assetUrl("/assets/drawings/home_plan.png"),
    elevationDrawing: assetUrl("/assets/drawings/home_elevation.png"),
    description: "Engineered for luxury bungalows and duplexes with shallow 450-550mm pit depths and low headroom."
  },
  {
    id: "capsule",
    name: "Capsule / Panoramic",
    tag: "Circular & Polygon Glass",
    badge: "Curved Laminated Glass",
    drawing: assetUrl("/assets/drawings/capsule_technical_drawing.png"),
    planDrawing: assetUrl("/assets/drawings/capsule_option_a_plan.png"),
    elevationDrawing: assetUrl("/assets/drawings/capsule_option_b_plan.png"),
    description: "Scenic glass elevators for hotel atriums, malls, and prestigious villas with custom circular or geometric hoistway glass."
  },
  {
    id: "hospital",
    name: "Hospital Bed & Stretcher",
    tag: "Extra-Deep 2400mm Car",
    badge: "Precision Jerk-Free",
    drawing: assetUrl("/assets/drawings/hospital_technical_drawing.png"),
    planDrawing: assetUrl("/assets/drawings/hospital_plan.png"),
    elevationDrawing: assetUrl("/assets/drawings/hospital_elevation.png"),
    description: "Longitudinal deep cabins accommodating standard hospital beds, stretchers, medical personnel, and oxygen equipment."
  },
  {
    id: "goods",
    name: "Goods & Freight Hoist",
    tag: "Up to 4000 kg Payload",
    badge: "Heavy Structural Steel",
    drawing: assetUrl("/assets/drawings/goods_technical_drawing.png"),
    planDrawing: assetUrl("/assets/drawings/goods_plan.png"),
    elevationDrawing: assetUrl("/assets/drawings/goods_elevation.png"),
    description: "Heavy-tonnage cargo elevators with bi-parting steel doors, structural counterweighting, and high axle-load resistance."
  },
  {
    id: "hydraulic",
    name: "Hydraulic Elevator",
    tag: "Heavy Lifting & Low Overhead",
    badge: "Direct / Roped Ram",
    drawing: assetUrl("/assets/drawings/hydraulic_technical_drawing.png"),
    planDrawing: assetUrl("/assets/drawings/hydraulic_center_bore_plan.png"),
    elevationDrawing: assetUrl("/assets/drawings/hydraulic_roping_plan.png"),
    description: "Hydraulic cylinder drive with ground-level machine box, zero roof loads, and smooth silent travel."
  },
  {
    id: "car",
    name: "Car & Automobile Lift",
    tag: "Vehicular Parking & Transport",
    badge: "Dual-Side Drive-Through",
    drawing: assetUrl("/assets/drawings/car_elevator_technical_drawing.png"),
    planDrawing: assetUrl("/assets/drawings/car_elevator_plan.png"),
    elevationDrawing: assetUrl("/assets/drawings/car_elevator_elevation.png"),
    description: "Heavy-duty vehicle platforms for automated multi-level parking, car showrooms, and commercial basements."
  }
];

export default function ArchitectsCorner({ onOpenBrochurePage }) {
  const [selectedModelId, setSelectedModelId] = useState("passenger");
  const [activeDrawingView, setActiveDrawingView] = useState("ga"); // "ga", "plan", "elevation"
  const [zoomModalImage, setZoomModalImage] = useState(null);
  const [filterDoorSystem, setFilterDoorSystem] = useState("all");

  const currentModel = ARCHITECT_MODELS.find((m) => m.id === selectedModelId) || ARCHITECT_MODELS[0];
  const tableData = getElevatorSingleTable(selectedModelId) || getElevatorSingleTable("passenger");

  // Filter rows if doorSystem is relevant
  const filteredRows = tableData.rows.filter((row) => {
    if (filterDoorSystem === "all") return true;
    if (!row.doorSystem) return true;
    return row.doorSystem.toLowerCase().includes(filterDoorSystem.toLowerCase());
  });

  const getActiveDrawing = () => {
    if (activeDrawingView === "plan") return currentModel.planDrawing;
    if (activeDrawingView === "elevation") return currentModel.elevationDrawing;
    return currentModel.drawing;
  };

  const cadRequestMessage = encodeURIComponent(
    `Hello Krupa Elevators, I am an Architect/Engineer. I need the AutoCAD .DWG file and civil structural layout for your ${currentModel.name}. Please connect me with your CAD design team.`
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Seo
        title="Elevator Civil Drawings & AutoCAD GA Layouts in Ahmedabad | Krupa Elevators"
        description="AutoCAD hoistway layouts, civil dimension tables, and structural load charts for architects and civil engineers in Ahmedabad and Gujarat by Krupa Elevators."
        keywords="elevator civil drawings, lift shaft AutoCAD DWG Ahmedabad, hoistway dimension matrix, elevator architect guide Gujarat"
      />

      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Architects & CAD Hub" }
        ]}
        icon={Compass}
        badge="Architects & Structural Engineers Hub"
        title="Civil Shaft Dimensions & Technical Drawings"
        description="Official hoistway specifications. Designed for architectural planning, structural beam calculations, clear pit depths, and machine-room layout drafting."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={companyData.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              <Download className="w-4 h-4 text-brand-orange" />
              <span>Download 12-Page CAD Brochure</span>
            </a>
            <a
              href={`https://wa.me/${companyData.contacts.whatsapp}?text=${cadRequestMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Request AutoCAD DWG File</span>
            </a>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">

        {/* Model Tabs Selector */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-teal" />
              <span>Select Elevator Model</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">8 Standard Classes</span>
          </div>

          {/* Model Tabs Selector: Swipeable on mobile, Grid on desktop */}
          <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-8 overflow-x-auto no-scrollbar gap-2 sm:gap-2.5 pb-1 touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
            {ARCHITECT_MODELS.map((model) => {
              const isSelected = model.id === selectedModelId;
              return (
                <button
                  key={model.id}
                  onClick={() => {
                    setSelectedModelId(model.id);
                    setFilterDoorSystem("all");
                  }}
                  className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between cursor-pointer shrink-0 min-w-[130px] sm:min-w-0 active:scale-95 ${
                    isSelected
                      ? "bg-slate-900 border-brand-teal text-white shadow-md ring-1 ring-brand-teal"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/50"
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${isSelected ? "text-brand-teal" : "text-brand-orange"}`}>
                    {model.tag.split(" ")[0]}
                  </span>
                  <span className="text-xs font-bold leading-snug line-clamp-2">
                    {model.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Workspace: Left Drawing Preview (5 cols), Right Specifications (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left: Technical Drawing Sheet (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-4 relative lg:sticky lg:top-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{currentModel.name}</h3>
                <span className="text-xs text-slate-500 font-mono">General Arrangement Drawing</span>
              </div>
              
              {/* Drawing View Switcher */}
              <div className="flex self-start sm:self-auto bg-slate-100 p-1 rounded-xl text-xs font-semibold whitespace-nowrap">
                <button
                  onClick={() => setActiveDrawingView("ga")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeDrawingView === "ga" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  GA Plan
                </button>
                <button
                  onClick={() => setActiveDrawingView("plan")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeDrawingView === "plan" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Hoistway
                </button>
                <button
                  onClick={() => setActiveDrawingView("elevation")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeDrawingView === "elevation" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Elevation
                </button>
              </div>
            </div>

            {/* Drawing Image Area with Zoom Button */}
            <div className="relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center p-4 min-h-[300px] sm:min-h-[380px] group">
              <img
                src={getActiveDrawing()}
                alt={`${currentModel.name} Architectural Drawing`}
                className="max-h-[340px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              
              <button
                onClick={() => setZoomModalImage(getActiveDrawing())}
                className="absolute bottom-3 right-3 bg-slate-900/90 hover:bg-brand-teal text-white p-2.5 rounded-xl shadow-lg border border-slate-700/80 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                title="Zoom Full High-Resolution Schematic"
              >
                <ZoomIn className="w-4 h-4" />
                <span>Enlarge</span>
              </button>
            </div>

            {/* Dimensional Legend Breakdown */}
            {tableData.legend && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs space-y-1.5">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block mb-1">
                  Architectural Legend (mm)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-slate-600">
                  {Object.entries(tableData.legend).map(([key, val]) => (
                    <div key={key} className="flex items-baseline space-x-1">
                      <span className="font-mono font-bold text-brand-orange">{key}:</span>
                      <span title={val}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CAD Team Direct Assistance */}
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-teal-900 block">Custom Shaft Geometry?</span>
                <span className="text-teal-700 text-[11px]">Our CAD team provides bespoke GA layouts.</span>
              </div>
              <a
                href={`tel:${companyData.contacts.phoneRaw}`}
                className="px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs"
              >
                Call Engineer
              </a>
            </div>
          </div>

          {/* Right: Full Specifications Matrix Table (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Table Header & Optional Filters */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{tableData.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{tableData.subtitle}</p>
                </div>

                {/* Filter for models with Automatic vs Manual door types */}
                {selectedModelId === "passenger" && (
                  <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl text-xs">
                    <button
                      onClick={() => setFilterDoorSystem("all")}
                      className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                        filterDoorSystem === "all" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600"
                      }`}
                    >
                      All ({tableData.rows.length})
                    </button>
                    <button
                      onClick={() => setFilterDoorSystem("automatic")}
                      className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                        filterDoorSystem === "automatic" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600"
                      }`}
                    >
                      Auto Door
                    </button>
                    <button
                      onClick={() => setFilterDoorSystem("manual")}
                      className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                        filterDoorSystem === "manual" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600"
                      }`}
                    >
                      Manual Door
                    </button>
                  </div>
                )}
              </div>

              {/* Scrollable Technical Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                      {tableData.columns.map((col) => (
                        <th key={col.key} className="py-3 px-3 border border-slate-800 whitespace-nowrap">
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredRows.map((row, rIdx) => (
                      <tr 
                        key={rIdx} 
                        className={`hover:bg-teal-50/50 transition-colors ${
                          rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        }`}
                      >
                        {tableData.columns.map((col) => {
                          const val = row[col.key];
                          const isHighlighted = col.key === "persons" || col.key === "shaftSize";
                          return (
                            <td 
                              key={col.key} 
                              className={`py-2.5 px-3 border border-slate-200/60 whitespace-nowrap ${
                                isHighlighted ? "font-bold text-slate-900" : "text-slate-600"
                              }`}
                            >
                              {val ?? "—"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Engineering Compliance Notes */}
              {tableData.notes && (
                <div className="space-y-1 pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
                  {tableData.notes.map((n, i) => (
                    <div key={i} className="flex items-start space-x-1.5">
                      <span className="text-brand-orange font-bold">&bull;</span>
                      <span>{n}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Civil Engineering Structural Checklist Callout */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 shadow-md border border-slate-700 space-y-4">
              <div className="flex items-center space-x-2 text-brand-orange">
                <Ruler className="w-5 h-5" />
                <h4 className="font-bold text-sm uppercase tracking-wider">
                  Civil Engineering Pre-Requisites Checklist
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span><strong>Plumb Hoistway:</strong> True vertical plumb tolerance of ±25mm over entire building travel height.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span><strong>Pit Waterproofing:</strong> 100% dry, water-tight pit with sump pit provision per municipal regulations.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span><strong>Separator Beams:</strong> ISMB steel separator beams at every 2500 mm floor interval for multi-car shafts.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span><strong>Machine Room Hook:</strong> Heavy-duty I-beam lifting hook tested to 2000 kg mounted in ceiling slab.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* High-Resolution Schematic Lightbox Modal */}
      {zoomModalImage && (
        <div className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-6 max-w-5xl w-full max-h-[90vh] flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-white">
              <span className="font-bold text-sm">{currentModel.name} — High-Resolution Schematic</span>
              <button
                onClick={() => setZoomModalImage(null)}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-auto flex items-center justify-center p-4 my-2">
              <img
                src={zoomModalImage}
                alt="Enlarged schematic"
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
              <span>AutoCAD General Arrangement Layout</span>
              <a
                href={zoomModalImage}
                download={`${currentModel.id}_technical_drawing.png`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-teal text-white font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Image</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
