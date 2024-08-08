
"use client";

import { motion } from 'framer-motion';
import '@/app/neuromagination/portfolio/page.css' // Create this CSS module for styling

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const IntroGraduateCollectionGallery: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 1, ease: "easeOut" }} // Customize duration and easing
      className="fontNPortfolio"
    >
      Nuromagination|Portfolio
    </motion.div>
  );
};

export default IntroGraduateCollectionGallery;