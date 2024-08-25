"use client";

import React, { useEffect } from "react";
import IntroCollaborate from "../collaborate/components/GradualSpacingDemo2";
import { CV } from "./CV";
import "../collaborate/collaborate.css"; // Ensure CSS is optimized

// Optional: CSS class for smooth scrolling
const smoothScrollStyle = `
  html {
    scroll-behavior: smooth;
  }
`;

const Page: React.FC = () => {
    useEffect(() => {
        // Set smooth scroll style dynamically if needed
        const style = document.createElement('style');
        style.textContent = smoothScrollStyle;
        document.head.appendChild(style);

        // Clean up style on component unmount
        return () => {
            document.head.removeChild(style);
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
