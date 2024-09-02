'use client';
import { useEffect, Suspense, lazy } from 'react';
import './page.css';
import Link from 'next/link';
import IntroGraduateCollection from './components/GradualSpacing';
import Card from '@/components/Card/Card';


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

  return (
    <div>
        <IntroGraduateCollection />
        <div className="containerGG">
          <div className="page-contentGG">
            <Link href="graduate-collection/portfolio" passHref>
              <Card imageSrc='/assets/FASHION_SHOOT_3/p (25).jpg' text='Portfolio'/>
            </Link>
            <Link href="graduate-collection/look-book" passHref>
              <Card imageSrc='/assets/FASHION_SHOOT_3/p (45).jpg' text='Lookbook'/>
            </Link>
            <Link href="graduate-collection/gallery" passHref>
              <Card imageSrc='/assets/FASHION_SHOOT_3/p (54).jpg' text='Gallery'/>
            </Link>
          </div>
        </div>
    </div>
  );
}
