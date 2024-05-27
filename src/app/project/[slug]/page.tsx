import React from "react";
import { projects } from "@/data/project";
import Image from "next/image";
import Footer from "@/app/(home)/Footer";

const page = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug);

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

        <img
          src={project?.src}
          className="w-full aspect-video object-cover rounded-xl md:rounded-4xl"
        />
        <div className="max-w-[800px] self-center"> {project?.description}</div>
        <div className="grid gap-5 overflow-hidden w-full grid-cols-2 ">
          <img src={project?.src} className="rounded-md object-contain" />
          <img src={project?.src} className=" rounded-md object-contain" />
        </div>
        <div className="max-w-[800px] self-center"> {project?.description}</div>
        <h3 className="text-4xl mt-20 font-medium">Related Project</h3>
        <div className="grid grid-cols-3 gap-5 w-full ">
          <div className="border">kelas</div>
          <div className="border">kelas</div>
          <div className="border">kelas</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
