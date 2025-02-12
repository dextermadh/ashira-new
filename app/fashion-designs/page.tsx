import React from "react";
import IntroFSP from "./components/GradualSpacingDemo4";
import "../fashion-designs/page.css";
import { FashionDesignSection } from "./components/fashionDesignSection";
import IntroFDP from "./components/GradualSpacingDemo4";

function page() {
  return (
    <div>
      <div className="">
        <div className="-mt-52 md:mt-0">
        <IntroFDP />
        </div>
      <div className="-mt-[35vh] md:-mt-[30vh]">
        <FashionDesignSection />
        </div>
      </div>
    </div>
  );
}

export default page;
