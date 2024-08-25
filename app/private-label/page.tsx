"use client";

import React, { useEffect } from "react";
import IntroPrivateLabel from "./GradulaSpacing";
import "./brand.css";
import VelocityScroll from "@/components/VelocityScroll";
import { 
  Description, Description1, Description2, Description3, Description4, Description5, Description6, 
  Intro, Section, Section1 
} from "./component/private-label";

const Page = () => {
  // Enable smooth scrolling using native CSS

  return (
    <div className="page-container">
      <IntroPrivateLabel />
      <VelocityScroll />
      <div className="content">
        <Intro />
        <Description />
        <Section />
        <Description1 />
        <Section1 />
        <Description2 />
        <Section />
        <Description3 />
        <Section1 />
        <Description4 />
        <Section />
        <Description5 />
        <Section1 />
        <Description6 />
        <Section />
      </div> 
    </div>
  );
};

export default Page;
