"use client";

import React, { useState, useMemo } from "react";
import { Check, Sparkles, MessageCircle, HelpCircle } from "lucide-react";

interface AddonItem {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: string;
}

const BASE_PRICE = 10000;
const PRO_BUNDLE_PRICE = 35000;
const WHATSAPP_PHONE = "2349000000000"; // Endurance Owie WebNest business line

const ADDONS: AddonItem[] = [
  {
    id: "cart",
    name: "Multi-item Cart Drawer",
    price: 5000,
    description: "Slide-over drawer with item counters, instant order preview, and local persistence.",
    tag: "Essential",
  },
  {
    id: "admin",
    name: "Order Tracking Admin Dashboard",
    price: 10000,
    description: "Private live table to manage order statuses: Pending, Confirmed, Delivered, or Cancelled.",
  },
  {
    id: "cms",
    name: "Self-Serve Inventory CMS",
    price: 15000,
    description: "Update catalog products, prices, and out-of-stock badges without touching code.",
    tag: "High Value",
  },
  {
    id: "domain",
    name: "Custom Domain Setup (.store, .com, .com.ng)",
    price: 7500,
    description: "Custom DNS mapping, SSL certificate configuration, and branded link routing.",
  },
  {
    id: "analytics",
    name: "Traffic & Click Analytics",
    price: 5000,
    description: "Track daily visitors, catalog click-throughs, and WhatsApp conversion rates.",
  },
];

export function PricingCalculator() {
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set(["cart"]));
  const [isProBundle, setIsProBundle] = useState<boolean>(false);

  const toggleAddon = (id: string) => {
    setIsProBundle(false);
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const selectProBundle = () => {
    setIsProBundle(true);
    setSelectedAddons(new Set(["cart", "admin", "domain", "analytics"]));
  };

  const selectCustom = () => {
    setIsProBundle(false);
  };

  const calculatedTotal = useMemo(() => {
    if (isProBundle) {
      return PRO_BUNDLE_PRICE;
    }
    const addonSum = Array.from(selectedAddons).reduce((sum, id) => {
      const item = ADDONS.find((a) => a.id === id);
      return sum + (item ? item.price : 0);
    }, 0);
    return BASE_PRICE + addonSum;
  }, [isProBundle, selectedAddons]);

  const whatsappUrl = useMemo(() => {
    const selectedNames = Array.from(selectedAddons)
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean);

    const packageType = isProBundle
      ? "Pro Vendor Bundle (₦35,000 Special)"
      : "Custom WebNest Build";

    const featuresList = [
      "Base Storefront Engine (₦10,000)",
      ...selectedNames.map((name) => `${name}`),
    ].join(", ");

    const message = [
      "Hello WebNest! I want to launch my online storefront.",
      "",
      `Package: ${packageType}`,
      `Selected Features: ${featuresList}`,
      `Total Estimated Investment: ₦${calculatedTotal.toLocaleString()}`,
      "",
      "Can we discuss setting up my store within 48 hours?",
    ].join("\n");

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  }, [isProBundle, selectedAddons, calculatedTotal]);

  return (
    <section id="calculator" className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-10 shadow-2xl">
        
        {/* Header & Mode Switcher */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-neutral-800/80 pb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Interactive Cost Estimator
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Configure Your Storefront Package
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Every build starts with our solid ₦10,000 Base Ticket. Pick only the exact add-on capabilities your business needs.
            </p>
          </div>

          <div className="inline-flex rounded-xl border border-neutral-800 bg-neutral-900/80 p-1">
            <button
              type="button"
              onClick={selectCustom}
              className={`min-h-[44px] rounded-lg px-4 py-2 text-xs font-semibold transition-[background-color,color] duration-150 active:scale-[0.97] ${
                !isProBundle
                  ? "bg-neutral-800 text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              Custom Add-ons
            </button>
            <button
              type="button"
              onClick={selectProBundle}
              className={`flex min-h-[44px] items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-[background-color,color,box-shadow] duration-150 active:scale-[0.97] ${
                isProBundle
                  ? "bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20"
                  : "text-emerald-400 hover:text-emerald-300"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              <Sparkles className="h-3.5 w-3.5 fill-current" />
              Pro Bundle (₦35k)
            </button>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Column: Base & Addons */}
          <div className="space-y-4 lg:col-span-7">
            
            {/* Base Inclusion Box */}
            <div className="flex items-start justify-between rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500 text-neutral-950">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-white">
                      Base Storefront Engine
                    </h3>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      Standard
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-400">
                    Mobile catalog (up to 15 items with images, descriptions, prices), 1-click WhatsApp order routing with pre-filled message, and free lifetime static cloud hosting.
                  </p>
                </div>
              </div>
              <div className="text-right pl-3">
                <span className="text-sm font-bold text-white">₦10,000</span>
                <span className="block text-[10px] text-neutral-500">Base</span>
              </div>
            </div>

            {/* Addons List */}
            <div className="space-y-3">
              {ADDONS.map((addon) => {
                const isSelected = selectedAddons.has(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`group relative flex cursor-pointer items-start justify-between rounded-2xl border p-4 transition-[border-color,background-color] duration-150 active:scale-[0.98] ${
                      isSelected
                        ? "border-emerald-500/40 bg-neutral-900/90 shadow-sm"
                        : "border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 hover:bg-neutral-900/60"
                    }`}
                    style={{ touchAction: "manipulation" }}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        toggleAddon(addon.id);
                      }
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-500 text-neutral-950"
                            : "border-neutral-700 bg-neutral-800 group-hover:border-neutral-600"
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">
                            {addon.name}
                          </span>
                          {addon.tag && (
                            <span className="rounded-md border border-neutral-700 bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium text-neutral-300">
                              {addon.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-neutral-400">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right pl-4">
                      <span className="text-sm font-semibold text-emerald-400 whitespace-nowrap">
                        +₦{addon.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Checkout Summary Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Total Investment
                </span>
                {isProBundle && (
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                    Save ₦7,500
                  </span>
                )}
              </div>

              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    ₦{calculatedTotal.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400">flat fee</span>
                </div>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  {isProBundle
                    ? "Includes Base Store, Multi-item Cart, Admin Dashboard, Custom Domain, and Analytics for a bundled discount."
                    : "One-time build fee. Zero recurring subscriptions or revenue commissions."}
                </p>
              </div>

              {/* Scope Breakdown */}
              <div className="mt-6 space-y-3 border-t border-neutral-800 pt-4 text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span>Base Storefront Ticket:</span>
                  <span className="font-semibold text-white">₦10,000</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Selected Add-ons:</span>
                  <span className="font-semibold text-emerald-400">
                    {selectedAddons.size} selected
                  </span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Delivery Turnaround:</span>
                  <span className="font-semibold text-white">Live in 48 Hours</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Cloud Hosting:</span>
                  <span className="font-semibold text-emerald-400">Free Lifetime Static Hosting</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Payment Routing:</span>
                  <span className="font-semibold text-white">Direct to Your Bank Account</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="mt-8 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-semibold text-neutral-950 shadow-md shadow-emerald-500/20 transition-[transform,background-color,box-shadow] duration-150 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                style={{ touchAction: "manipulation" }}
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Lock This Package on WhatsApp</span>
              </a>
              <p className="text-center text-[11px] text-neutral-500">
                Direct onboarding with Endurance Owie. Review your demo before final settlement.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
