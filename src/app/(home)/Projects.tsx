"use client";
import React, { useRef, useState } from "react";
import Project from "@/components/ui/Project";
import Modal from "@/components/ui/Modal";
import { projects } from "@/data/project";
import {motion, useScroll, useTransform } from"framer-motion"

export const Projects = () => {
  
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className=" p-4 md:p-8 mb-10" >
      <div className=" max-w-[1440px] mt-24 mx-auto">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              year={project.year}
              href={project.slug}
              src={project.src}
            />
          );
        })}
      </div>
      {/* @ts-ignore */}
      <Modal
        modal={modal}
        projects={projects}
      />
  
    </section>
  );
};
