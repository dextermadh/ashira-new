"use client";
import React, { useEffect } from "react";
import IntroProjects from "./components/GradualSpacing";
import '../projects/projects.css';

import VelocityScroll from "@/components/VelocityScroll";
import { ProjectSection } from "./components/projectSection";

// Page component for handling the introduction and project sections
const ProjectSectionMain: React.FC = () => {

  return (
    <div className="page-container"> {/* Added className for styling */}
      <IntroProjects />
      <div className="projectMain">
        <ProjectSection />
      </div>
      <VelocityScroll />
    </div>
  );
};

export default ProjectSectionMain;
