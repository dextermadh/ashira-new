'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './page.css';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
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
    <>
      <div className="">
        <iframe
          allowFullScreen
          className="iframe1"
          src="https://heyzine.com/flip-book/e895ae4bf4.html"
        ></iframe>
      </div>
    </>
  );
}
