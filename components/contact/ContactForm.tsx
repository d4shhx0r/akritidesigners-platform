"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

const projectTypes = [
  "Residential Villa / Bungalow",
  "Apartment Interior Architecture",
  "Commercial / Corporate Office",
  "Retail / Restaurant / Hospitality",
  "Architectural CAD Drafting Only",
  "Structural & Detailing Sets",
  "3D CGI Visualization Only",
  "Renovation & Space Re-planning"
];

const availableServices = [
  "2D Architectural Planning",
  "Interior Spatial Design",
  "Exterior Facade Design",
  "Structural Coordination",
  "AutoCAD 2D Detailing",
  "3D SketchUp Modeling",
  "Photorealistic 3D Renders",
  "Quantity & BOQ Estimation",
  "Good-For-Construction Sets",
  "Design Audit & Consultation"
];

const budgetRanges = [
  "Standard Residential",
  "Premium Executive",
  "Luxury Custom Spec",
  "Commercial Scope",
  "Drafting / Visualization Only",
  "To Be Determined with Consultation"
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    projectLocation: "",
    approximateSize: "",
    servicesRequired: ["2D Architectural Planning", "Photorealistic 3D Renders"],
    estimatedBudget: budgetRanges[0],
    message: "",
    hp_website: "", // Honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      if (exists) {
        if (prev.servicesRequired.length === 1) return prev; // Keep at least one
        return {
          ...prev,
          servicesRequired: prev.servicesRequired.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          servicesRequired: [...prev.servicesRequired, service],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.details) {
          setFieldErrors(data.details);
        }
        throw new Error(data.error || "Submission failed. Please check form fields.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sky-500/40 bg-zinc-900/80 p-8 sm:p-12 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-sky-950 border border-sky-400 flex items-center justify-center text-sky-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-100">
            Project Inquiry Registered
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Thank you, <span className="text-zinc-200 font-semibold">{formData.name}</span>. Our technical design team will review your specifications for{" "}
            <span className="text-sky-300 font-semibold">{formData.projectType}</span> in{" "}
            <span className="text-zinc-200">{formData.projectLocation}</span> and connect with you within 24 business hours.
          </p>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                projectType: projectTypes[0],
                projectLocation: "",
                approximateSize: "",
                servicesRequired: ["2D Architectural Planning"],
                estimatedBudget: budgetRanges[0],
                message: "",
                hp_website: "",
              });
            }}
            className="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-10 backdrop-blur-sm">
      {/* Honeypot field (hidden from view for anti-spam) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_website">Leave this field empty</label>
        <input
          id="hp_website"
          type="text"
          name="hp_website"
          value={formData.hp_website}
          onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/30 text-red-200 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Form Submission Error</div>
            <p className="text-xs text-red-300 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Section 01: Client Details */}
      <div className="space-y-4">
        <div className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold border-b border-zinc-800 pb-2">
          01 // CLIENT IDENTIFICATION
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            {fieldErrors.name && (
              <p className="text-xs text-red-400 mt-1 font-mono">{fieldErrors.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@domain.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            {fieldErrors.email && (
              <p className="text-xs text-red-400 mt-1 font-mono">{fieldErrors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
              Phone / WhatsApp *
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            {fieldErrors.phone && (
              <p className="text-xs text-red-400 mt-1 font-mono">{fieldErrors.phone[0]}</p>
            )}
          </div>
        </div>
      </div>

      {/* Section 02: Project Scope & Location */}
      <div className="space-y-4">
        <div className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold border-b border-zinc-800 pb-2">
          02 // PROJECT PARAMETERS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="projectType" className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
              Project Typology *
            </label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {projectTypes.map((t, idx) => (
                <option key={idx} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="projectLocation" className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
              Site Location (City/State) *
            </label>
            <input
              id="projectLocation"
              type="text"
              required
              value={formData.projectLocation}
              onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
              placeholder="e.g. New Delhi / Bangalore"
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            {fieldErrors.projectLocation && (
              <p className="text-xs text-red-400 mt-1 font-mono">{fieldErrors.projectLocation[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="approximateSize" className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
              Approximate Area (Sq. Ft.)
            </label>
            <input
              id="approximateSize"
              type="text"
              value={formData.approximateSize}
              onChange={(e) => setFormData({ ...formData, approximateSize: e.target.value })}
              placeholder="e.g. 2,400 sq. ft."
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
        </div>
      </div>

      {/* Section 03: Required Disciplines (Multi-select) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold">
            03 // SELECT REQUIRED SERVICES (MULTI-SELECT) *
          </span>
          <span className="font-mono text-[11px] text-zinc-500">
            Selected: {formData.servicesRequired.length}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {availableServices.map((service, idx) => {
            const isSelected = formData.servicesRequired.includes(service);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => toggleService(service)}
                className={`p-2.5 rounded-lg text-left text-xs font-mono transition-all border cursor-pointer select-none ${
                  isSelected
                    ? "bg-sky-950/80 border-sky-400 text-sky-200 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <div className="flex items-start justify-between gap-1">
                  <span>{service}</span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />}
                </div>
              </button>
            );
          })}
        </div>
        {fieldErrors.servicesRequired && (
          <p className="text-xs text-red-400 font-mono">{fieldErrors.servicesRequired[0]}</p>
        )}
      </div>

      {/* Section 04: Budget and Message */}
      <div className="space-y-4">
        <div className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold border-b border-zinc-800 pb-2">
          04 // SCOPE DESCRIPTION &amp; TIMELINE
        </div>

        <div>
          <label htmlFor="estimatedBudget" className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
            Estimated Budget Parameter
          </label>
          <select
            id="estimatedBudget"
            value={formData.estimatedBudget}
            onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            {budgetRanges.map((b, idx) => (
              <option key={idx} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
            Project Description &amp; Specific Requirements *
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about the site, number of floors, timeline, style preferences (e.g. Modern Minimalist), or whether you have an existing CAD DWG or SketchUp file."
            className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          {fieldErrors.message && (
            <p className="text-xs text-red-400 mt-1 font-mono">{fieldErrors.message[0]}</p>
          )}
        </div>
      </div>

      {/* Submit Action */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Transmit Project Specifications</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
