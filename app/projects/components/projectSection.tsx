"use client";
import path from 'path';
import td from '../../../public/media/freelancer-icon.webp'

import {Carousel} from "@/components/ui/carousel";
export function ProjectSection() {
  const slideData = [
    {
      title: "Technical Developments",
      button: "Explore More",
      src:"https://plus.unsplash.com/premium_vector-1714148691921-ad3191c85d5d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path:"/technical-developments"
    },
    {
      title: "Fashion Design",
      button: "Explore More",
      src: "https://images.unsplash.com/photo-1557777586-f6682739fcf3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path:"/fashion-designs"
    },
    {
      title: "Fashion Styling Portfolio",
      button: "Explore More",
      src: "https://images.unsplash.com/photo-1541941702428-22609a10cb9e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path:"/fashion-styling-portfolio"
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
