import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-config";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy and data protection policy for Akritidesigners.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-sky-300 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>

        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>DATA PRIVACY &amp; CONFIDENTIALITY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-zinc-500">
            Last Updated: January 2026 // Akritidesigners Technical Practice
          </p>
        </div>

        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed font-normal border-t border-zinc-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-100 font-mono uppercase tracking-wider">
              1. Information We Collect
            </h2>
            <p>
              When you submit a project inquiry or contact {siteConfig.name}, we collect personal and project details that you voluntarily supply, including your name, email address, telephone/WhatsApp number, site location, architectural typologies, and descriptive project messages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-100 font-mono uppercase tracking-wider">
              2. How We Use Project Information
            </h2>
            <p>
              All supplied data is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400">
              <li>Evaluate project feasibility and technical requirements</li>
              <li>Formulate fee proposals, scopes of work, and delivery timelines</li>
              <li>Communicate directly regarding design and engineering consultancy services</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-100 font-mono uppercase tracking-wider">
              3. Architectural Drawing Confidentiality &amp; NDAs
            </h2>
            <p>
              We treat client floor plans, cadastral surveys, property coordinates, and proprietary architectural documentation with strict professional confidentiality. We never sell, lease, or distribute your site documentation to third-party marketing services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-100 font-mono uppercase tracking-wider">
              4. Contact &amp; Data Rights
            </h2>
            <p>
              You may request review, correction, or deletion of your submitted project inquiries by writing to our studio at{" "}
              <span className="text-sky-300 font-mono">{siteConfig.contact.email}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
