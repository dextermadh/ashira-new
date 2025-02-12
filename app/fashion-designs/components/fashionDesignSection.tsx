"use client";
import path from 'path';
import td from '../../../public/media/freelancer-icon.webp'

import {Carousel} from "@/components/ui/carousel";
export function FashionDesignSection() {
  const slideData = [
    {
      title: "Graduate Collection",
      button: "Explore More",
      src:"/assets/FASHION_SHOOT_3/p (25).jpg",
      path:"/graduate-collection"
    },
    {
      title: "Neuromagination",
      button: "Explore More",
      src: "/assets/Neuromagination/8V8A6486.jpg",
      path:"/neuromagination"
    },

      
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
