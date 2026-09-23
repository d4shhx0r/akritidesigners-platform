"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";

const technicalSheets = [
  {
    id: "plan-ground",
    title: "Ground Floor Architectural Plan",
    sheetNo: "ARCH-PL-01",
    scale: "1:100 @ A1",
    desc: "Primary structural grid, axis coordinates, room dimensions, door/window schedules, and circulation flow.",
    image: "/cad/architectural-plan-blueprint-1.png",
    discipline: "2D Floor Planning"
  },
  {
    id: "detail-stair",
    title: "Structural & Joinery Detailing",
    sheetNo: "ARCH-DT-01",
    scale: "1:20 / 1:10",
    desc: "Good-For-Construction sectional cross-sections, structural beam ties, staircase riser/tread details, and materials.",
    image: "/cad/cad-detailing-blueprint-1.png",
    discipline: "AutoCAD Detailing"
  },
  {
    id: "plan-first",
    title: "First Floor & Balcony Plan",
    sheetNo: "ARCH-PL-02",
    scale: "1:100 @ A1",
    desc: "Master suite layout, balcony setbacks, plumbing drop locations, and terrace drainage slopes.",
    image: "/cad/architectural-plan-blueprint-2.png",
    discipline: "Space Planning"
  },
  {
    id: "detail-elevation",
    title: "Facade Elevation & Window Schedules",
    sheetNo: "ARCH-DT-02",
    scale: "1:50 @ A1",
    desc: "Exterior wall section cuts, louver framing profiles, structural lintel coordinates, and glazing specs.",
    image: "/cad/cad-detailing-blueprint-2.png",
    discipline: "Facade Engineering"
  }
];

export function TechnicalExpertise() {
  const [activeSheet, setActiveSheet] = useState(technicalSheets[0]);

  return (
    <section className="relative py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          tag="TECHNICAL CAD DRAFTING"
          title="The Technical Blueprint Experience."
          description="True architectural excellence lives in the drawing sheets. We produce millimeter-accurate AutoCAD packages that eliminate contractor guesswork on site."
        />

        {/* Interactive Drawing Sheet Tabs & Viewer */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sheet Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2">
              SELECT DRAWING SHEET // GFC SET:
            </div>
            
            {technicalSheets.map((sheet) => {
              const isActive = activeSheet.id === sheet.id;
              return (
                <button
                  key={sheet.id}
                  onClick={() => setActiveSheet(sheet)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 border-sky-500/60 shadow-lg shadow-sky-950/30"
                      : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      {sheet.sheetNo}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">
                      {sheet.scale}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200">{sheet.title}</h4>
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-2">{sheet.desc}</p>
                </button>
              );
            })}

            {/* Technical Checklist */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2.5 text-xs font-mono text-zinc-400">
              <div className="text-zinc-200 font-bold uppercase tracking-wider">
                Drawing Standards Compliance:
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO & AIA CAD Layer Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Millimeter Structural Axis Calibration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Good-For-Construction (GFC) Level Indexing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Blueprint Viewer Screen */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-2 sm:p-3 shadow-2xl">
              
              {/* Top Viewport Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-zinc-200 font-semibold">{activeSheet.sheetNo}</span>
                  <span className="text-zinc-600">{"//"}</span>
                  <span>{activeSheet.discipline}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
                  <span>SCALE {activeSheet.scale}</span>
                  <span>•</span>
                  <span>CAD DWG READY</span>
                </div>
              </div>

              {/* Main Blueprint Image Area */}
              <div className="relative aspect-[16/11] w-full mt-2 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80">
                <Image
                  src={activeSheet.image}
                  alt={activeSheet.title}
                  fill
                  className="object-contain p-2"
                />

                {/* Subtle blueprint cyan line accent overlay */}
                <div className="absolute inset-0 bg-sky-950/20 mix-blend-overlay pointer-events-none" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 font-semibold truncate mr-2">
                    {activeSheet.title}
                  </span>
                  <span className="text-sky-400 font-mono flex-shrink-0">
                    AKRITIDESIGNERS CAD SUITE
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
