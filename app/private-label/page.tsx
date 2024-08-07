"use client";
import React, { useEffect } from "react";
import { GradualSpacingDemo3, IntroPrivateLabel } from "./GradulaSpacing";
import "./brand.css";
import VelocityScroll from "@/components/VelocityScroll";
import Lenis from 'lenis';
import { 
  Description, Description1, Description2, Description3, Description4, Description5, Description6, 
  Intro, Section, Section1 
} from "./component/private-label";

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
    <div className="page-container">
      <IntroPrivateLabel />
      <VelocityScroll />
      <div className="content">
        <Intro />
        <Description />
        <Section />
        <Description1 />
        <Section1 />
        <Description2 />
        <Section />
        <Description3 />
        <Section1 />
        <Description4 />
        <Section />
        <Description5 />
        <Section1 />
        <Description6 />
        <Section />
      </div> 
    </div>
  );
};

export default Page;
