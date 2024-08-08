'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './page.css';

export default function Home() {
  useEffect(() => {
    // Check if the environment supports requestAnimationFrame for safety
    if (typeof window !== "undefined") {
      // Initialize Lenis for smooth scrolling
      const lenis = new Lenis({
        duration: 1.2, // Duration of smooth scrolling
        easing: (t: number) => t, // Linear easing function for smooth transitions
      });

      // Animation frame update with throttling (e.g., every 16ms ~ 60fps)
      let lastTime = 0;
      const raf = (time: number) => {
        if (time - lastTime > 16) {
          lenis.raf(time);
          lastTime = time;
        }
        requestAnimationFrame(raf);
      };

      // Start animation frame loop
      const animationFrameId = requestAnimationFrame(raf);

      // Clean up on component unmount
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <div className="iframe-container">
      <iframe
        allowFullScreen
        className="iframe1"
        src="https://heyzine.com/flip-book/e895ae4bf4.html"
      />
    </div>
  );
}
