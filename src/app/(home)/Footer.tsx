"use client";
import { useEffect } from "react";
import Link from "next/link";
import Contact from "./Contact";
import { Instagram, Linkedin, LinkedinIcon, Twitter } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    const time = document.getElementById("datetime");

    setInterval(() => {
      // @ts-ignore
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let clock = h + ":" + m;
      if (time) {
        time.innerHTML = clock;
      }
    }, 1000);
  });
  return (
    <div
      className="relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed  bottom-0 h-fit py-8 mt-20 w-full lg:h-[100vh] overflow-hidden flex flex-col font-medium bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 justify-end">
        <Contact className="text-zinc-100 dark:text-zinc-800 pt-0 " />
        {/* Bottom Nav */}
        <div className="flex w-full gap-2 items-start px-6 md:px-12 lg:px-20 justify-between">
          <div className="  text-2xl  font-bold">
            <div>WAN HASIB </div>
          </div>
          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-8 ">
            <Link href="/home"> Home</Link>
            <Link href="/contact"> Contact</Link>
            <Link href="/about"> About</Link>
            <Link href="/project">Work </Link>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Link href="https://www.instagram.com/wanhasib.ala/">
              <Instagram />
            </Link>
            <Link href="https://x.com/wanhasib_ala">
              <Twitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/wanhasib/"
              target="_blank"
              className="dark:bg-zinc-800 bg-zinc-100 dark:text-white text-black p-1 rounded-md"
            >
              <LinkedinIcon size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
