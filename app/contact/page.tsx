import React from "react";
import { siteConfig } from "@/lib/data/site-config";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Start a Project // Architectural Consultation",
  description:
    "Submit your architectural, interior, structural, or visualization project requirements to Akritidesigners for a technical review and proposal.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-sky-400 mb-4">
            <span className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/20 text-sky-300 font-semibold">
              CONSULTATION {"//"} INTAKE
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-zinc-400">PROJECT REGISTRATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            Start Your Project.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Whether you are planning a new residence, developing commercial elevations, or require millimeter-accurate AutoCAD working drawings, share your parameters below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Right Column: Studio Contact & Reassurance */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Studio Contact Info */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm space-y-6 font-mono text-xs">
              <div className="font-bold text-zinc-200 uppercase tracking-wider border-b border-zinc-800 pb-3 flex items-center justify-between">
                <span>Studio Office</span>
                <span className="text-sky-400">ACTIVE</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block uppercase">Address:</span>
                    <span className="text-zinc-300">{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block uppercase">Email Inquiries:</span>
                    <span className="text-zinc-300">{siteConfig.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block uppercase">Telephone / WhatsApp:</span>
                    <span className="text-zinc-300">{siteConfig.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block uppercase">Studio Hours:</span>
                    <span className="text-zinc-300">{siteConfig.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Reassurance Box */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 space-y-4 text-xs">
              <div className="font-mono font-bold text-zinc-200 uppercase tracking-wider">
                What Happens Next?
              </div>

              <div className="space-y-3 text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-sky-400 font-bold">1.</span>
                  <span><strong>Technical Review:</strong> We examine your site parameters, zoning requirements, and discipline scope.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-sky-400 font-bold">2.</span>
                  <span><strong>Feasibility Call:</strong> We discuss design preferences, budget targets, and timeline milestones.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-sky-400 font-bold">3.</span>
                  <span><strong>Scope Proposal:</strong> A transparent deliverable schedule and fee estimate is provided.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>NDA &amp; Confidentiality Assured</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
