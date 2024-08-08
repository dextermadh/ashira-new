"use client";

import React, { useEffect } from "react";
import IntroCollaborate from "../collaborate/components/GradualSpacingDemo2";
import { CV } from "./CV";
import Lenis from 'lenis';
import "../collaborate/collaborate.css"; // Ensure CSS is as optimized as possible

const Page: React.FC = () => {
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2, // Adjust duration for smooth scrolling
            easing: t => t, // Linear easing function
        });

        // Animation frame update
        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        // Start animation frame loop
        requestAnimationFrame(raf);

        // Clean up on component unmount
        return () => {
            // Lenis does not need explicit cleanup here
        };
    }, []);

    return (
        <div className="page-container">
            <IntroCollaborate />
            <div className="main">
                <CV />
            </div>
        </div>
    );
};

export default Page;
