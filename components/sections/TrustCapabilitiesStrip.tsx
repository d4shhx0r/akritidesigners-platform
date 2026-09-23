import React from "react";

const capabilities = [
  "INTERIOR ARCHITECTURE",
  "EXTERIOR FACADES",
  "STRUCTURAL PLANNING",
  "AUTOCAD 2D DETAILING",
  "3D VISUALIZATION",
  "SKETCHUP MODELING",
  "QUANTITY & BOQ ESTIMATION",
  "GOOD-FOR-CONSTRUCTION SETS",
  "MUNICIPAL SANCTION DRAWINGS",
  "DESIGN AUDIT & CONSULTATION"
];

export function TrustCapabilitiesStrip() {
  return (
    <div className="relative border-y border-zinc-800/80 bg-zinc-950/80 py-4 overflow-hidden select-none">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      {/* Marquee ticker container */}
      <div className="flex w-full overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap animate-[marquee_35s_linear_infinite]">
          {capabilities.concat(capabilities).map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-mono text-xs text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="tracking-widest font-semibold hover:text-sky-300 transition-colors">
                {item}
              </span>
              <span className="text-zinc-700">{"//"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
