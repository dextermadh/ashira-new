'use client';
import { useEffect } from 'react';
import './page.css';
import Lenis from '@studio-freight/lenis';
import Carousel2  from './components/carousel/carousel';
import { IntroNeuromaginationPortfolio } from './components/GradualSpacing';

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
      <div className="carouselContainer">
      <Carousel2 name='sajkdn'/>
      </div>
      
    </div>
  );
}
