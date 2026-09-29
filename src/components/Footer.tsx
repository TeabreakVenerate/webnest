"use client";

import React, { useState } from "react";
import { ShoppingBag, Copy, Check, MessageCircle, Heart } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const referralSnippet = `<footer class="py-6 text-center text-xs text-neutral-400">\n  <p>Powered by <a href="https://webnest.ng" target="_blank" class="underline hover:text-neutral-600">WebNest</a> &bull; Launch your store for &#8358;10,000</p>\n</footer>`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(referralSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Referral Ecosystem Highlight Box */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                WebNest Referral Engine
              </span>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                Embeddable Client Footer Code
              </h3>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                Every storefront built with WebNest includes this quiet, lightweight footer badge to continuously drive viral customer inquiries back to the network.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopySnippet}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-neutral-800 px-4 py-2.5 text-xs font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-neutral-700 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              style={{ touchAction: "manipulation" }}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400 stroke-[3]" />
                  <span className="text-emerald-300">HTML Snippet Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-neutral-400" />
                  <span>Copy Embed Snippet</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-3 font-mono text-[11px] text-neutral-300 overflow-x-auto">
            <code>{referralSnippet}</code>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-neutral-800/80 pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-neutral-950">
              <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
            </div>
            <span className="text-sm font-bold text-white">WebNest</span>
            <span className="text-xs text-neutral-500">
              Built for Nigerian campus merchants
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <a href="#calculator" className="hover:text-white transition-colors duration-150">
              Pricing Calculator
            </a>
            <a href="#capabilities" className="hover:text-white transition-colors duration-150">
              Add-ons
            </a>
            <a href="#showcase" className="hover:text-white transition-colors duration-150">
              Proof of Work
            </a>
            <a href="#faq" className="hover:text-white transition-colors duration-150">
              FAQ
            </a>
            <a
              href="https://wa.me/2349000000000?text=Hello%20Endurance!%20I%20want%20to%20order%20a%20WebNest%20storefront."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-150"
            >
              Direct WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright and Architect Signature */}
        <div className="mt-8 text-center text-xs text-neutral-400 border-t border-neutral-800/80 pt-6">
          <p>
            Architected and engineered by{" "}
            <span className="font-semibold text-neutral-200">Endurance Owie</span> (Covenant University).
          </p>
          <p className="mt-1 text-neutral-400">
            Powered by{" "}
            <a
              href="https://webnest.ng"
              className="underline text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              WebNest
            </a>{" "}
            &bull; Launch your store for &#8358;10,000
          </p>
        </div>

      </div>
    </footer>
  );
}
