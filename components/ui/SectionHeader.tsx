import React from "react";

interface SectionHeaderProps {
  number: string;
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  number,
  tag,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {/* Technical Index & Tag */}
      <div className={`flex items-center gap-3 mb-4 font-mono text-xs tracking-widest uppercase text-sky-400 ${align === "center" ? "justify-center" : ""}`}>
        <span className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/20 text-sky-300 font-medium">
          {number}
        </span>
        <span className="text-zinc-600">{"//"}</span>
        <span className="text-zinc-400 font-semibold">{tag}</span>
        <div className="h-px w-8 bg-sky-500/30 hidden sm:block" />
      </div>

      {/* Editorial Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
        {title}
      </h2>

      {/* Subtitle / Description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
