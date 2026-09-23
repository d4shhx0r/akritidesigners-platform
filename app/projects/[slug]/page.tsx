import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data/projects";
import { PlanToRenderSlider } from "@/components/ui/PlanToRenderSlider";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2, Ruler } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-sky-300 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-sky-400 mb-4">
            <span className="px-2.5 py-1 rounded bg-sky-950/70 border border-sky-500/30 uppercase font-semibold">
              {project.category}
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-zinc-500">REF: {project.id.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Visual Container */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-16 shadow-2xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
        </div>

        {/* Specifications & Scope Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Column: Design Intent & Scope */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold mb-3">
                01 // DESIGN &amp; TECHNICAL INTENT
              </div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Overview &amp; Spatial Strategy
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold mb-3">
                02 // DELIVERED SCOPE
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-4">
                Consultancy Deliverables
              </h3>
              <ul className="space-y-3">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Project Technical Specs Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider border-b border-zinc-800 pb-3">
              <Ruler className="w-4 h-4 text-sky-400" />
              <span>Technical Specifications</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {project.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800/60 pb-3 gap-1">
                  <span className="text-zinc-500 uppercase">{spec.label}:</span>
                  <span className="text-zinc-200 font-semibold sm:text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md" className="w-full" withArrow>
                Request Similar Proposal
              </Button>
            </div>
          </div>

        </div>

        {/* Plan to Render Comparison (if available) */}
        {project.renderComparison && (
          <div className="mb-20">
            <div className="mb-6 font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold">
              03 // COMPARATIVE CAD TO CGI ANALYSIS
            </div>
            <PlanToRenderSlider
              blueprintImage={project.renderComparison.blueprint}
              renderImage={project.renderComparison.render}
              title={project.renderComparison.title}
            />
          </div>
        )}

        {/* Gallery of Authentic Drawings & Renders */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold mb-2">
                04 // PROJECT SHEETS &amp; VISUALS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100">
                Detailed Drawing &amp; Render Plates
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((item, gIdx) => (
              <div
                key={gIdx}
                className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <div className="relative aspect-[16/10] w-full bg-zinc-950">
                  <Image
                    src={item.url}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-[10px] font-mono uppercase text-sky-300">
                      {item.type}
                    </span>
                  </div>
                </div>

                <div className="p-4 font-mono text-xs text-zinc-400">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            Inspired by this project?
          </h3>
          <p className="text-sm text-zinc-400">
            Let&apos;s evaluate your site dimensions, architectural goals, and structural requirements.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Start Project Inquiry
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
