import React from "react";
import { cn } from "@/lib/util";
import { Spotlight } from "./ui/spotlight";
import GradualSpacing from "./ui/gradual-spacing";
import { GradualSpacingDemo } from "./GradualSpacing";
import HeroSection from "./HeroSection";

export function SpotlightPreview() {
  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden fontHero">
        <GradualSpacingDemo />
      </div>
  );
}
