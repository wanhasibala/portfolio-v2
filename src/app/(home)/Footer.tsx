"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  useEffect(() => {
    const time = document.getElementById("datetime");

    setInterval(() => {
      // @ts-ignore
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let clock = h + ":" + m;
      if(time){

      time.innerHTML = clock;
      }
    }, 1000);
  });
  return (
    <div className="my-20 max-w-[1440px] mx-6 md:mx-12 lg:mx-20 lg:px-5  font-medium">
      <div className="flex gap-5 justify-around mb-10">
        <div className="flex flex-col w-full gap-2">
          <div className="border-b border-gray-800 font-semibold ">
            NAVIGATION
          </div>
          <Link href="/" className=" cursor-pointer hover:pl-2 duration-500">
            {" "}
            Home{" "}
          </Link>
          <Link
            className=" cursor-pointer hover:pl-2 duration-500"
            href="/about"
          >
            About
          </Link>
          <Link
            href="/project"
            className="cursor-pointer hover:pl-2 duration-500"
          >
            Work
          </Link>
          <Link
            href="/contact"
            className=" cursor-pointer hover:pl-2 duration-500"
          >
            {" "}
            Contact
          </Link>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="border-b border-gray-800 font-semibold">SOCIAL</div>
          <Link
            href="https://www.linkedin.com/in/wanhasib/"
            className="hover:pl-2 duration-500"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            href="https://github.com/wanhasibala"
            className="hover:pl-2 duration-500"
            target="_blank"
          >
            Github
          </Link>
          <Link
            href="https://www.instagram.com/wanhasib.ala"
            className="hover:pl-2 duration-500"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href="https://twitter.com/wanhasib_ala"
            className="hover:pl-2 duration-500"
            target="_blank"
          >
            Twitter
          </Link>
        </div>
      </div>
      <div className="flex gap-2 items-end justify-around">
        <div className="text-2xl md:text-6xl font-bold w-full">
          <div>2024</div>
          <div>WAN HASIB </div>
        </div>
        <div className="font-semibold w-full">
          LOCAL TIME
          <div className="font-medium" id="datetime" />
        </div>
      </div>
    </div>
  );
}
