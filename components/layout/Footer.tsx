import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site-config";
import { servicesData } from "@/lib/data/services";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 font-sans overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="relative border-b border-zinc-800/80 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/60 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3 uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Ready to Build</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-100 tracking-tight">
                Have a space in mind? Let&apos;s turn the idea into something buildable.
              </h3>
              <p className="mt-2 text-zinc-400 text-sm sm:text-base">
                From initial 2D layout planning and 3D visualization to complete structural and AutoCAD working drawings.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Studio Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/branding/monogram.svg"
                  alt="Akritidesigners Monogram"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-base tracking-[0.2em] text-zinc-100">
                AKRITIDESIGNERS
              </span>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed pr-6">
              Precision design and engineering consultancy. We bridge the gap between creative architectural concepts and constructible, millimeter-accurate technical execution.
            </p>

            <div className="pt-2 font-mono text-xs text-zinc-500 space-y-1">
              <div>STUDIO SPECIFICATION // ISO-CAD-2026</div>
              <div>COORDINATE DATUM: 28°36&apos;N, 77°12&apos;E</div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="font-mono text-xs text-zinc-200 uppercase tracking-widest font-semibold mb-4">
              Directory
            </div>
            <ul className="space-y-2.5 text-sm font-mono">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Disciplines */}
          <div>
            <div className="font-mono text-xs text-zinc-200 uppercase tracking-widest font-semibold mb-4">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-zinc-400 hover:text-sky-300 transition-colors block truncate"
                  >
                    {service.number} {"//"} {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Contact Placeholders */}
          <div>
            <div className="font-mono text-xs text-zinc-200 uppercase tracking-widest font-semibold mb-4">
              Contact & Inquiry
            </div>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-zinc-500 block">OFFICE:</span>
                <span className="text-zinc-300">{siteConfig.contact.address}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">EMAIL:</span>
                <span className="text-zinc-300">{siteConfig.contact.email}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">PHONE:</span>
                <span className="text-zinc-300">{siteConfig.contact.phone}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">HOURS:</span>
                <span className="text-zinc-400">{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>© {currentYear} {siteConfig.name}. All rights reserved.</span>
            </div>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <span>Made by</span>
              <a
                href="https://www.linkedin.com/in/debashishbordoloi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-4 decoration-sky-500/40 hover:decoration-sky-300 transition-colors inline-flex items-center gap-0.5"
              >
                <span>Debashish</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
