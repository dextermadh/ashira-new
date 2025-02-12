"use client";

import "./page.css";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components with correct types
const IntroGraduateCollectionPortfolio = dynamic(
  () => import("./GradualSpacing")
);
const PortfolioDescription = dynamic(
  () =>
    import("./components/PDescription/portfolioDesciption").then(
      (mod) => mod.default
    ),
  { ssr: false }
);
const Carousel = dynamic(
  () => import("./components/carousel").then((mod) => mod.default),
  { ssr: false }
);

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
      <div className="-mt-48 md:mt-0">
      <IntroGraduateCollectionPortfolio />
      </div>
      <div className="-mt-48 m-10 ">
      <PortfolioDescription
        text={
          "This collection is inspired by human emotions and Kintsugi art theories, which I came up with and refined for my final collection during the final year of my studies for (BA) Hons, Fashion Design Degree at Falmouth University, UK."
        }
      />
      </div>
      <div className="iframe-container -mt-40 md:-mt-20 md:-mb-40">
        <iframe
          allowFullScreen
          scrolling="no"
          src="https://heyzine.com/flip-book/a28ba6e100.html"
          className="iframe1"
        ></iframe>
      </div>
    </div>
  );
}
