'use client';
import styles from "./page.module.css"
import { useState } from 'react';
import Modal from './modal/modal';
import ProjectLink from "./projects/project";

const projects = [
  {
    title: "Graduate Collection",
    src: "/assets/GHover.png",
    color: "#000000",
    link: '/graduate-collection'
  },
  {
    title: "Neuromagination",
    src: "/assets/NHover.png",
    color: "#8C8C8C",
        link: '/neuromagination'
  },
]

export function ProjectSection() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <ProjectLink index={index} title={project.title} link={project.link} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}

const projectsMain = [
  {
    title: "Graduate Collection",
    src: "/assets/GHover.png",
    color: "#000000",
    link: '/graduate-collection'
  },
  {
    title: "Neuromagination",
    src: "/assets/NHover.png",
    color: "#8C8C8C",
        link: '/neuromagination'
  },
  {
    title: "Technical Developments",
    src: "/assets/THover.png",
    color: "whitesmoke",
        link: '/technical-developments'
  },
]

export function ProjectSectionMain() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projectsMain.map( (project, index) => {
          return <ProjectLink index={index} title={project.title} link={project.link} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projectsMain}/>
  </main>
  )
}