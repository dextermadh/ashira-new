'use client';
import { useEffect } from 'react';
import './page.css';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';
import { IntroGraduateCollectionPortfolio } from './GradualSpacing';
import { Carousel } from './components/carousel';
import PortfolioDescription from './components/PDescription/portfolioDesciption';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Adjust the duration for smooth scrolling
      easing: (t) => t, // Use a linear easing function for smooth transitions
    });

    // Animation frame update
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // Start animation frame loop
    const animationFrameId = requestAnimationFrame(raf);

    // Clean up on component unmount
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
      <Carousel name='sajkdn'/>
    </div>
  );
}
