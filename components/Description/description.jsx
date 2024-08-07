import styles from '../Description/style.module.scss'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../app/common/RoundedButton/index';
import Link from 'next/link';
export default function Description() {

    const phrase = "Creating distinctive styles that define the new fashion frontier. Together, we'll set trends and break boundaries. No compromises, always at the forefront of innovation.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>My passion for fashion, craftsmanship, and innovation places me in a unique position in the world of fashion design.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Link href='/about'>
                    <Rounded backgroundColor='#cdae89' className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                    </Link>
                </div>
            </div>
        </div>
    )
}