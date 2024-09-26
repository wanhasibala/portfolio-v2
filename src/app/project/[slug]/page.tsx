"use client"
import React from "react";
import { projects } from "@/data/project";
import Image from "next/image";
import Footer from "@/app/(home)/Footer";
import { ArrowUpRight } from "lucide-react";
import MagneticEffect from "@/ common/Magnetic";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug);
  const otherProjects = projects.filter(
    (project) => project.slug !== params.slug
  );
  // const image_body = project?.src_body?.length
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
          <div className="absolute -top-20 right-10">
            {pathname !== "/project/vivre" && (
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
            )}
          </div>
          <img
            src={project?.src}
            className="w-full aspect-video object-cover rounded-xl md:rounded-4xl"
            alt="header image"
          />
        </div>
        <div className="max-w-[800px] self-center text-justify ">
          {" "}
          {project?.description}
        </div>
        <div className="grid gap-5 overflow-hidden w-full md:grid-cols-2">
          {project?.src_body && (
            <>
              {project?.src_body?.map((src, index) => {
                return (
                  <>
                    {imageCount > 1 ? (
                      <img
                        src={src}
                        key={index}
                        className="rounded-md object-cover w-full aspect-video"
                      />
                    ) : (
                      <img
                        src={src}
                        key={index}
                        className="rounded-md object-cover w-full aspect-video col-span-2"
                      />
                    )}
                  </>
                );
              })}
            </>
          )}
        </div>
        <div className="max-w-[800px] self-center text-justify">
          {" "}
          {project?.detail}
        </div>
        <h3 className="text-4xl mt-20 font-medium">Related Project</h3>

        <div
          key={project?.slug}
          className="grid grid-cols-2 gap-5 w-full md:grid-cols-3"
        >
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
                  className="w-full object-cover aspect-[3/2] rounded-md"
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

export default Page;
