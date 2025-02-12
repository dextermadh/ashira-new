"use client";
import React, { useEffect } from "react";
import IntroTechnicalDevelopments from "./components/GradualSpacingDemo4";
import "./page.css";
import Carousel3 from "../technical-developments/components/carousel/caorusel";
import { motion } from "framer-motion";

const Page = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="">
      <div className="md:mt-0 -mt-52">
      <IntroTechnicalDevelopments />
      </div>
      <motion.div       initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 1, ease: "easeOut" }} className="iframe-container md:-mt-40 -mt-96">
        <iframe
          allowFullScreen
          scrolling="no"
          className="iframe1"
          src="https://heyzine.com/flip-book/e863fd9b71.html"

        ></iframe>
      </motion.div>
    </div>
  );
};

export default Page;
