"use client";

import React from "react";
import { ShowcaseCarousel } from "./ShowcaseCarousel";

export function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 bg-white border-b-2 border-[#0F3D70]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107] px-3 py-1 mb-3">
            <span className="h-2 w-2 bg-[#0F3D70] rounded-full animate-ping"></span>
            <span className="text-xs font-black uppercase tracking-wider text-[#0F3D70]">
              Verified Proof Inspection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0F3D70]">
            Live Systems In Production.
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-neutral-700 max-w-xl leading-relaxed">
            Real working client platforms engineered and deployed by Endurance Owie. Featuring official Covenant University service units, student dorm packages, and creator portals.
          </p>
        </div>

        {/* Swipe / Scroll Hint */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500">
          <span>Scroll horizontally or use arrow buttons</span>
          <span className="text-[#0F3D70] font-bold">→</span>
        </div>
      </div>

      {/* Interactive Carousel */}
      <ShowcaseCarousel />
    </section>
  );
}
