"use client";

import React, { useEffect, useState } from "react";
import Gallery from './gallery';
import "../../graduate-collection/page.css";
import "./page.css";
import Image, { StaticImageData } from 'next/image';
import image1 from "../../../public/assets/FASHION_SHOOT_3/p (1).jpg";
import image2 from "../../../public/assets/FASHION_SHOOT_3/p (4).jpg";
import image3 from "../../../public/assets/FASHION_SHOOT_3/p (5).jpg";
import image4 from "../../../public/assets/FASHION_SHOOT_3/p (7).jpg";
import image5 from "../../../public/assets/FASHION_SHOOT_3/p (11).jpg";
import image6 from "../../../public/assets/FASHION_SHOOT_3/p (13).jpg";
import image7 from "../../../public/assets/FASHION_SHOOT_3/p (14).jpg";
import image8 from "../../../public/assets/FASHION_SHOOT_3/p (15).jpg";
import image9 from "../../../public/assets/FASHION_SHOOT_3/p (12).jpg";
import image10 from "../../../public/assets/FASHION_SHOOT_3/p (19).jpg";
import image11 from "../../../public/assets/FASHION_SHOOT_3/p (20).jpg";
import image12 from "../../../public/assets/FASHION_SHOOT_3/p (21).jpg";
import image13 from "../../../public/assets/FASHION_SHOOT_3/p (24).jpg";
import image15 from "../../../public/assets/FASHION_SHOOT_3/p (26).jpg";
import image16 from "../../../public/assets/FASHION_SHOOT_3/p (27).jpg";
import image17 from "../../../public/assets/FASHION_SHOOT_3/p (29).jpg";
import image18 from "../../../public/assets/FASHION_SHOOT_3/p (30).jpg";
import image19 from "../../../public/assets/FASHION_SHOOT_3/p (33).jpg";
import image20 from "../../../public/assets/FASHION_SHOOT_3/p (36).jpg";
import image21 from "../../../public/assets/FASHION_SHOOT_3/p (37).jpg";
import image22 from "../../../public/assets/FASHION_SHOOT_3/p (38).jpg";
import image23 from "../../../public/assets/FASHION_SHOOT_3/p (40).jpg";
import image24 from "../../../public/assets/FASHION_SHOOT_3/p (41).jpg";
import image25 from "../../../public/assets/FASHION_SHOOT_3/p (47).jpg";
import image26 from "../../../public/assets/FASHION_SHOOT_3/p (51).jpg";
import image27 from "../../../public/assets/FASHION_SHOOT_3/p (49).jpg";
import image28 from "../../../public/assets/FASHION_SHOOT_3/p (50).jpg";
import image29 from "../../../public/assets/FASHION_SHOOT_3/p (56).jpg";
import IntroGraduateCollectionGallery from './Gradualspacing';

// Convert StaticImageData to string URL
const getImageSrc = (image: StaticImageData) => image.src;

const projects = [
  { name: "Dyal Thak", handle1: getImageSrc(image1), handle2: getImageSrc(image2) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image2), handle2: getImageSrc(image3) },
  { name: "Mark Rammers", handle1: getImageSrc(image3), handle2: getImageSrc(image4) },
  { name: "Dyal Thak", handle1: getImageSrc(image4), handle2: getImageSrc(image5) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image5), handle2: getImageSrc(image6) },
  { name: "Mark Rammers", handle1: getImageSrc(image6), handle2: getImageSrc(image7) },
  { name: "Dyal Thak", handle1: getImageSrc(image7), handle2: getImageSrc(image8) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image9), handle2: getImageSrc(image10) },
  { name: "Mark Rammers", handle1: getImageSrc(image10), handle2: getImageSrc(image11) },
  { name: "Dyal Thak", handle1: getImageSrc(image11), handle2: getImageSrc(image12) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image12), handle2: getImageSrc(image13) },
  { name: "Mark Rammers", handle1: getImageSrc(image15), handle2: getImageSrc(image16) },
  { name: "Dyal Thak", handle1: getImageSrc(image16), handle2: getImageSrc(image17) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image17), handle2: getImageSrc(image18) },
  { name: "Mark Rammers", handle1: getImageSrc(image18), handle2: getImageSrc(image19) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image19), handle2: getImageSrc(image20) },
  { name: "Mark Rammers", handle1: getImageSrc(image20), handle2: getImageSrc(image21) },
  { name: "Dyal Thak", handle1: getImageSrc(image21), handle2: getImageSrc(image22) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image22), handle2: getImageSrc(image23) },
  { name: "Mark Rammers", handle1: getImageSrc(image23), handle2: getImageSrc(image24) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image24), handle2: getImageSrc(image25) },
  { name: "Mark Rammers", handle1: getImageSrc(image25), handle2: getImageSrc(image26) },
  { name: "Dyal Thak", handle1: getImageSrc(image26), handle2: getImageSrc(image27) },
  { name: "Leidinger Matthias", handle1: getImageSrc(image27), handle2: getImageSrc(image28) },
  { name: "Mark Rammers", handle1: getImageSrc(image28), handle2: getImageSrc(image29) },
  { name: "Mark Rammers", handle1: getImageSrc(image29), handle2: getImageSrc(image29) },
];

export default function Home() {
  // Use state to store mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup style on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - window.innerWidth / 2 * 0.25;
    const targetY = clientY - window.innerHeight / 2 * 0.30;
    setMousePosition({ x: targetX, y: targetY });
  };

  return (
    <div className="page-container">
      <div className="IntroContainer">
        <IntroGraduateCollectionGallery />
      </div>
      
      <main onMouseMove={mouseMove}>
        {projects.map(({ handle1, handle2 }, i) => (
          <Gallery
            key={i}
            mousePosition={mousePosition} // Pass the state directly
            handle1={handle1}
            handle2={handle2}
          />
        ))}
      </main>
    </div>
  );
}
