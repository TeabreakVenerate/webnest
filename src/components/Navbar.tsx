"use client";

import React, { useState } from "react";
import { ShoppingBag, MessageCircle, Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Pricing Calculator", href: "#calculator" },
    { label: "Add-on Features", href: "#capabilities" },
    { label: "Proof of Work", href: "#showcase" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 transition-transform duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          style={{ touchAction: "manipulation" }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-neutral-950 shadow-md shadow-emerald-500/20">
            <ShoppingBag className="h-5 w-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-150">
              WebNest
            </span>
            <span className="text-[10px] font-medium text-neutral-400">
              Storefront Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-neutral-300 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/2349000000000?text=Hello%20WebNest!%20I%20want%20to%20launch%20my%20storefront%20for%20%E2%82%A610%2C000."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-neutral-950 shadow-sm transition-[transform,background-color,box-shadow] duration-150 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            style={{ touchAction: "manipulation" }}
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            <span>Launch on WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/80 text-neutral-300 transition-colors duration-150 hover:bg-neutral-800 hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Toggle Navigation Menu"
            style={{ touchAction: "manipulation" }}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800/80 bg-neutral-950/95 px-4 py-5 backdrop-blur-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-neutral-300 transition-colors duration-150 hover:bg-neutral-900 hover:text-white active:scale-[0.98]"
                style={{ touchAction: "manipulation" }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/2349000000000?text=Hello%20WebNest!%20I%20want%20to%20launch%20my%20storefront%20for%20%E2%82%A610%2C000."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-neutral-950 shadow-sm transition-[transform,background-color] duration-150 hover:bg-emerald-400 active:scale-[0.97]"
                style={{ touchAction: "manipulation" }}
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Launch on WhatsApp (₦10,000)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
