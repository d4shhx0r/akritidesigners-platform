import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, CheckCircle2, ShieldCheck, Ruler } from "lucide-react";

export function StudioIntro() {
  return (
    <section className="relative py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80 overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Numbered Badge & Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-sky-400">
              <span className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/20 text-sky-300 font-semibold">
                02
              </span>
              <span className="text-zinc-600">{"//"}</span>
              <span className="text-zinc-400">STUDIO ETHOS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              Where design vision meets structural rigor.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              At Akritidesigners, we believe that an architectural concept is only as strong as its technical documentation. Too many designs fail on site due to lack of coordination, vague drawings, and uncontrolled budgets.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We operate as a single unified consultancy: uniting space planning, 3D photorealistic visualization, structural column grids, AutoCAD millwork detailing, and itemized Bill of Quantities (BOQ). The result is zero ambiguity on site and complete peace of mind for clients, builders, and developers.
            </p>

            <div className="pt-4 flex items-center gap-6 font-mono text-xs text-zinc-300">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold uppercase tracking-wider transition-colors group"
              >
                <span>Read Studio Philosophy</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Ruler className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                Precision Detailing
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Millimeter-accurate 2D working drawings with explicit structural axes and fabrication sheets.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                Constructible Design
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Spaces designed for real-world constructability, bylaws compliance, and material efficiency.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                Financial Control
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Itemized Bill of Quantities (BOQ) preventing budget overruns and contractor friction.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                Photoreal CGI
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                True-to-life 3D renders that eliminate guesswork before construction starts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
