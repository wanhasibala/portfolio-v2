import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Hero from "./(home)/Hero";
import Gallery from "./(home)/Gallery";
import { Projects } from "./(home)/Projects";
import Contact from "./(home)/Contact";
import Footer from "./(home)/Footer";
import SlidingImage from "@/components/SlidingImage/SlidingImage";

export default function Home() {
  return (
    <div className="overflow-hidden w-[100vw]">
      <Hero />
      <Gallery />
      <SlidingImage />
       <h1 className="max-w-[800px] text-secondary-800  text-heading-2 mx-auto text-center pt-20">
        A Quick Glance of My past Project
      </h1>
      <Projects />
      {/* <Contact className="bg-[#BE6B5C] border-[#cf8679]  " /> */}
      <Footer />
    </div>
  );
}
