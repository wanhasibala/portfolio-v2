import MagneticEffect from "@/ common/Magnetic";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
// import { Link } from "react-scroll";
// import Magnetic from "../../common/Magnetic/Magnetic";

export default function Menu({
  toggleHamburger,
  isActive,
}: {
  toggleHamburger: any;
  isActive: boolean;
}) {
  return (
    <div
      onClick={toggleHamburger}
      className={cn(
        "absolute -top-10 right-0 z-0  h-[110vh] w-full py-32 md:px-20 px-10 text-4xl dark:bg-[#171717] bg-[#f9f9f9] max-w-lg duration-500 ease-in-out  transition-all   dark:text-[#f9f9f9] text-[#171717] flex flex-col  justify-between",
        { "right-[-32rem] ": isActive }
      )}
    >
      <div className="text-xl border-b pb-2">Navigation</div>
      <div className="flex flex-col  gap-5">
        <Link href="/" className="hover:-ml-4 duration-300 transition-all">Home</Link>
        <Link  href="/about" className="hover:-ml-4 duration-300 transition-all">
          About
        </Link>
        <Link href="/project" className="hover:-ml-4 duration-300 transition-all">Project</Link>
        <Link href="/contact" className="hover:-ml-4 duration-300 transition-all">Contact</Link>
      </div>
      <div>
        <div className="text-xl border-b pb-2 mb-4">Link</div>
        <div className="text-lg flex gap-4 ">
          <a href="https://instagram.com/wanhasib.ala/">Instagram</a>
          <a href="https://twitter.com/wanhasib_ala">Twitter</a>
          <a href="https://github.com/wanhasibala">Github</a>
          <a href="">Email</a>
        </div>
      </div>
      <div className="flex dark:bg-[#282828] bg-[#dcdcdc]  w-fit px-4 py-2 rounded-md gap-5">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
