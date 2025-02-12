import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Background from '../../../public/media/SHR_2203_color.jpg';
import Background3 from "../../../public/assets/1.jpg";
import Background2 from "../../../public/assets/FASHION_SHOOT_3/p (58).jpg";
import { useScroll, useTransform, motion } from 'framer-motion';
import '@/app/about/component/about.css';

export function Description() {
    return (
        <div className='flex justify-center my-40'>
            <p className='text-[4.5vw] text-center DesText'>
                I’m an Undergraduate Fashion Design Student 
                with a strong team working attitude, passion for 
                innovation and keen interest in exploring diverse 
                career sectors within the fashion industry.
            </p>
        </div>
    );
}

export function Description1() {
    return (
        <div className='flex justify-center my-40'>
            <p className='text-[4.5vw] lowercase text-center DesText1'>
                I am eager to leverage my acquired skills and 
                undergo professional development.
            </p>
        </div>
    );
}

export function Intro() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

    return (
        <div ref={container} className='h-screen overflow-hidden'>
            <motion.div style={{ y}} className='relative h-full'>
                <Image 
                    src={Background} 
                    fill 
                    alt="Fashion Image" 
                    className='BackgroundImgAbout' 
                    priority={false} 
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
                />
            </motion.div>
        </div>
    );
}

export function Section() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
            ref={container}
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y, willChange: 'transform' }} className='relative w-full h-full'>
                    <Image 
                        src={Background3} 
                        fill 
                        alt="Background Image 3" 
                        style={{ objectFit: "cover", willChange: 'transform' }} 
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export function Section1() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
            ref={container}
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y, willChange: 'transform' }} className='relative w-full h-full'>
                    <Image 
                        src={Background} 
                        fill 
                        alt="Background Image 2" 
                        className='BackgroundImgAbout2' 
                        style={{ objectFit: "cover", willChange: 'transform' }} 
                        priority={false} 
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
                    />
                </motion.div>
            </div>
        </div>
    );
}
