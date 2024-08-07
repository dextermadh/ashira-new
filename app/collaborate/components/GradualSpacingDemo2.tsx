"use client"

import GradualSpacing from "@/components/ui/gradual-spacing";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";


export function GradualSpacingDemo2() {
  return (
    <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] font2"
      text="COLLABORATE"
    />
  );
}

export function IntroCollaborate() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div style={{y}} className='relative h-full items-center flex justify-center'>
        <GradualSpacingDemo2 />
      </motion.div>
    </div>
  )
}