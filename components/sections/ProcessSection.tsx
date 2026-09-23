import React from "react";
import { processSteps } from "@/lib/data/process";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProcessSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-zinc-950/70 border-b border-zinc-800/80 overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            number="07"
            tag="DELIVERY METHODOLOGY"
            title="The 6-Stage Integrated Process."
            description="How we shepherd an architectural vision from blank site survey to millimeter-precise construction documentation and cost control."
          />
          <div className="mb-12 hidden md:block">
            <Button href="/process" variant="outline" size="md" withArrow>
              Detailed Process Breakdown
            </Button>
          </div>
        </div>

        {/* 6-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 hover:border-sky-500/40 hover:bg-zinc-900/70 transition-all duration-300 group"
            >
              <div>
                {/* Step Number + Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-sky-400 px-2.5 py-1 rounded bg-sky-950/60 border border-sky-500/30">
                    STAGE {step.step}
                  </span>
                  <span className="font-mono text-xs text-zinc-600">
                    0{idx + 1} / 06
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-sky-300 transition-colors tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>

                {/* Sub-steps */}
                <div className="mt-6 space-y-2">
                  {step.details.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output Tag */}
              <div className="mt-6 pt-4 border-t border-zinc-800 font-mono text-xs">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">
                  Deliverable Output:
                </div>
                <div className="text-sky-300 font-semibold truncate">
                  {step.output}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Button href="/process" variant="outline" size="lg" className="w-full">
            Explore Full Methodology
          </Button>
        </div>
      </div>
    </section>
  );
}
