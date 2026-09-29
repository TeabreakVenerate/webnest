"use client";

import React from "react";
import { ShoppingBag, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello Endurance! I want to order a Webnest storefront."
  )}`;

  return (
    <footer className="border-t-2 border-[#0F3D70] bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Footer Navigation & Brand Row */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70] shadow-brutal-sm">
              <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black uppercase text-[#0F3D70]">Webnest</span>
              <span className="text-[10px] font-bold uppercase text-[#0F3D70]/80">
                Built for campus entrepreneurs
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-black uppercase text-[#0F3D70]">
            <a href="#calculator" className="hover:bg-[#FFC107] px-1.5 py-0.5 border border-transparent hover:border-[#0F3D70]">
              Pricing & Add-ons
            </a>
            <a href="#showcase" className="hover:bg-[#FFC107] px-1.5 py-0.5 border border-transparent hover:border-[#0F3D70]">
              Case Studies
            </a>
            <a href="#how-it-works" className="hover:bg-[#FFC107] px-1.5 py-0.5 border border-transparent hover:border-[#0F3D70]">
              How It Works
            </a>
            <a href="#faq" className="hover:bg-[#FFC107] px-1.5 py-0.5 border border-transparent hover:border-[#0F3D70]">
              FAQ
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:bg-[#FFC107] px-1.5 py-0.5 border border-transparent hover:border-[#0F3D70]"
            >
              <Mail className="h-3.5 w-3.5 text-[#0F3D70] stroke-[2.5]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-1 text-[#0F3D70] shadow-brutal-sm hover:shadow-brutal-base hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 ease-out"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-current stroke-[2.5]" />
              <span>WhatsApp ({SITE_CONFIG.whatsappDisplay})</span>
            </a>
          </div>
        </div>

        {/* Copyright and Architect Signature */}
        <div className="mt-8 text-center text-xs font-bold text-[#0F3D70] border-t-2 border-[#0F3D70] pt-6">
          <p>
            Architected and engineered by{" "}
            <span className="font-black text-[#0F3D70] bg-[#FFC107] px-1.5 py-0.5 border border-[#0F3D70] inline-block">{SITE_CONFIG.architect}</span> (Covenant University).
          </p>
          <p className="mt-2 text-[#0F3D70]/80">
            Webnest Storefront Engine &bull; Zero Monthly Fees &bull; 48-Hour Delivery Guarantee
          </p>
        </div>

      </div>
    </footer>
  );
}
