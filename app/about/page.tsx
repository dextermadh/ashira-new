'use client'
import React, { useLayoutEffect, useEffect } from "react";
import "./brand.css"; // Ensure this file includes smooth scrolling CSS
import { Description, Description1, Intro, Section, Section1 } from "./component/about";
import IntroAbout from "./Components/GradualSpacing";



const Page: React.FC = () => {

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
