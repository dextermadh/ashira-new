import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

interface IndexProps {
  children: React.ReactElement;
}

const Index: React.FC<IndexProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    // Capture the ref value in a variable
    const magneticElement = magnetic.current;

    const xTo = gsap.quickTo(magneticElement, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
    const yTo = gsap.quickTo(magneticElement, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magneticElement.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magneticElement.addEventListener("mousemove", handleMouseMove);
    magneticElement.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners on component unmount
    return () => {
      magneticElement.removeEventListener("mousemove", handleMouseMove);
      magneticElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

export default Index;
