'use client';
import styles from './HeroSection.module.scss';
import ZoomParallax from "./ZoomParallax/ZoomParallax";
import { useEffect } from 'react';

export default function HeroSection() {


    return (
        <main className={styles.main}>
            <ZoomParallax />
        </main>
    );
}
