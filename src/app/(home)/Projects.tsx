"use client";
import React, { useMemo, useState } from "react";
import Project from "@/components/ui/Project";
import Modal from "@/components/ui/Modal";
import { projects } from "@/data/project";
import { usePathname } from "next/navigation";
import { ArrowDown, ArrowUpRight, ArrowUpDown } from "lucide-react";
import Link from "next/link";
import MagneticEffect from "@/ common/Magnetic";

export const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  // Pagination for Home page: initially show 4 projects
  const INITIAL_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Filter current project if on a project detail page
  const currentSlug = pathname?.startsWith("/project/")
    ? pathname.split("/").pop()
    : null;

  // Sort projects based on year
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const yearA = parseInt(a.year || "0", 10);
      const yearB = parseInt(b.year || "0", 10);
      return sortOrder === "desc" ? yearB - yearA : yearA - yearB;
    });
  }, [sortOrder]);

  const sourceProjects = currentSlug
    ? sortedProjects.filter((p) => p.slug !== currentSlug)
    : sortedProjects;

  const displayedProjects = isHome
    ? sourceProjects.slice(0, visibleCount)
    : sourceProjects;

  const hasMore = isHome && visibleCount < sourceProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, sourceProjects.length));
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  return (
    <section className="p-4 md:p-8 mb-10">
      {/* Sort by Year Controller */}
      <div className="max-w-[1440px] mt-16 mx-auto flex justify-between items-center px-4">
        <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 dark:text-neutral-400">
          Showing {displayedProjects.length} of {sourceProjects.length} Projects
        </span>
        <button
          onClick={toggleSortOrder}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300 cursor-pointer shadow-sm"
        >
          <ArrowUpDown className="w-3.5 h-3.5 text-neutral-500" />
          <span>Year: {sortOrder === "desc" ? "Newest (2025 → 2023)" : "Oldest (2023 → 2025)"}</span>
        </button>
      </div>

      <div className="max-w-[1440px] mt-6 mx-auto">
        {displayedProjects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={project.slug || index}
              year={project.year}
              href={project.slug}
              src={project.src}
            />
          );
        })}
      </div>

      {/* Pagination & Load More Section for Home */}
      {isHome && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {hasMore ? (
            <MagneticEffect>
              <button
                onClick={handleLoadMore}
                className="group bg-[#676B55] hover:bg-[#565946] px-6 py-3.5 rounded-full flex items-center gap-3 hover:-translate-y-1 transition-all ease-out duration-300 shadow-lg cursor-pointer text-white"
              >
                <span className="text-base font-medium">Load More Projects</span>
                <div className="bg-[#EDDFC0] rounded-full relative overflow-hidden flex justify-center items-center w-8 h-8 flex-shrink-0">
                  <ArrowDown className="w-4 h-4 text-black transition-transform duration-300 ease-out group-hover:translate-y-[160%]" />
                  <ArrowDown className="w-4 h-4 text-black absolute transition-transform duration-300 ease-out -translate-y-[160%] group-hover:translate-y-0" />
                </div>
              </button>
            </MagneticEffect>
          ) : (
            <MagneticEffect>
              <Link
                href="/project"
                className="group bg-[#676B55] hover:bg-[#565946] px-6 py-3.5 rounded-full flex items-center gap-3 hover:-translate-y-1 transition-all ease-out duration-300 shadow-lg cursor-pointer text-white"
              >
                <span className="text-base font-medium">
                  Explore All Case Studies
                </span>
                <div className="bg-[#EDDFC0] rounded-full relative overflow-hidden flex justify-center items-center w-8 h-8 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-black transition-transform duration-300 ease-out group-hover:translate-x-[160%] group-hover:-translate-y-[160%]" />
                  <ArrowUpRight className="w-4 h-4 text-black absolute transition-transform duration-300 ease-out -translate-x-[160%] translate-y-[160%] group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </Link>
            </MagneticEffect>
          )}
        </div>
      )}

      {/* @ts-ignore */}
      <Modal modal={modal} projects={displayedProjects} />
    </section>
  );
};
