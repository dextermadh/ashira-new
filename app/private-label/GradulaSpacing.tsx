"use client";

import GradualSpacing from "@/components/ui/gradual-spacing";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function GradualSpacingDemo3() {
  return (
    <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] font3"
      text="PRIVATE LABEL"
    />
  );
}

export function IntroPrivateLabel() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Smooth transform for y position
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div
        style={{ y }}
        className='relative h-full flex items-center justify-center'
        transition={{ type: "tween", ease: "easeInOut", duration: 1.5 }} // Adjusted for smoother effect
      >
        <GradualSpacingDemo3 />
      </motion.div>
    </div>
  );
}
