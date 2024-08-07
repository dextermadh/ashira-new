"use client";

import React, { useEffect } from "react";
import "./brand.css";
import Lenis from 'lenis';
import { Description, Description1, Intro, Section, Section1 } from "./component/about";
import { IntroAbout } from "./Components/GradualSpacing";

const Page: React.FC = () => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2, // Adjust the duration for smooth scrolling
            easing: (t: number) => t // Use a linear easing function for smoother transitions
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
        <div className="page-container"> {/* Added a class for additional styling if needed */}
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
