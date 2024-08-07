"use client";
import React, { useEffect } from "react";
import { GradualSpacingDemo1, IntroProjects } from "./components/GradualSpacing";
import '../projects/projects.css';
import ProjectSection from "./components/projectSection";
import Lenis from 'lenis';

const Page = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Duration for smooth scrolling
      easing: (t) => t, // Easing function for smooth transitions
    });

    // Animation frame update function
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // Start animation frame loop
    requestAnimationFrame(raf);

    // Cleanup function to remove Lenis instance when component unmounts
    return () => {
      // No specific cleanup needed for Lenis, but keeping the return for best practices
      lenis.destroy();
    };
  }, []);

  return (
    <div className="">
      <IntroProjects />
      <div className="projectMain">
        <ProjectSection />
      </div>
    </div>
  );
};

export default Page;
