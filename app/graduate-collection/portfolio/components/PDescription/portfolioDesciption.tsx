import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from '../../../../../components/Description/animation';
import Link from 'next/link';

type PortfolioDescriptionProps = {
  text: string; // Specify that 'text' is a string
};

export default function PortfolioDescription({ text }: PortfolioDescriptionProps) {
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>{text}</motion.p>
        <div data-scroll data-scroll-speed={0.1}>
        </div>
      </div>
    </div>
  );
}
