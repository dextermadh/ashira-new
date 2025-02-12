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
    {
      title: "Fashion Design Portfolio",
      button: "Explore More",
      src: "https://images.unsplash.com/photo-1532053535693-4d96cfd5f529?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path:"/fashion-design-portfolio"
    },
      
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
