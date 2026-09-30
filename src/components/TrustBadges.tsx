"use client";

import React from "react";
import { ShieldCheck, Zap, Lock, DollarSign, MessageCircle } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
        </svg>
      ),
      title: "1-Click WhatsApp Checkout",
      subtitle: "Instant pre-filled customer receipts",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#0F3D70]" />,
      title: "48-Hour SLA Delivery",
      subtitle: "Full turnkey build delivered in 2 days",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-neutral-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>
      ),
      title: "₦0/Month Hosting",
      subtitle: "Permanent Vercel Edge cloud tier",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#0F3D70]" />,
      title: "256-Bit SSL Security",
      subtitle: "HTTPS encryption included free",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      title: "0% Transaction Take",
      subtitle: "Keep 100% of every sale you make",
    },
  ];

  return (
    <div className="w-full py-8 border-y border-neutral-200 bg-neutral-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="mb-2 p-2 rounded-lg bg-white border border-neutral-200 shadow-xs inline-flex items-center justify-center">
                {b.icon}
              </div>
              <span className="text-xs font-bold text-neutral-900 block leading-tight">{b.title}</span>
              <span className="text-[11px] text-neutral-500 font-mono mt-0.5">{b.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
