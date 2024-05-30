import React from "react";
import { projects } from "@/data/project";
import Image from "next/image";
import Footer from "@/app/(home)/Footer";
import { ArrowUpRight } from "lucide-react";
import MagneticEffect from "@/ common/Magnetic";
import Link from "next/link";

const page = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug);
  const otherProjects = projects.filter(
    (project) => project.slug !== params.slug
  );
  return (
    <>
      <div
        key={project?.slug}
        className="pt-40 px-6 md:px-12 lg:px-20 flex flex-col gap-10 items-center "
      >
        <div className="flex flex-col w-full">
          <h1 className="text-heading-1 font-semibold">{project?.title}</h1>
          <h2 className="text-2xl font-medium">{project?.subheading}</h2>
        </div>

        <div className="relative w-full mt-20 ">
          <div className="absolute -top-20 right-10">
            <MagneticEffect>
              <Link
                className="h-32 w-32 transition-all duration-500  bg-[#BE6B5C]  rounded-full group flex items-center justify-center pl-6 hover:pl-0 gap-2   text-white "
                // @ts-ignore
                href={project?.href}
                target="_blank"
              >
                Live site
                <ArrowUpRight className="scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out" />
              </Link>
            </MagneticEffect>
          </div>
          <img
            src={project?.src}
            className="w-full aspect-video object-cover rounded-xl md:rounded-4xl"
            alt="header image"
          />
        </div>
        <div className="max-w-[800px] self-center"> {project?.description}</div>
        <div className="grid gap-5 overflow-hidden w-full grid-cols-2 ">
          <img
            src={project?.src}
            className="rounded-md object-contain"
            alt="shotimage"
          />
          <img
            src={project?.src}
            className=" rounded-md object-contain"
            alt="shotimage"
          />
        </div>
        <div className="max-w-[800px] self-center"> {project?.description}</div>
        <h3 className="text-4xl mt-20 font-medium">Related Project</h3>

        <div key={project?.slug} className="grid grid-cols-3 gap-5 w-full ">
          {otherProjects.map((project) => {
            return (
              <Link
                key={project.slug}
                href={`/project/${project.slug}`}
                className="rounded-md  gap-2 flex flex-col group relative "
              >
                {/* <p className=" hidden group-hover:absolute group-hover:right-[50%] group-hover:">View</p> */}
                <img
                  src={project?.src}
                  alt=""
                  className="w-full object-cover aspect-[3/4] rounded-md"
                />
                <div className="p-2 flex flex-col gap-2">
                  <div>{project?.title}</div>
                  <div className="text-xs"> {project?.subheading}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="h-[40vh]" />
      <Footer />
    </>
  );
};

export default page;
