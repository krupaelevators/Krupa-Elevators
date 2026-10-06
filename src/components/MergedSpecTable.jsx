import React from "react";
import { Info } from "lucide-react";

/**
 * MergedSpecTable
 * 
 * Renders a technical specification table where adjacent cells
 * with identical values in a column are intelligently merged using `rowSpan`.
 * Guarantees ONLY ONE unified table per elevator model without filters or toggles.
 */
export default function MergedSpecTable({ tableData }) {
  if (!tableData) return null;

  const { title, subtitle, legend, notes, columns, rows } = tableData;

  // Detect group partition key if present (doorSystem, option, config, suspension, doorConfig)
  const partitionKey =
    columns.find((c) =>
      ["doorSystem", "option", "config", "suspension", "doorConfig"].includes(c.key)
    )?.key || null;

  // Compute rowSpan matrix for every cell: spans[rowIndex][colKey]
  const spans = rows.map(() => ({}));

  columns.forEach((col) => {
    let r = 0;
    while (r < rows.length) {
      const currentVal = rows[r][col.key];
      const currentPartition = partitionKey ? rows[r][partitionKey] : null;

      // Never merge individual capacities or primary keys if they are distinct
      if (
        currentVal === null ||
        currentVal === undefined ||
        currentVal === "" ||
        currentVal === "—"
      ) {
        spans[r][col.key] = 1;
        r++;
        continue;
      }

      let count = 1;
      while (
        r + count < rows.length &&
        rows[r + count][col.key] === currentVal &&
        (!partitionKey || rows[r + count][partitionKey] === currentPartition)
      ) {
        count++;
      }

      spans[r][col.key] = count;
      for (let k = 1; k < count; k++) {
        spans[r + k][col.key] = 0; // 0 indicates cell will not be rendered (covered by rowSpan)
      }
      r += count;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header Info */}
      {/* <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
            Standard Engineering Matrix
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shrink-0">
          <Info className="w-4 h-4 text-brand-orange" />
          <span>Dimensions in mm</span>
        </div>
      </div> */}

      {/* Architectural Dimension Key / Legend Badges */}
      {legend && Object.keys(legend).length > 0 && (
        <div className="flex flex-wrap gap-2 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs">
          {Object.entries(legend).map(([letter, desc]) => (
            <div
              key={letter}
              className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 flex items-center space-x-1.5"
            >
              <span className="font-mono font-black text-brand-teal">{letter}:</span>
              <span className="text-slate-600 text-[11px]">{desc}</span>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Swipe Hint Banner */}
      <div className="sm:hidden flex items-center justify-between text-[11px] font-semibold text-brand-teal bg-teal-50/90 px-3 py-1.5 rounded-xl border border-teal-100">
        <span>↔ Swipe horizontally to view full matrix</span>
      </div>

      {/* Merged Table Container */}
      <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs touch-pan-x">
        <table className="min-w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white font-bold border-b border-slate-800">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="py-3.5 px-3.5 whitespace-nowrap text-left font-bold border-r border-slate-800 last:border-r-0"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/70 hover:bg-teal-50/30"}
              >
                {columns.map((col) => {
                  const span = spans[rIdx][col.key];
                  if (span === 0) return null; // skipped cell merged into upper row

                  const val = row[col.key];
                  const isKeyCol = [
                    "doorSystem",
                    "option",
                    "config",
                    "suspension",
                    "doorConfig",
                    "persons",
                    "person",
                    "loadKg",
                    "capacityKg",
                    "parameter"
                  ].includes(col.key);
                  const isDimension =
                    col.key.includes("Size") ||
                    col.key.includes("car") ||
                    col.key.includes("shaft") ||
                    col.key.includes("well") ||
                    col.key.includes("platform");
                  const isMerged = span > 1;

                  return (
                    <td
                      key={col.key}
                      rowSpan={span > 1 ? span : undefined}
                      className={`py-3 px-3.5 whitespace-nowrap border-r border-slate-100 last:border-r-0 align-middle ${isMerged
                        ? "bg-slate-50/90 font-bold text-slate-900 border-l border-r border-slate-200 text-center"
                        : ""
                        } ${isKeyCol && !isMerged
                          ? "font-bold text-slate-900 font-mono"
                          : isDimension
                            ? "font-semibold text-brand-teal font-mono"
                            : "text-slate-700 font-mono"
                        }`}
                    >
                      {val !== null && val !== undefined ? String(val) : "—"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Official Brochure Engineering Notes */}
      {notes && notes.length > 0 && (
        <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1">
          <div className="font-bold flex items-center space-x-1.5 text-[11px] uppercase tracking-wider text-amber-800">
            <Info className="w-3.5 h-3.5" />
            <span>Engineering Notes & Civil Standards:</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 text-[11px] text-amber-900/90 pl-1">
            {notes.map((note, nIdx) => (
              <li key={nIdx}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
