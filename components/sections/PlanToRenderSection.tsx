import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlanToRenderSlider } from "@/components/ui/PlanToRenderSlider";
import { Ruler, Layers, Sparkles } from "lucide-react";

export function PlanToRenderSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-zinc-950/70 border-b border-zinc-800/80 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          tag="VISUAL & TECHNICAL CONTINUITY"
          title="From 2D Blueprint to Photorealistic Form."
          description="Slide across to witness how our AutoCAD floor plans and dimensioned structural grids translate directly into cinematic 3D architectural visualization."
        />

        {/* The Interactive Slider Component */}
        <div className="mt-8">
          <PlanToRenderSlider
            blueprintImage="/cad/architectural-plan-blueprint-1.png"
            renderImage="/projects/m2/exterior-main.png"
            blueprintLabel="AUTOCAD PLAN: LEVEL 00"
            renderLabel="3D CGI: FACADE ELEVATION"
            title="M2 RESIDENCE — ARCHITECTURAL CASE STUDY"
          />
        </div>

        {/* Technical Callout Strip below slider */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-zinc-400">
          <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800 flex items-start gap-3">
            <Ruler className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-zinc-200">1:1 Scale Correlation</div>
              <p className="text-zinc-500 mt-1">Every element in the 3D render corresponds directly to dimensioned AutoCAD axis lines.</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800 flex items-start gap-3">
            <Layers className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-zinc-200">Layer Standardization</div>
              <p className="text-zinc-500 mt-1">Structured layers for walls, openings, electrical, and furniture in DWG format.</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-zinc-200">Physically Accurate Light</div>
              <p className="text-zinc-500 mt-1">Accurate daylight trajectory and artificial lumen calculation in 3D space.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
