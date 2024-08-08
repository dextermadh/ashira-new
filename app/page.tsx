"use client";
import React, { useState, useEffect, useRef } from "react";
import VelocityScroll from "@/components/VelocityScroll";
import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Hero/Hero";
import PreLoader from "@/components/preloader/preloader";
import { AnimatePresence } from 'framer-motion';
import Description from '../components/Description/description';
import Lenis from '@studio-freight/lenis';
import { useScroll } from 'framer-motion';
import ProjectSection from "./projects/components/projectSection";

// Optimize HeroSection and ProjectSection if they are large
const MemoizedHeroSection = React.memo(HeroSection);
const MemoizedProjectSection = React.memo(ProjectSection);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Optional: set duration for smoother scroll
      easing: (t) => t, // Optional: set easing function
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Ensure Lenis is cleaned up
    };
  }, []);

  return (
    <div ref={container}>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <div className="comb">
        <MemoizedHeroSection />
      </div>
      <MemoizedProjectSection />
      <VelocityScroll />
    </div>
  );
};

export default App;
