import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-config";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Engagement",
  description: "Terms and conditions of architectural consultancy with Akritidesigners.",
};

export default function TermsPage() {
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
            <FileText className="w-4 h-4" />
            <span>PRACTICE TERMS &amp; CONDITIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
            Terms of Engagement
          </h1>
          <p className="text-sm font-mono text-zinc-500">
            Effective Date: January 2026 // Akritidesigners
          </p>
        </div>

        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed font-normal border-t border-zinc-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-100 font-mono uppercase tracking-wider">
              1. Professional Scope &amp; Deliverables
            </h2>
            <p>
              Akritidesigners provides architectural planning, interior design, structural drafting, 3D CGI visualization, and BOQ estimation services. Specific deliverables, revision rounds, drawing formats (DWG, PDF, SKP), and milestone payment schedules are governed by mutual individual project agreements executed prior to commencement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-100 font-mono uppercase tracking-wider">
              2. Intellectual Property &amp; CAD Files
            </h2>
            <p>
              Unless otherwise specified in a formal contract, architectural concepts, 3D visual renders, and preliminary layouts remain the intellectual property of {siteConfig.name} until final project completion and account settlement, after which full Good-For-Construction working sets are licensed to the client for the specified site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-100 font-mono uppercase tracking-wider">
              3. Site Verification &amp; Statutory Approvals
            </h2>
            <p>
              While Akritidesigners prepares drawings conforming to standard civil bylaws and municipal guidelines, on-site verification of soil conditions, actual physical boundaries, and municipal sanction clearances must be verified in conjunction with licensed local surveyors and structural engineers of record.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-100 font-mono uppercase tracking-wider">
              4. Contact
            </h2>
            <p>
              For inquiries regarding contract terms or engagement frameworks, contact:{" "}
              <span className="text-sky-300 font-mono">{siteConfig.contact.email}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
