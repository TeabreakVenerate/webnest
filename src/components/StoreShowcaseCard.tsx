"use client";

import React from "react";
import { ExternalLink, CheckCircle2, ShoppingCart, BookOpen, Utensils } from "lucide-react";

export interface StoreProject {
  title: string;
  category: string;
  description: string;
  metrics: string;
  tags: string[];
  icon: "cart" | "book" | "food";
  demoUrl: string;
}

export function StoreShowcaseCard({
  title,
  category,
  description,
  metrics,
  tags,
  icon,
  demoUrl,
}: StoreProject) {
  return (
    <div className="group relative flex flex-col border-2 border-[#0F3D70] bg-white shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover">
      {/* Visual Header / Showcase Banner */}
      <div className="relative border-b-2 border-[#0F3D70] bg-[#FFC107]/20 p-5 flex flex-col justify-between aspect-[16/10]">
        <div className="flex items-center justify-between">
          <span className="border border-[#0F3D70] bg-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#0F3D70]">
            {category}
          </span>
          <span className="flex items-center gap-1 border border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-[10px] font-black uppercase text-[#0F3D70]">
            <CheckCircle2 className="h-3 w-3 stroke-[3]" />
            Live Client System
          </span>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex h-12 w-12 items-center justify-center border-2 border-[#0F3D70] bg-white text-[#0F3D70] shadow-brutal-sm">
            {icon === "cart" && <ShoppingCart className="h-6 w-6 stroke-[2.5]" />}
            {icon === "book" && <BookOpen className="h-6 w-6 stroke-[2.5]" />}
            {icon === "food" && <Utensils className="h-6 w-6 stroke-[2.5]" />}
          </div>
          <div>
            <h4 className="text-lg font-black uppercase tracking-tight text-[#0F3D70]">{title}</h4>
            <span className="text-[11px] font-bold uppercase text-[#0F3D70]/80">Engineered by Endurance Owie</span>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="flex flex-1 flex-col justify-between p-5 bg-white">
        <div>
          <p className="text-xs font-semibold leading-relaxed text-[#1A1A1A]">
            {description}
          </p>

          <div className="mt-4 border-2 border-[#0F3D70] bg-[#FFC107]/15 p-2.5 text-xs text-[#0F3D70]">
            <span className="font-black uppercase">Live Impact: </span>
            <span className="font-semibold">{metrics}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#0F3D70] bg-white px-2 py-0.5 text-[10px] font-black uppercase text-[#0F3D70]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t-2 border-[#0F3D70]">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center justify-between border-2 border-[#0F3D70] bg-[#FFC107] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-sm transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-base"
            style={{ touchAction: "manipulation" }}
          >
            <span>Explore Live Demo</span>
            <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
}
