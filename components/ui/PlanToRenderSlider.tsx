"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface PlanToRenderSliderProps {
  blueprintImage: string;
  renderImage: string;
  blueprintLabel?: string;
  renderLabel?: string;
  title?: string;
  aspectRatio?: string;
}

export function PlanToRenderSlider({
  blueprintImage,
  renderImage,
  blueprintLabel = "AUTOCAD 2D WORKING PLAN",
  renderLabel = "3D PHOTOREALISTIC RENDER",
  title = "Interactive Blueprint-to-Render Analysis",
}: PlanToRenderSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  return (
    <div className="w-full">
      {/* Title & Dimension Ticker Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 px-2 text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-zinc-200 font-semibold">{title}</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-500">
          <span className="hidden sm:inline">COORDINATE AXIS: 00-M2-REV4</span>
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-sky-400">
            SPLIT: {sliderPosition.toFixed(0)}% / {(100 - sliderPosition).toFixed(0)}%
          </span>
        </div>
      </div>

      {/* Main Interactive Comparison Container */}
      <div
        ref={containerRef}
        role="slider"
        aria-label="Comparison slider between CAD blueprint and 3D render"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={5}
        aria-valuemax={95}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            setSliderPosition((prev) => Math.max(5, prev - 5));
          } else if (e.key === "ArrowRight") {
            setSliderPosition((prev) => Math.min(95, prev + 5));
          }
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-sky-500/50"
      >
        {/* Layer 1: Photorealistic 3D Render (Background Full) */}
        <div className="absolute inset-0">
          <Image
            src={renderImage}
            alt={renderLabel}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/30 pointer-events-none" />
          
          {/* Label Badge Right */}
          <div className="absolute bottom-5 right-5 pointer-events-none z-10">
            <div className="backdrop-blur-md bg-zinc-950/80 border border-zinc-800 px-3 py-1.5 rounded-md flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs font-semibold tracking-wider text-zinc-200">
                {renderLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Layer 2: CAD Architectural Blueprint (Clipped via sliderPosition) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full min-w-[100vw] sm:min-w-[1000px] md:min-w-[1200px]">
            <Image
              src={blueprintImage}
              alt={blueprintLabel}
              fill
              className="object-cover object-left-top"
            />
          </div>
          {/* Subtle blueprint grid overlay & tint */}
          <div className="absolute inset-0 bg-sky-950/30 backdrop-contrast-125 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-zinc-950/40 pointer-events-none" />

          {/* Label Badge Left */}
          <div className="absolute bottom-5 left-5 pointer-events-none z-10">
            <div className="backdrop-blur-md bg-zinc-950/85 border border-sky-500/30 px-3 py-1.5 rounded-md flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="font-mono text-xs font-semibold tracking-wider text-sky-200">
                {blueprintLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Slider Divider Bar with Technical Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* High-visibility divider line with cyan glow */}
          <div className="absolute top-0 bottom-0 -left-px w-0.5 bg-gradient-to-b from-sky-400 via-white to-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />

          {/* Center Handle Node */}
          <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-900 border-2 border-sky-400 shadow-xl flex items-center justify-center text-sky-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 9l-3 3 3 3m8-6l3 3-3 3"
              />
            </svg>
          </div>

          {/* Upper Coordinate Crosshair */}
          <div className="absolute top-4 -left-2 text-[10px] font-mono text-sky-300 font-bold bg-zinc-900/90 px-1 py-0.5 rounded border border-sky-500/40">
            ▲ CAD
          </div>
          {/* Lower Coordinate Crosshair */}
          <div className="absolute bottom-4 -left-2 text-[10px] font-mono text-sky-300 font-bold bg-zinc-900/90 px-1 py-0.5 rounded border border-sky-500/40">
            ▼ 3D
          </div>
        </div>
      </div>

      {/* Usage hint for users */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mt-2 px-2">
        <span>← DRAG OR SWIPE SLIDER TO REVEAL TRANSFORMATION →</span>
        <span className="hidden sm:inline">USE ARROW KEYS FOR KEYBOARD INSPECTION</span>
      </div>
    </div>
  );
}
