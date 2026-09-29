"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface HeroBadgeProps {
  text?: string;
  subtext?: string;
  href?: string;
}

export function HeroBadge({
  text = "Launch in 48 Hours",
  subtext = "Base Storefront ₦10,000",
  href = "#calculator",
}: HeroBadgeProps) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-2 text-xs font-medium text-emerald-300 backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] duration-150 hover:border-emerald-400/60 hover:bg-emerald-900/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-[0.97]"
      style={{ touchAction: "manipulation" }}
    >
      {/* Pulsing Live Beacon */}
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      <span className="font-semibold text-white">{text}</span>
      <span className="h-3 w-px bg-emerald-500/30" aria-hidden="true" />
      <span className="text-emerald-400">{subtext}</span>
      <Sparkles className="h-3.5 w-3.5 text-emerald-400 opacity-80 transition-transform duration-150 group-hover:scale-110" />
    </a>
  );
}
