import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Compass, Ruler, ShieldCheck, FileCode2 } from "lucide-react";

export const metadata = {
  title: "About Akritidesigners — Studio Philosophy & Standards",
  description:
    "Learn about Akritidesigners: our multidisciplinary approach uniting architectural planning, structural detailing, 3D visualization, and cost estimation.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-sky-400 mb-4">
            <span className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/20 text-sky-300 font-semibold">
              STUDIO PHILOSOPHY
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-zinc-400">PRECISION &amp; CREATIVITY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            Engineering the Art of Space.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Akritidesigners was founded on a singular premise: architectural design and technical engineering should never be separated. When vision and documentation work in harmony, spaces get built faster, cost less, and exceed aesthetic expectations.
          </p>
        </div>

        {/* Narrative & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              Bridging the gap between conceptual rendering and on-site execution.
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              In traditional building workflows, clients frequently suffer a disconnect: a design firm provides dazzling 3D pictures that local contractors cannot decipher, or a drafting team produces rigid 2D layouts that lack aesthetic grace and warmth.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              We operate across the entire continuum. Our team models in 3D SketchUp, renders in photorealistic detail, drafts in millimeter-accurate AutoCAD DWG sets, and calculates itemized Bill of Quantities (BOQ). We understand how wall thicknesses impact plumbing runs, how beam depths dictate false ceiling coves, and how material choices affect the bottom-line budget.
            </p>

            <div className="pt-2 font-mono text-xs text-sky-400 flex items-center gap-4">
              <span>CAD STANDARDS: ISO-216</span>
              <span>•</span>
              <span>3D PIPELINE: V-RAY / ENSCAPE</span>
              <span>•</span>
              <span>BOQ: ITEM-RATE</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
              <Image
                src="/projects/m2/living-primary.png"
                alt="Akritidesigners Interior Execution"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800 font-mono text-xs text-zinc-400">
                <span className="text-zinc-200 font-bold">M2 RESIDENCE INTERIOR SUITE</span> {"//"} LIGHTING &amp; JOINERY INTEGRATION
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Commitments */}
        <div className="mb-24">
          <div className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold mb-8">
            STUDIO CORE VALUES {"//"} THE FOUR ANCHORS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
              <Ruler className="w-6 h-6 text-sky-400" />
              <h3 className="font-mono text-sm font-bold text-zinc-100 uppercase tracking-wider">
                1. Structural Accuracy
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zero arbitrary line drawings. Every plan aligns with column grids, slab cantilevers, and structural feasibility.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
              <Compass className="w-6 h-6 text-sky-400" />
              <h3 className="font-mono text-sm font-bold text-zinc-100 uppercase tracking-wider">
                2. Spatial Ergonomics
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Layouts optimized for human scale, daylight orientation, natural ventilation, and effortless daily circulation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
              <h3 className="font-mono text-sm font-bold text-zinc-100 uppercase tracking-wider">
                3. Cost Transparency
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Itemized BOQ material takeoffs so you know accurate quantities and costs before committing capital.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
              <FileCode2 className="w-6 h-6 text-sky-400" />
              <h3 className="font-mono text-sm font-bold text-zinc-100 uppercase tracking-wider">
                4. Construction-Ready
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Good-For-Construction drawings so explicit that fabricators and site supervisors work without interruption.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-zinc-100">
              Let&apos;s build something exceptional together.
            </h3>
            <p className="text-sm text-zinc-400">
              Residential, commercial, interior renovation, or drafting consultancy.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Start a Conversation
          </Button>
        </div>

      </div>
    </div>
  );
}
