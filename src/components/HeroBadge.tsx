"use client";

import React from "react";
import { Zap } from "lucide-react";

interface HeroBadgeProps {
  text?: string;
  subtext?: string;
  href?: string;
}

export function HeroBadge({
  text = "48-Hour Delivery Guarantee",
  subtext = "Base Storefront ₦10,000",
  href = "#calculator",
}: HeroBadgeProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2.5 border-2 border-[#0F3D70] bg-white px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-sm transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-base hover:bg-[#FFC107]"
      style={{ touchAction: "manipulation" }}
    >
      {/* Structural Indicator Block */}
      <span className="flex h-2.5 w-2.5 border border-[#0F3D70] bg-[#FFC107]" aria-hidden="true" />
      <span>{text}</span>
      <span className="h-3 w-[2px] bg-[#0F3D70]" aria-hidden="true" />
      <span className="bg-[#0F3D70] px-1.5 py-0.5 text-white">{subtext}</span>
      <Zap className="h-3.5 w-3.5 fill-[#FFC107] text-[#0F3D70] stroke-[2.5]" />
    </a>
  );
}
