"use client";

import React, { useState } from "react";
import { HeroBadge } from "./HeroBadge";
import { MessageCircle, ShoppingBag, ShieldCheck, Clock, Check, Plus, Minus } from "lucide-react";
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
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Hero Narrative */}
          <div className="flex flex-col items-start lg:col-span-7">
            <HeroBadge
              text="48-Hour Delivery Guarantee"
              subtext="Base Storefront ₦10,000"
              href="#calculator"
            />

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.15] lg:text-6xl">
              Stop losing orders in messy DMs. Turn your WhatsApp into a{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                1-click store
              </span>
              .
            </h1>

            <p className="mt-5 text-base leading-relaxed text-neutral-300 sm:text-lg">
              Mobile-first product catalogs, instant order receipts, and automated WhatsApp routing built specifically for Nigerian campus vendors, boutique owners, and micro-merchants. Flat ₦10,000 base fee, zero monthly platform cuts, and free lifetime cloud hosting.
            </p>

            {/* Conversion CTA Group */}
            <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3.5">
              <a
                href="#calculator"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-neutral-950 shadow-md shadow-emerald-500/25 transition-[transform,background-color,box-shadow] duration-150 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                style={{ touchAction: "manipulation" }}
              >
                <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
                <span>Build Your Store (₦10,000)</span>
              </a>

              <a
                href="#showcase"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-3.5 text-sm font-medium text-neutral-200 backdrop-blur-sm transition-[transform,background-color,border-color] duration-150 hover:border-neutral-700 hover:bg-neutral-800/80 hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                style={{ touchAction: "manipulation" }}
              >
                <span>Inspect Live Proof Demos</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-neutral-800/80 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-neutral-300">Live in 48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-neutral-300">₦0 Hosting Fees</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 stroke-[2.5]" />
                <span className="text-xs text-neutral-300">Zero Sales Cuts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Storefront Simulation Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm rounded-3xl border border-neutral-800 bg-neutral-900/70 p-4 shadow-2xl backdrop-blur-xl">
              
              {/* Storefront Header */}
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    EK
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">Elikar Essentials</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] text-neutral-400">Campus Store Demo</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                  <ShoppingBag className="h-3 w-3" />
                  <span>{cartCount} items</span>
                </div>
              </div>

              {/* Toast banner inside preview */}
              {showDemoNotification && (
                <div className="mt-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-3 py-1.5 text-center text-[11px] font-medium text-emerald-300 transition-opacity duration-150">
                  Added to order drawer! Total: ₦{((cartCount) * 2800).toLocaleString()}
                </div>
              )}

              {/* Sample Catalog Products */}
              <div className="mt-3 space-y-2.5">
                <div className="flex items-center justify-between rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-sm font-semibold text-neutral-300">
                      📦
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Hostel Exam Survival Box</h4>
                      <span className="text-[11px] font-bold text-emerald-400">₦4,500</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex h-8 items-center gap-1 rounded-lg bg-emerald-500/20 px-2.5 text-[11px] font-semibold text-emerald-300 transition-colors duration-150 hover:bg-emerald-500 hover:text-neutral-950 active:scale-[0.96]"
                    style={{ touchAction: "manipulation" }}
                  >
                    <Plus className="h-3 w-3" />
                    Add
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-sm font-semibold text-neutral-300">
                      ☕
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Midnight Cocoa & Wafers</h4>
                      <span className="text-[11px] font-bold text-emerald-400">₦2,800</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex h-8 items-center gap-1 rounded-lg bg-emerald-500/20 px-2.5 text-[11px] font-semibold text-emerald-300 transition-colors duration-150 hover:bg-emerald-500 hover:text-neutral-950 active:scale-[0.96]"
                    style={{ touchAction: "manipulation" }}
                  >
                    <Plus className="h-3 w-3" />
                    Add
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-sm font-semibold text-neutral-300">
                      🎒
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Heavy-Duty Dorm Laundry Bag</h4>
                      <span className="text-[11px] font-bold text-emerald-400">₦3,200</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex h-8 items-center gap-1 rounded-lg bg-emerald-500/20 px-2.5 text-[11px] font-semibold text-emerald-300 transition-colors duration-150 hover:bg-emerald-500 hover:text-neutral-950 active:scale-[0.96]"
                    style={{ touchAction: "manipulation" }}
                  >
                    <Plus className="h-3 w-3" />
                    Add
                  </button>
                </div>
              </div>

              {/* Checkout Action Preview */}
              <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-neutral-950/80 p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">WhatsApp Order Total:</span>
                  <span className="font-bold text-white">₦{((cartCount) * 2800).toLocaleString()}</span>
                </div>
                <div className="mt-2.5">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      "Hello WebNest! I tested the live demo and want to build my store."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-neutral-950 transition-[transform,background-color] duration-150 hover:bg-emerald-400 active:scale-[0.97]"
                    style={{ touchAction: "manipulation" }}
                  >
                    <MessageCircle className="h-3.5 w-3.5 fill-current" />
                    <span>Instant WhatsApp Order (1 Tap)</span>
                  </a>
                </div>
              </div>

              <div className="mt-2 text-center">
                <span className="text-[10px] text-neutral-500">
                  Interactive simulation: Tap Add to test live state updates
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
