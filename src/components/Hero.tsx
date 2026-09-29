"use client";

import React, { useState } from "react";
import { HeroBadge } from "./HeroBadge";
import { MessageCircle, ShoppingBag, ShieldCheck, Clock, Check, Plus, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  const [cartCount, setCartCount] = useState(2);
  const [showDemoNotification, setShowDemoNotification] = useState(false);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setShowDemoNotification(true);
    setTimeout(() => setShowDemoNotification(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:pt-16 md:pb-24 border-b-2 border-[#0F3D70]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: The Hook */}
          <div className="flex flex-col items-start lg:col-span-7">
            <HeroBadge
              text="48-Hour Delivery Guarantee"
              subtext="Base Storefront ₦10,000"
              href="#calculator"
            />

            <h1 className="mt-6 text-3xl font-black uppercase tracking-tight text-[#0F3D70] sm:text-5xl sm:leading-[1.1] lg:text-6xl">
              Stop losing orders in messy DMs. Turn WhatsApp into a{" "}
              <span className="bg-[#FFC107] px-2 py-0.5 text-[#0F3D70] inline-block border-2 border-[#0F3D70] shadow-brutal-sm mt-1 sm:mt-0">
                1-click store
              </span>
              .
            </h1>

            <p className="mt-5 text-base font-semibold leading-relaxed text-[#1A1A1A] sm:text-lg">
              Functional, fast e-commerce setups for campus entrepreneurs and local retail boutiques within 48 hours. Mobile catalogs, structured checkout receipts, and automated WhatsApp routing. Flat ₦10,000 base fee with zero monthly SaaS subscriptions.
            </p>

            {/* Conversion CTA Group */}
            <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4">
              <a
                href="#calculator"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover active:translate-x-0 active:translate-y-0 active:shadow-brutal-base"
                style={{ touchAction: "manipulation" }}
              >
                <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
                <span>Build Your Store (₦10,000)</span>
              </a>

              <a
                href="#showcase"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border-2 border-[#0F3D70] bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover active:translate-x-0 active:translate-y-0 active:shadow-brutal-base hover:bg-[#FFC107]/20"
                style={{ touchAction: "manipulation" }}
              >
                <span>Inspect Case Studies</span>
              </a>
            </div>

            {/* Quick Proof Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-3 border-2 border-[#0F3D70] bg-white p-3 shadow-brutal-sm sm:grid-cols-3 w-full">
              <div className="flex items-center gap-2 p-1">
                <Clock className="h-4 w-4 text-[#0F3D70] shrink-0 stroke-[2.5]" />
                <span className="text-xs font-black uppercase text-[#0F3D70]">48h Turnaround</span>
              </div>
              <div className="flex items-center gap-2 p-1">
                <ShieldCheck className="h-4 w-4 text-[#0F3D70] shrink-0 stroke-[2.5]" />
                <span className="text-xs font-black uppercase text-[#0F3D70]">₦0 Monthly Fees</span>
              </div>
              <div className="flex items-center gap-2 p-1 col-span-2 sm:col-span-1">
                <Check className="h-4 w-4 text-[#0F3D70] shrink-0 stroke-[3]" />
                <span className="text-xs font-black uppercase text-[#0F3D70]">Direct Bank Pay</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hard-Shadow Interactive Store Simulation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm border-2 border-[#0F3D70] bg-white p-4 shadow-brutal-base">
              
              {/* Storefront Header */}
              <div className="flex items-center justify-between border-b-2 border-[#0F3D70] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70] text-xs font-black">
                    EK
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black uppercase tracking-tight text-[#0F3D70]">Elikar Essentials</span>
                      <span className="h-2 w-2 border border-[#0F3D70] bg-[#FFC107]" />
                    </div>
                    <span className="text-[10px] font-bold text-[#1A1A1A]/70 uppercase">Campus Store Demo</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 border-2 border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-[11px] font-black text-[#0F3D70]">
                  <ShoppingBag className="h-3 w-3 stroke-[2.5]" />
                  <span>{cartCount} items</span>
                </div>
              </div>

              {/* Toast banner inside preview */}
              {showDemoNotification && (
                <div className="mt-2 border-2 border-[#0F3D70] bg-[#FFC107] px-3 py-1.5 text-center text-[11px] font-black text-[#0F3D70]">
                  Added to order drawer! Subtotal: ₦{((cartCount) * 2800).toLocaleString()}
                </div>
              )}

              {/* Sample Catalog Products */}
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between border-2 border-[#0F3D70] bg-white p-2.5 shadow-brutal-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107]/20 text-sm font-bold">
                      📦
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#0F3D70]">Hostel Exam Survival Box</h4>
                      <span className="text-[11px] font-black text-[#0F3D70]">₦4,500</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex h-8 items-center gap-1 border-2 border-[#0F3D70] bg-[#FFC107] px-3 text-[11px] font-black uppercase text-[#0F3D70] shadow-brutal-sm hover:shadow-brutal-base hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150 ease-out"
                    style={{ touchAction: "manipulation" }}
                  >
                    <Plus className="h-3 w-3 stroke-[3]" />
                    Add
                  </button>
                </div>

                <div className="flex items-center justify-between border-2 border-[#0F3D70] bg-white p-2.5 shadow-brutal-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107]/20 text-sm font-bold">
                      ☕
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#0F3D70]">Midnight Cocoa & Wafers</h4>
                      <span className="text-[11px] font-black text-[#0F3D70]">₦2,800</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex h-8 items-center gap-1 border-2 border-[#0F3D70] bg-[#FFC107] px-3 text-[11px] font-black uppercase text-[#0F3D70] shadow-brutal-sm hover:shadow-brutal-base hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150 ease-out"
                    style={{ touchAction: "manipulation" }}
                  >
                    <Plus className="h-3 w-3 stroke-[3]" />
                    Add
                  </button>
                </div>

                <div className="flex items-center justify-between border-2 border-[#0F3D70] bg-white p-2.5 shadow-brutal-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107]/20 text-sm font-bold">
                      🎒
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#0F3D70]">Heavy-Duty Laundry Bag</h4>
                      <span className="text-[11px] font-black text-[#0F3D70]">₦3,200</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex h-8 items-center gap-1 border-2 border-[#0F3D70] bg-[#FFC107] px-3 text-[11px] font-black uppercase text-[#0F3D70] shadow-brutal-sm hover:shadow-brutal-base hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150 ease-out"
                    style={{ touchAction: "manipulation" }}
                  >
                    <Plus className="h-3 w-3 stroke-[3]" />
                    Add
                  </button>
                </div>
              </div>

              {/* Checkout Action Preview */}
              <div className="mt-4 border-2 border-[#0F3D70] bg-white p-3 shadow-brutal-sm">
                <div className="flex items-center justify-between text-xs font-bold text-[#0F3D70]">
                  <span className="uppercase">Order Total:</span>
                  <span className="text-base font-black">₦{((cartCount) * 2800).toLocaleString()}</span>
                </div>
                <div className="mt-2.5">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      "Hello Webnest! I tested the live demo and want to build my store."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107] px-3 py-2 text-xs font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-sm hover:shadow-brutal-base hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150 ease-out"
                    style={{ touchAction: "manipulation" }}
                  >
                    <MessageCircle className="h-3.5 w-3.5 fill-current stroke-[2.5]" />
                    <span>Instant WhatsApp Order</span>
                  </a>
                </div>
              </div>

              <div className="mt-2 text-center">
                <span className="text-[10px] font-bold uppercase text-[#0F3D70]/80">
                  Interactive Simulation: Tap Add to update state
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
