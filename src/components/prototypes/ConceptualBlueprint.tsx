"use client";

import React, { useState } from "react";
import { Compass, ExternalLink, CheckSquare, Square } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface Addon {
  id: string;
  name: string;
  price: number;
  spec: string;
}

const ADDONS: Addon[] = [
  { id: "cart", name: "Multi-item Cart Drawer", price: 5000, spec: "SPEC: Drawer overlay + local cache" },
  { id: "admin", name: "Order Tracking Admin", price: 10000, spec: "SPEC: Private ledger management table" },
  { id: "cms", name: "Self-Serve Inventory CMS", price: 15000, spec: "SPEC: Smartphone catalog control interface" },
  { id: "domain", name: "Custom Domain (.store / .com)", price: 7500, spec: "SPEC: DNS zone record & SSL mapping" },
  { id: "analytics", name: "Traffic & Click Analytics", price: 5000, spec: "SPEC: Visitor metrics & conversion funnel" },
];

export function ConceptualBlueprint() {
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
    `Hi Webnests, [ARCHITECTURAL BLUEPRINT] Approving Webnest storefront specification. Total: ₦${total.toLocaleString()}`
  )}`;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] font-sans selection:bg-[#FFC107] selection:text-[#0F3D70] pb-32">
      {/* Blueprint Top Header Bar */}
      <header className="border-b-2 border-[#0F3D70] bg-white sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70]">
              <Compass className="h-5 w-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-sm font-black tracking-wider uppercase text-[#0F3D70] block">
                WEBNEST.SCHEMATIC
              </span>
              <span className="block text-[10px] font-bold uppercase text-[#0F3D70]/80">
                SCALE: 1:1 • COVENANT_ENGINEERING
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-1 text-[10px] font-black uppercase text-[#0F3D70]">
              STATUS: SPEC_APPROVED
            </span>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#0F3D70] bg-[#0F3D70] text-white px-4 py-2 text-xs font-black uppercase tracking-wider hover:bg-[#FFC107] hover:text-[#0F3D70] transition-colors"
            >
              APPROVE (₦10k)
            </a>
          </div>
        </div>
      </header>

      {/* Blueprint Hero */}
      <section className="relative mx-auto max-w-4xl px-6 pt-16 pb-20 text-center">
        <div className="inline-block border-2 border-dashed border-[#0F3D70] bg-[#FFC107]/20 px-4 py-1.5 text-xs font-black uppercase text-[#0F3D70] mb-6">
          ARCHITECTURAL SPECIFICATION: 1-CLICK WHATSAPP STOREFRONT // 48-HOUR_DELIVERY
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#0F3D70] leading-tight">
          SYSTEM ARCHITECTURE:
          <span className="block text-[#0F3D70] mt-2 underline decoration-4 underline-offset-6">
            ZERO-FRICTION DM COMMERCE
          </span>
        </h1>

        <p className="mt-6 text-sm sm:text-base text-[#1A1A1A]/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Eliminating unformatted direct-message inquiries through deterministic 1-click WhatsApp order encoding. Clean mobile catalog, free lifetime static cloud hosting, and flat ₦10,000 setup fee.
        </p>

        {/* Blueprint Dimension Block */}
        <div className="mt-10 inline-grid grid-cols-1 sm:grid-cols-3 gap-3 border-2 border-[#0F3D70] bg-white p-4 text-left shadow-[4px_4px_0_0_#0F3D70]">
          <div className="border-b sm:border-b-0 sm:border-r-2 border-[#0F3D70] pb-2 sm:pb-0 sm:pr-4">
            <span className="text-[10px] font-black uppercase text-[#0F3D70]/70">TURNAROUND_TIME</span>
            <div className="text-sm font-black text-[#0F3D70]">T &le; 48.0 HOURS</div>
          </div>
          <div className="border-b sm:border-b-0 sm:border-r-2 border-[#0F3D70] pb-2 sm:pb-0 sm:pr-4">
            <span className="text-[10px] font-black uppercase text-[#0F3D70]/70">HOSTING_FEES</span>
            <div className="text-sm font-black text-[#0F3D70]">₦0.00 / MONTH (VERCEL)</div>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase text-[#0F3D70]/70">SALES_CUT</span>
            <div className="text-sm font-black text-[#0F3D70]">0.00% RETAINED</div>
          </div>
        </div>
      </section>

      {/* Architectural Showcase */}
      <section id="showcase" className="relative mx-auto max-w-6xl px-6 py-16 border-t-2 border-[#0F3D70]">
        <div className="flex justify-between items-baseline mb-8">
          <div>
            <span className="text-[10px] font-black uppercase text-[#0F3D70] tracking-wider">
              FIGURE 1.0 // FIELD_PROTOTYPES
            </span>
            <h2 className="text-2xl font-black uppercase text-[#0F3D70] mt-1">Verified Field Schematics</h2>
          </div>
          <span className="text-xs font-black uppercase text-[#0F3D70]">AUTHOR: ENDURANCE OWIE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: "SPEC_01", title: "Word Study CU", cat: "Chaplaincy Unit", url: "https://wordstudycu.vercel.app", img: "/screenshots/wordstudy.png", metric: "CAMPUS_UNIT" },
            { tag: "SPEC_02", title: "Elikar Essentials", cat: "Dorm Packages", url: "https://eliikar.vercel.app", img: "/screenshots/eliikar.png", metric: "T_LOAD = 0.38s" },
            { tag: "SPEC_03", title: "Light Pen Hub", cat: "Creator Portal", url: "https://light-pen-hub.vercel.app", img: "/screenshots/light-pen-hub.png", metric: "UPTIME = 100%" },
          ].map((item) => (
            <div key={item.tag} className="border-2 border-[#0F3D70] bg-white p-4 shadow-[4px_4px_0_0_#0F3D70] flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center text-[10px] font-black text-[#0F3D70] border-b-2 border-[#0F3D70] pb-2 mb-3">
                  <span className="bg-[#FFC107] px-1.5 py-0.5">{item.tag}</span>
                  <span>{item.metric}</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden border-2 border-[#0F3D70] bg-neutral-50 mb-3">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="text-base font-black text-[#0F3D70] uppercase">{item.title}</h3>
                <p className="text-xs font-medium text-[#1A1A1A]/80 mt-1">{item.cat} • Architecture verified</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-2 border-t-2 border-[#0F3D70]/20 inline-flex items-center justify-between text-xs font-black uppercase text-[#0F3D70] hover:text-[#0F3D70]/80"
              >
                <span>OPEN_SPEC</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Pricing Assembly */}
      <section id="pricing" className="relative mx-auto max-w-4xl px-6 py-16 border-t-2 border-[#0F3D70]">
        <div className="border-2 border-[#0F3D70] bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#0F3D70]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-[#0F3D70] pb-4 mb-6 gap-3">
            <div>
              <span className="text-[10px] font-black uppercase text-[#0F3D70]">
                BILL_OF_MATERIALS // MODULE_SELECTION
              </span>
              <h3 className="text-xl font-black text-[#0F3D70] uppercase mt-0.5">Assembly Configurator</h3>
            </div>

            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setIsPro(false)}
                className={`px-3 py-1.5 border-2 border-[#0F3D70] font-black uppercase ${
                  !isPro ? "bg-[#0F3D70] text-white" : "bg-white text-[#0F3D70] hover:bg-[#FFC107]"
                }`}
              >
                Custom
              </button>
              <button
                onClick={() => {
                  setIsPro(true);
                  setSelectedAddons(new Set(["cart", "admin", "domain", "analytics"]));
                }}
                className={`px-3 py-1.5 border-2 border-[#0F3D70] font-black uppercase ${
                  isPro ? "bg-[#FFC107] text-[#0F3D70]" : "bg-white text-[#0F3D70] hover:bg-[#FFC107]"
                }`}
              >
                Pro Bundle (₦35k)
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3.5 border-2 border-[#0F3D70] bg-[#FFC107]/15 text-xs">
              <div>
                <span className="font-black text-[#0F3D70] uppercase">[BASE_CORE] Mobile Product Catalog + 1-Tap WA</span>
                <span className="block text-[10px] font-medium text-[#1A1A1A]/70">Lifetime edge cloud hosting on Vercel</span>
              </div>
              <span className="font-black text-[#0F3D70] text-sm">₦10,000</span>
            </div>

            {ADDONS.map((a) => {
              const checked = selectedAddons.has(a.id);
              return (
                <div
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className={`flex justify-between items-center p-3.5 border-2 border-[#0F3D70] text-xs cursor-pointer transition-colors ${
                    checked ? "bg-[#FFC107]/25 shadow-sm" : "bg-white hover:bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {checked ? (
                      <CheckSquare className="h-4 w-4 text-[#0F3D70] stroke-[2.5]" />
                    ) : (
                      <Square className="h-4 w-4 text-[#0F3D70]/40" />
                    )}
                    <div>
                      <span className="font-black text-[#0F3D70] uppercase">{a.name}</span>
                      <span className="block text-[10px] font-medium text-[#1A1A1A]/70">{a.spec}</span>
                    </div>
                  </div>
                  <span className="font-black text-[#0F3D70]">+₦{a.price.toLocaleString()}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-[#0F3D70] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-[10px] font-black uppercase text-[#0F3D70]">TOTAL_ASSEMBLY_ESTIMATE</span>
              <div className="text-3xl font-black text-[#0F3D70]">₦{total.toLocaleString()}</div>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70] px-6 py-3.5 text-xs font-black uppercase tracking-wider hover:bg-[#FFC822] transition-colors shadow-[4px_4px_0_0_#0F3D70]"
            >
              APPROVE_SCHEMATIC_ON_WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto max-w-6xl px-6 pt-12 text-center text-xs font-bold text-[#0F3D70] border-t-2 border-[#0F3D70]">
        <p>WEBNEST.SCHEMATIC // WHITE EDITION • COVENANT UNIVERSITY • {SITE_CONFIG.architect}</p>
      </footer>
    </div>
  );
}
