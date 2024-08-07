"use client"

import GradualSpacing from "@/components/ui/gradual-spacing";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function GradualSpacingDemo20() {
  return (
    <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] IntroAbout transition-transform duration-500"
      text="About me"
    />
  );
}

export function IntroAbout() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Smooth vertical transform with ease
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div
        style={{ y }}
        className='relative h-full flex items-center justify-center'
        transition={{ ease: "easeInOut", duration: 1 }} // Smooth transition
      >
        <GradualSpacingDemo20 />
      </motion.div>
    </div>
  );
}
