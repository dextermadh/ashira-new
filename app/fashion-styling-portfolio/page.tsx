import React from "react";
import IntroFSP from "./components/GradualSpacingDemo4";
import '../fashion-styling-portfolio/page.css'

function page() {
  return (
    <div>
      <div className="">
        <IntroFSP />
        <div className="iframe-container">
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
