'use client';
import styles from './HeroSection.module.scss';
import ZoomParallax from "./ZoomParallax/ZoomParallax";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function HeroSection() {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) { // Explicitly type the 'time' parameter as 'number'
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <main className={styles.main}>
            <ZoomParallax />
        </main>
    );
}
