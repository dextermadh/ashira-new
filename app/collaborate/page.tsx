"use client";

import React, { useEffect } from "react";
import IntroCollaborate from "../collaborate/components/GradualSpacingDemo2";
import { CV } from "./CV";
import "../collaborate/collaborate.css"; // Ensure CSS is optimized

// Optional: CSS class for smooth scrolling


const Page: React.FC = () => {

    return (
        <div className="page-container">
            {/* <IntroCollaborate /> */}
            <div className="main md:mt-20">
                <CV />
            </div>
        </div>
    );
};

export default Page;
