'use client';

import { useEffect } from 'react';
import './page.css';
import Lenis from '@studio-freight/lenis';
import Link from 'next/link';
import { IntroNeuromagination } from './components/GradualSpacing';
import Card from '@/components/Card/Card';

export default function Home() {
  // Initialize Lenis only once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
    });

    // Use requestAnimationFrame for smooth scrolling
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
      <IntroNeuromagination />
      <div className="containerNeuro">
        <div className="page-contentNeuro">
          <Link href="neuromagination/portfolio" passHref>
            <Card 
              imageSrc='/assets/Neuromagination/8V8A6486.JPG' 
              text='Portfolio'
            />
          </Link>
          <Link href="neuromagination/gallery" passHref>
            <Card 
              imageSrc='/assets/Neuromagination/8V8A6198.JPG' 
              text='Gallery'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
