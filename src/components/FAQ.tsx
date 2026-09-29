"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Are there any monthly hosting fees or hidden costs?",
    answer:
      "No. Your storefront is built on modern static edge infrastructure (Vercel and Cloudflare), which provides free lifetime hosting tiers for micro-merchants and campus vendors. You pay your one-time setup fee once, with zero recurring software charges.",
  },
  {
    question: "How do I receive money from my buyers?",
    answer:
      "When a buyer taps Order on WhatsApp, an itemized order receipt is instantly sent to your WhatsApp chat with product titles, quantities, and the exact total. You send your personal or business bank account details directly to the customer. WebNest takes 0% commission on your sales.",
  },
  {
    question: "Can I connect my own custom domain (.com, .store, or .com.ng)?",
    answer:
      "Yes. With our Custom Domain Setup add-on (+₦7,500), we configure DNS records, SSL encryption certificates, and link your custom address. If you do not have a custom domain yet, your store launches immediately on a fast, free subdomain (e.g., yourbrand.vercel.app).",
  },
  {
    question: "How do I update prices or add new products later?",
    answer:
      "If you choose the Self-Serve Inventory CMS add-on (+₦15,000), you can log in from your smartphone to change prices, add new items, or mark items as sold-out in seconds. Without the CMS, you can message us directly on WhatsApp for routine catalog updates.",
  },
  {
    question: "What items do I need to send to start the build?",
    answer:
      "All we need are your product images, item titles, prices, your bank account details for customer transfers, and your WhatsApp business phone number. Pick your package in our calculator, tap to message Endurance Owie, and we handle the rest.",
  },
  {
    question: "What is the 48-Hour Delivery Guarantee?",
    answer:
      "Once you submit your catalog details and deposit, your completed, fully tested mobile storefront will be deployed and delivered to your WhatsApp within 48 hours, ready for public sharing.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
          Frequently Asked Questions
        </span>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Clear answers. Zero technical confusion.
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Everything you need to know about pricing, hosting, payments, and store delivery.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-[border-color,background-color] duration-150 ${
                isOpen
                  ? "border-emerald-500/40 bg-neutral-900/80"
                  : "border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 hover:bg-neutral-900/50"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="flex min-h-[52px] w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl active:scale-[0.99]"
                aria-expanded={isOpen}
                style={{ touchAction: "manipulation" }}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-emerald-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-neutral-300 border-t border-neutral-800/60">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
