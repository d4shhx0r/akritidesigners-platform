import React from "react";

interface TechnicalGridProps {
  children?: React.ReactNode;
  className?: string;
  withCoordinates?: boolean;
}

export function TechnicalGrid({
  children,
  className = "",
  withCoordinates = true,
}: TechnicalGridProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background CAD Grid */}
      <div className="absolute inset-0 architectural-grid opacity-75 pointer-events-none" />

      {/* Radial vignette mask to fade edges smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950 pointer-events-none" />

      {/* Architectural Axis Coordinates */}
      {withCoordinates && (
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-4 left-6 font-mono text-[10px] text-zinc-600 tracking-widest hidden sm:block">
            LAT: 28°36&apos;N // LONG: 77°12&apos;E // ELEV: +216M
          </div>
          <div className="absolute top-4 right-6 font-mono text-[10px] text-zinc-600 tracking-widest hidden sm:block">
            GRID: 1:100 SCALE // ISO-216
          </div>
          <div className="absolute bottom-4 left-6 font-mono text-[10px] text-zinc-700 tracking-widest hidden md:block">
            AKRITI DESIGN STUDIOS // SYSTEM DATUM 0.00
          </div>
          <div className="absolute bottom-4 right-6 font-mono text-[10px] text-zinc-700 tracking-widest hidden md:block">
            SECTION: ARCH-2026 // REV-04
          </div>
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
