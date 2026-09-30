"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PrototypePicker } from "@/components/prototypes/PrototypePicker";
import { AppleGlassmorphism } from "@/components/prototypes/AppleGlassmorphism";
import { EmilTactile } from "@/components/prototypes/EmilTactile";
import { EditorialLuxury } from "@/components/prototypes/EditorialLuxury";
import { ConceptualBlueprint } from "@/components/prototypes/ConceptualBlueprint";
import { AccessibleFunctional } from "@/components/prototypes/AccessibleFunctional";

const VARIANTS = [
  { id: 1, name: "Apple Glass", component: AppleGlassmorphism },
  { id: 2, name: "Emil Tactile", component: EmilTactile },
  { id: 3, name: "Editorial", component: EditorialLuxury },
  { id: 4, name: "Blueprint", component: ConceptualBlueprint },
  { id: 5, name: "Accessible", component: AccessibleFunctional },
];

function PrototypeStage() {
  const searchParams = useSearchParams();

  // Read initial variant from ?v=1..5
  const initialV = Math.min(
    Math.max(1, parseInt(searchParams.get("v") || "1", 10)),
    VARIANTS.length
  ) - 1;

  const [activeIdx, setActiveIdx] = useState(initialV);
  const [mountKey, setMountKey] = useState(0);

  const handleSelect = (index: number) => {
    if (index < 0 || index >= VARIANTS.length) return;
    setActiveIdx(index);
    setMountKey((prev) => prev + 1);

    const url = new URL(window.location.href);
    url.searchParams.set("v", String(index + 1));
    window.history.replaceState(null, "", url.toString());
  };

  const handleReplay = () => {
    setMountKey((prev) => prev + 1);
  };

  const ActiveComponent = VARIANTS[activeIdx].component;

  return (
    <div className="relative min-h-screen">
      {/* Active Prototype Component (Keyed to force clean re-mount) */}
      <div key={`${activeIdx}-${mountKey}`} className="w-full">
        <ActiveComponent />
      </div>

      {/* Floating Prototype Picker Harness (verbatim from PICKER.md) */}
      <PrototypePicker
        variants={VARIANTS}
        activeVariant={activeIdx}
        onSelect={handleSelect}
        onReplay={handleReplay}
      />
    </div>
  );
}

export default function PrototypesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-neutral-800 text-xs font-mono">
          Loading Webnest Prototype Matrix...
        </div>
      }
    >
      <PrototypeStage />
    </Suspense>
  );
}
