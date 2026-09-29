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
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-300">
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
