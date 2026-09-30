"use client";

import React, { useState } from "react";
import { MessageCircle, Check, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface Addon {
  id: string;
  name: string;
  price: number;
  desc: string;
}

const ADDONS: Addon[] = [
  { id: "cart", name: "Multi-item Order Drawer", price: 5000, desc: "Seamless sliding tray with elegant quantity controls." },
  { id: "admin", name: "Private Management Table", price: 10000, desc: "Bespoke administrative portal for tracking and delivery." },
  { id: "cms", name: "Self-Serve Inventory Portal", price: 15000, desc: "Curate your collections and update pricing independently." },
  { id: "domain", name: "Custom Domain (.store / .com)", price: 7500, desc: "Bespoke domain linking with global SSL encryption." },
  { id: "analytics", name: "Audience & Acquisition Insights", price: 5000, desc: "Sophisticated traffic monitoring and acquisition reporting." },
];

export function EditorialLuxury() {
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
    `Greetings Endurance, I would like to commission an Editorial Luxury Webnest storefront. Total: ₦${total.toLocaleString()}`
  )}`;

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#22201D] font-serif selection:bg-[#C9A982]/30 selection:text-[#22201D] pb-32">
      {/* Editorial Header */}
      <header className="border-b border-[#E8E4DA] bg-[#FBF9F5]">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <div className="flex flex-col">
            <span className="text-2xl font-normal tracking-wide uppercase font-serif text-[#1F1D1A]">
              Webnest
            </span>
            <span className="text-[10px] tracking-widest uppercase font-sans text-[#756F64]">
              Storefront Atelier
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-sans tracking-widest uppercase text-[#545047]">
            <a href="#showcase" className="hover:text-black transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-black transition-colors">Commission</a>
            <a href="#faq" className="hover:text-black transition-colors">Inquiries</a>
          </nav>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#22201D] bg-[#22201D] text-[#FBF9F5] px-6 py-2.5 text-xs font-sans tracking-widest uppercase hover:bg-transparent hover:text-[#22201D] transition-colors duration-200"
          >
            Commission ₦10,000
          </a>
        </div>
      </header>

      {/* Hero Narrative */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
        <span className="text-xs font-sans tracking-widest uppercase text-[#967C5A] block mb-4">
          Bespoke Commerce Engine • 48-Hour Delivery
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#1F1D1A] leading-[1.1]">
          Elegance meets conversion.
          <span className="italic block font-normal text-[#8A7150] mt-2">
            Your storefront, perfected.
          </span>
        </h1>

        <p className="mt-8 text-base sm:text-lg text-[#5E594F] max-w-2xl mx-auto font-sans leading-relaxed">
          Transform your WhatsApp catalog into an editorial digital storefront. Seamless direct orders, zero recurring subscriptions, and free lifetime cloud hosting.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto border border-[#22201D] bg-[#22201D] text-[#FBF9F5] px-8 py-4 text-xs font-sans tracking-widest uppercase hover:bg-transparent hover:text-[#22201D] transition-colors duration-200"
          >
            Configure Commission (₦10,000)
          </a>
          <a
            href="#showcase"
            className="w-full sm:w-auto border border-[#D5CFC2] bg-transparent text-[#22201D] px-8 py-4 text-xs font-sans tracking-widest uppercase hover:border-[#22201D] transition-colors duration-200"
          >
            Explore Selected Works
          </a>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="showcase" className="mx-auto max-w-6xl px-6 py-20 border-t border-[#E8E4DA]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-sans tracking-widest uppercase text-[#967C5A]">Selected Portfolio</span>
            <h2 className="text-3xl font-normal text-[#1F1D1A] mt-2">Curated Storefront Works</h2>
          </div>
          <span className="text-xs font-sans text-[#756F64] mt-2 sm:mt-0">Engineered by Endurance Owie</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Word Study CU", genre: "Chaplaincy Platform", url: "https://wordstudycu.vercel.app", img: "/screenshots/wordstudy.png", note: "Official University Unit" },
            { title: "Elikar Essentials", genre: "Curated Campus Kits", url: "https://eliikar.vercel.app", img: "/screenshots/eliikar.png", note: "0.38s Load • High Volume" },
            { title: "Light Pen Hub", genre: "Literary Portal & Store", url: "https://light-pen-hub.vercel.app", img: "/screenshots/light-pen-hub.png", note: "100% Uptime • Direct Support" },
          ].map((item, idx) => (
            <div key={idx} className="border border-[#E3DEC3] bg-[#FFFFFF] p-6 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#967C5A] block mb-2">{item.genre}</span>
                <div className="aspect-[16/10] overflow-hidden border border-[#E3DEC3] bg-[#FBF9F5] mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-normal text-[#1F1D1A]">{item.title}</h3>
                <p className="text-xs font-sans text-[#756F64] mt-2 leading-relaxed">
                  Tailored static deployment with instant automated WhatsApp checkout routing.
                </p>
                <div className="mt-4 pt-3 border-t border-[#F0ECE1] text-[11px] font-sans text-[#5E594F]">
                  {item.note}
                </div>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-xs font-sans tracking-widest uppercase text-[#1F1D1A] underline hover:text-[#967C5A] transition-colors"
              >
                Inspect Live System ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Commission Matrix */}
      <section id="pricing" className="mx-auto max-w-4xl px-6 py-20 border-t border-[#E8E4DA]">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-sans tracking-widest uppercase text-[#967C5A]">The Investment</span>
          <h2 className="text-3xl font-normal text-[#1F1D1A] mt-2">Transparent Commission Scope</h2>
          <p className="text-xs font-sans text-[#756F64] mt-2">Every commission begins with the ₦10,000 Base Ticket. Add tailored modules as required.</p>
        </div>

        <div className="border border-[#E3DEC3] bg-white p-8">
          <div className="flex justify-between items-center border-b border-[#E8E4DA] pb-6 mb-6">
            <span className="text-sm font-sans tracking-widest uppercase text-[#1F1D1A]">Package Composition</span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsPro(false)}
                className={`text-xs font-sans px-4 py-1.5 uppercase tracking-wider ${
                  !isPro ? "border border-[#22201D] bg-[#22201D] text-white" : "border border-[#D5CFC2] text-[#545047]"
                }`}
              >
                Custom
              </button>
              <button
                onClick={() => {
                  setIsPro(true);
                  setSelectedAddons(new Set(["cart", "admin", "domain", "analytics"]));
                }}
                className={`text-xs font-sans px-4 py-1.5 uppercase tracking-wider ${
                  isPro ? "border border-[#22201D] bg-[#22201D] text-white" : "border border-[#D5CFC2] text-[#545047]"
                }`}
              >
                Pro Atelier (₦35k)
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border border-[#E8E4DA] bg-[#FBF9F5]">
              <div>
                <span className="text-sm font-serif text-[#1F1D1A]">Base Storefront Engine</span>
                <p className="text-xs font-sans text-[#756F64] mt-0.5">Mobile product showcase, 1-click WhatsApp order routing, free lifetime hosting.</p>
              </div>
              <span className="text-sm font-sans font-semibold text-[#1F1D1A]">₦10,000</span>
            </div>

            {ADDONS.map((a) => {
              const active = selectedAddons.has(a.id);
              return (
                <div
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className={`flex justify-between items-center p-4 border cursor-pointer transition-colors ${
                    active ? "border-[#22201D] bg-[#F7F4EC]" : "border-[#E8E4DA] hover:border-[#D5CFC2]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-4 h-4 border flex items-center justify-center text-[10px] ${
                      active ? "border-[#22201D] bg-[#22201D] text-white" : "border-[#C5BFB2]"
                    }`}>
                      {active && "✓"}
                    </span>
                    <div>
                      <span className="text-sm font-serif text-[#1F1D1A]">{a.name}</span>
                      <p className="text-xs font-sans text-[#756F64]">{a.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-sans font-medium text-[#1F1D1A]">+₦{a.price.toLocaleString()}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8E4DA] flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#756F64]">Total Investment</span>
              <div className="text-3xl font-serif text-[#1F1D1A] mt-1">₦{total.toLocaleString()}</div>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-[#22201D] bg-[#22201D] text-[#FBF9F5] px-8 py-3.5 text-xs font-sans tracking-widest uppercase hover:bg-transparent hover:text-[#22201D] transition-colors duration-200"
            >
              Order Commission on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pt-16 text-center text-xs font-sans text-[#756F64] border-t border-[#E8E4DA]">
        <p>Webnest Editorial Atelier • Designed & Curated by {SITE_CONFIG.architect}</p>
      </footer>
    </div>
  );
}
