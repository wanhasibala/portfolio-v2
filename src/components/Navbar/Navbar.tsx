"use client";
import MagneticEffect from "@/ common/Magnetic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import { ToggleLeft } from "lucide-react";
import TransitionLink from "../Curve/TransitionLink";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleHamburger = () => {
    setIsActive(!isActive);
  };
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY > 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-20 w-full flex  justify-between px-6 md:px-12 lg:px-20 mt-[30px] items-center  text-secondary-100 transition-all duration-300 delay-300 ",
        { "w-full px-6 md:px-12 lg:px-20": !header },
      )}
    >
      <div
        className={cn(
          "absolute left-6 md:left-12 lg:left-20 top-[10px] transition-all duration-300",
        )}
      >
        <MagneticEffect>
          <Link href="/" className="block">
            <svg
              viewBox="0 0 100 100"
              className="w-14 h-14 transition-transform duration-300 hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="100"
                height="100"
                rx="22"
                className="fill-zinc-900 dark:fill-zinc-100 transition-colors duration-300"
              />
              <circle
                cx="40"
                cy="50"
                r="16"
                className="fill-white dark:fill-zinc-900 transition-colors duration-300"
              />
              <circle
                cx="70"
                cy="50"
                r="8"
                className="fill-zinc-400 dark:fill-zinc-500 transition-colors duration-300"
              />
            </svg>
          </Link>
        </MagneticEffect>
      </div>
      <div
        className={cn(
          " absolute top-[20px] right-6 md:right-12 lg:right-20  block",
          {
            hidden: header,
          },
        )}
      >
        <div className="hidden sm:flex gap-12">
          <MagneticEffect>
            <TransitionLink href="/project">
              Work
              <div className="w-2 h-2 dark:bg-white bg-black rounded-full  hidden group-hover:block self-center" />
            </TransitionLink>
          </MagneticEffect>
          <MagneticEffect>
            <TransitionLink href="/about">
              About
              <div className="w-2 h-2 dark:bg-white bg-black rounded-full  hidden group-hover:block self-center" />
            </TransitionLink>
          </MagneticEffect>
          <MagneticEffect>
            <TransitionLink href="/contact">
              Contact
              <div className="w-2 h-2 dark:bg-white bg-black rounded-full  hidden group-hover:block self-center" />
            </TransitionLink>
          </MagneticEffect>
        </div>
      </div>

      <Button
        toggleHamburger={toggleHamburger}
        isActive={!isActive}
        header={header}
      />
      <Menu isActive={!isActive} toggleHamburger={toggleHamburger} />
    </nav>
  );
}
