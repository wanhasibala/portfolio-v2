"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface Project {
  src: string;
  color: string;
}
const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
export default function Modal({
  modal,
  projects,
  href,
}: {
  modal: any;
  projects: Project[];
  href: string;
}) {
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);

      yMoveContainer(pageY);

      xMoveCursor(pageX);

      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);

      yMoveCursorLabel(pageY);
    });
  }, []);
  const { active, index } = modal;
  return (
    <div className="lg:block hidden">
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute duration-500"
        >
          {/* @ts-ignore */}
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="h-full w-full flex items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img
                  src={src}
                  width={300}
                  height={0}
                  alt="image"
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="w-[80px] h-[80px] rounded-full bg-black color-white absolute z-[1] flex items-center justify-center text-[14px] font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="w-[80px] h-[80px] rounded-full bg-black color-white absolute z-[1] flex items-center justify-center text-[14px] font-light pointer-events-none bg-transparent text-white"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </div>
  );
}
