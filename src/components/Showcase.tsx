"use client";

import React from "react";
import { StoreShowcaseCard, StoreProject } from "./StoreShowcaseCard";
import { SITE_CONFIG } from "@/lib/constants";

const PROJECTS: StoreProject[] = [
  {
    title: "Elikar Campus Essentials",
    category: "Campus Care Packages & Pre-orders",
    description:
      "A fast, high-conversion dorm delivery storefront. Features slide-over cart drawers, instant bundle selection, and direct automated Telegram and WhatsApp order routing for Covenant University students.",
    metrics: "Loads in 0.38s with zero database lag, 40+ dorm deliveries weekly.",
    tags: ["Slide-over Cart", "Fast Routing", "Vercel Edge", "₦0 Hosting"],
    icon: "cart",
    demoUrl: "https://elikar.vercel.app",
  },
  {
    title: "Light Pen Hub",
    category: "Author Bookstore & Creative Platform",
    description:
      "An interactive reader community portal featuring clean digital book showcases, instant author contact buttons, dynamic reading modes, and low-latency chapter previews.",
    metrics: "Clean mobile reader experience, 100% uptime, zero recurring hosting fees.",
    tags: ["Custom Catalog", "Theme Switcher", "Author CRM", "Cloudflare DNS"],
    icon: "book",
    demoUrl: "https://lightpenhub.com",
  },
  {
    title: "Campus Pastry & Gourmet Treats",
    category: "Fresh Bakery & Snack Catalog",
    description:
      "A mobile-first pastry menu built for student bakers. Allows hostel customers to pick cake slices, meat pies, and donuts with instant WhatsApp receipts and hall delivery details.",
    metrics: "Over 80% checkout completion rate via WhatsApp 1-tap ordering.",
    tags: ["Mobile Catalog", "1-Tap Checkout", "WhatsApp Receipts", "48h Build"],
    icon: "food",
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
          Proof Inspection (Case Studies)
        </span>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-[#0F3D70] sm:text-3xl lg:text-4xl">
          Real working systems. Zero template fluff.
        </h2>
        <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">
          Inspect live storefronts engineered by Endurance Owie. Every client gets high-speed static edge hosting, custom WhatsApp order routing, and modern mobile UX.
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
