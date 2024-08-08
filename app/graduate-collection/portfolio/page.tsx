'use client';

import './page.css';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Lenis from '@studio-freight/lenis';

// Dynamically import components with correct types
const IntroGraduateCollectionPortfolio = dynamic(() => import('./GradualSpacing'))
const PortfolioDescription = dynamic(() => import('./components/PDescription/portfolioDesciption').then(mod => mod.default), { ssr: false });
const Carousel = dynamic(() => import('./components/carousel').then(mod => mod.default), { ssr: false });

export default function Home() {
  // Initialize Lenis with useCallback to avoid re-creating the function on every render
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      <IntroGraduateCollectionPortfolio />
      <PortfolioDescription
            text={
                "This collection is inspired by human emotions and Kintsugi art theories, which I came up with and refined for my final collection during the final year of my studies for (BA) Hons, Fashion Design Degree at Falmouth University, UK."
            }
        />
      <div className="carouselContainer">
      <Carousel name='sajkdn' />
      </div>
      
    </div>
  );
}
