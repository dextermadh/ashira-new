import styles from './style.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery({mousePosition, handle1, handle2}) {
  
  const { x, y } = mousePosition;
  
  return (
    <div className={styles.gallery}>
        <div className={styles.imageContainer}>
            <Image 
                src={handle1}
                alt="image"
                fill
                priority
            />
        </div>
        <motion.div
         className={styles.vignette}
         style={{x, y}}
         >
          <Image 
            src={handle2}
            alt="image"
            fill
            priority
          />
        </motion.div>
    </div>
  )
}