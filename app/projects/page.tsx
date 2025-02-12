"use client";
import React, { useEffect } from "react";
import IntroProjects from "./components/GradualSpacing";
import "../projects/projects.css";

import VelocityScroll from "@/components/VelocityScroll";
import { ProjectSection } from "./components/projectSection";
import { motion } from "framer-motion";

// Page component for handling the introduction and project sections
const ProjectSectionMain: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="page-container -mb-40">
      {" "}
      {/* Added className for styling */}
      <div className="md:mt-0 -mt-52">
        <IntroProjects />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1, ease: "easeOut" }}
        className="projectMain -mt-40"
      >
        <ProjectSection />
      </motion.div>
      <div className="-mt-52 md:mt-0">
        <VelocityScroll />
      </div>
    </div>
  );
};

export default ProjectSectionMain;
