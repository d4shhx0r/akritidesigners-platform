import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Ruler, ShieldAlert, FileSpreadsheet, Eye, Sparkles, Network } from "lucide-react";

const principles = [
  {
    icon: Network,
    title: "Unified Architectural & Structural Workflow",
    desc: "We don't design in a vacuum. Interior volumes, exterior massing, and structural column-beam grids are coordinated simultaneously, eliminating costly on-site clashes."
  },
  {
    icon: Ruler,
    title: "Millimeter-Accurate Technical Detailing",
    desc: "Every elevation, section cut, and millwork sheet is drafted with precise dimensions, material annotations, and Good-For-Construction standards."
  },
  {
    icon: Eye,
    title: "Photorealistic 3D Certainty",
    desc: "Clients and builders visualize light, textures, reflections, and spatial flow before procurement begins, preventing costly revisions after construction starts."
  },
  {
    icon: FileSpreadsheet,
    title: "Transparent BOQ & Cost Control",
    desc: "Clear Bill of Quantities (BOQ) and item-rate takeoffs calculated directly from drawings, giving you leverage during contractor negotiation and budgeting."
  },
  {
    icon: ShieldAlert,
    title: "Bylaws & Constructability First",
    desc: "Designs engineered to comply with statutory setbacks, ventilation norms, and local building bylaws, avoiding municipal delays and structural compromise."
  },
  {
    icon: Sparkles,
    title: "Direct Designer-Engineer Collaboration",
    desc: "Work directly with technical professionals who understand AutoCAD DWG standards, SketchUp modeling, and structural detailing firsthand."
  }
];

export function WhyAkriti() {
  return (
    <section className="relative py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80 overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          tag="THE AKRITI DIFFERENCE"
          title="Engineered for Precision. Designed for Living."
          description="We avoid generic templates and superficial aesthetics. Every decision is grounded in constructability, structural feasibility, and transparent cost estimation."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
