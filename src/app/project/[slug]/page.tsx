"use client";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/data/project";
import Footer from "@/app/(home)/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import MagneticEffect from "@/ common/Magnetic";

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

const Page = ({ params }: { params: { slug: string } }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    let xMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [params.slug]);

  const project = projects.find((project) => project.slug === params.slug);
  const groupSrc = project?.src_body
    ? [project?.src, ...project?.src_body].filter(Boolean)
    : project?.src
      ? [project?.src]
      : [];
  const index = projects.findIndex((project) => project.slug === params.slug);
  const nextProjectIndex = index + 1 < projects.length ? index + 1 : 0;
  const nextProject = projects[nextProjectIndex];

  return (
    <>
      <div
        key={project?.slug}
        className="pt-28 sm:pt-32 md:pt-36 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto flex flex-col gap-16 text-neutral-900 dark:text-white"
      >
        {/* Main Grid: Sticky Left Details + Scrollable Right Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full relative">
          {/* Sticky Left Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 lg:self-start flex flex-col w-full z-10">
            {/* Header: Project Name & Type */}
            <div className="flex flex-col w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {project?.title || "Project Name"}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-600 dark:text-neutral-300 mt-2">
                {project?.subheading || "Project type"}
              </h2>
            </div>

            {/* Live Preview Button */}
            {project?.href && (
              <div className="flex w-full my-6 pr-2 sm:pr-6">
                <MagneticEffect>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-[#676B55] hover:bg-[#565a45] text-white flex items-center justify-center font-medium text-sm sm:text-base gap-2 hover:scale-105 transition-all shadow-xl active:scale-95 group text-center cursor-pointer"
                  >
                    <span>Live Preview</span>
                    <div className="relative overflow-hidden w-5 h-5 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 ease-out group-hover:translate-x-[160%] group-hover:-translate-y-[160%]" />
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white absolute transition-transform duration-300 ease-out -translate-x-[160%] translate-y-[160%] group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </a>
                </MagneticEffect>
              </div>
            )}

            {/* 2-Column Structured Case Study Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 w-full mt-2">
              {/* Left Sub-column */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-2.5">
                    Overview
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                    {project?.overview ||
                      project?.description ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-2.5">
                    Issue
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                    {project?.issue ||
                      project?.bottleneckHook ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-2.5">
                    Design Approach
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                    {project?.designApproach ||
                      project?.detail ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                  </p>
                </div>
              </div>

              {/* Right Sub-column */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-2.5">
                    Material
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify mb-3">
                    {project?.material ||
                      (project?.technologies
                        ? `Developed and engineered with modern web standards: ${project.technologies.join(", ")}.`
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
                  </p>
                  {project?.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 font-mono text-neutral-800 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-2.5">
                    Conclussion
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                    {project?.conclusion ||
                      "Successfully deployed the production environment, securing high response reliability and delivering an intuitive, polished digital user experience."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrollable Stack of Project Images */}
          <div className="lg:col-span-6 flex flex-col gap-8 md:gap-12 w-full">
            {/* Primary Hero Mockup */}
            <div className="relative w-full ">
              <img
                src={project?.src || "/vivre-header.webp"}
                alt={project?.title || "Project Preview"}
                className="w-full h-auto object-contain "
              />
            </div>

            {/* Extended Showcase Images (Scrolls alongside the sticky left column) */}
            {groupSrc.length > 1 &&
              groupSrc.slice(1).map((src, index) => (
                <div
                  key={`gallery-${index}`}
                  className="w-full  overflow-hidden    "
                >
                  <img
                    src={src}
                    className="w-full h-auto object-cover "
                    alt={`${project?.title || "Project"} showcase ${index + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Next Project Section (After images finish scrolling) */}
        {nextProject && (
          <div className="mt-24 w-full flex flex-col items-center">
            <h3 className="text-lg uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-mono mb-6">
              Next Project
            </h3>
            <Link
              key={nextProject.slug}
              href={`/project/${nextProject.slug}`}
              className="rounded-2xl flex flex-col items-center group relative w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={cn(
                  "text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight z-[1] transition-all ease-in-out duration-300 text-center",
                  isHovered && "opacity-30 scale-95",
                )}
              >
                {nextProject?.title}
              </div>
              <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl lg:-mt-24 mt-6 z-[2]">
                <motion.img
                  src={nextProject?.src}
                  alt={nextProject?.title}
                  className="w-full object-cover aspect-[16/10] rounded-2xl shadow-xl transform transition-all duration-500"
                  initial={
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? { y: 200 }
                      : { y: 0 }
                  }
                  animate={
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? { y: 200 }
                      : {}
                  }
                  whileHover={
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? { y: 80 }
                      : {}
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </Link>
          </div>
        )}

        {/* Floating Custom Cursor */}
        <div className="lg:block hidden">
          <motion.div
            ref={cursorRef}
            className="w-[80px] h-[80px] rounded-full bg-black dark:bg-white text-white dark:text-black absolute z-[4] flex items-center justify-center text-[14px] font-light pointer-events-none"
            variants={scaleAnimation}
            initial="initial"
            animate={isHovered ? "enter" : "closed"}
          />
          <motion.div
            ref={cursorLabelRef}
            className="w-[80px] h-[80px] rounded-full bg-transparent text-white dark:text-black absolute z-[4] flex items-center justify-center text-[14px] font-medium pointer-events-none"
            variants={scaleAnimation}
            initial="initial"
            animate={isHovered ? "enter" : "closed"}
          >
            View
          </motion.div>
        </div>
      </div>

      <div className="h-[20vh]" />
      <Footer />
    </>
  );
};

export default Page;
