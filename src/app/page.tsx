import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Hero from "./(home)/Hero";
import Gallery from "./(home)/Gallery";
import { Projects } from "./(home)/Projects";
import Contact from "./(home)/Contact";
import Footer from "./(home)/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
       <h1 className="max-w-[800px] text-secondary-800  text-heading-2 mx-auto text-center pt-20">
        A Quick Glance of My past Project
      </h1>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
