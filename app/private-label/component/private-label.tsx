import React from 'react'
import Image from 'next/image';
import Background from '../../../public/assets/PNG- RGB DIigtal and Print.png'
import Background2 from "../../../public/assets/Website Required Content/Brand/Brand MOCKUPS/brown-paper-shopping-bag-mockup.png"
import Background3 from "../../../public/assets/Website Required Content/Brand/Brand MOCKUPS/clothing-abel-tag-mockup.png"
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function Description() {
    return (
        <div className='flex justify-center my-40'>
            <p className='text-[4.5vw]  text-center  DesText'>High-end Avant Garde and pret-a-porter Sri Lankan fashion label “EESAMO” is authentic for its original concepts and distinctive methods with a variety of product categories,</p>
        </div>
    )
}

export function Description1() {
  return (
      <div className='flex justify-center my-40'>
          <p className='text-[4.5vw] lowercase text-center  DesText1'>
          including formal, eveningwear, casual clothing and fashionable avant-garde collections. The company sells innovative, chic and creative clothing that combines contemporary

</p>
      </div>
  )
}
export function Description2() {
  return (
      <div className='flex justify-center my-40'>
          <p className='text-[4.5vw] lowercase text-center  DesText1'>
          including formal, eveningwear, casual clothing and fashionable avant-garde collections. The company sells innovative, chic and creative clothing that combines contemporary 
          global trends with local crafts and innovative ideas

</p>
      </div>
  )
}

export function Description3() {
  return (
      <div className='flex justify-center my-40'>
          <p className='text-[4.5vw] lowercase text-center  DesText1'>
          The Sri Lankan fashion brand is launched in 2023.
The luxury label features styles with elegance, timelessness and glamour with a modem twist and it focuses on encouraging internationally recognized styles.


</p>
      </div>
  )
}


export function Description4() {
  return (
      <div className='flex justify-center my-40'>
          <p className='text-[4.5vw] lowercase text-center  DesText1'>
          Different techniques, crafts and mediums are used in the production of silhouettes. The designs are inspired by art, architecture, environment and intangible objects.


</p>
      </div>
  )
}
export function Description5() {
  return (
      <div className='flex justify-center my-40'>
          <p className='text-[4.5vw] lowercase text-center  DesText1'>
          Each “EESAMO” piece is one-of-a-kind and exclusive, with timely wardrobe updates and functional designs to keep up
with trends.
EESAMO is retailed in Europe, Sri Lanka, Australia & USA.


</p>
      </div>
  )
}
export function Description6() {
  return (
      <div className='flex justify-center my-40'>
          <p className='text-[4.5vw] lowercase text-center  DesText1'>
          EESAMO is committed to pushing the boundaries of fashion by constantly innovating unique and creative designs.


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
        <Image src={Background} fill alt="image"  className='BackgroundImg'/>
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
          <Image src={Background2} fill alt="image" style={{objectFit: "cover"}}/>
          </motion.div>
      </div>
      </div>
  )
}

export function Section2() {
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
          <Image src={Background} fill alt="image" className='BackgroundImg'/>
          </motion.div>
      </div>
      </div>
  )
}
export function Section3() {
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
          <Image src={Background} fill alt="image" className='BackgroundImg'/>
          </motion.div>
      </div>
      </div>
  )
}
export function Section4() {
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
          <Image src={Background} fill alt="image" className='BackgroundImg'/>
          </motion.div>
      </div>
      </div>
  )
}
export function Section5() {
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
          <Image src={Background} fill alt="image" className='BackgroundImg'/>
          </motion.div>
      </div>
      </div>
  )
}
export function Section6() {
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
          <Image src={Background} fill alt="image" className='BackgroundImg'/>
          </motion.div>
      </div>
      </div>
  )
}

