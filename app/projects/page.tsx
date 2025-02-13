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
    <div className="flex md:mt-28 md:gap-0 mt-40 flex-col gap-5">
      {" "}
      {/* Added className for styling */}
      <div className="md:mt-0">
        <IntroProjects />
      </div>
      <motion.div
          className="md:-mt-10"
      >
        <ProjectSection />
      </motion.div>
      <div className="md:mt-0">
        <VelocityScroll />
      </div>
    </div>
  );
};

export default ProjectSectionMain;
