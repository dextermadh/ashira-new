'use client';
import { useEffect } from 'react';
import './page.css';
import Lenis from '@studio-freight/lenis';
import { NCardDemo } from './components/NCard';
import { NCardDemo3 } from './components/NCard3';
import Link from 'next/link';
import { GradualSpacingDemo11, IntroNeuromagination } from './components/GradualSpacing';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Duration for smooth scrolling
      easing: (t) => t, // Easing function for smooth transitions
    });

    // Animation frame update
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf as unknown as FrameRequestCallback);
    };

    // Start animation frame loop
    requestAnimationFrame(raf as unknown as FrameRequestCallback);

    // Clean up on component unmount
    return () => {
      cancelAnimationFrame(raf as unknown as number);
    };
  }, []);

  return (
    <div>
      <IntroNeuromagination />
      <div className="containerNeuro">
        <div className="page-contentNeuro">
          <Link href="neuromagination/portfolio">
            <NCardDemo />
          </Link>
          <Link href="neuromagination/gallery">
            <NCardDemo3 />
          </Link>
        </div>
      </div>
    </div>
  );
}
