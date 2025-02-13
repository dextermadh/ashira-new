import React from "react";
import IntroFSP from "./components/GradualSpacingDemo4";
import '../fashion-styling-portfolio/page.css'
import IntroFDP from "./components/GradualSpacingDemo4";

function page() {
  return (
    <div className="flex flex-col">
      <div className="md:mt-60 mt-40">
        <IntroFDP />
        <div className="iframe-container ">
          <iframe
            allowFullScreen
            scrolling="no"
            className="iframe1"
            src="https://heyzine.com/flip-book/0121602621.html"
            
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default page;
