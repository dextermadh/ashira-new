"use client";

import GradualSpacing from "@/components/ui/gradual-spacing";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, memo } from 'react';

// Memoize GradualSpacingDemo11 to prevent unnecessary re-renders
const GradualSpacingDemo11 = memo(() => (
  <GradualSpacing
    className="font-display text-center text-5xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] NeuroFont"
    text="Neuromagination"
  />
));

// Set display name for the memoized component
GradualSpacingDemo11.displayName = 'GradualSpacingDemo11';

export function IntroNeuromagination() {
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
        transition={{ type: "tween", ease: "easeInOut", duration: 1.5 }} // Adjusted duration for smoother effect
      >
        <GradualSpacingDemo11 />
      </motion.div>
    </div>
  );
}
