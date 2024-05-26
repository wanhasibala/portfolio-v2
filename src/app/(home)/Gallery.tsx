"use client"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
// import Photo from "./ui/photo";

export default function Gallery() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //@ts-nocheck
    gsap.to(".box-2", {
      y: 202,
      ease: "none",
      scrollTrigger: {
        trigger: ".galery-container",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".box-3", {
      y: -154,
      ease: "none",
      scrollTrigger: {
        trigger: ".galery-container",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".box-4", {
      y: 92,
      ease: "none",
      scrollTrigger: {
        trigger: ".galery-container",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".photos", {
      x: -1000,
      ease: "none",

      scrollTrigger: {
        trigger: "photos",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".photos-2", {
      x: 1000,
      ease: "none",

      scrollTrigger: {
        trigger: "photos",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });

    //split text animation

    let text = new SplitType(".split", { types: "words" });

    gsap.from(text.words, {
      opacity: 0.6,
      stagger: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".trigger",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
  });
  return (
    <>
      <div className=" self-center my-10 flex gap-5  justify-center mx-2  px-4 relative  h-fit">
        <div className=" galery-container   gap-gap mx-4 px-4 flex justify-center">
          <img
            className="mt-[101px] h-image-height w-image-width box-1"
            alt="Intersect"
            src="Intersect-3.png"
            data-speed="1"
          />
          <img
            className="  h-image-height w-image-width box-2"
            alt="Intersect"
            src="Intersect-2.png"
            data-speedd="0.75"
          />

          <img
            className="mt-[178px] h-image-height w-image-width box-3"
            alt="Intersect"
            src="Intersect-1.png"
            data-speedd="1.1"
          />
          <img
            className=" mt-[55px]  h-image-height w-image-width box-4"
            alt="Intersect"
            src="Intersect.png"
            data-speedd="0.90"
          />
        </div>
      </div>

      <div className="  mb-20 lg:h-[70vh] pt-[30vh] max-w-[1440px] mx-auto  px-4 md:px-12 text-heading-3 font-medium text-center my-10 text-secondary-800 trigger ">
        <div className="split ">
          I am a Product Design with a keen eye for aesthetics and a commitment
          to crafting digital experiences that not only meet but exceed user
          expectations.
        </div>
      </div>

      {/* <div className="my-10 gap-5 ">
        <div className=" inline-flex mb-5 gap-5 ml-[100px] photos">
          <Photo src="render 3.webp" alt="1" />
          <Photo src="astronout machine.webp" alt="1" />
          <Photo src="abstract animation.webp" alt="1" />
          <Photo src="Intersect.webp" alt="1" />
          <Photo src="jadi.webp" alt="1" />
          <Photo src="stylized alien landscape 2.webp" alt="1" />
          <Photo src="Ads Video.webp" alt="1" />
        </div>

        <div className=" inline-flex gap-5  -ml-[800px] photos-2">
          <Photo src="self harm.webp" alt="1" />
          <Photo src="p.webp" alt="1" />
          <Photo src="MacBook-_01.webp" alt="1" />
          <Photo src="EduCredit.webp" alt="1" />
          <Photo src="render 3.webp" alt="1" />
          <Photo src="untitled.webp" alt="1" />
          <Photo src="Intersect.webp" alt="1" />
        </div>
      </div> */}
    </>
  );
}
