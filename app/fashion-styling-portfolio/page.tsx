import React from "react";
import IntroFSP from "./components/GradualSpacingDemo4";
import '../fashion-styling-portfolio/page.css'

function page() {
  return (
    <div>
      <div className="">
        <div className="-mt-48 md:mt-0">
        <IntroFSP /> </div>
        <div className="iframe-container -mt-80 md:-mt-60 md:-mb-40">
          <iframe
            allowFullScreen
            scrolling="no"
            className="iframe1"
            src="https://heyzine.com/flip-book/f29196e46a.html"
            
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default page;
