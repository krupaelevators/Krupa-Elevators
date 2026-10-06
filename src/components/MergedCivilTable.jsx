import React, { useMemo } from "react";

/**
 * MergedCivilTable
 * 
 * Renders an HTML table where consecutive rows with identical values in any column
 * are merged using `rowSpan`. Ensures 100% syntactically valid HTML table structure.
 * 
 * @param {string[]} headers - Array of column header titles
 * @param {string[][]} rows - 2D array of row strings [rowIndex][colIndex]
 * @param {string} [className] - Optional container CSS class
 */
export default function MergedCivilTable({ headers = [], rows = [], className = "" }) {
  // Precompute rowSpan matrix: rowSpanMap[colIndex][rowIndex] = { span: number, skip: boolean }
  const rowSpanMap = useMemo(() => {
    const numRows = rows.length;
    const numCols = headers.length;
    const map = Array.from({ length: numCols }, () =>
      Array.from({ length: numRows }, () => ({ span: 1, skip: false }))
    );

    for (let c = 0; c < numCols; c++) {
      let r = 0;
      while (r < numRows) {
        const val = rows[r]?.[c];
        // Don't merge empty or dash placeholders
        if (!val || val === "-" || val === "—") {
          r++;
          continue;
        }

        let count = 1;
        while (r + count < numRows && rows[r + count]?.[c] === val) {
          count++;
        }

        if (count > 1) {
          map[c][r] = { span: count, skip: false };
          for (let k = 1; k < count; k++) {
            map[c][r + k] = { span: 0, skip: true };
          }
          r += count;
        } else {
          r++;
        }
      }
    }

    return map;
  }, [headers, rows]);

  if (!headers.length || !rows.length) {
    return (
      <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-slate-200">
        No dimension matrix rows available.
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      {/* Mobile Swipe Hint Banner */}
      <div className="sm:hidden flex items-center justify-between text-[11px] font-semibold text-brand-teal bg-teal-50/90 px-3 py-1.5 rounded-xl border border-teal-100">
        <span>↔ Swipe horizontally to view all dimensions</span>
        <span className="text-[10px] text-teal-700 font-mono font-bold">Scroll Table</span>
      </div>

      <div className={`overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white touch-pan-x ${className}`}>
        <table className="w-full text-left text-xs border-collapse min-w-[620px]">
        <thead>
          <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 divide-x divide-slate-200/60">
            {headers.map((h, i) => (
              <th
                key={i}
                className="py-2.5 px-3 whitespace-nowrap text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100/90"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/80 bg-white">
          {rows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className="hover:bg-teal-50/30 transition-colors divide-x divide-slate-200/60"
            >
              {row.map((cell, cIdx) => {
                const cellInfo = rowSpanMap[cIdx]?.[rIdx];
                if (cellInfo?.skip) {
                  return null; // Omit TD because a previous row spanned over it
                }

                const span = cellInfo?.span || 1;
                const isMerged = span > 1;
                const isPrimaryCol = cIdx === 0;

                return (
                  <td
                    key={cIdx}
                    rowSpan={span > 1 ? span : undefined}
                    className={`py-2 px-3 align-middle text-xs transition-colors ${
                      isMerged
                        ? "bg-slate-50/70 font-semibold text-slate-800 text-center border-b border-slate-200"
                        : isPrimaryCol
                        ? "font-bold text-slate-900 bg-slate-50/40"
                        : "text-slate-700"
                    }`}
                  >
                    <span className={isMerged ? "inline-block px-1 py-0.5 rounded bg-white/90 shadow-2xs border border-slate-200/80 font-bold text-slate-800" : ""}>
                      {cell}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
