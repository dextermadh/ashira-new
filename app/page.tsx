"use client";
import React, { useState, useEffect, useRef } from "react";
import VelocityScroll from "@/components/VelocityScroll";
import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Hero/Hero";
import PreLoader from "@/components/preloader/preloader";
import { AnimatePresence } from 'framer-motion';
import Description from '../components/Description/description';
import { useScroll } from 'framer-motion';
import ProjectSection from "./projects/components/projectSection";
import IntroTechnicalDevelopments from "./technical-developments/components/GradualSpacingDemo4";
import Carousel3 from "./technical-developments/components/carousel/caorusel";
import '@/app/technical-developments/page.css'

// Optimize HeroSection and ProjectSection if they are large
const MemoizedHeroSection = React.memo(HeroSection);
const MemoizedProjectSection = React.memo(ProjectSection);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
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
      
      <div className="carouselContainer">
        <Carousel3 name="technical-developments" />
      </div>
    </div>
  );
};

export default App;
