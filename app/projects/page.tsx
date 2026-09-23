import React from "react";
import { projectsData } from "@/lib/data/projects";
import { PortfolioFilter } from "@/components/projects/PortfolioFilter";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Architectural & Interior Portfolio",
  description:
    "Explore authentic case studies executed by Akritidesigners: 2D floor planning, AutoCAD detailing, SketchUp 3D modeling, and photorealistic architectural visualization.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-sky-400 mb-4">
            <span className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/20 text-sky-300 font-semibold">
              DOCUMENTED CASE STUDIES
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-zinc-400">ARCHITECTURAL ARCHIVE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            Portfolio &amp; Selected Works.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Real architectural projects backed by complete working drawings, 3D SketchUp massing models, and high-fidelity CGI visual sets.
          </p>
        </div>

        {/* Portfolio Filter Component */}
        <PortfolioFilter initialProjects={projectsData} />

        {/* Start a Project Box */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            Have a project requiring detailed plans or photorealistic renders?
          </h3>
          <p className="text-sm text-zinc-400">
            Send us your plot dimensions, rough sketch, or existing CAD file for a structured technical consultation.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Submit Project Details
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
