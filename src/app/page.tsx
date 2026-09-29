import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PricingCalculator } from "@/components/PricingCalculator";
import { AddonsBentoGrid } from "@/components/AddonsBentoGrid";
import { Showcase } from "@/components/Showcase";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1A1A1A] selection:bg-[#FFC107] selection:text-[#0F3D70]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PricingCalculator />
        <AddonsBentoGrid />
        <Showcase />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
