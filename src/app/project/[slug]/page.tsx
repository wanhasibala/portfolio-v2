"use client";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/data/project";
import Image from "next/image";
import Footer from "@/app/(home)/Footer";
import { ArrowUpRight } from "lucide-react";
import MagneticEffect from "@/ common/Magnetic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { cn } from "@/lib/utils";

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

  const project = projects.find((project) => project.slug === params.slug);
  const otherProjects = projects.filter(
    (project) => project.slug !== params.slug
  );
  const groupSrc = project?.src_body
    ? [project?.src, ...project?.src_body]
    : [project?.src];
  const index = projects.findIndex((project) => project.slug === params.slug);
  const nextProjectIndex = index + 1 < projects.length ? index + 1 : 0;
  const nextProject = projects[nextProjectIndex];
  const pathname = usePathname();

  let imageCount = 0;
  project?.src_body?.forEach(() => {
    imageCount++;
  });
  return (
    <>
      <div
        key={project?.slug}
        className="pt-40 px-6 md:px-12 lg:px-20 flex flex-col gap-10 items-center "
      >
        <div className="flex flex-col w-full">
          <h1 className="text-heading-1 font-semibold">{project?.title}</h1>
          <h2 className="text-2xl font-medium">{project?.subheading}</h2>
          <div className="flex mt-4 text-xs   gap-4">
            {project?.technologies.map((text, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#BE6B5C] border px-4 py-1 rounded-full"
                >
                  {text}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative w-full mt-20 ">
          <img
            src={project?.src}
            className="w-full aspect-video object-cover rounded-xl md:rounded-3xl border border-neutral-200 dark:border-neutral-800"
            alt="header image"
          />
        </div>

        {/* Deep Case Study Blueprint Section */}
        <div className="w-full max-w-4xl mt-12 grid grid-cols-1 gap-8">
          
          {/* 1. System Bottleneck Hook Card */}
          <div className="border border-red-200 dark:border-red-950/60 bg-red-50/50 dark:bg-red-950/10 p-6 rounded-2xl">
            <h3 className="text-sm font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-bold mb-3 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              System Bottleneck Hook
            </h3>
            <p className="text-neutral-800 dark:text-neutral-300 font-medium text-base md:text-lg leading-relaxed">
              {project?.bottleneckHook}
            </p>
          </div>

          {/* 2. High-Contrast Component Architecture Visual Map */}
          <div className="border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-[#111] p-6 rounded-2xl">
            <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold mb-4 flex items-center gap-2">
              Component Architecture & State Map
            </h3>
            <pre className="font-mono text-xs md:text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto leading-relaxed bg-white dark:bg-black/50 border border-neutral-100 dark:border-neutral-900 p-4 rounded-xl">
              {project?.architectureMap?.join("\n")}
            </pre>
          </div>

          {/* 3. Single Low-Friction Github Deployment Verification Link */}
          <div className="border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-white">Verify Implementation Source</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Review complete codebase structure and performance optimization metrics on GitHub.</p>
            </div>
            <a 
              href={project?.deploymentLink || "#"} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-950 px-5 py-3 rounded-lg text-sm font-semibold transition-all active:scale-95 whitespace-nowrap"
            >
              Verify Code on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Gallery & Descriptions */}
        <div className="max-w-[800px] mt-8 self-center text-justify text-neutral-600 dark:text-neutral-300">
          {project?.description}
        </div>
        <div className="grid gap-5 overflow-hidden w-full md:grid-cols-2">
          {groupSrc && (
            <>
              {groupSrc.map((src, index, array) => {
                const isLastImage = index === array.length - 1;
                const isOdd = array.length % 2 === 0;

                return (
                  <img
                    key={`project-image-${index}`}
                    src={src}
                    className={`rounded-md object-cover w-full aspect-video border border-neutral-200 dark:border-neutral-900 ${
                      !isOdd && isLastImage ? "col-span-2" : ""
                    }`}
                    alt={`Project image ${index}`}
                  />
                );
              })}
            </>
          )}
        </div>
        <div className="max-w-[800px] self-center text-justify text-neutral-600 dark:text-neutral-300">
          {project?.detail}
        </div>
        <h3 className="text-xl mt-20 font-medium">Next Project</h3>

        <div className="grid gap-5 w-full">
          <Link
            key={nextProject.slug}
            href={`/project/${nextProject.slug}`}
            className="rounded-md  flex flex-col items-center group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={cn(
                "text-2xl md:text-6xl z-[1]",
                isHovered &&
                  "opacity-25 transition-opacity ease-in-out duration-300"
              )}
            >
              {nextProject?.title}
            </div>
            <div className="lg:w-1/2 w-full overflow-hidden rounded-md lg:-mt-40 mt-10 z-[2]">
              <motion.img
                src={nextProject?.src}
                alt={nextProject?.title}
                className="w-full object-cover aspect-[3/2] rounded-lg transform transition-all duration-500"
                initial={window.innerWidth >= 1024 ? { y: 300 } : { y: 0 }}
                animate={window.innerWidth >= 1024 ? { y: 300 } : {}}
                whileHover={window.innerWidth >= 1024 ? { y: 150 } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </Link>
        </div>

        <div className="lg:block hidden">
          <motion.div
            ref={cursorRef}
            className="w-[80px] h-[80px] rounded-full bg-black text-white absolute z-[4] flex items-center justify-center text-[14px] font-light pointer-events-none "
            variants={scaleAnimation}
            initial="initial"
            animate={isHovered ? "enter" : "closed"}
          />
          <motion.div
            ref={cursorLabelRef}
            className="w-[80px] h-[80px] rounded-full bg-transparent text-white absolute z-[4] flex items-center justify-center text-[14px] font-light pointer-events-none"
            variants={scaleAnimation}
            initial="initial"
            animate={isHovered ? "enter" : "closed"}
          >
            View
          </motion.div>
        </div>
      </div>

      <div className="h-[40vh]" />
      <Footer />
    </>
  );
};

export default Page;
