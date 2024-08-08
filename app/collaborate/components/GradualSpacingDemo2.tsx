"use client";

import GradualSpacing from "@/components/ui/gradual-spacing";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function GradualSpacingDemo2() {
  return (
    <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-tight text-black dark:text-white md:text-7xl md:leading-[5rem] font2"
      text="COLLABORATE"
    />
  );
}

export function IntroCollaborate() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Simplified transform for smoother performance
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div 
        style={{ y }} 
        className='relative h-full flex items-center justify-center'
        transition={{ duration: 0.5 }} // Adjusted duration for performance
      >
        <GradualSpacingDemo2 />
      </motion.div>
    </div>
  );
}
