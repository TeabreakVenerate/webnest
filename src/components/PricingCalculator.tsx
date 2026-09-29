"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Check, Sparkles, MessageCircle, Send, History, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface AddonItem {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: string;
}

interface SavedOrder {
  refId: string;
  date: string;
  clientName: string;
  brandName: string;
  niche: string;
  phone: string;
  email: string;
  packageType: string;
  addons: string[];
  total: number;
}

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
    name: "Order Tracking Admin Table",
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
  const [showLedger, setShowLedger] = useState<boolean>(false);
  const [savedLedger, setSavedLedger] = useState<SavedOrder[]>([]);

  // Structured Intake Form State
  const [clientName, setClientName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [niche, setNiche] = useState("Fashion & Boutique");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Load ledger on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("webnest_ledger");
      if (stored) {
        setSavedLedger(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access handling
    }
  }, []);

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
      return SITE_CONFIG.proBundlePrice;
    }
    const addonSum = Array.from(selectedAddons).reduce((sum, id) => {
      const item = ADDONS.find((a) => a.id === id);
      return sum + (item ? item.price : 0);
    }, 0);
    return SITE_CONFIG.basePrice + addonSum;
  }, [isProBundle, selectedAddons]);

  const selectedAddonNames = useMemo(() => {
    return Array.from(selectedAddons)
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean) as string[];
  }, [selectedAddons]);

  // Dual Dispatch Checkout Handler (AJAX Formsubmit + WhatsApp + LocalStorage Ledger)
  const handleDualDispatchCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refId = `WN-${Date.now().toString(36).toUpperCase()}`;
    const packageType = isProBundle
      ? "Pro Vendor Bundle (₦35,000 Special)"
      : "Custom Webnest Build";

    const orderRecord: SavedOrder = {
      refId,
      date: new Date().toLocaleDateString("en-GB"),
      clientName: clientName || "Guest Vendor",
      brandName: brandName || "Storefront Client",
      niche,
      phone: phone || "Not specified",
      email: email || "Not specified",
      packageType,
      addons: selectedAddonNames,
      total: calculatedTotal,
    };

    // 1. Client-Side Ledger Persistence
    try {
      const updatedLedger = [orderRecord, ...savedLedger];
      setSavedLedger(updatedLedger);
      localStorage.setItem("webnest_ledger", JSON.stringify(updatedLedger));
    } catch {
      // LocalStorage fallback
    }

    // 2. Email Payload via Formsubmit AJAX
    try {
      await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Webnest Store Order [${refId}] - ${brandName || clientName}`,
          Reference_ID: refId,
          Client_Name: clientName,
          Brand_Name: brandName,
          Niche: niche,
          WhatsApp_Phone: phone,
          Email: email,
          Package: packageType,
          Selected_Addons: selectedAddonNames.join(", ") || "None",
          Total_Amount: `₦${calculatedTotal.toLocaleString()}`,
          Requirements_Notes: notes || "Standard 48-Hour Setup",
        }),
      });
    } catch {
      // Background push error fails gracefully to guarantee WhatsApp delivery
    }

    // 3. Construct Parameterized WhatsApp URL
    const messageLines = [
      `*WEBNEST STORE ORDER [${refId}]*`,
      "",
      `*Client:* ${clientName || "Vendor"}`,
      `*Brand Name:* ${brandName || "My Store"}`,
      `*Niche:* ${niche}`,
      `*WhatsApp:* ${phone || "Same"}`,
      `*Package:* ${packageType}`,
      `*Add-ons:* ${selectedAddonNames.length ? selectedAddonNames.join(", ") : "Base Storefront Only"}`,
      `*Total Investment:* ₦${calculatedTotal.toLocaleString()}`,
      "",
      notes ? `*Notes:* ${notes}\n` : "",
      "I have submitted my order specification. Let us confirm payment details and begin the 48-hour build.",
    ].filter(Boolean);

    const whatsappRedirectUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      messageLines.join("\n")
    )}`;

    setIsSubmitting(false);
    setSubmittedRef(refId);

    // Open WhatsApp in new tab
    window.open(whatsappRedirectUrl, "_blank");
  };

  return (
    <section id="calculator" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white border-b-2 border-[#0F3D70]">
      <div className="border-2 border-[#0F3D70] bg-white p-6 md:p-10 shadow-brutal-base">
        
        {/* Header & Mode Switcher */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b-2 border-[#0F3D70] pb-8">
          <div>
            <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2.5 py-1 text-xs font-black uppercase tracking-wider text-[#0F3D70]">
              Dynamic Pricing Engine
            </span>
            <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-[#0F3D70] md:text-4xl">
              Configure Your Storefront Package
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#1A1A1A] max-w-xl">
              Every build starts with our ₦10,000 Base Ticket. Add modular capabilities as needed, or select the Pro Bundle for immediate cost savings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex border-2 border-[#0F3D70] bg-white p-1 shadow-brutal-sm">
              <button
                type="button"
                onClick={selectCustom}
                className={`min-h-[40px] px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-all duration-150 ${
                  !isProBundle
                    ? "bg-[#0F3D70] text-white"
                    : "text-[#0F3D70] hover:bg-[#FFC107]"
                }`}
                style={{ touchAction: "manipulation" }}
              >
                Custom Add-ons
              </button>
              <button
                type="button"
                onClick={selectProBundle}
                className={`flex min-h-[40px] items-center gap-1.5 px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-all duration-150 ${
                  isProBundle
                    ? "bg-[#FFC107] text-[#0F3D70] font-black"
                    : "text-[#0F3D70] hover:bg-[#FFC107]"
                }`}
                style={{ touchAction: "manipulation" }}
              >
                <Sparkles className="h-3.5 w-3.5 fill-current" />
                Pro Bundle (₦35k)
              </button>
            </div>

            {savedLedger.length > 0 && (
              <button
                type="button"
                onClick={() => setShowLedger(!showLedger)}
                className="flex min-h-[44px] items-center gap-1.5 border-2 border-[#0F3D70] bg-white px-3 py-1 text-xs font-black uppercase text-[#0F3D70] shadow-brutal-sm hover:bg-[#FFC107]"
              >
                <History className="h-4 w-4" />
                <span>History ({savedLedger.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Client Ledger Drawer Modal */}
        {showLedger && (
          <div className="mt-6 border-2 border-[#0F3D70] bg-[#FFC107]/10 p-4 shadow-brutal-sm">
            <div className="flex items-center justify-between border-b-2 border-[#0F3D70] pb-2">
              <h4 className="text-xs font-black uppercase text-[#0F3D70]">
                Client-Side Order Ledger (LocalStorage)
              </h4>
              <button
                type="button"
                onClick={() => setShowLedger(false)}
                className="text-xs font-black text-[#0F3D70] underline uppercase"
              >
                Close Ledger
              </button>
            </div>
            <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
              {savedLedger.map((order) => (
                <div key={order.refId} className="border-2 border-[#0F3D70] bg-white p-3 text-xs shadow-brutal-sm flex justify-between items-center">
                  <div>
                    <span className="font-black text-[#0F3D70]">{order.refId}</span> | {order.brandName} ({order.clientName})
                    <span className="block text-[11px] font-semibold text-[#1A1A1A]/70">{order.packageType} • ₦{order.total.toLocaleString()} on {order.date}</span>
                  </div>
                  <span className="border-2 border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-[10px] font-black text-[#0F3D70]">
                    Logged
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Configuration & Intake Form Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Column: Base Engine & Add-on Selection */}
          <div className="space-y-4 lg:col-span-7">
            
            {/* Base Inclusion Box */}
            <div className="flex items-start justify-between border-2 border-[#0F3D70] bg-[#FFC107]/15 p-4 shadow-brutal-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black uppercase text-[#0F3D70]">
                      Base Storefront Engine
                    </h3>
                    <span className="border border-[#0F3D70] bg-[#0F3D70] px-2 py-0.5 text-[10px] font-black uppercase text-white">
                      Standard
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#1A1A1A]">
                    Mobile catalog (up to 15 items with photos, descriptions, and prices), 1-click WhatsApp order routing, and free lifetime static cloud hosting on Vercel or Cloudflare.
                  </p>
                </div>
              </div>
              <div className="text-right pl-3">
                <span className="text-base font-black text-[#0F3D70]">₦10,000</span>
                <span className="block text-[10px] font-bold uppercase text-[#0F3D70]/70">Base</span>
              </div>
            </div>

            {/* Add-ons List */}
            <div className="space-y-3">
              {ADDONS.map((addon) => {
                const isSelected = selectedAddons.has(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`group relative flex cursor-pointer items-start justify-between border-2 border-[#0F3D70] p-4 transition-all duration-150 ${
                      isSelected
                        ? "bg-[#FFC107]/20 shadow-brutal-base -translate-x-0.5 -translate-y-0.5"
                        : "bg-white shadow-brutal-sm hover:bg-[#FFC107]/10"
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
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-[#0F3D70] transition-colors ${
                          isSelected
                            ? "bg-[#FFC107] text-[#0F3D70]"
                            : "bg-white text-transparent group-hover:border-[#0F3D70]"
                        }`}
                      >
                        <Check className="h-4 w-4 stroke-[3]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black uppercase text-[#0F3D70]">
                            {addon.name}
                          </span>
                          {addon.tag && (
                            <span className="border border-[#0F3D70] bg-[#FFC107] px-1.5 py-0.2 text-[10px] font-black uppercase text-[#0F3D70]">
                              {addon.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs font-semibold text-[#1A1A1A]">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right pl-4">
                      <span className="text-sm font-black text-[#0F3D70] whitespace-nowrap">
                        +₦{addon.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Structured Intake Form & Dual Dispatch */}
          <div className="border-2 border-[#0F3D70] bg-white p-6 shadow-brutal-base lg:col-span-5 flex flex-col justify-between">
            <form onSubmit={handleDualDispatchCheckout} className="space-y-4">
              <div>
                <div className="flex items-center justify-between border-b-2 border-[#0F3D70] pb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0F3D70]">
                    Vendor Intake & Dispatch
                  </span>
                  {isProBundle && (
                    <span className="border border-[#0F3D70] bg-[#FFC107] px-2 py-0.5 text-[10px] font-black text-[#0F3D70]">
                      Save ₦7,500
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-3xl sm:text-4xl font-black text-[#0F3D70]">
                    ₦{calculatedTotal.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold uppercase text-[#0F3D70]/80">One-time investment</span>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-[#0F3D70]">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Endurance Owie"
                    className="mt-1 w-full border-2 border-[#0F3D70] bg-white p-2.5 text-base font-semibold text-[#0F3D70] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:bg-[#FFC107]/10"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#0F3D70]">
                      Brand / Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. Elikar Dorm Kits"
                      className="mt-1 w-full border-2 border-[#0F3D70] bg-white p-2.5 text-base font-semibold text-[#0F3D70] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:bg-[#FFC107]/10"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#0F3D70]">
                      Business Niche
                    </label>
                    <select
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      className="mt-1 w-full border-2 border-[#0F3D70] bg-white p-2.5 text-base font-semibold text-[#0F3D70] focus:outline-none focus:bg-[#FFC107]/10"
                    >
                      <option value="Campus Pre-orders & Snacks">Campus Care & Snacks</option>
                      <option value="Fashion & Thrift Boutique">Fashion & Boutique</option>
                      <option value="Gadgets & Accessories">Gadgets & Accessories</option>
                      <option value="Bakery & Confectionery">Bakery & Pastries</option>
                      <option value="Digital Books & Creative">Books & Digital Creative</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#0F3D70]">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07080378857"
                      className="mt-1 w-full border-2 border-[#0F3D70] bg-white p-2.5 text-base font-semibold text-[#0F3D70] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:bg-[#FFC107]/10"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-[#0F3D70]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@endurance.website"
                      className="mt-1 w-full border-2 border-[#0F3D70] bg-white p-2.5 text-base font-semibold text-[#0F3D70] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:bg-[#FFC107]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-[#0F3D70]">
                    Specific Store Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Include direct transfer to GTBank, delivery to Hall 4 Covenant University"
                    className="mt-1 w-full border-2 border-[#0F3D70] bg-white p-2 text-base font-semibold text-[#0F3D70] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:bg-[#FFC107]/10"
                  />
                </div>
              </div>

              {/* Order Scope Checklist */}
              <div className="border-t-2 border-[#0F3D70] pt-3 text-xs font-bold text-[#0F3D70] space-y-1">
                <div className="flex justify-between">
                  <span>Base Package:</span>
                  <span>₦10,000 (Included)</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Add-ons:</span>
                  <span>{selectedAddons.size} selected</span>
                </div>
                <div className="flex justify-between">
                  <span>Hosting Guarantee:</span>
                  <span className="text-[#0F3D70] font-black">₦0 Lifetime Static</span>
                </div>
              </div>

              {/* Dual Dispatch Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex min-h-[50px] w-full items-center justify-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107] px-5 py-3 text-sm font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover active:translate-x-0 active:translate-y-0 active:shadow-brutal-base"
                  style={{ touchAction: "manipulation" }}
                >
                  <MessageCircle className="h-4 w-4 fill-current stroke-[2.5]" />
                  <span>{isSubmitting ? "Dispatching..." : "Dispatch Order on WhatsApp"}</span>
                </button>
                <p className="mt-2 text-center text-[10px] font-bold uppercase text-[#0F3D70]/70">
                  Dual dispatch: Logs order payload & launches direct WhatsApp routing.
                </p>
              </div>

              {submittedRef && (
                <div className="mt-2 border-2 border-[#0F3D70] bg-[#FFC107] p-2 text-center text-xs font-black text-[#0F3D70]">
                  ✓ Order Dispatched! Reference: {submittedRef}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
