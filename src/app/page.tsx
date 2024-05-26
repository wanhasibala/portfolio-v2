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
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
