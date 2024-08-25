'use client';

import { useEffect } from 'react';
import './page.css';
import Link from 'next/link';
import IntroNeuromagination from './components/GradualSpacing';
import Card from '@/components/Card/Card';

export default function Home() {
  // Enable smooth scrolling using native CSS
  useEffect(() => {
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

  return (
    <div>
      <IntroNeuromagination />
      <div className="containerNeuro">
        <div className="page-contentNeuro">
          <Link href="neuromagination/portfolio" passHref>
            <Card 
              imageSrc='/assets/Neuromagination/8V8A6486.jpg' 
              text='Portfolio'
            />
          </Link>
          <Link href="neuromagination/gallery" passHref>
            <Card 
              imageSrc='/assets/Neuromagination/8V8A6198.jpg' 
              text='Gallery'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
