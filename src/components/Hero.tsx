"use client";

import React from "react";
import { HeroBadge } from "./HeroBadge";
import { ShoppingBag, ShieldCheck, Clock, Check, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-28 border-b-2 border-[#0F3D70]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Centered Status Badge */}
          <HeroBadge
            text="48-Hour Delivery Guarantee"
            subtext="Base Storefront ₦10,000"
            href="#calculator"
          />

          {/* Aggressive Neobrutalist Hook */}
          <h1 className="mt-8 text-3xl font-black uppercase tracking-tight text-[#0F3D70] sm:text-5xl sm:leading-[1.1] md:text-6xl max-w-4xl">
            Stop losing orders in messy DMs. Turn WhatsApp into a{" "}
            <span className="bg-[#FFC107] px-2.5 py-0.5 text-[#0F3D70] inline-block border-2 border-[#0F3D70] shadow-brutal-sm mt-1 sm:mt-0">
              1-click store
            </span>
            .
          </h1>

          {/* Value Proposition Subtext */}
          <p className="mt-6 text-base font-semibold leading-relaxed text-[#1A1A1A] sm:text-xl max-w-3xl">
            Functional, fast e-commerce setups for campus entrepreneurs and local retail boutiques within 48 hours. Mobile catalogs, structured checkout receipts, and automated WhatsApp routing. Flat ₦10,000 base fee with zero monthly SaaS fees.
          </p>

          {/* Conversion CTA Group */}
          <div className="mt-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center gap-4">
            <a
              href="#calculator"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107] px-8 py-4 text-sm font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover active:translate-x-0 active:translate-y-0 active:shadow-brutal-base"
              style={{ touchAction: "manipulation" }}
            >
              <ShoppingBag className="h-5 w-5 stroke-[2.5]" />
              <span>Build Your Store (₦10,000)</span>
            </a>

            <a
              href="#showcase"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 border-2 border-[#0F3D70] bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover active:translate-x-0 active:translate-y-0 active:shadow-brutal-base hover:bg-[#FFC107]/20"
              style={{ touchAction: "manipulation" }}
            >
              <span>Inspect Case Studies</span>
            </a>
          </div>

          {/* Centered Proof Strip */}
          <div className="mt-12 grid grid-cols-2 gap-3 border-2 border-[#0F3D70] bg-white p-4 shadow-brutal-base sm:grid-cols-4 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2 p-1">
              <Clock className="h-4 w-4 text-[#0F3D70] shrink-0 stroke-[2.5]" />
              <span className="text-xs font-black uppercase text-[#0F3D70]">48h Turnaround</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-1">
              <ShieldCheck className="h-4 w-4 text-[#0F3D70] shrink-0 stroke-[2.5]" />
              <span className="text-xs font-black uppercase text-[#0F3D70]">₦0 Monthly Fees</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-1">
              <Check className="h-4 w-4 text-[#0F3D70] shrink-0 stroke-[3]" />
              <span className="text-xs font-black uppercase text-[#0F3D70]">Direct Bank Pay</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-1">
              <MessageCircle className="h-4 w-4 text-[#0F3D70] shrink-0 stroke-[2.5]" />
              <span className="text-xs font-black uppercase text-[#0F3D70]">0% Sales Cuts</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
