import React from "react";
import Link from "next/link";
import { Service } from "@/types";
import {
  LayoutDashboard,
  Building2,
  Compass,
  Boxes,
  FileCode2,
  Eye,
  Box,
  Calculator,
  FolderCheck,
  MessageSquareQuote,
  FileSpreadsheet,
  CalendarRange,
  ArrowUpRight,
  CheckCircle2,
  LucideIcon
} from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Building2,
  Compass,
  Boxes,
  FileCode2,
  Eye,
  Box,
  Calculator,
  FolderCheck,
  MessageSquareQuote,
  FileSpreadsheet,
  CalendarRange,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Compass;

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 hover:border-sky-500/40 hover:bg-zinc-900/60 transition-all duration-300">
      {/* Subtle corner ticks */}
      <div className="corner-ticks absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top Bar: Number + Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs font-bold text-sky-400 px-2 py-1 rounded bg-sky-950/60 border border-sky-500/20">
            {service.number} {"//"} DISCIPLINE
          </span>
          <div className="p-2.5 rounded-lg bg-zinc-800/80 text-zinc-300 group-hover:text-sky-300 group-hover:bg-sky-950/40 transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-sky-300 transition-colors tracking-tight">
          <Link href={`/services#${service.id}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-normal">
          {service.shortDesc}
        </p>

        {/* Key Deliverables */}
        <div className="mt-6 space-y-2">
          <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
            Key Deliverables:
          </div>
          <ul className="space-y-1.5 text-xs text-zinc-300">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Specs & Action */}
      <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
          <span>FORMATS:</span>
          <span className="text-zinc-400 font-semibold">{service.formats.slice(0, 2).join(", ")}</span>
        </div>

        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-1 font-mono text-xs text-sky-400 hover:text-sky-300 font-semibold group-hover:translate-x-0.5 transition-transform"
        >
          <span>Specifications</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
