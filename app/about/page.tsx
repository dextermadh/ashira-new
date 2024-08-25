'use client';

import React, { useEffect } from "react";
import "./brand.css"; // Ensure this file includes smooth scrolling CSS
import { Description, Description1, Intro, Section, Section1 } from "./component/about";
import IntroAbout from "./Components/GradualSpacing";

// Optional: CSS class for smooth scrolling
const smoothScrollStyle = `
  html {
    scroll-behavior: smooth;
  }
`;
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
        <>
         <GlobalStyle />  
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
        </>

    );
};

export default Page;
