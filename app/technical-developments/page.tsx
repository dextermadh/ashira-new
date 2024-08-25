"use client";
import React, { useEffect } from "react";
import IntroTechnicalDevelopments from "./components/GradualSpacingDemo4";
import "./page.css";
import Carousel3 from "../technical-developments/components/carousel/caorusel";

const Page = () => {

  return (
    <div className="">
      <IntroTechnicalDevelopments />
      <div className="carouselContainer">
        <Carousel3 name="technical-developments" />
      </div>
    </div>
  );
};

export default Page;
