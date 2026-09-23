"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3"
          : "bg-transparent border-b border-white/[0.05] py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Link */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-md p-1"
            aria-label="Akritidesigners Homepage"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/branding/monogram.svg"
                alt="Akritidesigners Monogram"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-[0.18em] text-zinc-100 group-hover:text-sky-300 transition-colors">
                AKRITIDESIGNERS
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-zinc-500 uppercase -mt-0.5 hidden xs:block">
                DESIGN • CAD • VISUALIZATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-md font-mono text-xs uppercase tracking-wider transition-all duration-150 relative ${
                    isActive
                      ? "text-sky-300 font-semibold bg-zinc-900/90 border border-sky-500/30"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-sky-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href="/contact" variant="primary" size="sm" withArrow>
                Start a Project
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800 z-40 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-2 pt-4">
            <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase mb-4 px-2">
              NAVIGATION // DIRECTORY
            </div>
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-lg text-sm font-mono tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-zinc-900 text-sky-400 border border-sky-500/30 font-semibold"
                      : "text-zinc-300 hover:bg-zinc-900/60 hover:text-white"
                  }`}
                >
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Bottom Info & Action */}
          <div className="pt-8 border-t border-zinc-800/80 space-y-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </Button>

            <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80 text-xs font-mono text-zinc-400 space-y-1">
              <div className="text-zinc-300 font-semibold">STUDIO INQUIRIES</div>
              <div>{siteConfig.contact.email}</div>
              <div>{siteConfig.contact.phone}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
