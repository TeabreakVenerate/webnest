"use client";

import React, { useState } from "react";
import { ChevronRight, Lock, ExternalLink, MessageCircle, Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface Addon {
  id: string;
  name: string;
  price: number;
  desc: string;
}

const ADDONS: Addon[] = [
  { id: "cart", name: "Multi-item Cart Drawer", price: 5000, desc: "Slide-over drawer with item counters and local persistence." },
  { id: "admin", name: "Order Tracking Admin", price: 10000, desc: "Private dashboard table to update live delivery statuses." },
  { id: "cms", name: "Self-Serve Inventory CMS", price: 15000, desc: "Update products, prices, and stock from your smartphone." },
  { id: "domain", name: "Custom Domain (.store / .com)", price: 7500, desc: "DNS mapping, SSL certification, and branded URL." },
  { id: "analytics", name: "Traffic & Click Analytics", price: 5000, desc: "Track visitor traffic and WhatsApp conversion rates." },
];

export function AppleGlassmorphism() {
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set(["cart"]));
  const [isPro, setIsPro] = useState(false);

  const toggle = (id: string) => {
    setIsPro(false);
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const total = isPro
    ? SITE_CONFIG.proBundlePrice
    : SITE_CONFIG.basePrice + Array.from(selectedAddons).reduce((s, id) => s + (ADDONS.find(a => a.id === id)?.price || 0), 0);

  const waHref = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello Endurance! Inquiring about Apple Glass (Covenant White) Webnest package. Total: ₦${total.toLocaleString()}`
  )}`;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] font-sans selection:bg-[#FFC107] selection:text-[#0F3D70] pb-32">
      {/* Subtle Ambient Light Reflections */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-[#0F3D70]/10 via-[#FFC107]/15 to-transparent blur-[120px] rounded-full" />
      </div>

      {/* Floating Cupertino Glass Header */}
      <header className="sticky top-4 z-40 mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center justify-between rounded-full border border-[#0F3D70]/15 bg-white/75 px-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,61,112,0.06)]">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#0F3D70]" />
            <span className="text-sm font-bold tracking-tight text-[#0F3D70]">Webnest</span>
            <span className="text-[10px] font-semibold text-[#0F3D70]/60 border-l border-[#0F3D70]/20 pl-2">
              Apple Glass Light
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#0F3D70]/70">
            <a href="#hero" className="hover:text-[#0F3D70] transition-colors">Overview</a>
            <a href="#showcase" className="hover:text-[#0F3D70] transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-[#0F3D70] transition-colors">Pricing</a>
          </nav>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#FFC107] text-[#0F3D70] px-4 py-1.5 text-xs font-bold shadow-sm hover:bg-[#FFC822] active:scale-[0.97] transition-all"
          >
            <span>Launch Store</span>
            <ChevronRight className="h-3 w-3 stroke-[2.5]" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative mx-auto max-w-4xl px-4 pt-16 pb-20 text-center">
        {/* Pulsing Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0F3D70]/15 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#0F3D70] shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#0F3D70] animate-pulse" />
          <span>48-Hour Turnaround Guarantee • Base Storefront ₦10,000</span>
        </div>

        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0F3D70] leading-[1.1]">
          Stop losing orders in messy DMs.
          <span className="block text-[#0F3D70] mt-2">
            A 1-click store crafted for conversion.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Clean mobile product catalogs, instant WhatsApp checkout receipts, and automated order routing. Flat ₦10,000 base fee with free lifetime cloud hosting.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="w-full sm:w-auto rounded-full bg-[#FFC107] text-[#0F3D70] px-8 py-3.5 text-sm font-bold shadow-[0_4px_20px_rgba(255,193,7,0.35)] hover:bg-[#FFC822] active:scale-[0.97] transition-all"
          >
            Build Store (₦10,000)
          </a>
          <a
            href="#showcase"
            className="w-full sm:w-auto rounded-full border border-[#0F3D70]/20 bg-white text-[#0F3D70] px-8 py-3.5 text-sm font-semibold hover:bg-neutral-50 active:scale-[0.97] transition-all shadow-sm"
          >
            View Live Proof
          </a>
        </div>

        {/* Feature Pills Strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          {[
            { label: "Turnaround", val: "Within 48 Hours" },
            { label: "Hosting Fee", val: "₦0 Lifetime Static" },
            { label: "Sales Commission", val: "0% Retained" },
            { label: "Checkout", val: "1-Tap WhatsApp" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-[#0F3D70]/15 bg-white/70 p-4 backdrop-blur-md shadow-sm">
              <span className="block text-[11px] font-semibold text-[#0F3D70]/70 uppercase">{item.label}</span>
              <span className="mt-1 block text-sm font-bold text-[#0F3D70]">{item.val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section id="showcase" className="mx-auto max-w-5xl px-4 py-16 border-t border-[#0F3D70]/10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0F3D70] uppercase tracking-wider">Proof of Work</span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#0F3D70]">Live Storefront Systems</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Word Study Unit", cat: "Chaplaincy Platform", url: "https://wordstudycu.vercel.app", img: "/screenshots/wordstudy.png", stat: "Live Campus" },
            { name: "Elikar Essentials", cat: "Dorm Packages", url: "https://eliikar.vercel.app", img: "/screenshots/eliikar.png", stat: "0.38s Load" },
            { name: "Light Pen Hub", cat: "Author Monetization", url: "https://light-pen-hub.vercel.app", img: "/screenshots/light-pen-hub.png", stat: "100% Uptime" },
          ].map((item, i) => (
            <div key={i} className="group rounded-3xl border border-[#0F3D70]/15 bg-white/80 p-4 shadow-sm hover:shadow-md transition-all backdrop-blur-md flex flex-col justify-between">
              <div className="flex items-center gap-1.5 rounded-full border border-[#0F3D70]/15 bg-neutral-50 px-3 py-1 text-[11px] font-mono text-[#0F3D70] mb-3">
                <Lock className="h-3 w-3 text-[#0F3D70]" />
                <span className="truncate">{item.url}</span>
              </div>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#0F3D70]/10 relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute bottom-2 right-2 text-[10px] font-bold text-[#0F3D70] bg-[#FFC107] px-2 py-0.5 rounded-full shadow-xs">
                  {item.stat}
                </span>
              </div>
              <div className="mt-3">
                <span className="text-[11px] font-semibold text-[#0F3D70]/60 block">{item.cat}</span>
                <span className="text-base font-bold text-[#0F3D70]">{item.name}</span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between text-xs font-bold text-[#0F3D70] hover:text-[#0F3D70]/80 pt-2 border-t border-[#0F3D70]/10"
              >
                <span>Explore store</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Matrix */}
      <section id="pricing" className="mx-auto max-w-4xl px-4 py-16 border-t border-[#0F3D70]/10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0F3D70] uppercase tracking-wider">Transparent Architecture</span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#0F3D70]">Unified Pricing Matrix</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/70">Every build begins with the ₦10,000 Base Ticket. Add only what you need.</p>
        </div>

        <div className="rounded-3xl border border-[#0F3D70]/15 bg-white/80 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
          {/* Preset Switcher */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={() => setIsPro(false)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                !isPro ? "bg-[#0F3D70] text-white" : "text-[#0F3D70] hover:bg-[#0F3D70]/10"
              }`}
            >
              Custom
            </button>
            <button
              onClick={() => {
                setIsPro(true);
                setSelectedAddons(new Set(["cart", "admin", "domain", "analytics"]));
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                isPro ? "bg-[#FFC107] text-[#0F3D70]" : "text-[#0F3D70] hover:bg-[#FFC107]/20"
              }`}
            >
              Pro Bundle (₦35k)
            </button>
          </div>

          {/* Add-ons List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-2xl border border-[#0F3D70]/20 bg-[#0F3D70]/5 p-4">
              <div>
                <span className="text-sm font-bold text-[#0F3D70]">Base Storefront Engine (Included)</span>
                <p className="text-xs text-[#1A1A1A]/70 mt-0.5">Mobile product catalog, WhatsApp 1-tap checkout, free lifetime cloud hosting.</p>
              </div>
              <span className="text-sm font-bold text-[#0F3D70]">₦10,000</span>
            </div>

            {ADDONS.map((a) => {
              const checked = selectedAddons.has(a.id);
              return (
                <div
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className={`flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition-all ${
                    checked
                      ? "border-[#0F3D70] bg-[#FFC107]/15 shadow-sm"
                      : "border-[#0F3D70]/15 bg-white hover:border-[#0F3D70]/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-5 w-5 rounded-md border-2 flex items-center justify-center ${
                      checked ? "border-[#0F3D70] bg-[#0F3D70] text-white" : "border-[#0F3D70]/30"
                    }`}>
                      {checked && <Check className="h-3 w-3 text-white stroke-[3]" />}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#0F3D70]">{a.name}</span>
                      <p className="text-xs text-[#1A1A1A]/70 mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0F3D70]">+₦{a.price.toLocaleString()}</span>
                </div>
              );
            })}
          </div>

          {/* Summary & Checkout Action */}
          <div className="mt-8 pt-6 border-t border-[#0F3D70]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#0F3D70]/70 uppercase">Total Investment</span>
              <div className="text-3xl font-extrabold text-[#0F3D70]">₦{total.toLocaleString()}</div>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-[#FFC107] text-[#0F3D70] px-8 py-3.5 text-sm font-bold hover:bg-[#FFC822] active:scale-[0.97] transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,193,7,0.35)]"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              <span>Lock Store on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-4 pt-12 text-center text-xs font-medium text-[#0F3D70]/70 border-t border-[#0F3D70]/10">
        <p>Webnest Apple Glass Light • Covenant Edition • Architected by {SITE_CONFIG.architect}</p>
      </footer>
    </div>
  );
}
