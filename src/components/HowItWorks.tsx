"use client";

import React from "react";
import { Sliders, MessageSquare, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Configure Your Storefront Offer",
      description:
        "Select the ₦10,000 Base Ticket for a clean mobile catalog, or tap the add-ons your business needs (such as multi-item carts, order admin tables, or custom domains).",
      icon: Sliders,
    },
    {
      number: "02",
      title: "Send Your Items on WhatsApp",
      description:
        "Tap the pre-filled checkout link to start a direct chat with Endurance Owie. Drop your product photos, pricing, account number, and brand name in one simple thread.",
      icon: MessageSquare,
    },
    {
      number: "03",
      title: "Live in 48 Hours with Free Hosting",
      description:
        "We engineer and deploy your storefront to global cloud edge networks. Inspect your private staging preview, test the 1-click WhatsApp order flow, and start sharing.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
          Streamlined Onboarding
        </span>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          From messy DMs to a live storefront in 3 steps.
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Zero technical knowledge required. No complicated dashboard tutorials or monthly credit card subscriptions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm transition-[border-color,background-color] duration-150 hover:border-neutral-700 hover:bg-neutral-900/70"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold text-neutral-700 group-hover:text-emerald-500/80 transition-colors duration-150">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 border-t border-neutral-800/80 pt-4">
                <span className="text-[11px] font-medium text-emerald-400">
                  Guaranteed 48h turnaround
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
