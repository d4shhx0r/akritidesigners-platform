import React from "react";
import { projectsData } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative py-20 sm:py-28 bg-zinc-950/60 border-b border-zinc-800/80 overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            number="05"
            tag="PORTFOLIO & CASE STUDIES"
            title="Evidence of Execution."
            description="Explore authentic architectural case studies executed by Akritidesigners, complete with AutoCAD working plans, 3D SketchUp models, and photorealistic CGI."
          />
          <div className="mb-12 hidden md:block">
            <Button href="/projects" variant="outline" size="md" withArrow>
              View Full Portfolio
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Button href="/projects" variant="outline" size="lg" className="w-full">
            View All Projects & Drawings
          </Button>
        </div>
      </div>
    </section>
  );
}
