"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Hero from "./(home)/Hero";
import Gallery from "./(home)/Gallery";
import { Projects } from "./(home)/Projects";
import Contact from "./(home)/Contact";
import Footer from "./(home)/Footer";
import SlidingImage from "@/components/SlidingImage/SlidingImage";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <div className="overflow-hidden w-[100vw]">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Gallery />
      <h1 className="max-w-[800px] text-secondary-800  text-heading-2 mx-auto text-center pt-20">
        A Quick Glance of My past Project
      </h1>
      <Projects />
      {/* <Contact className="bg-[#BE6B5C] border-[#cf8679]  " /> */}
      <SlidingImage />
      <div className="h-[40vh]" />
      <Footer />
    </div>
  );
}
