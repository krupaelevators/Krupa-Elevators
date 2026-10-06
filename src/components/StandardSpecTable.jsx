import React from "react";
import { SlidersHorizontal, CheckCircle2 } from "lucide-react";

/**
 * StandardSpecTable
 * Standardized specification table matching the architectural schema across all elevator models.
 * Ensures strict grounding on engineering data without fabricated numbers.
 */
export default function StandardSpecTable({ specs, title = "Standard Technical Specifications", subtitle }) {
  if (!specs) return null;

  const specRows = [
    { label: "Application", value: specs.application, category: "Operational Scope" },
    { label: "Rated Capacity", value: specs.capacity, category: "Payload & Dimensions" },
    { label: "Rated Speed", value: specs.ratedSpeed, category: "Speed & Travel" },
    { label: "Power Supply Voltage", value: specs.voltage, category: "Electrical & Control" },
    { label: "Number of Entrances", value: specs.entrances, category: "Payload & Dimensions" },
    { label: specs.isCarElevator ? "Platform Width (A)" : "Cabin Width (A)", value: specs.carWidth, category: "Payload & Dimensions" },
    { label: specs.isCarElevator ? "Platform Depth (B)" : "Cabin Depth (B)", value: specs.carDepth, category: "Payload & Dimensions" },
    { label: "Pit Depth", value: specs.pitDepth, category: "Civil Shaft Parameters" },
    { label: "Overhead Height", value: specs.overhead, category: "Civil Shaft Parameters" },
    { label: "Door Type & Operation", value: specs.doorType, category: "Door System" },
    { label: "Drive System", value: specs.drive, category: "Traction & Machine" },
    { label: "Control System", value: specs.control, category: "Electrical & Control" },
    { label: "Cabin Lighting", value: specs.lighting, category: "Cabin Ambience" },
    { label: "Emergency Rescue System", value: specs.rescueSystem, category: "Safety & Failsafes" },
    { label: "Remote Monitoring", value: specs.monitoring, category: "Telemetry & Support" },
  ].filter(r => Boolean(r.value));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-brand-teal" />
            <span>Standardized Technical Parameters</span>
          </div>
          <h3 className="text-lg font-black tracking-tight">{title}</h3>
          {subtitle && <p className="text-xs text-slate-300 mt-0.5">{subtitle}</p>}
        </div>
      </div>

      <div className="overflow-x-auto touch-pan-x">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[340px]">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10.5px] sm:text-[11px]">
              <th className="py-2.5 sm:py-3 px-3.5 sm:px-6 w-2/5 sm:w-1/3">Parameter</th>
              <th className="py-2.5 sm:py-3 px-3.5 sm:px-6 w-3/5 sm:w-1/2">Official Specification</th>
              <th className="py-2.5 sm:py-3 px-3.5 sm:px-6 hidden md:table-cell text-right">System Domain</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {specRows.map((row, idx) => (
              <tr 
                key={idx} 
                className={`hover:bg-teal-50/30 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}
              >
                <td className="py-2.5 sm:py-3 px-3.5 sm:px-6 font-semibold text-slate-900 text-xs sm:text-sm">
                  {row.label}
                </td>
                <td className="py-3 px-4 sm:px-6 font-bold text-slate-800">
                  {row.value}
                </td>
                <td className="py-3 px-4 sm:px-6 hidden md:table-cell text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                    {row.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center space-x-1.5">
          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
          <span>Baseline engineering parameters for Krupa elevator manufacturing.</span>
        </div>
        <span className="text-[11px] text-slate-400">Custom civil modifications accommodated on site survey.</span>
      </div>
    </div>
  );
}
