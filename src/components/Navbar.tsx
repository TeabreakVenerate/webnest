"use client";

import React, { useState } from "react";
import { ShoppingBag, MessageCircle, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Case Studies", href: "#showcase" },
    { label: "Pricing & Add-ons", href: "#calculator" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hi Webnests, I want to launch my storefront for ₦15,000."
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#0F3D70] bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 transition-all duration-150 ease-out active:scale-[0.97]"
          style={{ touchAction: "manipulation" }}
        >
          <div className="flex h-10 w-10 items-center justify-center border-2 border-[#0F3D70] bg-[#FFC107] text-[#0F3D70] shadow-brutal-sm">
            <ShoppingBag className="h-5 w-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black uppercase tracking-tight text-[#0F3D70]">
              Webnest
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F3D70]/80">
              Covenant Storefront Engine
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-black uppercase tracking-wide text-[#0F3D70] transition-colors duration-150 hover:bg-[#FFC107] px-2 py-1 border border-transparent hover:border-[#0F3D70]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex min-h-[44px] items-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover active:translate-x-0 active:translate-y-0 active:shadow-brutal-base"
            style={{ touchAction: "manipulation" }}
          >
            <MessageCircle className="h-4 w-4 fill-current stroke-[2.5]" />
            <span>Launch on WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center border-2 border-[#0F3D70] bg-white text-[#0F3D70] shadow-brutal-sm transition-all duration-150 hover:bg-[#FFC107]"
            aria-label="Toggle Navigation Menu"
            style={{ touchAction: "manipulation" }}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 stroke-[3]" /> : <Menu className="h-6 w-6 stroke-[3]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#0F3D70] bg-white p-4 shadow-brutal-base">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center border-2 border-[#0F3D70] bg-white px-3 text-xs font-black uppercase tracking-wider text-[#0F3D70] transition-all duration-150 hover:bg-[#FFC107]"
                style={{ touchAction: "manipulation" }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 border-2 border-[#0F3D70] bg-[#FFC107] px-4 py-3 text-xs font-black uppercase tracking-wider text-[#0F3D70] shadow-brutal-base transition-all duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover"
                style={{ touchAction: "manipulation" }}
              >
                <MessageCircle className="h-4 w-4 fill-current stroke-[2.5]" />
                <span>Launch on WhatsApp (₦10,000)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
