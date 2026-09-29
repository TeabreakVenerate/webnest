"use client";

import React from "react";
import { StoreShowcaseCard, StoreProject } from "./StoreShowcaseCard";
import { SITE_CONFIG } from "@/lib/constants";

const PROJECTS: StoreProject[] = [
  {
    title: "Elikar Campus Essentials",
    category: "Campus Care Packages",
    domainUrl: "https://elikar.vercel.app",
    metrics: "Loads in 0.38s",
    tags: ["Slide-over Cart", "Fast Routing", "Vercel Edge", "₦0 Hosting"],
    bannerColor: "bg-[#FFC107]/15",
    demoUrl: "https://elikar.vercel.app",
  },
  {
    title: "Light Pen Hub",
    category: "Creator Bookstore",
    domainUrl: "https://lightpenhub.com",
    metrics: "100% Edge Uptime",
    tags: ["Custom Catalog", "Theme Switcher", "Author CRM", "Cloudflare DNS"],
    bannerColor: "bg-[#0F3D70]/10",
    demoUrl: "https://lightpenhub.com",
  },
  {
    title: "Campus Pastry Treats",
    category: "Hostel Food Menu",
    domainUrl: "https://pastrytreats.webnest.store",
    metrics: "80% WhatsApp Checkout",
    tags: ["Mobile Catalog", "1-Tap Checkout", "WhatsApp Receipts", "48h Build"],
    bannerColor: "bg-[#FFC107]/25",
    demoUrl: `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      "Hello Endurance! I want a pastry catalog demo."
    )}`,
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white border-b-2 border-[#0F3D70]">
      {/* Section Header */}
      <div className="max-w-2xl">
        <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-1 text-xs font-black uppercase tracking-wider text-[#0F3D70]">
          Proof Inspection (Showcase)
        </span>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-[#0F3D70] sm:text-3xl lg:text-4xl">
          Real working systems. Zero template fluff.
        </h2>
        <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">
          Minimalist URL bar frames displaying live storefronts engineered by Endurance Owie. Every client gets high-speed static edge hosting, custom WhatsApp order routing, and modern mobile UX.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <StoreShowcaseCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
