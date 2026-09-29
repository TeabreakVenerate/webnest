"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  LayoutDashboard,
  Database,
  Globe,
  BarChart3,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";

export function AddonsBentoGrid() {
  // Interactive mock states
  const [cartDrawerCount, setCartDrawerCount] = useState(3);
  const [stockToggle, setStockToggle] = useState(true);
  const [orderStatus, setOrderStatus] = useState<"Delivered" | "In Transit" | "Pending">("Delivered");

  return (
    <section id="capabilities" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
          Modular Architecture
        </span>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Everything your campus brand needs to scale.
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          No bloated monthly software subscriptions. Each capability is engineered into your custom storefront and handed over cleanly.
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        
        {/* Bento 1: Multi-item Cart Drawer (Span 7) */}
        <div className="flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm lg:col-span-7">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                +₦5,000 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">
              Multi-item Cart Drawer
            </h3>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              Allows customers to add multiple items, adjust portions, and generate one comprehensive WhatsApp order text with line items and subtotal.
            </p>
          </div>

          {/* Interactive Mock Cart Simulation */}
          <div className="mt-6 rounded-2xl border border-neutral-800/80 bg-neutral-950 p-4">
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5 text-xs font-medium text-neutral-400">
              <span>Selected Dorm Order</span>
              <span className="text-emerald-400 font-semibold">{cartDrawerCount} items</span>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
              <div>
                <span className="font-medium text-white">Overnight Crunch Snack Pack</span>
                <span className="block text-[11px] text-neutral-400">₦2,500 each</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-2 py-1">
                <button
                  type="button"
                  onClick={() => setCartDrawerCount((prev) => Math.max(1, prev - 1))}
                  className="text-neutral-400 hover:text-white active:scale-[0.9]"
                  aria-label="Decrease quantity"
                  style={{ touchAction: "manipulation" }}
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="w-4 text-center font-bold text-white">{cartDrawerCount}</span>
                <button
                  type="button"
                  onClick={() => setCartDrawerCount((prev) => prev + 1)}
                  className="text-neutral-400 hover:text-white active:scale-[0.9]"
                  aria-label="Increase quantity"
                  style={{ touchAction: "manipulation" }}
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-lg bg-neutral-900/60 px-3 py-2 text-xs">
              <span className="text-neutral-400">Drawer Subtotal:</span>
              <span className="font-bold text-emerald-400">₦{(cartDrawerCount * 2500).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Bento 2: Order Tracking Admin Dashboard (Span 5) */}
        <div className="flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm lg:col-span-5">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                +₦10,000 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">
              Order Tracking Admin Table
            </h3>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              A private authenticated management view to inspect incoming customer orders, log payments, and update delivery statuses.
            </p>
          </div>

          {/* Mock Order Table */}
          <div className="mt-6 rounded-2xl border border-neutral-800/80 bg-neutral-950 p-3.5 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-neutral-800/60 pb-2">
              <span>Order #WN-1048</span>
              <button
                type="button"
                onClick={() => {
                  setOrderStatus((curr) =>
                    curr === "Delivered" ? "In Transit" : curr === "In Transit" ? "Pending" : "Delivered"
                  );
                }}
                className="rounded bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-300 hover:text-white"
                style={{ touchAction: "manipulation" }}
              >
                Tap to Toggle Status
              </button>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-white">Chidinma O. (Hall 4)</span>
                <span className="block text-[10px] text-neutral-400">2 Items, Paid via Transfer</span>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  orderStatus === "Delivered"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : orderStatus === "In Transit"
                    ? "bg-amber-500/20 text-amber-300"
                    : "bg-blue-500/20 text-blue-300"
                }`}
              >
                {orderStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Bento 3: Self-Serve Inventory CMS (Span 4) */}
        <div className="flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Database className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                +₦15,000 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">
              Self-Serve Inventory CMS
            </h3>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              Add new inventory batches, change prices on the fly, or mark sold-out items from your smartphone without touching source code.
            </p>
          </div>

          {/* Mock CMS Toggle */}
          <div className="mt-6 rounded-2xl border border-neutral-800/80 bg-neutral-950 p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-white">Vintage Corduroy Jacket</span>
                <span className="block text-[10px] text-neutral-400">₦12,000</span>
              </div>
              <button
                type="button"
                onClick={() => setStockToggle(!stockToggle)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  stockToggle ? "bg-emerald-500" : "bg-neutral-700"
                }`}
                style={{ touchAction: "manipulation" }}
                role="switch"
                aria-checked={stockToggle}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-neutral-950 shadow ring-0 transition duration-150 ease-in-out ${
                    stockToggle ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <div className="mt-2 text-right">
              <span className="text-[10px] text-neutral-400">
                Status: {stockToggle ? "In Stock (Visible)" : "Sold Out (Hidden)"}
              </span>
            </div>
          </div>
        </div>

        {/* Bento 4: Custom Domain Setup (Span 4) */}
        <div className="flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Globe className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                +₦7,500 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">
              Custom Domain & SSL Setup
            </h3>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              Connect your own verified dot-store, dot-com, or dot-com-dot-ng domain with automatic HTTPS security certificates and DNS configuration.
            </p>
          </div>

          {/* Mock Browser URL Bar */}
          <div className="mt-6 rounded-2xl border border-neutral-800/80 bg-neutral-950 p-3.5">
            <div className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs">
              <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
              <span className="font-mono text-[11px] text-neutral-300 truncate">
                https://<span className="text-emerald-400 font-semibold">yourboutique</span>.store
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-400">
              <span>SSL: Active (256-bit)</span>
              <span className="text-emerald-400 font-medium">Global CDN</span>
            </div>
          </div>
        </div>

        {/* Bento 5: Traffic & Conversion Analytics (Span 4) */}
        <div className="flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <BarChart3 className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                +₦5,000 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">
              Traffic & Click Analytics
            </h3>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              Track exactly how many potential buyers tap your Instagram or WhatsApp links, which products get viewed most, and checkout conversion rates.
            </p>
          </div>

          {/* Mock Analytics Cards */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-neutral-800/80 bg-neutral-950 p-2.5">
              <span className="text-[10px] text-neutral-400">Weekly Visitors</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-base font-bold text-white">1,420</span>
                <span className="text-[10px] text-emerald-400 flex items-center">
                  +18%
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800/80 bg-neutral-950 p-2.5">
              <span className="text-[10px] text-neutral-400">WhatsApp Taps</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-base font-bold text-emerald-400">118</span>
                <span className="text-[10px] text-emerald-400">8.3%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
