'use client';
import Gallery from './gallery';
import "../../graduate-collection/page.css"
import "./page.css"
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import { useSpring } from 'framer-motion';
import image1 from "../../../public/assets/Neuromagination/8V8A6070.jpg"
import image2 from "../../../public/assets/Neuromagination/8V8A6102.jpg"
import image3 from "../../../public/assets/Neuromagination/8V8A6080.jpg"
import image4 from "../../../public/assets/Neuromagination/8V8A6125.jpg"
import image5 from "../../../public/assets/Neuromagination/8V8A6143.jpg"
import image6 from "../../../public/assets/Neuromagination/8V8A6150.jpg"
import image7 from "../../../public/assets/Neuromagination/8V8A6173.jpg"
import image8 from "../../../public/assets/Neuromagination/8V8A6183.jpg"
import image9 from "../../../public/assets/Neuromagination/8V8A6184.jpg"
import image10 from "../../../public/assets/Neuromagination/8V8A6206.jpg"
import image11 from "../../../public/assets/Neuromagination/8V8A6230.jpg"
import image12 from "../../../public/assets/Neuromagination/8V8A6252.jpg"
import image13 from "../../../public/assets/Neuromagination/8V8A6381.jpg"
import image14 from "../../../public/assets/Neuromagination/8V8A6389.jpg"
import image15 from "../../../public/assets/Neuromagination/8V8A6448.jpg"
import image16 from "../../../public/assets/Neuromagination/8V8A6561.jpg"
import image17 from "../../../public/assets/Neuromagination/8V8A6565.jpg"
import image18 from "../../../public/assets/Neuromagination/8V8A6572.jpg"
import image19 from "../../../public/assets/Neuromagination/8V8A6600.jpg"
import { GradualSpacingDemo } from '@/components/GradualSpacing';
import { GradualSpacingDemo1 } from '@/app/projects/components/GradualSpacing';
import { GradualSpacingDemo5, IntroNeuromaginationGallery } from './Gradualspacing';


const projects = [
  {
    name: "Ashira",
    handle1: image1,
    handle2: image2
  },
  {
    name: "Ashira",
    handle1: image2,
    handle2: image3
  },
  {
    name: "Ashira",
    handle1: image3,
    handle2: image4
  },
  {
    name: "Ashira",
    handle1: image4,
    handle2: image5
  },
  {
    name: "Ashira",
    handle1: image5,
    handle2: image6
  },
  {
    name: "Ashira",
    handle1: image6,
    handle2: image7
  },
  {
    name: "Ashira",
    handle1: image7,
    handle2: image8
  },
  {
    name: "Ashira",
    handle1: image9,
    handle2: image10
  },
  {
    name: "Ashira",
    handle1: image10,
    handle2: image11
  },
  {
    name: "Ashira",
    handle1: image11,
    handle2: image12
  },
  {
    name: "Ashira",
    handle1: image12,
    handle2: image13
  },
  {
    name: "Ashira",
    handle1: image13,
    handle2: image14
  },
  {
    name: "Ashira",
    handle1: image14,
    handle2: image15
  },
  {
    name: "Ashira",
    handle1: image15,
    handle2: image16
  },
  {
    name: "Ashira",
    handle1: image16,
    handle2: image17
  },
  {
    name: "Ashira",
    handle1: image17,
    handle2: image18
  },
  {
    name: "Ashira",
    handle1: image18,
    handle2: image19
  },
]

export default function Home() {

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  return (
    <div className="">
    <IntroNeuromaginationGallery />
    <main onMouseMove={mouseMove}>
      {
        projects.map( ({handle1,handle2}, i) => {
          return <Gallery mousePosition={mousePosition} handle1={handle1} handle2={handle2} key={i}/>
        })
      }
    </main>
    </div>
  )
}