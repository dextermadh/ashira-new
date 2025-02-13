'use client';

import { useEffect, useState, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Gallery from './gallery';
import "../../graduate-collection/page.css";
import "./page.css";
import image1 from "../../../public/assets/Neuromagination/8V8A6070.jpg";
import image2 from "../../../public/assets/Neuromagination/8V8A6102.jpg";
import image3 from "../../../public/assets/Neuromagination/8V8A6080.jpg";
import image4 from "../../../public/assets/Neuromagination/8V8A6125.jpg";
import image5 from "../../../public/assets/Neuromagination/8V8A6143.jpg";
import image6 from "../../../public/assets/Neuromagination/8V8A6150.jpg";
import image7 from "../../../public/assets/Neuromagination/8V8A6173.jpg";
import image8 from "../../../public/assets/Neuromagination/8V8A6183.jpg";
import image9 from "../../../public/assets/Neuromagination/8V8A6184.jpg";
import image10 from "../../../public/assets/Neuromagination/8V8A6206.jpg";
import image11 from "../../../public/assets/Neuromagination/8V8A6230.jpg";
import image12 from "../../../public/assets/Neuromagination/8V8A6252.jpg";
import image13 from "../../../public/assets/Neuromagination/8V8A6381.jpg";
import image14 from "../../../public/assets/Neuromagination/8V8A6389.jpg";
import image15 from "../../../public/assets/Neuromagination/8V8A6448.jpg";
import image16 from "../../../public/assets/Neuromagination/8V8A6561.jpg";
import image17 from "../../../public/assets/Neuromagination/8V8A6565.jpg";
import image18 from "../../../public/assets/Neuromagination/8V8A6572.jpg";
import image19 from "../../../public/assets/Neuromagination/8V8A6600.jpg";

import IntroNeuromaginationGallery from './Gradualspacing';

const getImageSrc = (image: StaticImageData) => image.src;

const projects = [
  { name: "Ashira", handle1: getImageSrc(image1), handle2: getImageSrc(image2) },
  { name: "Ashira", handle1: getImageSrc(image2), handle2: getImageSrc(image3) },
  { name: "Ashira", handle1: getImageSrc(image3), handle2: getImageSrc(image4) },
  { name: "Ashira", handle1: getImageSrc(image4), handle2: getImageSrc(image5) },
  { name: "Ashira", handle1: getImageSrc(image5), handle2: getImageSrc(image6) },
  { name: "Ashira", handle1: getImageSrc(image6), handle2: getImageSrc(image7) },
  { name: "Ashira", handle1: getImageSrc(image7), handle2: getImageSrc(image8) },
  { name: "Ashira", handle1: getImageSrc(image9), handle2: getImageSrc(image10) },
  { name: "Ashira", handle1: getImageSrc(image10), handle2: getImageSrc(image11) },
  { name: "Ashira", handle1: getImageSrc(image11), handle2: getImageSrc(image12) },
  { name: "Ashira", handle1: getImageSrc(image12), handle2: getImageSrc(image13) },
  { name: "Ashira", handle1: getImageSrc(image13), handle2: getImageSrc(image14) },
  { name: "Ashira", handle1: getImageSrc(image14), handle2: getImageSrc(image15) },
  { name: "Ashira", handle1: getImageSrc(image15), handle2: getImageSrc(image16) },
  { name: "Ashira", handle1: getImageSrc(image16), handle2: getImageSrc(image17) },
  { name: "Ashira", handle1: getImageSrc(image17), handle2: getImageSrc(image18) },
  { name: "Ashira", handle1: getImageSrc(image18), handle2: getImageSrc(image19) },
];

export default function Home() {
  useEffect(() => {
    // Enable smooth scrolling using native CSS
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Clean up on component unmount
    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.scrollBehavior = '';
      }
    };
  }, []);

  // Throttle mouseMove to improve performance
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: clientX - window.innerWidth / 2 * 0.25,
      y: clientY - window.innerHeight / 2 * 0.30
    });
  }, []);

  return (
    <div className="page-container">
      <div className='mt-44 md:mt-60'>
      <IntroNeuromaginationGallery />
      </div>
      <div className='mt-20 md:mt-32'>
      <main onMouseMove={mouseMove}>
        {projects.map(({ handle1, handle2 }, i) => (
          <Gallery
            key={i}
            mousePosition={mousePosition}
            handle1={handle1}
            handle2={handle2}
          />
        ))}
      </main>
      </div>
    </div>
  );
}
