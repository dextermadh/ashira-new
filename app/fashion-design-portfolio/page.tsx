import React from "react";
import IntroFSP from "./components/GradualSpacingDemo4";
import '../fashion-styling-portfolio/page.css'
import IntroFDP from "./components/GradualSpacingDemo4";

function page() {
  return (
    <div>
      <div className="">
        <IntroFDP />
        <div className="iframe-container -mt-40 ">
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
