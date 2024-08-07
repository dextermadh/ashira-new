import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './style.module.css';
import Link from 'next/link';

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

interface Project {
  src: string;
  color: string;
}

interface IndexProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: Project[];
}

export default function Index({ modal, projects }: IndexProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    const moveContainerY = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    const moveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    const moveCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    const moveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      moveContainer(pageX);
      moveContainerY(pageY);
      moveCursor(pageX);
      moveCursorY(pageY);
      moveCursorLabel(pageX);
      moveCursorLabelY(pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {
            projects.map((project, idx) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${idx}`}
                >
                  <Image 
                    src={src}
                    width={300}
                    height={300} // Set a specific height for better layout control
                    alt={`Project ${idx}`}
                  />
                </div>
              );
            })
          }
        </div>
      </motion.div>
    </>
  );
}
