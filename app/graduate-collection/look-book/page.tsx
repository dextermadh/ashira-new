"use client";
import { useEffect } from "react";
import "./page.css";
import IntroGraduateCollectionLookbook from "./components/GradualSpacing";

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
      <div className="md:mt-48 mt-40">
        <IntroGraduateCollectionLookbook />
      </div>
      <div className="iframe-container md: ">
        <iframe
          allowFullScreen
          scrolling="no"
          src="https://heyzine.com/flip-book/e895ae4bf4.html"
          className="iframe1"
        ></iframe>
      </div>
    </div>
  );
}
