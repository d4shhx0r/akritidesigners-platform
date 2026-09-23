import React from "react";
import Image from "next/image";
import { Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-zinc-950">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-50 pointer-events-none" />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Coordinate Crosshairs */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-zinc-600 tracking-widest hidden lg:block">
        [SYS.REF: AKRITI-CORE-2026] // SCALE 1:1
      </div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-zinc-600 tracking-widest hidden lg:block">
        [PROJ.DATUM: M2-ARCH-RESIDENCE]
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Architectural Discipline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-sky-400 font-mono text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Architecture • Detailing • 3D Visualization</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-zinc-100 tracking-tight leading-[1.08]">
              Designing Spaces. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-zinc-100 to-amber-200">
                Engineering Possibilities.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
              Akritidesigners is a multidisciplinary design and technical consultancy. We integrate interior and exterior architecture, structural planning, AutoCAD drafting, and cinematic 3D renders into construction-ready reality.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a Project
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                Explore Portfolio
              </Button>
            </div>

            {/* Technical Capability Proof Strip */}
            <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-4 sm:gap-6 font-mono">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-zinc-100">2D + 3D</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">
                  Plan to Photoreal
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-sky-400">100%</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">
                  GFC Working Sets
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400">BOQ</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">
                  Cost Estimation
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Architectural Visual Plate */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Corner Ticks */}
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-2 shadow-2xl backdrop-blur-sm">
                
                {/* Image Frame with Aspect Ratio */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950">
                  <Image
                    src="/projects/m2/exterior-main.png"
                    alt="M2 Residence Contemporary Villa Elevation"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />

                  {/* Top Technical Header on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-zinc-950/85 backdrop-blur-md border border-zinc-700 text-zinc-300">
                      REF: M2-VILLA-01
                    </span>
                    <span className="px-2.5 py-1 rounded bg-sky-950/85 backdrop-blur-md border border-sky-500/40 text-sky-300 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      <span>CGI Render</span>
                    </span>
                  </div>

                  {/* Bottom Technical Spec Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-zinc-200 font-bold">M2 RESIDENCE MASTERPLAN</span>
                      <span className="text-sky-400">G + 1 LEVEL</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Facade elevation with vertical shading louvers and architectural ambient illumination.
                    </p>
                    <div className="flex items-center gap-2 pt-1 font-mono text-[10px] text-zinc-500">
                      <span>CAD: 23 SHEETS</span>
                      <span>•</span>
                      <span>SKETCHUP 3D</span>
                      <span>•</span>
                      <span>BOQ READY</span>
                    </div>
                  </div>
                </div>

                {/* Floating Dimension Tag Badge */}
                <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 shadow-xl font-mono text-xs text-zinc-300">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>Precision Coordinate System</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
