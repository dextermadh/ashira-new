import styles from './style.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryProps {
  mousePosition: { x: number; y: number };
  handle1: string;
  handle2: string;
}

export default function Gallery({ mousePosition, handle1, handle2 }: GalleryProps) {
  const { x, y } = mousePosition;

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image
          src={handle1}
          alt="Primary image"
          fill
          placeholder="blur"
          blurDataURL="/path/to/placeholder.jpg"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
        />
      </div>
      <motion.div
        className={styles.vignette}
        style={{ x, y }}
      >
        <Image
          src={handle2}
          alt="Secondary image"
          fill
          placeholder="blur"
          blurDataURL="/path/to/placeholder.jpg"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
        />
      </motion.div>
    </div>
  );
}
