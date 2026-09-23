import React from "react";
import { Button } from "@/components/ui/Button";
import { Compass } from "lucide-react";

export const metadata = {
  title: "404 // Coordinate Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-28 pb-16 bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      {/* Decorative coordinate watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-mono text-[140px] sm:text-[220px] font-black text-zinc-900/60 leading-none">
          404
        </span>
      </div>

      <div className="relative max-w-xl mx-auto px-4 text-center z-10 space-y-6">
        {/* Technical Coordinate Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sky-400 font-mono text-xs uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>ERROR 404 // COORDINATE UNMAPPED</span>
        </div>

        {/* Editorial Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
          This Space Doesn&apos;t Exist.
        </h1>

        {/* Architectural Explanatory Copy */}
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
          The requested architectural sheet or URL coordinate has either been relocated, re-indexed in our master CAD directory, or never existed in the spatial masterplan.
        </p>

        {/* Technical Datum Box */}
        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 font-mono text-xs text-zinc-500 max-w-sm mx-auto space-y-1">
          <div>DATUM: LAT 00°00&apos;00&quot; // LONG 00°00&apos;00&quot;</div>
          <div>STATUS: UNREFERENCED VOID</div>
        </div>

        {/* Return Home Action */}
        <div className="pt-2">
          <Button href="/" variant="primary" size="lg" withArrow>
            Return to Masterplan (Home)
          </Button>
        </div>
      </div>
    </div>
  );
}
