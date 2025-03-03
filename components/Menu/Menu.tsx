'use client';

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";

// Define the menu links
const menuLinks = [
  { path: "/", label: "Home" },
  // { path: "/collaborate", label: "Collaborate" },
  { path: "/projects", label: "Projects" },
  { path: "/technical-developments", label: "Technical Developments" },
  { path: "/about", label: "About Me" },
];

const Menu: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // Set initial position for menu link items
    gsap.set(".menu-link-item-holder", { y: 75 });

    // Create GSAP timeline
    tl.current
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(
        ".menu-link-item-holder",
        {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        }
      );

    return () => {
      tl.current.kill(); // Clean up GSAP animations
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={containerRef}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link className="menu-logo1" href="/">Ashira Fernando</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link className="menu-logo1" href="/">Ashira Fernando</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>  
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="https://www.instagram.com/ashiras_journal_/" target="_blank" rel="noopener noreferrer">Instagram &#8599;</a>
              <a href="http://www.linkedin.com/in/ashirafernando" target="_blank" rel="noopener noreferrer">LinkedIn &#8599;</a>
              <a href="https://www.behance.net/omasheefernando10" target="_blank" rel="noopener noreferrer">Behance &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>ashirafernando.uni@gmail.com</p>
              <p>+94761222577</p>
            </div>
          </div>
        </div>
        {/* <div className="menu-preview">
          <p>View Showreel</p>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
