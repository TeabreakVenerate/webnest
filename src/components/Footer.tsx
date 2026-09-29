"use client";

import React, { useState } from "react";
import { ShoppingBag, Copy, Check, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const referralSnippet = `<footer class="py-6 text-center text-xs text-[#0F3D70] border-t-2 border-[#0F3D70] bg-white">\n  <p>Powered by <a href="https://webnest.ng" target="_blank" class="underline font-bold hover:bg-[#FFC107]">Webnest</a> &bull; Launch your store for &#8358;10,000</p>\n</footer>`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(referralSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello Endurance! I want to order a Webnest storefront."
  )}`;

  return (
    <footer className="border-t-2 border-[#0F3D70] bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Referral Ecosystem Highlight Box */}
        <div className="border-2 border-[#0F3D70] bg-white p-6 md:p-8 shadow-brutal-base">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-xs font-black uppercase tracking-wider text-[#0F3D70]">
                Webnest Referral Engine
              </span>
              <h3 className="mt-3 text-lg font-black uppercase text-[#0F3D70] sm:text-xl">
                Embeddable Client Footer Code
              </h3>
              <p className="mt-1 text-xs font-semibold text-[#1A1A1A] leading-relaxed">
                Every storefront built with Webnest includes this lightweight footer badge to continuously drive viral customer inquiries back to the network.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopySnippet}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-sm transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-base"
              style={{ touchAction: "manipulation" }}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#0F3D70] stroke-[3]" />
                  <span>HTML Snippet Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-[#0F3D70] stroke-[2.5]" />
                  <span>Copy Embed Snippet</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-4 border-2 border-[#0F3D70] bg-[#FFC107]/10 p-3 font-mono text-[11px] font-bold text-[#0F3D70] overflow-x-auto">
            <code>{referralSnippet}</code>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t-2 border-[#0F3D70] pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70]">
              <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
            </div>
            <span className="text-sm font-black uppercase text-[#0F3D70]">Webnest</span>
            <span className="text-xs font-bold uppercase text-[#0F3D70]/80">
              Built for campus entrepreneurs
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-black uppercase text-[#0F3D70]">
            <a href="#calculator" className="hover:bg-[#FFC107] px-1 py-0.5 border border-transparent hover:border-[#0F3D70]">
              Pricing Calculator
            </a>
            <a href="#capabilities" className="hover:bg-[#FFC107] px-1 py-0.5 border border-transparent hover:border-[#0F3D70]">
              Add-ons
            </a>
            <a href="#showcase" className="hover:bg-[#FFC107] px-1 py-0.5 border border-transparent hover:border-[#0F3D70]">
              Case Studies
            </a>
            <a href="#faq" className="hover:bg-[#FFC107] px-1 py-0.5 border border-transparent hover:border-[#0F3D70]">
              FAQ
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:bg-[#FFC107] px-1 py-0.5 border border-transparent hover:border-[#0F3D70]"
            >
              <Mail className="h-3.5 w-3.5 text-[#0F3D70] stroke-[2.5]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-[#0F3D70]"
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
            <span className="font-black text-[#0F3D70] bg-[#FFC107] px-1">{SITE_CONFIG.architect}</span> (Covenant University).
          </p>
          <p className="mt-1 text-[#0F3D70]/80">
            Powered by{" "}
            <a
              href="https://webnest.ng"
              className="underline font-black text-[#0F3D70]"
            >
              Webnest
            </a>{" "}
            &bull; Launch your store for &#8358;10,000
          </p>
        </div>

      </div>
    </footer>
  );
}
