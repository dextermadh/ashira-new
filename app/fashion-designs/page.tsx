import React from "react";
import IntroFSP from "./components/GradualSpacingDemo4";
import "../fashion-designs/page.css";
import { FashionDesignSection } from "./components/fashionDesignSection";
import IntroFDP from "./components/GradualSpacingDemo4";

function page() {
  return (
    <div>
      <div className="flex flex-col md:mt-40">
        <div className="mt-40 md:mt-0">
        <IntroFDP />
        </div>
      <div className=" md:mt-0">
        <FashionDesignSection />
        </div>
      </div>
    </div>
  );
}

export default page;
