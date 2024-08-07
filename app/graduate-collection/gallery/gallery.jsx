import styles from './style.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery({ mousePosition, handle1, handle2 }) {
  const { x, y } = mousePosition;

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image 
          src={handle1}
          alt="Primary image"
          fill
          placeholder="blur"  // Placeholder image while loading
          blurDataURL="/path/to/placeholder.jpg"  // Path to placeholder image
          style={{ objectFit: 'cover' }}  // Adjust as needed
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
        />
      </motion.div>
    </div>
  );
}
