import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webnest | 1-Click WhatsApp Storefronts in 48 Hours",
  description:
    "Functional, fast e-commerce setups for campus entrepreneurs and local retail boutiques within 48 hours. Flat ₦10,000 base fee with zero monthly SaaS fees.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-white text-[#1A1A1A] antialiased selection:bg-[#FFC107] selection:text-[#0F3D70]`}
      >
        {children}
      </body>
    </html>
  );
}
