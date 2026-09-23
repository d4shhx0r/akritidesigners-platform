import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { ArrowUpRight, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-950/20">
      {/* Visual Image Container with aspect ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category Badge Top Left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-sky-300">
            {project.category}
          </span>
        </div>

        {/* Plan / Detailing indicator Top Right */}
        {project.cadPlan && (
          <div className="absolute top-3 right-3 z-10">
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-zinc-950/80 backdrop-blur-md border border-sky-500/30 text-zinc-300 flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-sky-400" />
              <span>CAD Plan Attached</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content & Metadata */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs text-zinc-500">
            <span>PROJECT REF: {project.id.toUpperCase().slice(0, 10)}</span>
            <span className="text-sky-400">STATUS: DOCUMENTED</span>
          </div>

          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-sky-300 transition-colors tracking-tight">
            <Link href={`/projects/${project.slug}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Specs Pill List */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Full Specs Available</span>
          </div>

          <div className="flex items-center gap-1 text-sky-400 font-semibold group-hover:translate-x-0.5 transition-transform">
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </article>
  );
}
