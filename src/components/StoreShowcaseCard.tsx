"use client";

import React from "react";
import { ExternalLink, Lock } from "lucide-react";

export interface StoreProject {
  title: string;
  category: string;
  domainUrl: string;
  metrics: string;
  tags: string[];
  bannerColor: string;
  demoUrl: string;
}

export function StoreShowcaseCard({
  title,
  category,
  domainUrl,
  metrics,
  tags,
  bannerColor,
  demoUrl,
}: StoreProject) {
  return (
    <div className="group flex flex-col border-2 border-[#0F3D70] bg-white shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover">
      
      {/* Minimalist URL Bar Frame */}
      <div className="border-b-2 border-[#0F3D70] bg-white p-2.5">
        <div className="flex items-center gap-2">
          {/* Geometric Window Markers */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 border border-[#0F3D70] bg-[#FFC107]" />
            <span className="h-2.5 w-2.5 border border-[#0F3D70] bg-white" />
            <span className="h-2.5 w-2.5 border border-[#0F3D70] bg-[#0F3D70]" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex flex-1 items-center gap-1.5 border border-[#0F3D70] bg-neutral-50 px-2.5 py-1 text-[11px] font-mono font-bold text-[#0F3D70] truncate">
            <Lock className="h-3 w-3 shrink-0 text-[#0F3D70] stroke-[2.5]" />
            <span className="truncate">{domainUrl}</span>
          </div>
        </div>
      </div>

      {/* Static Storefront Visual Frame */}
      <div className={`relative aspect-[16/10] w-full border-b-2 border-[#0F3D70] ${bannerColor} p-4 flex flex-col justify-between overflow-hidden`}>
        <div className="flex items-center justify-between">
          <span className="border border-[#0F3D70] bg-white px-2 py-0.5 text-[10px] font-black uppercase text-[#0F3D70]">
            {category}
          </span>
          <span className="border border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-[10px] font-black uppercase text-[#0F3D70]">
            Verified Live
          </span>
        </div>

        {/* Storefront Layout Representation */}
        <div className="border-2 border-[#0F3D70] bg-white p-3 shadow-brutal-sm">
          <div className="flex items-center justify-between border-b border-[#0F3D70] pb-1.5">
            <span className="text-xs font-black uppercase text-[#0F3D70]">{title}</span>
            <span className="text-[10px] font-bold uppercase text-[#0F3D70]">1-Click Checkout</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1.5 text-center">
            <div className="border border-[#0F3D70] bg-[#FFC107]/20 p-1 text-[9px] font-bold text-[#0F3D70]">
              Item 01
            </div>
            <div className="border border-[#0F3D70] bg-[#FFC107]/20 p-1 text-[9px] font-bold text-[#0F3D70]">
              Item 02
            </div>
            <div className="border border-[#0F3D70] bg-[#FFC107]/20 p-1 text-[9px] font-bold text-[#0F3D70]">
              Item 03
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-black uppercase text-[#0F3D70]">
          <span>Fast Static Edge</span>
          <span>WhatsApp Routing</span>
        </div>
      </div>

      {/* Card Details & Live Trigger */}
      <div className="flex flex-1 flex-col justify-between p-4 bg-white">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black uppercase text-[#0F3D70]">{title}</h3>
            <span className="border border-[#0F3D70] bg-[#FFC107] px-1.5 py-0.5 text-[10px] font-black text-[#0F3D70]">
              {metrics}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#0F3D70] bg-white px-2 py-0.5 text-[10px] font-bold uppercase text-[#0F3D70]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t-2 border-[#0F3D70]">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center justify-between border-2 border-[#0F3D70] bg-[#FFC107] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-sm transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-base"
            style={{ touchAction: "manipulation" }}
          >
            <span>Explore Live Store</span>
            <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>

    </div>
  );
}
