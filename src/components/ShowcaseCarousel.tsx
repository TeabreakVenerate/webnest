"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
  tag: string;
  metrics?: string;
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "wordstudy",
    title: "Word Study Service Unit",
    category: "Campus Chaplaincy Unit",
    imageSrc: "/screenshots/wordstudy.png",
    imageAlt: "Word Study Covenant University Platform",
    url: "https://wordstudycu.vercel.app",
    tag: "Covenant University",
    metrics: "Official Chaplaincy Unit",
  },
  {
    id: "eliikar",
    title: "Elikar Essentials",
    category: "Hostel & Dorm Packages",
    imageSrc: "/screenshots/eliikar.png",
    imageAlt: "Elikar Essentials Storefront",
    url: "https://eliikar.vercel.app",
    tag: "Campus Storefront",
    metrics: "WhatsApp & Telegram Orders",
  },
  {
    id: "lightpen",
    title: "Light Pen Hub",
    category: "Author & Community Platform",
    imageSrc: "/screenshots/light-pen-hub.png",
    imageAlt: "Light Pen Hub Monetization Platform",
    url: "https://light-pen-hub.vercel.app",
    tag: "Creator Portal",
    metrics: "Direct Micro-Support",
  },
];

interface ShowcaseCardProps {
  item: ShowcaseItem;
}

export function ShowcaseCard({ item }: ShowcaseCardProps) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex-shrink-0 w-[320px] sm:w-[360px] h-[390px] rounded-2xl overflow-hidden group snap-start border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: "1000px" }}
    >
      {/* Screenshot Frame */}
      <div className="relative h-[230px] w-full overflow-hidden bg-neutral-100 border-b border-neutral-200">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[10px] font-mono font-medium text-neutral-800 border border-neutral-200 shadow-xs">
            {item.tag}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0F3D70] text-white text-[10px] font-mono shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC107] animate-pulse"></span>
            Live
          </span>
        </div>
      </div>

      {/* Card Content (Ultra-Minimal) */}
      <div className="h-[160px] p-5 flex flex-col justify-between bg-white">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
            {item.category}
          </span>
          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#0F3D70] transition-colors leading-tight">
            {item.title}
          </h3>
          {item.metrics && (
            <p className="text-xs text-neutral-500 mt-1 font-mono">{item.metrics}</p>
          )}
        </div>

        {/* Footer with Rotating Arrow */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
          <span className="text-xs font-mono text-[#0F3D70] font-medium flex items-center gap-1">
            <span>Visit Live Store</span>
            <ExternalLink className="w-3 h-3" />
          </span>

          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 transition-all duration-300 group-hover:bg-[#0F3D70] group-hover:text-white group-hover:rotate-[-45deg]">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function ShowcaseCarousel({ className }: { className?: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.75;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("relative w-full group", className)}>
      {/* Left Scroll Button */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-5 z-20 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-700 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-neutral-50 hover:text-black focus:outline-none"
        aria-label="Previous Showcase item"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto pb-4 pt-2 px-1 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {SHOWCASE_ITEMS.map((item) => (
          <ShowcaseCard key={item.id} item={item} />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 z-20 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-700 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-neutral-50 hover:text-black focus:outline-none"
        aria-label="Next Showcase item"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
