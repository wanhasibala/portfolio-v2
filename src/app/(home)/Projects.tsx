"use client";
import React, { useRef, useState } from "react";
import Project from "@/components/ui/Project";
import Modal from "@/components/ui/Modal";

const projects = [
  {
    title: "Wanderful",
    year: "20224",
    src: "/MacBook 01 (1).webp",
    color: "#000000",
    href: "https://genuine-pentagon-729201.framer.app/",
  },
  {
    title: "Flutter Cafe",
    year: "2024",
    src: "/Frame 5.webp",
    color: "#8c8c8c",
    href: "https://grumpy-course-353885.framer.app/",
  },
  {
    title: "Second Brain",
    year: "2024",
    src: "/Landing Page (1).webp",
    color: "#EFE8D3",
    href: "https://www.figma.com/file/hEbCeGd0sCAT2E9CsYzE48/Mobile?type=design&node-id=1780%3A166&mode=design&t=HszvxqfrMy6e7l5i-1",
  },
  {
    title: "EduCredit",
    year: "2023",
    src: "/EduCredit.webp",
    color: "#028391",
    href: "https://www.figma.com/file/hEbCeGd0sCAT2E9CsYzE48/Mobile?type=design&node-id=1780%3A166&mode=design&t=HszvxqfrMy6e7l5i-1",
  },
];

export const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className=" p-4 md:p-8 my-20">
      <h1 className="max-w-[800px] text-secondary-800  text-heading-2 mx-auto text-center">
        A Quick Glance of My past Project
      </h1>

      <div className=" max-w-[1440px] mt-24 mx-auto">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              year={project.year}
              href={project.href}
              src={project.src}
            />
          );
        })}
      </div>
      {/* @ts-ignore */}
      <Modal
        modal={modal}
        projects={projects.map(({ src, color }) => ({ src, color }))}
      />
    </section>
  );
};
