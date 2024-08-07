'use client';
import Gallery from './gallery';
import "../../graduate-collection/page.css"
import "./page.css"
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import { useSpring } from 'framer-motion';
import image1 from "../../../public/assets/FASHION_SHOOT_3/p (1).jpg"
import image2 from "../../../public/assets/FASHION_SHOOT_3/p (4).jpg"
import image3 from "../../../public/assets/FASHION_SHOOT_3/p (5).jpg"
import image4 from "../../../public/assets/FASHION_SHOOT_3/p (7).jpg"
import image5 from "../../../public/assets/FASHION_SHOOT_3/p (11).jpg"
import image6 from "../../../public/assets/FASHION_SHOOT_3/p (13).jpg"
import image7 from "../../../public/assets/FASHION_SHOOT_3/p (14).jpg"
import image8 from "../../../public/assets/FASHION_SHOOT_3/p (15).jpg"
import image9 from "../../../public/assets/FASHION_SHOOT_3/p (12).jpg"
import image10 from "../../../public/assets/FASHION_SHOOT_3/p (19).jpg"
import image11 from "../../../public/assets/FASHION_SHOOT_3/p (20).jpg"
import image12 from "../../../public/assets/FASHION_SHOOT_3/p (21).jpg"
import image13 from "../../../public/assets/FASHION_SHOOT_3/p (24).jpg"
import image14 from "../../../public/assets/FASHION_SHOOT_3/p (25).jpg"
import image15 from "../../../public/assets/FASHION_SHOOT_3/p (26).jpg"
import image16 from "../../../public/assets/FASHION_SHOOT_3/p (27).jpg"
import image17 from "../../../public/assets/FASHION_SHOOT_3/p (29).jpg"
import image18 from "../../../public/assets/FASHION_SHOOT_3/p (30).jpg"
import image19 from "../../../public/assets/FASHION_SHOOT_3/p (33).jpg"
import image20 from "../../../public/assets/FASHION_SHOOT_3/p (36).jpg"
import image21 from "../../../public/assets/FASHION_SHOOT_3/p (37).jpg"
import image22 from "../../../public/assets/FASHION_SHOOT_3/p (38).jpg"
import image23 from "../../../public/assets/FASHION_SHOOT_3/p (40).jpg"
import image24 from "../../../public/assets/FASHION_SHOOT_3/p (41).jpg"
import image25 from "../../../public/assets/FASHION_SHOOT_3/p (47).jpg"
import image26 from "../../../public/assets/FASHION_SHOOT_3/p (51).jpg"
import image27 from "../../../public/assets/FASHION_SHOOT_3/p (49).jpg"
import image28 from "../../../public/assets/FASHION_SHOOT_3/p (50).jpg"
import image29 from "../../../public/assets/FASHION_SHOOT_3/p (56).jpg"
import { GradualSpacingDemo } from '@/components/GradualSpacing';
import { GradualSpacingDemo1 } from '@/app/projects/components/GradualSpacing';
import { GradualSpacingDemo5, IntroGraduateCollectionGallery } from './Gradualspacing';


const projects = [
  {
    name: "Dyal Thak",
    handle1: image1,
    handle2: image2
  },
  {
    name: "Leidinger Matthias",
    handle1: image2,
    handle2: image3
  },
  {
    name: "Mark Rammers",
    handle1: image3,
    handle2: image4
  },
  {
    name: "Dyal Thak",
    handle1: image4,
    handle2: image5
  },
  {
    name: "Leidinger Matthias",
    handle1: image5,
    handle2: image6
  },
  {
    name: "Mark Rammers",
    handle1: image6,
    handle2: image7
  },
  {
    name: "Dyal Thak",
    handle1: image7,
    handle2: image8
  },
  {
    name: "Leidinger Matthias",
    handle1: image9,
    handle2: image10
  },
  {
    name: "Mark Rammers",
    handle1: image10,
    handle2: image11
  },
  {
    name: "Dyal Thak",
    handle1: image11,
    handle2: image12
  },
  {
    name: "Leidinger Matthias",
    handle1: image12,
    handle2: image13
  },

  {
    name: "Mark Rammers",
    handle1: image15,
    handle2: image16
  },
  {
    name: "Dyal Thak",
    handle1: image16,
    handle2: image17
  },
  {
    name: "Leidinger Matthias",
    handle1: image17,
    handle2: image18
  },
  {
    name: "Mark Rammers",
    handle1: image18,
    handle2: image19
  },
  {
    name: "Leidinger Matthias",
    handle1: image19,
    handle2: image20
  },
  {
    name: "Mark Rammers",
    handle1: image20,
    handle2: image21
  },
  {
    name: "Dyal Thak",
    handle1: image21,
    handle2: image22
  },
  {
    name: "Leidinger Matthias",
    handle1: image22,
    handle2: image23
  },
  {
    name: "Mark Rammers",
    handle1: image23,
    handle2: image24
  },
  {
    name: "Leidinger Matthias",
    handle1: image24,
    handle2: image25
  },
  {
    name: "Mark Rammers",
    handle1: image25,
    handle2: image26
  },
  {
    name: "Dyal Thak",
    handle1: image26,
    handle2: image27
  },
  {
    name: "Leidinger Matthias",
    handle1: image27,
    handle2: image28
  },
  {
    name: "Mark Rammers",
    handle1: image28,
    handle2: image29
  },
  {
    name: "Mark Rammers",
    handle1: image29,
    handle2: image29
  }
]

export default function Home() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  };

  useEffect(() => {
    // Initialize Lenis with configuration
    const lenis = new Lenis({
      duration: 1.2, // Duration of the smooth scrolling
      easing: (t: number) => t // Linear easing function for smooth scrolling
    });

    // Animation frame update
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // Start animation frame loop
    const animationFrameId = requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <div className="page-container">
      <IntroGraduateCollectionGallery />
      <main onMouseMove={mouseMove}>
        {projects.map(({ handle1, handle2 }, i) => (
          <Gallery mousePosition={mousePosition} handle1={handle1} handle2={handle2} key={i} />
        ))}
      </main>
    </div>
  );
}