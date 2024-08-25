"use client";
import React, { useEffect } from "react";
import IntroProjects from "./components/GradualSpacing";
import '../projects/projects.css';
import ProjectSection from "./components/projectSection";
import VelocityScroll from "@/components/VelocityScroll";

// Page component for handling the introduction and project sections
const Page: React.FC = () => {

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

export default Page;
