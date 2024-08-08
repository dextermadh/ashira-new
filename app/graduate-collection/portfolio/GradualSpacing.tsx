import GradualSpacing from "@/components/ui/gradual-spacing";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, memo } from 'react';

// Memoize the GradualSpacingDemo11 component to avoid unnecessary re-renders
const GradualSpacingDemo11 = memo(() => (
   <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] fontPortfolio"
      text="Graduate Collection|Portfolio"
    />
));

// Add a display name for easier debugging
GradualSpacingDemo11.displayName = 'GradualSpacingDemo11';

export function IntroGraduateCollectionPortfolio() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Memoize the y transform to improve performance
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div
        style={{ y }}
        className='relative h-full flex items-center justify-center'
        transition={{ type: "tween", ease: "easeInOut", duration: 1 }} // Smooth transition
      >
        <GradualSpacingDemo11 />
      </motion.div>
    </div>
  );
}
