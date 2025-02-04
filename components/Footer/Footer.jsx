"use client"

import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../app/common/RoundedButton/index';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from "../../app/common/Magnetic/idex";
import image1 from "../../public/assets/FASHION_SHOOT_3/p (58).jpg";
import Link from 'next/link';
import SectionFreelancer from '../SectionFreelancer/SectionFreelancer';

export default function Footer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <div className={styles.imageContact}>
                        <span>
                            <div className={styles.imageContainer}>
                                <Image className='image'
                                    fill={true}
                                    alt={"image"}
                                    src={image1}
                                    priority
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
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <p>eesamo.designs@gmail.com</p>
                    </Rounded>
                    <Rounded>
                        <p>+94761222577</p>
                    </Rounded>
                </div>
                <div className='m-1 mt-60 mb-64 md:m-40 md:mb-80'>
                    <SectionFreelancer />
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
                            <p className='rights'>2025 © All Rights Reserved</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
