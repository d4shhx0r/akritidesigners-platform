import React from "react";
import { servicesData } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import {
  LayoutDashboard,
  Building2,
  Compass,
  Boxes,
  FileCode2,
  Eye,
  Box,
  Calculator,
  FolderCheck,
  MessageSquareQuote,
  FileSpreadsheet,
  CalendarRange,
  CheckCircle2,
  LucideIcon
} from "lucide-react";

export const metadata = {
  title: "Architectural & Technical Services",
  description:
    "Explore our 12 multidisciplinary disciplines: Interior design, exterior elevations, structural coordination, AutoCAD drafting, 3D visualization, and BOQ estimation.",
};

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Building2,
  Compass,
  Boxes,
  FileCode2,
  Eye,
  Box,
  Calculator,
  FolderCheck,
  MessageSquareQuote,
  FileSpreadsheet,
  CalendarRange,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen">
      {/* Background CAD grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-sky-400 mb-4">
            <span className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/20 text-sky-300 font-semibold">
              SPECIFICATION {"//"} DIRECTORY
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-zinc-400">12 CORE DISCIPLINES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            Integrated Design &amp; Technical Services.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Every architectural project requires both creative spatial clarity and rigorous engineering documentation. We offer 12 specialized services covering the full lifecycle from early concept to construction handover.
          </p>
        </div>

        {/* Services Quick Index Anchors */}
        <div className="mb-16 p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
            QUICK NAVIGATION // JUMP TO SERVICE:
          </div>
          <div className="flex flex-wrap gap-2">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Detailed Services Breakdown */}
        <div className="space-y-16 sm:space-y-24">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Compass;

            return (
              <section
                key={service.id}
                id={service.id}
                className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-10 lg:p-12 scroll-mt-28 hover:border-zinc-700 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-sky-400 px-2.5 py-1 rounded bg-sky-950/70 border border-sky-500/30">
                        {service.number} {"//"} 12
                      </span>
                      <div className="p-2 rounded-lg bg-zinc-800/80 text-sky-400">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-base text-zinc-300 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>

                    <div className="pt-2">
                      <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2">
                        Target Stakeholders:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.audience.map((aud, aIdx) => (
                          <span
                            key={aIdx}
                            className="px-2.5 py-1 rounded bg-zinc-800/70 border border-zinc-700 text-xs text-zinc-300 font-mono"
                          >
                            {aud}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Specifications */}
                  <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l lg:border-zinc-800/80">
                    <div>
                      <div className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold mb-3">
                        DELIVERABLE SPECIFICATIONS:
                      </div>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formats & Handover */}
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                      <div>
                        <span className="text-zinc-500 block text-[10px] uppercase">
                          SOFTWARE &amp; EXPORT FORMATS:
                        </span>
                        <span className="text-zinc-200 font-semibold">
                          {service.formats.join(" • ")}
                        </span>
                      </div>

                      <Button href="/contact" variant="primary" size="sm" withArrow>
                        Inquire Service
                      </Button>
                    </div>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-100">
            Need a custom scope combining multiple disciplines?
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Most projects require a custom mix of 2D planning, 3D visualization, and AutoCAD detailing. We assemble tailored scopes to match your site and budget.
          </p>
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Discuss Custom Scope
          </Button>
        </div>

      </div>
    </div>
  );
}
