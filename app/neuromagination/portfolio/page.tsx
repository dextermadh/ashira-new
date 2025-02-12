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
      <IntroNeuromaginationPortfolio />
      <PortfolioDescription
        text={
          "This Conceptual Development was created and implemented during the second year of study, drawing inspiration from the inexhaustible human power to imagine."
        }
      />
      <div className="iframe-container">
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
