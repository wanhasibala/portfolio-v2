"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const slider1 = [
    {
        color: "#e3e5e7",
        src: "2.webp"
    },
    {
        color: "#d6d7dc",
        src: "1.webp"
    },
    {
        color: "#e3e3e3",
        src: "7.webp"
    },
    {
        color: "#21242b",
        src: "3.webp"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "8.webp"
    },
    {
        color: "#e5e0e1",
        src: "10.webp"
    },
    {
        color: "#d7d4cf",
        src: "11.webp"
    },
    {
        color: "#e1dad6",
        src: "12.webp"
    }
]

const SlidingImage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  return (
    <div ref={container} className="flex flex-col gap-[3vw] relative mt-40 z-1">
      <motion.div style={{ x: x1 }} className="flex relative gap-[3vw] w-[120vw] -left-[10vw]">
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="w-1/4 h-[20vw] flex items-center justify-center "
              style={{ backgroundColor: project.color }}
            >
              <div className="relative w-4/5 h-4/5">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/${project.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className="flex relative gap-[3vw] w-[120vw] -left-[10vw]">
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-1/4 h-[20vw] flex items-center justify-center "
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="relative w-4/5 h-4/5">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/${project.src}`}
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SlidingImage;
