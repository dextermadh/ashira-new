"use client";
import React, { useEffect } from "react";
import { IntroProjects } from "./components/GradualSpacing";
import '../projects/projects.css';
import ProjectSection from "./components/projectSection";
import Lenis from 'lenis';

// Page component for handling the introduction and project sections
const Page: React.FC = () => {
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
      lenis.destroy();
    };
  }, []);

  return (
    <div className="page-container"> {/* Added className for styling */}
      <IntroProjects />
      <div className="projectMain">
        <ProjectSection />
      </div>
    </div>
  );
};

export default Page;
