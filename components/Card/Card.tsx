import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text }) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt="Card Image" width={500} height={600}  className={styles.image} />
      <div className={styles.text}>
        {text}
      </div>
    </div>
  );
};

export default Card;
