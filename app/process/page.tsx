import React from "react";
import { processSteps } from "@/lib/data/process";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Integrated Design & Engineering Process",
  description:
    "Our 6-stage methodology from site analysis and 2D planning to 3D visualization, AutoCAD working drawings, and BOQ estimation.",
};

export default function ProcessPage() {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-sky-400 mb-4">
            <span className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/20 text-sky-300 font-semibold">
              METHODOLOGY {"//"} STANDARD OPERATING PROCEDURE
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-zinc-400">06 STAGES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            How We Execute Projects.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Great architecture requires methodical rigor. We follow a 6-stage phased framework ensuring client collaboration at every critical design milestone before advancing to working documentation.
          </p>
        </div>

        {/* 6-Stage Timeline List */}
        <div className="space-y-12 sm:space-y-16">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-10 lg:p-12 hover:border-zinc-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Stage Header */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-sky-400 px-3 py-1 rounded bg-sky-950/70 border border-sky-500/30">
                      PHASE {step.step}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      STEP 0{idx + 1} OF 06
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                    {step.title}
                  </h2>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Sub-steps and Deliverables */}
                <div className="lg:col-span-8 space-y-6 lg:pl-8 lg:border-l lg:border-zinc-800">
                  <div>
                    <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
                      Activities &amp; Quality Checks:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Formal Output Block */}
                  <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase">
                        PHASE MILESTONE OUTPUT:
                      </span>
                      <span className="text-sky-300 font-bold text-sm">
                        {step.output}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-400 text-center">
                      CLIENT SIGN-OFF REQUIRED
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            Ready to initiate Stage 01 for your project?
          </h3>
          <p className="text-sm text-zinc-400">
            Share your plot dimensions or architectural scope for an initial feasibility review.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Begin Stage 01 Discovery
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
