'use client';
import { useEffect } from 'react';
import './page.css';
import Link from 'next/link';
import { GradualSpacingDemo10, IntroGraduateCollection } from './components/GradualSpacing';
import Lenis from '@studio-freight/lenis';
import Card from '@/components/Card/Card';

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
          <Card imageSrc='/assets/FASHION_SHOOT_3/p (25).jpg' text='Portfolio'/>
          </Link>
          <Link href="graduate-collection/look-book">
          <Card imageSrc='/assets/FASHION_SHOOT_3/p (45).jpg' text='Lookbook'/>
          </Link>
          <Link href="graduate-collection/gallery">
          <Card imageSrc='/assets/FASHION_SHOOT_3/p (54).jpg' text='Gallery'/>
          </Link>
        </div>
      </div>
    </div>
  );
}
