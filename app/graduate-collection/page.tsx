'use client';
import { useEffect } from 'react';
import './page.css';
import { GCardDemo } from './components/GCard';
import { GCardDemo2 } from './components/GCard2';
import { GCardDemo3 } from './components/GCard3';
import Link from 'next/link';
import { GradualSpacingDemo10, IntroGraduateCollection } from './components/GradualSpacing';
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
      <IntroGraduateCollection />
      <div className="page-content">
        <div className="container1">
          <Link href="graduate-collection/portfolio">
            <GCardDemo />
          </Link>
          <Link href="graduate-collection/look-book">
            <GCardDemo2 />
          </Link>
          <Link href="graduate-collection/gallery">
            <GCardDemo3 />
          </Link>
        </div>
      </div>
    </div>
  );
}
