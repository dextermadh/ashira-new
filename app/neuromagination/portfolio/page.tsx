'use client';
import { useEffect } from 'react';
import './page.css';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import { Carousel2 } from './components/carousel/carousel';
import { IntroNeuromaginationPortfolio } from './components/GradualSpacing';
import PortfolioDescription from '@/app/graduate-collection/portfolio/components/PDescription/portfolioDesciption';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Duration for smooth scrolling
      easing: (t) => t, // Easing function for smooth transitions
    });

    // Animation frame update function
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf as unknown as FrameRequestCallback);
    };

    // Start animation frame loop
    const animationFrameId = requestAnimationFrame(raf as unknown as FrameRequestCallback);

    // Clean up on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      <IntroNeuromaginationPortfolio />
      <PortfolioDescription text={"This Conceptual Development was created and implemented during the second year of study, drawing inspiration from the inexhaustible human power to imagine."}/>
      <Carousel2 name='sajkdn'/>
    </div>
  );
}
