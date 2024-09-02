"use client";

import { motion } from 'framer-motion';
import '@/app/about/brand.css'; // Make sure to optimize this CSS as well.

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const IntroAbout: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 1, ease: "easeOut" }}
      className="IntroAbout"
      style={{ willChange: 'transform, opacity' }} // Inform browser of impending changes
    >
      About ME
    </motion.div>
  );
};

export default IntroAbout;
