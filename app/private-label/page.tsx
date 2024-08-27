"use client";

import React, { useEffect } from "react";
import IntroPrivateLabel from "./GradulaSpacing";
import "./brand.css";
import VelocityScroll from "@/components/VelocityScroll";
import { TimelineBrand } from "./component/private-label";


const Page = () => {
  // Enable smooth scrolling using native CSS

  return (
    <div className="page-container">
      <IntroPrivateLabel />
      <div className="content">
        <TimelineBrand />
      </div> 
    </div>
  );
};

export default Page;
