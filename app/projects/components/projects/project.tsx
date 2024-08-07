'use client';
import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

// Define the types for the props
interface ProjectLinkProps {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
  link: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ index, title, setModal, link }) => {
  return (
    <Link
      href={link}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design and Development</p>
    </Link>
  );
};

export default ProjectLink;
