import React from 'react'
import Image from 'next/image';
import Background from '../../../public/assets/8V8A6294.jpg'
import Background3 from "../../../public/assets/1.jpg"
import Background2 from "../../../public/assets/FASHION_SHOOT_3/p (58).png"
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function Description() {
    return (
        <div className='flex justify-center my-40'>
            <p className='text-[4.5vw]  text-center  DesText'>I’m an Undergraduate Fashion Design Student 
with a strong team working attitude, passion for 
innovation and keen interest in exploring diverse 
career sectors within the fashion industry</p></div>
    )
}

export function Description1() {
  return (
      <div className='flex justify-center my-40'>
          <p className='text-[4.5vw] lowercase text-center  DesText1'>
          I am eager to leverage my acquired skills and 
          undergo professional developments.
</p>
      </div>
  )
}

export function Intro() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div style={{y}} className='relative h-full'>
        <Image src={Background} fill alt="image"  className='BackgroundImgAbout'/>
      </motion.div>
    </div>
  )
}


export function Section() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
      <div
      ref={container} 
      className='relative flex items-center justify-center h-screen overflow-hidden'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
      <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
          <motion.div style={{y}} className='relative w-full h-full'>
          <Image src={Background3} fill alt="image" style={{objectFit: "cover"}}/>
          </motion.div>
      </div>
      </div>
  )
}

export function Section1() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
      <div
      ref={container} 
      className='relative flex items-center justify-center h-screen overflow-hidden'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
      <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
          <motion.div style={{y}} className='relative w-full h-full'>
          <Image src={Background2} fill alt="image" className='BackgroundImgAbout1'/>
          </motion.div>
      </div>
      </div>
  )
}
