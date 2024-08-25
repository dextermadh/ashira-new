'use client';
import { useEffect } from 'react';
import './page.css';

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
    <div className="iframe-container">
      <iframe
        allowFullScreen
        className="iframe1"
        src="https://heyzine.com/flip-book/e895ae4bf4.html"
      />
    </div>
  );
}
