"use client";

import React from "react";
import { ExternalLink, CheckCircle2, ShoppingCart, BookOpen, Utensils } from "lucide-react";

export interface StoreProject {
  title: string;
  category: string;
  description: string;
  metrics: string;
  tags: string[];
  gradient: string;
  icon: "cart" | "book" | "food";
  demoUrl: string;
}

export function StoreShowcaseCard({
  title,
  category,
  description,
  metrics,
  tags,
  gradient,
  icon,
  demoUrl,
}: StoreProject) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition-[border-color,box-shadow] duration-200 hover:border-neutral-700 hover:shadow-2xl">
      {/* Visual Header / Showcase Banner */}
      <div className={`relative aspect-[16/9] w-full overflow-hidden ${gradient} p-6 flex flex-col justify-between`}>
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {category}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 backdrop-blur-md">
            <CheckCircle2 className="h-3 w-3 stroke-[2.5]" />
            Live Client System
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/50 text-white backdrop-blur-md border border-white/10 shadow-lg">
            {icon === "cart" && <ShoppingCart className="h-6 w-6 text-emerald-400" />}
            {icon === "book" && <BookOpen className="h-6 w-6 text-teal-400" />}
            {icon === "food" && <Utensils className="h-6 w-6 text-amber-400" />}
          </div>
          <div>
            <h4 className="text-lg font-bold text-white tracking-tight">{title}</h4>
            <span className="text-xs text-white/80">Engineered by Endurance Owie</span>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-xs leading-relaxed text-neutral-300">
            {description}
          </p>

          <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-xs text-neutral-300">
            <span className="font-semibold text-white">Live Benchmark: </span>
            {metrics}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-neutral-800 bg-neutral-900/80 px-2 py-0.5 text-[10px] font-medium text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-900">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-xs font-semibold text-white transition-[background-color,border-color,color] duration-150 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            style={{ touchAction: "manipulation" }}
          >
            <span>Explore Live Demo Experience</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
