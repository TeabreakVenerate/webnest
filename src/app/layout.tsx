import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebNest | High-Converting WhatsApp Storefronts in 48 Hours",
  description:
    "Stop losing orders in messy DMs. Turn your WhatsApp status into a 1-click store in 48 hours for ₦10,000. Built for student vendors, boutique owners, and creator brands.",
  keywords: [
    "WhatsApp storefront",
    "Nigeria e-commerce",
    "student vendor store",
    "WebNest",
    "instant checkout",
    "Covenant University vendors",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300`}>
        {children}
      </body>
    </html>
  );
}
