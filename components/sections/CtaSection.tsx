import { Compass, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-zinc-950 overflow-hidden">
      {/* Background blueprint grid with central radial glow */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Numbered Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-wider uppercase mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>START COLLABORATION // PROJECT INQUIRY</span>
        </div>

        {/* Editorial Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.1]">
          Ready to translate your architectural concept into buildable reality?
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Whether you need a full turnkey architectural drawing package, bespoke interior styling, or AutoCAD detailing and BOQ cost estimation, our studio is ready to collaborate.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Start Your Project Inquiry
          </Button>
          <Button href="/projects" variant="outline" size="lg">
            Inspect Past Drawing Sets
          </Button>
        </div>

        {/* Reassurance Checklist */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Strict Confidentiality</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct Technical Communication</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Bylaws & Vastu Feasibility</span>
          </div>
        </div>
      </div>
    </section>
  );
}
