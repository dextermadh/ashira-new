import React from "react";
import IntroFSP from "./components/GradualSpacingDemo4";
import "../fashion-designs/page.css";
import { FashionDesignSection } from "./components/fashionDesignSection";

function page() {
  return (
    <div>
      <div className="">
        <IntroFSP />
        <div className="iframe-container">
        <iframe
          allowFullScreen
          scrolling="no"
          src="https://heyzine.com/flip-book/a28ba6e100.html"
          className="iframe1"
        ></iframe>
      </div>
      <div className="mt-28">
        <FashionDesignSection />
        </div>
      </div>
    </div>
  );
}

export default page;
