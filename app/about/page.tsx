"use client";
import React, { useRef } from "react";
import "./brand.css";
import {
  Description,
  Description1,
  Intro,
  Section,
  Section1,
} from "./component/about";
import Image from "next/image";
import image from "../../public/media/retouch_2025021200222027.jpg";
import image2 from "../../public/media/retouch_2025021200203872.jpg";
import image4 from "../../public/media/premium_photo-1701180091415-3bbd731ddcf1.avif";
import { motion, useScroll, useTransform } from "framer-motion";

const Page: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Fade-in effect for sections
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  return (
    <div className="page-container overflow-hidden">
      <div className="content md:m-22 m-5 rounded-[50px] flex flex-row mt-[10vh] bg-gray-900 bg-opacity-0 md:h-[215vh] relative">
        <div className="text-white flex flex-row md:m-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-10 p-5 md:p-10 "
          >
            {/* Hero Section */}
            <motion.div className="flex flex-col gap-10 relative md:m-3 ">
              <div className="md:text-4xl flex md:flex-col flex-col gap-5">
                <div className="md:text-[100px] text-4xl flex flex-col bg-gray-900 bg-opacity-[70%] md:leading-[15vh] rounded-[50px] p-10">
                  <span className="md:leading-[15vh] leading-[8vh]">
                    HI, I&apos;m
                  </span>{" "}
                  <mark className="bg-orange-200 rounded-[20px] p-3">
                    Ashira Fernando
                  </mark>
                </div>
                <span className="text-xl md:text-4xl italic bg-gray-900 bg-opacity-[70%] p-10 rounded-[50px]">
                  Fashion Designer, Illustrator and Stylist
                </span>
              </div>
              <Image
                src={image}
                alt="me"
                className="bg-gray-900 bg-opacity-[70%] p-10 md:h-[95vh] md:w-[45vw] w-[200vw] h-[45vh] object-cover object-center rounded-[50px] z-50 hidden md:flex"
              />
            </motion.div>

            {/* About Section */}
            <motion.div className="text-2xl flex md:flex-col flex-col gap-10">
              <Image
                src={image2}
                alt=""
                className="md:h-[90vh] md:w-[100vw] h-[40vh] object-cover object-[25%_05%] bg-opacity-[70%] bg-gray-900 p-10 rounded-[50px]"
              />
              <div className="flex flex-col gap-10">
                <div className="flex flex-col bg-gray-900 bg-opacity-[70%] p-10 gap-3 rounded-[50px]">
                  <span>
                    With an eye for innovation and a passion for storytelling
                    through design,
                  </span>
                  <mark className="bg-pink-200 p-2 rounded-md">
                    I specialize in fashion design, tech packs, fashion
                    illustration, and surface pattern design.
                  </mark>
                  <span>
                    My work is a fusion of creativity and precision,
                    transforming ideas into visually compelling and technically
                    flawless garments.
                  </span>
                </div>
                <div className="bg-gray-900 bg-opacity-[70%] p-10 rounded-[50px] flex flex-col gap-3">
                  <mark className="bg-green-200 p-1 rounded-md">
                    Every design I create is a reflection of originality,
                    blending high-end glamour with modern aesthetics.
                  </mark>
                  <span>
                    Whether it&apos;s crafting breathtaking evening wear,
                    conceptualizing unique prints, or curating brand identities,
                  </span>
                  <mark className="bg-blue-200 p-1 rounded-md">
                    I bring artistry and expertise to every project. One stitch,
                    sketch, and concept at a time.
                  </mark>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
