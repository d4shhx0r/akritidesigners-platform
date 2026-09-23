import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustCapabilitiesStrip } from "@/components/sections/TrustCapabilitiesStrip";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { PlanToRenderSection } from "@/components/sections/PlanToRenderSection";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyAkriti } from "@/components/sections/WhyAkriti";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = {
  title: "Akritidesigners — Architectural Planning, 3D Visualization & AutoCAD Detailing",
  description:
    "Multidisciplinary architectural planning, interior and exterior design, structural drafting, 3D photorealistic visualization, and construction estimation studio.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-zinc-950 text-zinc-100">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Trust / Capability Marquee Strip */}
      <TrustCapabilitiesStrip />

      {/* 03 — Introduction & Philosophy */}
      <StudioIntro />

      {/* 04 — Interactive Blueprint to 3D Render Slider */}
      <PlanToRenderSection />

      {/* 05 — Core Disciplines / Services */}
      <FeaturedServices />

      {/* 06 — Featured Projects & Real Case Studies */}
      <FeaturedProjects />

      {/* 07 — Technical Drawing & CAD Blueprint Experience */}
      <TechnicalExpertise />

      {/* 08 — 6-Step Integrated Delivery Methodology */}
      <ProcessSection />

      {/* 09 — The Akriti Engineering Standards */}
      <WhyAkriti />

      {/* 10 — Conversion CTA */}
      <CtaSection />
    </div>
  );
}
