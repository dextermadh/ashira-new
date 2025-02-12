"use client";
import React, { useEffect } from "react";
import IntroTechnicalDevelopments from "./components/GradualSpacingDemo4";
import "./page.css";
import Carousel3 from "../technical-developments/components/carousel/caorusel";

const Page = () => {
  return (
    <div className="">
      <IntroTechnicalDevelopments />
      <div className="iframe-container">
        <iframe
          allowFullScreen
          scrolling="no"
          className="iframe1"
          src="https://heyzine.com/flip-book/e863fd9b71.html"

        ></iframe>
      </div>
    </div>
  );
};

export default Page;
