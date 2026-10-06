import React, { useState } from "react";
import {
  Layers,
  Cpu,
  Anchor,
  Minimize2,
  Maximize2,
  Shield,
  DoorClosed,
  ArrowDownCircle,
  ArrowUpCircle,
  Info
} from "lucide-react";

const componentIcons = {
  machine: Cpu,
  controller: Layers,
  hoistRopes: Anchor,
  guideRails: Minimize2,
  counterweight: Maximize2,
  doorSystem: DoorClosed,
  landingDoors: DoorClosed,
  pit: ArrowDownCircle,
  overhead: ArrowUpCircle
};

const componentLabels = {
  machine: "Traction Machine",
  controller: "Microprocessor Controller",
  hoistRopes: "Suspension / Hoist Ropes",
  guideRails: "Machined Steel Guide Rails",
  counterweight: "Counterweight System",
  doorSystem: "Cabin Door Operator System",
  landingDoors: "Landing Entrances & Interlocks",
  pit: "Pit & Buffers",
  overhead: "Overhead Clearance & Safety"
};

export default function ElevatorStructureViewer({ structure, elevatorName, drawingUrl }) {
  const [activeComponent, setActiveComponent] = useState("machine");

  if (!structure) return null;

  const componentKeys = Object.keys(structure);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2 border border-teal-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Annotated Engineering Breakdown</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            {elevatorName} — Structural & Mechanical Components
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Detailed breakdown of the 9 fundamental electro-mechanical sub-assemblies constituting the {elevatorName} hoistway installation.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs text-teal-300 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700 self-start md:self-auto">
          <Info className="w-4 h-4 shrink-0 text-brand-orange" />
          <span>Click any component to inspect specifications</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Interactive Component Navigator (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-50 border-r border-slate-200 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-1">
              Hoistway Sub-Assemblies (Select to View)
            </span>
            {componentKeys.map((key) => {
              const Icon = componentIcons[key] || Layers;
              const isSelected = activeComponent === key;
              const label = componentLabels[key] || key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveComponent(key)}
                  className={`w-full text-left p-3 rounded-2xl flex items-center space-x-3 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-md scale-[1.02] ring-1 ring-brand-teal/40"
                      : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-brand-teal text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold block truncate">
                      {label}
                    </span>
                    <span
                      className={`text-[10px] block truncate ${
                        isSelected ? "text-slate-300" : "text-slate-400"
                      }`}
                    >
                      {structure[key]?.slice(0, 45)}...
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Component Detail & Hoistway Illustration (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          {/* Active Component Card */}
          <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 p-6 rounded-3xl border border-teal-100/80 space-y-4">
            <div className="flex items-center space-x-3">
              {(() => {
                const ActiveIcon = componentIcons[activeComponent] || Layers;
                return (
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center shadow-md">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                );
              })()}
              <div>
                <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider block">
                  Active Component Specification
                </span>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">
                  {componentLabels[activeComponent] || activeComponent}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {structure[activeComponent]}
            </p>

            <div className="pt-3 border-t border-teal-200/60 flex flex-wrap gap-2 text-xs text-slate-600">
              <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                <Shield className="w-3.5 h-3.5 text-brand-orange" />
                <span>100% Factory Certified & Tested</span>
              </div>
            </div>
          </div>

          {/* Hoistway GA Context Drawing Preview */}
          {drawingUrl && (
            <div className="bg-slate-900 rounded-2xl p-4 text-white space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300">
                  Associated Hoistway General Arrangement (GA) Drawing
                </span>
                <span className="text-[10px] text-teal-300 font-mono">
                  All dimensions in mm
                </span>
              </div>
              <div className="bg-white rounded-xl p-3 flex items-center justify-center max-h-56 overflow-hidden">
                <img
                  src={drawingUrl}
                  alt={`${elevatorName} Drawing`}
                  className="max-h-48 object-contain"
                />
              </div>
            </div>
          )}

          {/* Quick Guidance Footer */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-start space-x-2.5">
            <Info className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Engineering Note:</strong> Component specifications vary according to rated speed, travel height, and building civil shaft configurations. Our Ahmedabad engineering team provides customized AutoCAD drawings for structural architects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
