"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "@/app/about/brand.css"; // Optimize this CSS if needed.

const IntroAbout: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Fades out as it scrolls up
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, x: 0 }}
      style={{ opacity, willChange: "opacity, transform" }}
      className="IntroAbout"
    >
      About ME
    </motion.div>
  );
};

export default IntroAbout;
