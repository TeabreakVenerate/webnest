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
        "Submit the structured intake form to start a direct chat with Endurance Owie. Drop your product photos, pricing, account number, and brand name in one simple thread.",
      icon: MessageSquare,
    },
    {
      number: "03",
      title: "Live in 48 Hours with Free Hosting",
      description:
        "We engineer and deploy your storefront to global cloud edge networks. Inspect your private staging preview, test the 1-click WhatsApp order flow, and start selling.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white border-b-2 border-[#0F3D70]">
      <div className="max-w-2xl">
        <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-1 text-xs font-black uppercase tracking-wider text-[#0F3D70]">
          Streamlined Onboarding
        </span>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-[#0F3D70] sm:text-3xl lg:text-4xl">
          From messy DMs to a live storefront in 3 steps.
        </h2>
        <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">
          Zero technical knowledge required. No complicated dashboard tutorials or monthly credit card subscriptions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between border-2 border-[#0F3D70] bg-white p-6 shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover"
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-[#0F3D70] pb-4">
                  <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-1 font-mono text-2xl font-black text-[#0F3D70]">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-white text-[#0F3D70]">
                    <Icon className="h-5 w-5 stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="mt-6 text-base font-black uppercase text-[#0F3D70]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-[#1A1A1A]">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 border-t-2 border-[#0F3D70] pt-4">
                <span className="inline-block border border-[#0F3D70] bg-[#FFC107]/20 px-2 py-0.5 text-[11px] font-black uppercase text-[#0F3D70]">
                  48-Hour Turnaround
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
