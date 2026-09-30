"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Clock, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface Addon {
  id: string;
  name: string;
  price: number;
  desc: string;
}

const ADDONS: Addon[] = [
  { id: "cart", name: "Multi-item Cart Drawer", price: 5000, desc: "Add multiple items to order before checkout." },
  { id: "admin", name: "Order Tracking Admin", price: 10000, desc: "Table to mark orders as pending, paid, or delivered." },
  { id: "cms", name: "Self-Serve Inventory CMS", price: 15000, desc: "Add or edit products and prices from your phone." },
  { id: "domain", name: "Custom Domain (.store / .com)", price: 7500, desc: "Connect your own dot-com web address with security certificate." },
  { id: "analytics", name: "Traffic & Click Analytics", price: 5000, desc: "Track how many visitors view products and tap WhatsApp." },
];

export function AccessibleFunctional() {
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
    `Hi Webnests, I want to commission an Accessible Webnest storefront. Selected Total: ₦${total.toLocaleString()}`
  )}`;

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-amber-100 selection:text-neutral-900 pb-32">
      {/* Refined Header */}
      <header className="border-b border-neutral-200 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 text-[#0F3D70] text-sm font-medium">
              W
            </span>
            <div>
              <span className="text-lg font-normal tracking-tight text-neutral-900 block">
                Webnest
              </span>
              <span className="text-xs text-neutral-500 font-normal">
                Accessible & Refined Edition
              </span>
            </div>
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-5 rounded-md border border-neutral-900 bg-neutral-900 text-white text-xs tracking-wider uppercase inline-flex items-center justify-center hover:bg-neutral-800 transition-colors focus-visible:ring-2 focus-visible:ring-[#0F3D70] focus-visible:ring-offset-2"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* Main Hero Hook */}
      <main className="mx-auto max-w-4xl px-6 pt-16 pb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0F3D70]"></span>
          <span className="text-xs font-normal text-neutral-700 tracking-wide">
            Guaranteed 48-Hour Turnaround • ₦0 Monthly Hosting
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] text-neutral-900">
          Stop losing sales to messy DMs.
          <span className="block text-neutral-500 font-light mt-2">
            A single-tap storefront for ₦10,000.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal max-w-2xl">
          Crafted for campus entrepreneurs and independent boutique owners. Fast mobile catalog, automated WhatsApp order summaries, and permanent zero-cost cloud hosting.
        </p>

        {/* Action Buttons with 48px+ Tap Targets */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="min-h-[48px] px-7 rounded-md bg-[#0F3D70] text-white text-sm font-normal tracking-wide flex items-center justify-center hover:bg-[#0c315a] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F3D70] focus-visible:ring-offset-2"
          >
            Configure Store Package (₦10,000)
          </a>
          <a
            href="#showcase"
            className="min-h-[48px] px-7 rounded-md border border-neutral-300 bg-white text-neutral-800 text-sm font-normal tracking-wide flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-400 transition-colors focus-visible:ring-2 focus-visible:ring-[#0F3D70] focus-visible:ring-offset-2"
          >
            Inspect Case Studies
          </a>
        </div>

        {/* Utilitarian Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-neutral-200 pt-10">
          <div className="rounded-lg border border-neutral-200 p-5 bg-white">
            <span className="text-xs uppercase tracking-wider text-neutral-500 block mb-1">Delivery Time</span>
            <span className="text-xl font-normal text-neutral-900">Within 48 Hours</span>
            <p className="text-xs text-neutral-500 mt-1">Ready for live transactions</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5 bg-white">
            <span className="text-xs uppercase tracking-wider text-neutral-500 block mb-1">Hosting Charges</span>
            <span className="text-xl font-normal text-neutral-900">₦0 Forever</span>
            <p className="text-xs text-neutral-500 mt-1">Zero monthly subscriptions</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5 bg-white">
            <span className="text-xs uppercase tracking-wider text-neutral-500 block mb-1">Platform Cut</span>
            <span className="text-xl font-normal text-neutral-900">0% Revenue Fee</span>
            <p className="text-xs text-neutral-500 mt-1">Keep 100% of your earnings</p>
          </div>
        </div>
      </main>

      {/* Case Studies Showcase */}
      <section id="showcase" className="border-t border-neutral-200 bg-neutral-50/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-wider text-neutral-500 block">Verified Systems</span>
            <h2 className="text-2xl sm:text-3xl font-normal text-neutral-900 mt-1">Live Storefront Proof</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Word Study Unit", cat: "Chaplaincy Platform", url: "https://wordstudycu.vercel.app", img: "/screenshots/wordstudy.png" },
              { name: "Elikar Essentials", cat: "Dorm Packages", url: "https://eliikar.vercel.app", img: "/screenshots/eliikar.png" },
              { name: "Light Pen Hub", cat: "Creator Portal", url: "https://light-pen-hub.vercel.app", img: "/screenshots/light-pen-hub.png" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg border border-neutral-200 bg-white p-5 flex flex-col justify-between shadow-sm hover:border-neutral-300 transition-colors group">
                <div>
                  <div className="aspect-[16/10] rounded-md overflow-hidden border border-neutral-200 bg-neutral-50 mb-4">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <span className="text-xs font-normal uppercase tracking-wider text-neutral-500">{item.cat}</span>
                  <h3 className="text-base font-normal text-neutral-900 mt-1">{item.name}</h3>
                  <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                    Live production deployment with automated WhatsApp order receipts.
                  </p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 min-h-[44px] rounded-md border border-neutral-300 bg-white text-neutral-800 font-normal text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                >
                  <span>Open Live Store</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Matrix */}
      <section id="pricing" className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-neutral-200 pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-500">Transparent Pricing</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-neutral-900 mt-1">Select Store Capabilities</h2>
            </div>

            <div className="flex rounded-md border border-neutral-200 p-1 bg-neutral-50">
              <button
                type="button"
                onClick={() => setIsPro(false)}
                className={`min-h-[40px] px-4 rounded text-xs tracking-wide transition-colors ${
                  !isPro ? "bg-white text-neutral-900 shadow-sm font-medium" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Custom Add-ons
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPro(true);
                  setSelectedAddons(new Set(["cart", "admin", "domain", "analytics"]));
                }}
                className={`min-h-[40px] px-4 rounded text-xs tracking-wide transition-colors ${
                  isPro ? "bg-white text-neutral-900 shadow-sm font-medium" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Pro Bundle (₦35k)
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-5 rounded-lg border border-neutral-200 bg-neutral-50/70">
              <div>
                <span className="text-base font-normal text-neutral-900">Base Storefront Package (Included)</span>
                <p className="text-sm text-neutral-500 mt-0.5">15-product mobile catalog with 1-click WhatsApp order checkout.</p>
              </div>
              <span className="text-base font-medium text-neutral-900">₦10,000</span>
            </div>

            {ADDONS.map((a) => {
              const active = selectedAddons.has(a.id);
              return (
                <div
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className={`flex justify-between items-center p-5 rounded-lg border cursor-pointer transition-colors ${
                    active
                      ? "border-[#0F3D70]/40 bg-blue-50/30"
                      : "border-neutral-200 bg-white hover:bg-neutral-50/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`h-5 w-5 rounded flex items-center justify-center text-xs transition-colors ${
                        active
                          ? "bg-[#0F3D70] text-white"
                          : "border border-neutral-300 bg-white"
                      }`}
                    >
                      {active && <Check className="h-3 w-3 stroke-[2.5]" />}
                    </span>
                    <div>
                      <span className="text-sm font-normal text-neutral-900">{a.name}</span>
                      <p className="text-xs text-neutral-500 mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                  <span className="text-sm font-normal text-neutral-700">+₦{a.price.toLocaleString()}</span>
                </div>
              );
            })}
          </div>

          {/* Investment Total & Final WhatsApp Button */}
          <div className="mt-10 p-6 rounded-lg border border-neutral-200 bg-neutral-50/50 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-500">Total One-Time Fee</span>
              <div className="text-3xl font-light text-neutral-900 mt-1">₦{total.toLocaleString()}</div>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] w-full sm:w-auto px-8 rounded-md bg-[#0F3D70] text-white text-sm font-normal tracking-wide flex items-center justify-center hover:bg-[#0c315a] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F3D70]"
            >
              Order Store on WhatsApp (1 Tap)
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-500 font-normal">
        <p>Webnest Accessible Refined Edition • Architected by {SITE_CONFIG.architect}</p>
      </footer>
    </div>
  );
}
