'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from "../public/assets/Brand.png";
import './velocityscroll.css';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef } from 'react';

export default function VelocityScroll() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });



  return (
    <main className="overflow-hidden">
      <div className='h-[10vh]'/>
      <div ref={container}>
        <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress}/>
        <Slide src={Picture1} direction={'right'} left={"-25%"} progress={scrollYProgress}/>
        <Slide src={Picture1} direction={'left'} left={"-75%"} progress={scrollYProgress}/>
      </div>
      <div className='h-[10vh]' />
    </main>
  );
}

interface SlideProps {
  src: StaticImageData;
  direction: 'left' | 'right';
  left: string;
  progress: any;
}

const Slide = (props: SlideProps) => {
  const directionMultiplier = props.direction === 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * directionMultiplier, -150 * directionMultiplier]);

  return (
    <motion.div style={{ x: translateX, left: props.left }} className="relative flex whitespace-nowrap">
      <Phrase src={props.src} />
    </motion.div>
  );
}

interface PhraseProps {
  src: StaticImageData;
}

const Phrase = ({ src }: PhraseProps) => {
  return (
    <div className="cotainerV">
      <div className={'px-5 flex gap-5 items-center '}>
        <TextImagePair src={src} />
        <TextImagePair src={src} />
        <TextImagePair src={src} />
        <TextImagePair src={src} />
        <TextImagePair src={src} />
        <TextImagePair src={src} />
      </div>
    </div>
  );
}

const TextImagePair = ({ src }: PhraseProps) => {
  return (
    <>
      <p className='text-[7.5vw] text'>- FASHION DESIGNER</p>
    </>
  );
}
