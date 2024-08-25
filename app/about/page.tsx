"use client";

import React, { useEffect } from "react";
import "./brand.css";
import Lenis from 'lenis';
import { Description, Description1, Intro, Section, Section1 } from "./component/about";
import IntroAbout from "./Components/GradualSpacing";

const Page: React.FC = () => {
    useEffect(() => {
        // Initialize Lenis with optimized settings for Safari
        const lenis = new Lenis({
            duration: 1.2, // Smooth scrolling duration
            easing: (t: number) => t, // Linear easing for smoother transitions
            smoothWheel: true, // Smooth wheel scrolling for Safari 
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
            lenis.destroy(); // Properly clean up Lenis instance
            cancelAnimationFrame(animationFrameId); // Cancel the animation frame
        };
    }, []);

    return (
        <div className="page-container" tabIndex={-1}>
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
