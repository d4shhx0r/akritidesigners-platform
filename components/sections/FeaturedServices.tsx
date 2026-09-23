import React from "react";
import { servicesData } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function FeaturedServices() {
  // Show 6 featured services on homepage
  const featured = servicesData.slice(0, 6);

  return (
    <section className="relative py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80 overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            number="04"
            tag="CORE DISCIPLINES"
            title="Comprehensive Design & Technical Services."
            description="From conceptual spatial design to millimeter-accurate AutoCAD working drawings and BOQ estimation."
          />
          <div className="mb-12 hidden md:block">
            <Button href="/services" variant="outline" size="md" withArrow>
              View All 12 Services
            </Button>
          </div>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Button href="/services" variant="outline" size="lg" className="w-full">
            Explore All 12 Services
          </Button>
        </div>
      </div>
    </section>
  );
}
