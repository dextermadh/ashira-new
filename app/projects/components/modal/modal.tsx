import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './style.module.css';

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
    const gsapTween = (target: any, props: any) => gsap.to(target, { ...props, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      gsapTween(modalContainer.current, { left: pageX, top: pageY, duration: 0.8 });
      gsapTween(cursor.current, { left: pageX, top: pageY, duration: 0.5 });
      gsapTween(cursorLabel.current, { left: pageX, top: pageY, duration: 0.45 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className={styles.modalContainer}
    >
      <div style={{ top: `${index * -100}%` }} className={styles.modalSlider}>
        {projects.map((project, idx) => (
          <div
            className={styles.modal}
            style={{ backgroundColor: project.color }}
            key={`modal_${idx}`}
          >
            <Image 
              src={project.src}
              width={300}
              height={300}
              alt={`Project ${idx}`}
              className={styles.projectImage} // Add CSS class if needed for styling
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
