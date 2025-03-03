'use client';

import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import image1 from "../../public/media/retouch_2025021200222027.jpg";
import { motion } from 'framer-motion';
import { slideUp } from './animation';

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyMaskRef = useRef<HTMLDivElement | null>(null);
  const easedScrollProgressRef = useRef(0.05); // Use useRef to keep track of easedScrollProgress

  const initialMaskSize = 0.8;
  const targetMaskSize = 80;
  const easing = 0.15;

  useEffect(() => {
    const animate = () => {
      if (stickyMaskRef.current) {
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        stickyMaskRef.current.style.webkitMaskSize = `${(initialMaskSize + maskSizeProgress) * 100}%`;
      }
      requestAnimationFrame(animate);
    };

    const getScrollProgress = () => {
      if (stickyMaskRef.current && containerRef.current) {
        const scrollProgress =
          window.scrollY / (containerRef.current.getBoundingClientRect().height - window.innerHeight);
        const delta = scrollProgress - easedScrollProgressRef.current;
        easedScrollProgressRef.current += delta * easing;
        return easedScrollProgressRef.current;
      }
      return 0;
    };

    requestAnimationFrame(animate);
  }, []); // Empty dependency array

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <main className={styles.main}>
        <div ref={containerRef} className={styles.container}>
          <div ref={stickyMaskRef} className={styles.stickyMask}>
            <Image src={image1} className={styles.image1} alt="Hero Image" />
          </div>
        </div>
      </main>
    </motion.main>
  );
}
