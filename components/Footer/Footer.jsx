"use client"

import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../app/common/RoundedButton/index';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from "../../app/common/Magnetic/idex";
import image1 from "../../public/assets/FASHION_SHOOT_3/p (58).jpg";
import Link from 'next/link';

export default function Footer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <div className={styles.imageContact}>
                        <span>
                            <div className={styles.imageContainer}>
                                <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={image1}
                                />
                            </div>
                            <h2>Let&apos;s work</h2>
                        </span>
                        <h2>together</h2>
                    </div>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Link href="/collaborate">
                            <Rounded backgroundColor={"#cdae89"} className={styles.button}>
                                <p>Get in touch</p>
                            </Rounded>
                        </Link>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <p>eesamo.designs@gmail.com</p>
                    </Rounded>
                    <Rounded>
                        <p>+94761222577</p>
                    </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <Magnetic>
                            <a href='https://www.instagram.com/ashiras_journal_/' target='_blank'>Instagram</a>
                        </Magnetic>
                        <Magnetic>
                            <a href='https://www.behance.net/omasheefernando10' target='_blank'>Behance</a>
                        </Magnetic>
                        <Magnetic>
                            <a href='http://www.linkedin.com/in/ashirafernando' target='_blank'>LinkedIn</a>
                        </Magnetic>
                    </div>
                    <div>
                        <span>
                            <p className='rights'>2024 © All Rights Reserved</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
