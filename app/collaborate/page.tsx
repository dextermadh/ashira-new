"use client";

import React, { useEffect } from "react";
import { GradualSpacingDemo2, IntroCollaborate } from "../collaborate/components/GradualSpacingDemo2";
import "../collaborate/collaborate.css";
import { CV } from "./CV";
import Lenis from 'lenis';

const Page: React.FC = () => {
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2, // Duration for smooth scrolling
            easing: (t: number) => t // Linear easing function for smoother transitions
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
        <div className="page-container">
            <IntroCollaborate />
            <div className="main">
                <CV />
            </div>
        </div>
    );
};

export default Page;
