"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react";
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

export function EmilTactile() {
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
    `Hello Endurance! Inquiring about Emil Tactile (Covenant White) storefront. Total: ₦${total.toLocaleString()}`
  )}`;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] font-sans selection:bg-[#FFC107] selection:text-[#0F3D70] pb-32">
      {/* Precision Header */}
      <header className="sticky top-0 z-40 border-b border-[#0F3D70]/15 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0F3D70] text-white text-xs font-bold shadow-sm">
              W
            </span>
            <span className="text-sm font-bold tracking-tight text-[#0F3D70]">Webnest</span>
            <span className="rounded bg-[#FFC107]/20 border border-[#FFC107] px-2 py-0.5 text-[10px] font-bold text-[#0F3D70]">
              Tactile Craft
            </span>
          </div>

          <nav className="flex items-center gap-3 text-xs">
            <a
              href="#pricing"
              className="rounded-lg bg-neutral-100 border border-[#0F3D70]/15 px-3.5 py-1.5 font-bold text-[#0F3D70] hover:bg-neutral-200 active:scale-[0.97] transition-transform duration-100 ease-out"
            >
              ₦10,000 Base
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#FFC107] text-[#0F3D70] px-4 py-1.5 font-bold active:scale-[0.97] hover:bg-[#FFC822] transition-transform duration-100 ease-out shadow-sm"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Hook */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0F3D70]/20 bg-[#0F3D70]/5 px-3.5 py-1 text-xs font-bold text-[#0F3D70]">
          <span className="h-2 w-2 rounded-full bg-[#0F3D70]" />
          <span>Emil Kowalski Micro-Tactile Physics • 48h SLA</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-[#0F3D70] leading-[1.15]">
          Stop losing orders in messy DMs.
          <span className="block text-[#0F3D70] mt-1">
            Software that responds with weight.
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto leading-relaxed font-normal">
          High-polish digital storefronts for Nigerian campus vendors and boutique merchants. Instant 1-tap WhatsApp checkout receipts, free lifetime cloud edge hosting, and zero monthly subscriptions.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-xl bg-[#FFC107] text-[#0F3D70] px-7 py-3.5 text-sm font-bold active:scale-[0.97] hover:bg-[#FFC822] transition-transform duration-100 ease-out flex items-center gap-2 shadow-[0_4px_16px_rgba(255,193,7,0.35)]"
          >
            <span>Configure Store (₦10,000)</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#showcase"
            className="rounded-xl border border-[#0F3D70]/20 bg-white text-[#0F3D70] px-7 py-3.5 text-sm font-semibold hover:bg-neutral-50 active:scale-[0.97] transition-transform duration-100 ease-out shadow-sm"
          >
            Proof Benchmarks
          </a>
        </div>
      </section>

      {/* Proof of Work */}
      <section id="showcase" className="mx-auto max-w-5xl px-4 py-16 border-t border-[#0F3D70]/10">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0F3D70] tracking-tight">Verified Production Systems</h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-1">Real commerce engines deployed by Endurance Owie.</p>
          </div>
          <span className="text-xs font-mono font-bold text-[#0F3D70]">0.4s Median Latency</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { title: "Elikar Essentials", type: "Care Packages", load: "0.38s Edge", link: "https://elikar.vercel.app" },
            { title: "Light Pen Hub", type: "Creative Books", load: "100% Uptime", link: "https://lightpenhub.com" },
            { title: "Campus Treats", type: "Bakery Orders", load: "80% Checkout", link: "https://pastry.webnest.store" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#0F3D70]/15 bg-white p-5 hover:border-[#0F3D70]/40 transition-colors duration-150 shadow-sm"
            >
              <div className="flex justify-between items-center text-[11px] font-mono text-[#0F3D70] border-b border-[#0F3D70]/10 pb-3 mb-4">
                <span>{item.type}</span>
                <span className="bg-[#FFC107] px-2 py-0.5 rounded text-[10px] font-bold">{item.load}</span>
              </div>
              <h3 className="text-base font-bold text-[#0F3D70]">{item.title}</h3>
              <p className="text-xs text-[#1A1A1A]/70 mt-1">Custom Telegram and WhatsApp routing architecture.</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0F3D70] hover:underline"
              >
                Inspect store ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Matrix */}
      <section id="pricing" className="mx-auto max-w-4xl px-4 py-16 border-t border-[#0F3D70]/10">
        <div className="rounded-2xl border border-[#0F3D70]/15 bg-white p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0F3D70]/10 pb-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#0F3D70] font-bold">Direct Cost Architecture</span>
              <h3 className="text-2xl font-bold text-[#0F3D70] mt-1">Configure Store Package</h3>
            </div>

            <div className="inline-flex rounded-lg border border-[#0F3D70]/15 bg-neutral-100 p-1">
              <button
                type="button"
                onClick={() => setIsPro(false)}
                className={`rounded-md px-3 py-1.5 text-xs font-bold active:scale-[0.97] transition-transform duration-100 ${
                  !isPro ? "bg-white text-[#0F3D70] shadow-sm" : "text-[#0F3D70]/70 hover:text-[#0F3D70]"
                }`}
              >
                Custom Selection
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPro(true);
                  setSelectedAddons(new Set(["cart", "admin", "domain", "analytics"]));
                }}
                className={`rounded-md px-3 py-1.5 text-xs font-bold active:scale-[0.97] transition-transform duration-100 ${
                  isPro ? "bg-[#FFC107] text-[#0F3D70]" : "text-[#0F3D70] hover:bg-[#FFC107]/20"
                }`}
              >
                Pro Bundle (₦35k)
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {/* Base */}
            <div className="flex items-center justify-between rounded-xl border border-[#0F3D70]/20 bg-[#0F3D70]/5 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0F3D70] text-white text-xs font-bold">
                  ✓
                </span>
                <div>
                  <span className="text-sm font-bold text-[#0F3D70]">Base Storefront Engine</span>
                  <p className="text-xs text-[#1A1A1A]/70">15-item mobile catalog, 1-click WhatsApp order generator, free edge hosting.</p>
                </div>
              </div>
              <span className="text-sm font-bold text-[#0F3D70]">₦10,000</span>
            </div>

            {/* Addons */}
            {ADDONS.map((a) => {
              const active = selectedAddons.has(a.id);
              return (
                <div
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className={`flex items-center justify-between rounded-xl border p-4 cursor-pointer active:scale-[0.99] transition-transform duration-100 ${
                    active ? "border-[#0F3D70] bg-[#FFC107]/15 shadow-sm" : "border-[#0F3D70]/15 bg-white hover:border-[#0F3D70]/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-5 w-5 rounded border-2 flex items-center justify-center text-[11px] ${
                      active ? "border-[#0F3D70] bg-[#0F3D70] text-white font-bold" : "border-[#0F3D70]/30"
                    }`}>
                      {active && "✓"}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#0F3D70]">{a.name}</span>
                      <p className="text-xs text-[#1A1A1A]/70">{a.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0F3D70]">+₦{a.price.toLocaleString()}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#0F3D70]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0F3D70]/70 uppercase">Total One-Time Investment</span>
              <div className="text-3xl font-bold font-mono text-[#0F3D70]">₦{total.toLocaleString()}</div>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-xl bg-[#FFC107] text-[#0F3D70] px-8 py-3.5 text-sm font-bold hover:bg-[#FFC822] active:scale-[0.97] transition-transform duration-100 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(255,193,7,0.35)]"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              <span>Lock Store on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-4 pt-12 text-center text-xs text-[#0F3D70]/70 border-t border-[#0F3D70]/10">
        <p>Webnest Emil Tactile Light • Covenant Edition • Precision Engineered by {SITE_CONFIG.architect}</p>
      </footer>
    </div>
  );
}
