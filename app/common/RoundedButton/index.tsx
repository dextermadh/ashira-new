import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic/idex';
import styles from './style.module.scss';

interface IndexProps extends React.HTMLProps<HTMLDivElement> {
  backgroundColor?: string;
}

const Index: React.FC<IndexProps> = ({ children, backgroundColor = "#f6f1eb", ...attributes }) => {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = useCallback(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current?.tweenFromTo('enter', 'exit');
  }, []);

  const manageMouseLeave = useCallback(() => {
    timeoutId.current = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  }, []);

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
};

export default Index;
