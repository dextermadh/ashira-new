"use client";

import React, { useRef, useMemo } from 'react';
import GradualSpacing from "@/components/ui/gradual-spacing";
import { useScroll, useTransform, motion } from 'framer-motion';

// GradualSpacing component for the "PROJECTS" text
const GradualSpacingDemo1: React.FC = React.memo(() => {
  return (
    <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] fontProject"
      text="PROJECTS"
    />
  );
});

// Main component for the intro section with scroll-based animation
export function IntroProjects() {
  const container = useRef<HTMLDivElement>(null);

  // Framer Motion useScroll hook to track scroll progress
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Transform scroll progress to vertical movement
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  // Memoize style object to avoid re-creating on each render
  const style = useMemo(() => ({ y }), [y]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div
        style={style}
        className="relative h-full flex items-center justify-center"
        transition={{ type: "spring", stiffness: 50, damping: 15 }} // Smooth spring animation
      >
        <GradualSpacingDemo1 />
      </motion.div>
    </div>
  );
}
