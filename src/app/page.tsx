"use client";

import React, { useState } from "react";
import { MessageSquare, Check, ArrowRight, ShieldCheck, Clock, ExternalLink, HelpCircle, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface Addon {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  desc: string;
  isDomain?: boolean;
}

const ADDONS: Addon[] = [
  {
    id: "seo_basic",
    name: "Google Search Console & Indexing",
    price: 7500,
    priceDisplay: "+₦7,500",
    desc: "XML sitemap generation, search console verification, and meta tags so your store appears on Google search.",
  },
  {
    id: "seo_adv",
    name: "Advanced Keyword Ranking & Schema",
    price: 15000,
    priceDisplay: "+₦15,000",
    desc: "Targeted niche keyword optimization, structured schema markup, and rich search snippets for customer discovery.",
  },
  {
    id: "admin",
    name: "Order Tracking Dashboard",
    price: 10000,
    priceDisplay: "+₦10,000",
    desc: "Administrative management sheet to mark incoming orders as pending, paid, or delivered.",
  },
  {
    id: "cms",
    name: "Mobile Inventory Manager",
    price: 15000,
    priceDisplay: "+₦15,000",
    desc: "Update product pictures, prices, and stock directly from your phone without editing code.",
  },
  {
    id: "domain",
    name: "Custom Domain Linking (.com / .store / .ng)",
    price: 0,
    priceDisplay: "+ Varies",
    desc: "Connect your bespoke web address with free SSL security. Domain cost billed at registrar price.",
    isDomain: true,
  },
  {
    id: "analytics",
    name: "Visitor Traffic Analytics",
    price: 5000,
    priceDisplay: "+₦5,000",
    desc: "Monitor how many people view your catalog and tap to order each week.",
  },
];

const FAQS = [
  {
    q: "Are there any hidden monthly or yearly hosting charges?",
    a: "None. Your storefront is deployed on modern cloud edge infrastructure (Vercel) that costs ₦0 forever for standard traffic. You only pay the one-time build fee. There are no monthly maintenance invoices or renewal surprises.",
  },
  {
    q: "How long does it take from payment to launch?",
    a: "Exactly 3 days or less. Once you share your product pictures, names, prices, and WhatsApp contact number, your storefront is coded, connected to WhatsApp routing, and live within 72 hours or less.",
  },
  {
    q: "How does Google Search indexing work?",
    a: "We generate a compliant XML sitemap, configure keyword meta tags, and register your storefront with Google Search Console. Google crawls your pages so when potential customers search your business name or service keywords, your link appears in Google search results.",
  },
  {
    q: "Why does custom domain pricing vary?",
    a: "Domain registry prices depend on the extension you want (e.g. .com, .ng, .store, .co). We connect and configure the domain with free SSL security at zero markup—you simply pay the exact registrar cost for your chosen name.",
  },
  {
    q: "How do customer orders reach me?",
    a: "When a buyer taps 'Send Order', Webnest formats their selected items from the cart, quantities, delivery notes, and calculated total into a clean WhatsApp message and opens a chat directly with your WhatsApp phone number (+234 913 938 6537).",
  },
];

export default function HomePage() {
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set(["seo_basic", "admin"]));
  const [isPro, setIsPro] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAddon = (id: string) => {
    setIsPro(false);
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const setProMode = (pro: boolean) => {
    setIsPro(pro);
    if (pro) {
      setSelectedAddons(new Set(["admin", "cms", "seo_basic", "analytics"]));
    }
  };

  const calculatedTotal = isPro
    ? SITE_CONFIG.proBundlePrice
    : SITE_CONFIG.basePrice +
      Array.from(selectedAddons).reduce((s, id) => s + (ADDONS.find((a) => a.id === id)?.price || 0), 0);

  const hasDomain = selectedAddons.has("domain");

  const waOrderText = `Hi Webnests, I want to order a Webnest storefront. Package: ${
    isPro ? "Pro Bundle (₦45,000)" : `Base ₦15k + ${Array.from(selectedAddons).join(", ")}`
  }. Total: ₦${calculatedTotal.toLocaleString()}${hasDomain ? " (+ Custom Domain inquiry)" : ""}`;

  const waHref = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(waOrderText)}`;

  const dynamicCtaLabel = `Order on WhatsApp (₦${calculatedTotal.toLocaleString()}${hasDomain && !isPro ? " + Varies" : ""})`;

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#22201D] font-sans selection:bg-[#C9A982]/30 selection:text-[#22201D]">
      {/* Top Sticky Navigation */}
      <header className="border-b border-[#E8E4DA] bg-[#FBF9F5]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-normal tracking-wide uppercase font-serif text-[#1F1D1A]">
              Webnest
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase text-[#756F64] leading-tight mt-0.5">
              Storefronts for Business Owners, Freelancers & Vendors
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#545047]">
            <a href="#showcase" className="hover:text-black transition-colors">Case Studies</a>
            <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex border border-[#22201D] bg-[#22201D] text-[#FBF9F5] px-5 sm:px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-transparent hover:text-[#22201D] transition-colors duration-200"
            >
              {dynamicCtaLabel}
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-[#1F1D1A] hover:bg-[#EFECE4] transition-colors rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8E4DA] bg-[#FBF9F5] px-4 py-6 shadow-md animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 text-xs tracking-widest uppercase text-[#545047]">
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-black border-b border-[#F0ECE1] transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-black border-b border-[#F0ECE1] transition-colors"
              >
                Pricing & Packages
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-black border-b border-[#F0ECE1] transition-colors"
              >
                FAQ
              </a>
            </nav>

            <div className="mt-5 pt-4 border-t border-[#E8E4DA] flex flex-col gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center border border-[#22201D] bg-[#22201D] text-[#FBF9F5] px-4 py-3.5 text-xs tracking-widest uppercase hover:bg-transparent hover:text-[#22201D] transition-colors duration-200 font-medium"
              >
                {dynamicCtaLabel}
              </a>
              <div className="flex items-center justify-between text-[11px] text-[#756F64] pt-1">
                <span>WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
                <span>72h Turnaround</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20 text-center">
        <div className="inline-flex items-center gap-2 border border-[#E3DEC3] bg-white px-3.5 py-1.5 mb-6 text-xs text-[#756F64] tracking-wide max-w-full flex-wrap justify-center text-center">
          <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0"></span>
          <span>Built in 72 Hours or Less • Multi-Item Cart Included • ₦0 Monthly Hosting</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-normal tracking-tight text-[#1F1D1A] leading-[1.15] font-serif">
          Stop losing client orders in messy WhatsApp DMs.
          <span className="italic block font-normal text-[#8A7150] mt-3">
            Get a clean, 1-click storefront for ₦15,000.
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[#5E594F] max-w-2xl mx-auto leading-relaxed">
          Built for business owners, freelancers, and vendors. Instead of managing orders through chaotic chats, screenshot proofs, and scattered messages, send clients a single link. They browse your products or services, select what they need with a built-in cart, and tap one button to send you a complete, formatted order on WhatsApp.
        </p>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto border border-[#22201D] bg-[#22201D] text-[#FBF9F5] px-8 py-4 text-xs tracking-widest uppercase hover:bg-transparent hover:text-[#22201D] transition-colors duration-200 text-center min-h-[48px] flex items-center justify-center"
          >
            Configure Store Package (₦15,000)
          </a>
          <a
            href="#showcase"
            className="w-full sm:w-auto border border-[#D5CFC2] bg-transparent text-[#22201D] px-8 py-4 text-xs tracking-widest uppercase hover:border-[#22201D] transition-colors duration-200 text-center min-h-[48px] flex items-center justify-center"
          >
            Inspect Verified Case Studies
          </a>
        </div>

        {/* Feature Pillars */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-10 border-t border-[#E8E4DA] text-left">
          <div className="p-5 border border-[#E8E4DA] bg-white">
            <span className="text-[11px] uppercase tracking-wider text-[#756F64] block">Turnaround Time</span>
            <span className="text-xl font-serif text-[#1F1D1A] mt-1 block">Live in 3 Days or Less</span>
            <p className="text-xs text-[#756F64] mt-1">Send product details, get your storefront live in 3 days or less.</p>
          </div>
          <div className="p-5 border border-[#E8E4DA] bg-white">
            <span className="text-[11px] uppercase tracking-wider text-[#756F64] block">Hosting Fee</span>
            <span className="text-xl font-serif text-[#1F1D1A] mt-1 block">₦0 Every Month</span>
            <p className="text-xs text-[#756F64] mt-1">Zero monthly subscriptions. Fast static cloud edge hosting.</p>
          </div>
          <div className="p-5 border border-[#E8E4DA] bg-white">
            <span className="text-[11px] uppercase tracking-wider text-[#756F64] block">Order Experience</span>
            <span className="text-xl font-serif text-[#1F1D1A] mt-1 block">Built-in Cart Drawer</span>
            <p className="text-xs text-[#756F64] mt-1">Buyers add multiple items and send pre-calculated receipts.</p>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section id="showcase" className="mx-auto max-w-6xl px-6 py-20 border-t border-[#E8E4DA]">
        <div className="mb-12">
          <span className="text-xs tracking-widest uppercase text-[#967C5A]">Verified Systems</span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1F1D1A] font-serif mt-2">Real systems taking orders right now</h2>
          <p className="text-xs text-[#756F64] mt-1">Every storefront runs on free cloud edge hosting and routes straight to WhatsApp or Telegram.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case Study 1: Elikar Essentials */}
          <div className="border border-[#E3DEC3] bg-white p-6 flex flex-col justify-between group hover:border-[#22201D] transition-colors">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#967C5A] block mb-2 font-mono">Hostel Care Packages</span>
              <div className="aspect-[16/10] overflow-hidden border border-[#E3DEC3] bg-[#FBF9F5] mb-4">
                <img src="/screenshots/eliikar.png" alt="Elikar Essentials" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-normal font-serif text-[#1F1D1A]">Elikar Essentials</h3>
              <p className="text-xs text-[#756F64] mt-2 leading-relaxed">
                Campus room supplies and dorm packages with instant order checkout and telegram routing.
              </p>
            </div>
            <a
              href="https://eliikar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-xs tracking-widest uppercase text-[#1F1D1A] underline hover:text-[#967C5A] transition-colors font-mono"
            >
              Open Live Store ↗
            </a>
          </div>

          {/* Case Study 2: Light Pen Hub */}
          <div className="border border-[#E3DEC3] bg-white p-6 flex flex-col justify-between group hover:border-[#22201D] transition-colors">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#967C5A] block mb-2 font-mono">Author Platform & Books</span>
              <div className="aspect-[16/10] overflow-hidden border border-[#E3DEC3] bg-[#FBF9F5] mb-4">
                <img src="/screenshots/light-pen-hub.png" alt="Light Pen Hub" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-normal font-serif text-[#1F1D1A]">Light Pen Hub</h3>
              <p className="text-xs text-[#756F64] mt-2 leading-relaxed">
                Digital book catalog and reader community portal with direct reader checkout and persona switcher.
              </p>
            </div>
            <a
              href="https://light-pen-hub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-xs tracking-widest uppercase text-[#1F1D1A] underline hover:text-[#967C5A] transition-colors font-mono"
            >
              Open Live Store ↗
            </a>
          </div>

          {/* Case Study 3: Endurance Owie Portfolio */}
          <div className="border border-[#E3DEC3] bg-white p-6 flex flex-col justify-between group hover:border-[#22201D] transition-colors">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#967C5A] block mb-2 font-mono">Personal Engineering Hub</span>
              <div className="aspect-[16/10] overflow-hidden border border-[#E3DEC3] bg-[#FBF9F5] mb-4">
                <img src="/screenshots/endurance-portfolio.png" alt="Endurance Owie Portfolio" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-normal font-serif text-[#1F1D1A]">Endurance Owie</h3>
              <p className="text-xs text-[#756F64] mt-2 leading-relaxed">
                Systems architecture, autonomous agent pipelines, and productized web infrastructure showcase.
              </p>
            </div>
            <a
              href="https://endurance.website"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-xs tracking-widest uppercase text-[#1F1D1A] underline hover:text-[#967C5A] transition-colors font-mono"
            >
              Open Live Site ↗
            </a>
          </div>
        </div>
      </section>

      {/* Package Configurator & Pricing */}
      <section id="pricing" className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 border-t border-[#E8E4DA]">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs tracking-widest uppercase text-[#967C5A]">Simple Pricing</span>
          <h2 className="text-2xl sm:text-4xl font-normal font-serif text-[#1F1D1A] mt-2">₦15,000 base fee. Pay once, own it forever.</h2>
          <p className="text-xs text-[#756F64] mt-2 leading-relaxed">Multi-item cart drawer included in every store. No monthly subscriptions, no hosting bills, zero sales cuts.</p>
        </div>

        <div className="border border-[#E3DEC3] bg-white p-4 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[#E8E4DA] pb-5 sm:pb-6 mb-6">
            <span className="text-xs tracking-widest uppercase text-[#1F1D1A] font-semibold">Package Configurator</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setProMode(false)}
                className={`text-xs px-3 sm:px-4 py-2 uppercase tracking-wider transition-colors min-h-[44px] flex items-center ${
                  !isPro
                    ? "border border-[#22201D] bg-[#22201D] text-white"
                    : "border border-[#D5CFC2] text-[#545047] hover:border-[#22201D]"
                }`}
              >
                Custom Add-ons
              </button>
              <button
                type="button"
                onClick={() => setProMode(true)}
                className={`text-xs px-3 sm:px-4 py-2 uppercase tracking-wider transition-colors min-h-[44px] flex items-center ${
                  isPro
                    ? "border border-[#22201D] bg-[#22201D] text-white"
                    : "border border-[#D5CFC2] text-[#545047] hover:border-[#22201D]"
                }`}
              >
                Pro Bundle (₦45k)
              </button>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {/* Base Storefront Package (Included - ₦15,000) */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 p-4 border border-[#E8E4DA] bg-[#FBF9F5]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-serif text-[#1F1D1A] font-semibold">Base Storefront Package</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono px-2 py-0.5 rounded">Cart Drawer Included</span>
                </div>
                <p className="text-xs text-[#756F64] mt-1">15 products/services with photos, descriptions, multi-item cart drawer, and 1-tap WhatsApp checkout routing.</p>
              </div>
              <span className="text-sm font-semibold text-[#1F1D1A] self-end sm:self-center shrink-0">₦15,000</span>
            </div>

            {/* Configurable Add-ons */}
            {ADDONS.map((a) => {
              const active = selectedAddons.has(a.id);
              return (
                <div
                  key={a.id}
                  onClick={() => toggleAddon(a.id)}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 border cursor-pointer transition-colors gap-3 select-none min-h-[52px] ${
                    active ? "border-[#22201D] bg-[#F7F4EC]" : "border-[#E8E4DA] hover:border-[#D5CFC2]"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span
                      className={`w-4 h-4 mt-0.5 sm:mt-0 shrink-0 border flex items-center justify-center text-[10px] ${
                        active ? "border-[#22201D] bg-[#22201D] text-white" : "border-[#C5BFB2]"
                      }`}
                    >
                      {active && "✓"}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-serif text-[#1F1D1A]">{a.name}</span>
                        {a.isDomain && (
                          <span className="text-[10px] bg-amber-100 text-amber-900 font-mono px-1.5 py-0.5 rounded">Domain at-cost</span>
                        )}
                      </div>
                      <p className="text-xs text-[#756F64] mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#1F1D1A] shrink-0 self-end sm:self-center">{a.priceDisplay}</span>
                </div>
              );
            })}
          </div>

          {/* Total & Action Button */}
          <div className="mt-8 pt-6 border-t border-[#E8E4DA] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#756F64]">One-Time Total</span>
              <div className="text-2xl sm:text-3xl font-serif text-[#1F1D1A] mt-1 font-semibold">
                ₦{calculatedTotal.toLocaleString()}{hasDomain && !isPro ? " + Varies" : ""}
              </div>
              <p className="text-[11px] text-[#756F64] mt-0.5 leading-snug">
                {isPro
                  ? "Pro Bundle: Base + Cart + Admin + CMS + Google Indexing + Analytics (Save ₦7,500)"
                  : `Base Package (₦15k with Cart) + ${selectedAddons.size} Add-on${selectedAddons.size === 1 ? "" : "s"}${hasDomain ? " + Domain at-cost" : ""}`}
              </p>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-[#22201D] bg-[#22201D] text-[#FBF9F5] px-8 py-4 text-xs tracking-widest uppercase hover:bg-transparent hover:text-[#22201D] transition-colors duration-200 text-center min-h-[48px] flex items-center justify-center font-medium"
            >
              Order on WhatsApp (1 Tap)
            </a>
          </div>
        </div>
      </section>

      {/* Editorial FAQ Accordion */}
      <section id="faq" className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 border-t border-[#E8E4DA]">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs tracking-widest uppercase text-[#967C5A]">Common Questions</span>
          <h2 className="text-2xl sm:text-4xl font-normal font-serif text-[#1F1D1A] mt-2">Frequently asked questions</h2>
          <p className="text-xs text-[#756F64] mt-2 leading-relaxed">Clear answers about pricing, turnaround, domain extensions, and Google Search indexing.</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border border-[#E3DEC3] bg-white p-5 sm:p-6">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left flex justify-between items-center font-serif text-base sm:text-lg text-[#1F1D1A] gap-4 min-h-[44px]"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <span className="text-sm font-mono shrink-0">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs text-[#5E594F] leading-relaxed border-t border-[#F0ECE1] pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 text-center text-xs text-[#756F64] border-t border-[#E8E4DA]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-serif text-base text-[#1F1D1A] block">Webnest</span>
            <span className="text-[11px] text-[#756F64]">Built for Business Owners, Freelancers & Vendors by Endurance Owie</span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs text-[#545047]">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Hi Webnests, I have an inquiry about building a storefront."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black min-h-[36px] flex items-center"
            >
              WhatsApp: {SITE_CONFIG.whatsappDisplay}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-black min-h-[36px] flex items-center">
              {SITE_CONFIG.email}
            </a>
            <a href="https://endurance.website" target="_blank" rel="noopener noreferrer" className="hover:text-black min-h-[36px] flex items-center">
              endurance.website
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
