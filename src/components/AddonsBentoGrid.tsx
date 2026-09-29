"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  LayoutDashboard,
  Database,
  Globe,
  BarChart3,
  Lock,
  Plus,
  Minus,
} from "lucide-react";

export function AddonsBentoGrid() {
  const [cartDrawerCount, setCartDrawerCount] = useState(3);
  const [stockToggle, setStockToggle] = useState(true);
  const [orderStatus, setOrderStatus] = useState<"Delivered" | "In Transit" | "Pending">("Delivered");

  return (
    <section id="capabilities" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white border-b-2 border-[#0F3D70]">
      {/* Section Header */}
      <div className="max-w-2xl">
        <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-1 text-xs font-black uppercase tracking-wider text-[#0F3D70]">
          Modular Architecture
        </span>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-[#0F3D70] sm:text-3xl lg:text-4xl">
          Everything your campus brand needs to scale.
        </h2>
        <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">
          No bloated monthly software subscriptions. Each capability is engineered directly into your custom storefront and handed over cleanly.
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        
        {/* Bento 1: Multi-item Cart Drawer (Span 7) */}
        <div className="flex flex-col justify-between border-2 border-[#0F3D70] bg-white p-6 shadow-brutal-base lg:col-span-7">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70]">
                <ShoppingCart className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-0.5 text-[11px] font-black uppercase text-[#0F3D70]">
                +₦5,000 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-black uppercase text-[#0F3D70]">
              Multi-item Cart Drawer
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#1A1A1A]">
              Allows customers to add multiple items, adjust portions, and generate one comprehensive WhatsApp order text with line items and subtotal.
            </p>
          </div>

          {/* Interactive Mock Cart Simulation */}
          <div className="mt-6 border-2 border-[#0F3D70] bg-white p-4 shadow-brutal-sm">
            <div className="flex items-center justify-between border-b-2 border-[#0F3D70] pb-2 text-xs font-black uppercase text-[#0F3D70]">
              <span>Selected Dorm Order</span>
              <span className="bg-[#FFC107] px-2 py-0.5">{cartDrawerCount} items</span>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-[#0F3D70]">Overnight Crunch Snack Pack</span>
                <span className="block text-[11px] font-bold text-[#1A1A1A]/70">₦2,500 each</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-[#0F3D70] bg-white px-2 py-1">
                <button
                  type="button"
                  onClick={() => setCartDrawerCount((prev) => Math.max(1, prev - 1))}
                  className="font-black text-[#0F3D70] hover:bg-[#FFC107] p-1"
                  aria-label="Decrease quantity"
                  style={{ touchAction: "manipulation" }}
                >
                  <Minus className="h-3 w-3 stroke-[3]" />
                </button>
                <span className="w-4 text-center font-black text-[#0F3D70]">{cartDrawerCount}</span>
                <button
                  type="button"
                  onClick={() => setCartDrawerCount((prev) => prev + 1)}
                  className="font-black text-[#0F3D70] hover:bg-[#FFC107] p-1"
                  aria-label="Increase quantity"
                  style={{ touchAction: "manipulation" }}
                >
                  <Plus className="h-3 w-3 stroke-[3]" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-2 border-[#0F3D70] bg-[#FFC107]/20 px-3 py-2 text-xs font-bold text-[#0F3D70]">
              <span className="uppercase">Drawer Subtotal:</span>
              <span className="text-sm font-black">₦{(cartDrawerCount * 2500).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Bento 2: Order Tracking Admin Dashboard (Span 5) */}
        <div className="flex flex-col justify-between border-2 border-[#0F3D70] bg-white p-6 shadow-brutal-base lg:col-span-5">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70]">
                <LayoutDashboard className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-0.5 text-[11px] font-black uppercase text-[#0F3D70]">
                +₦10,000 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-black uppercase text-[#0F3D70]">
              Order Tracking Admin Table
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#1A1A1A]">
              A private authenticated management view to inspect incoming customer orders, log payments, and update delivery statuses.
            </p>
          </div>

          {/* Mock Order Table */}
          <div className="mt-6 border-2 border-[#0F3D70] bg-white p-3.5 shadow-brutal-sm space-y-2">
            <div className="flex items-center justify-between text-[11px] font-black uppercase text-[#0F3D70] border-b-2 border-[#0F3D70] pb-2">
              <span>Order #WN-1048</span>
              <button
                type="button"
                onClick={() => {
                  setOrderStatus((curr) =>
                    curr === "Delivered" ? "In Transit" : curr === "In Transit" ? "Pending" : "Delivered"
                  );
                }}
                className="border border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-[10px] font-black uppercase hover:bg-white"
                style={{ touchAction: "manipulation" }}
              >
                Toggle Status
              </button>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-[#0F3D70]">Chidinma O. (Hall 4)</span>
                <span className="block text-[10px] font-bold text-[#1A1A1A]/70">2 Items, Paid via Transfer</span>
              </div>
              <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-[10px] font-black uppercase text-[#0F3D70]">
                {orderStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Bento 3: Self-Serve Inventory CMS (Span 4) */}
        <div className="flex flex-col justify-between border-2 border-[#0F3D70] bg-white p-6 shadow-brutal-base lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70]">
                <Database className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-0.5 text-[11px] font-black uppercase text-[#0F3D70]">
                +₦15,000 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-black uppercase text-[#0F3D70]">
              Self-Serve Inventory CMS
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#1A1A1A]">
              Add new inventory batches, change prices on the fly, or mark sold-out items from your smartphone without touching source code.
            </p>
          </div>

          {/* Mock CMS Toggle */}
          <div className="mt-6 border-2 border-[#0F3D70] bg-white p-4 shadow-brutal-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#0F3D70]">Vintage Corduroy Jacket</span>
                <span className="block text-[10px] font-bold text-[#1A1A1A]/70">₦12,000</span>
              </div>
              <button
                type="button"
                onClick={() => setStockToggle(!stockToggle)}
                className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer border-2 border-[#0F3D70] transition-colors duration-150 ${
                  stockToggle ? "bg-[#FFC107]" : "bg-neutral-200"
                }`}
                style={{ touchAction: "manipulation" }}
                role="switch"
                aria-checked={stockToggle}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform border border-[#0F3D70] bg-[#0F3D70] transition duration-150 ${
                    stockToggle ? "translate-x-6 bg-[#0F3D70]" : "translate-x-0 bg-white"
                  }`}
                />
              </button>
            </div>
            <div className="mt-2 text-right">
              <span className="text-[10px] font-black uppercase text-[#0F3D70]">
                Status: {stockToggle ? "In Stock (Visible)" : "Sold Out (Hidden)"}
              </span>
            </div>
          </div>
        </div>

        {/* Bento 4: Custom Domain Setup (Span 4) */}
        <div className="flex flex-col justify-between border-2 border-[#0F3D70] bg-white p-6 shadow-brutal-base lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70]">
                <Globe className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-0.5 text-[11px] font-black uppercase text-[#0F3D70]">
                +₦7,500 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-black uppercase text-[#0F3D70]">
              Custom Domain & SSL Setup
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#1A1A1A]">
              Connect your own verified dot-store, dot-com, or dot-com-dot-ng domain with automatic HTTPS security certificates and DNS configuration.
            </p>
          </div>

          {/* Mock Browser URL Bar */}
          <div className="mt-6 border-2 border-[#0F3D70] bg-white p-3.5 shadow-brutal-sm">
            <div className="flex items-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107]/10 px-3 py-2 text-xs">
              <Lock className="h-3 w-3 text-[#0F3D70] shrink-0 stroke-[2.5]" />
              <span className="font-mono text-[11px] text-[#0F3D70] font-bold truncate">
                https://yourboutique.store
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] font-black uppercase text-[#0F3D70]">
              <span>SSL: Active (256-bit)</span>
              <span>Global CDN</span>
            </div>
          </div>
        </div>

        {/* Bento 5: Traffic & Conversion Analytics (Span 4) */}
        <div className="flex flex-col justify-between border-2 border-[#0F3D70] bg-white p-6 shadow-brutal-base lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70]">
                <BarChart3 className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-0.5 text-[11px] font-black uppercase text-[#0F3D70]">
                +₦5,000 Add-on
              </span>
            </div>

            <h3 className="mt-4 text-lg font-black uppercase text-[#0F3D70]">
              Traffic & Click Analytics
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#1A1A1A]">
              Track exactly how many potential buyers tap your Instagram or WhatsApp links, which products get viewed most, and checkout conversion rates.
            </p>
          </div>

          {/* Mock Analytics Cards */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            <div className="border-2 border-[#0F3D70] bg-white p-2.5 shadow-brutal-sm">
              <span className="text-[10px] font-black uppercase text-[#0F3D70]">Weekly Visitors</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-base font-black text-[#0F3D70]">1,420</span>
                <span className="text-[10px] font-black text-[#0F3D70] bg-[#FFC107] px-1">
                  +18%
                </span>
              </div>
            </div>
            <div className="border-2 border-[#0F3D70] bg-white p-2.5 shadow-brutal-sm">
              <span className="text-[10px] font-black uppercase text-[#0F3D70]">WhatsApp Taps</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-base font-black text-[#0F3D70]">118</span>
                <span className="text-[10px] font-black text-[#0F3D70] bg-[#FFC107] px-1">8.3%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
