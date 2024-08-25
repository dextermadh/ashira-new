'use client';

import React, { useEffect, useRef } from "react";
import "./brand.css";
import Lenis from 'lenis';
import { Description, Description1, Intro, Section, Section1 } from "./component/about";
import IntroAbout from "./Components/GradualSpacing";

const Page: React.FC = () => {
    // Ref to store the animation frame ID
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings for Safari
        const lenis = new Lenis({
            duration: 1.2, // Smooth scrolling duration
            easing: (t: number) => t, // Linear easing for smoother transitions
            smoothWheel: true, // Enable smooth wheel scrolling
            wheelMultiplier: 1.2, // Fine-tune wheel scroll sensitivity
            touchMultiplier: 2, // Fine-tune touch scroll sensitivity
        });

        // Animation frame update
        const animate = (time: number) => {
            lenis.raf(time);
            animationFrameId.current = requestAnimationFrame(animate);
        };

        // Start animation frame loop
        animationFrameId.current = requestAnimationFrame(animate);

        // Clean up Lenis instance and animation frame on unmount
        return () => {
            lenis.destroy();
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <div className="page-container">
            <IntroAbout />
            <div className="content">
                <Intro />
                <Description />
                <Section />
                <Description1 />
                <Section1 />
            </div> 
        </div>
    );
};

export default Page;
