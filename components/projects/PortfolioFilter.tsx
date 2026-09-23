"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface PortfolioFilterProps {
  initialProjects: Project[];
}

const categories = [
  { id: "all", label: "All Works" },
  { id: "architecture", label: "Architecture" },
  { id: "interior", label: "Interior Architecture" },
  { id: "exterior", label: "Exterior Elevations" },
  { id: "cad", label: "CAD Working Drawings" }
];

export function PortfolioFilter({ initialProjects }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-zinc-800 pb-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? "bg-sky-500 text-zinc-950 font-bold shadow-lg shadow-sky-500/20"
                  : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
              }`}
            >
              {cat.label}
              {cat.id !== "all" && (
                <span className="ml-2 opacity-60 text-[10px]">
                  ({initialProjects.filter((p) => p.category === cat.id).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center font-mono text-sm text-zinc-500">
          No projects found in this discipline category.
        </div>
      )}
    </div>
  );
}
