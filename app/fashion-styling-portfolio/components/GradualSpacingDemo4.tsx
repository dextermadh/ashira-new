
"use client";

import { motion } from 'framer-motion';
import '@/app/fashion-styling-portfolio/page.css' // Create this CSS module for styling

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const IntroFSP: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 1, ease: "easeOut" }} // Customize duration and easing
      className="fontFSP"
    >
      Fashion Styling Portfolio
    </motion.div>
  );
};

export default IntroFSP;