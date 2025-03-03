"use client";

import { useEffect } from "react";
import "./page.css";
import Carousel2 from "./components/carousel/carousel";
import IntroNeuromaginationPortfolio from "./components/GradualSpacing";
import PortfolioDescription from "@/app/graduate-collection/portfolio/components/PDescription/portfolioDesciption";

export default function Home() {
  useEffect(() => {
    // Enable smooth scrolling using native CSS
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    // Clean up on component unmount
    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.scrollBehavior = "";
      }
    };
  }, []);

  return (
    <div>
      <div className="mt-48 md:mt-60">
      <IntroNeuromaginationPortfolio />
      </div>
      <div className="mt-80 m-10 md:mt-10">
      <PortfolioDescription
        text={
          "This Conceptual Development was created and implemented during the second year of study, drawing inspiration from the inexhaustible human power to imagine."
        }
      /></div>
      <div className="iframe-container -mt-28 md:-mt-10">
        <iframe
          allowFullScreen
          scrolling="no"
          className="iframe1"
          src="https://heyzine.com/flip-book/e80aabf03b.html"
        ></iframe>
      </div>
    </div>
  );
}
