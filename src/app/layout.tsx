import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Webnest | 1-Click Storefronts in 72 Hours or Less",
  description:
    "Clean, high-converting digital storefronts for business owners, freelancers, and vendors. Flat ₦15,000 base fee with built-in multi-item cart and zero monthly SaaS fees.",
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${newsreader.variable}`}>
      <body
        className={`${inter.className} min-h-screen bg-[#FBF9F5] text-[#22201D] antialiased selection:bg-[#C9A982]/30 selection:text-[#22201D]`}
      >
        {children}
      </body>
    </html>
  );
}
