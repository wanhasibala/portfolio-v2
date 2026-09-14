"use client";
import { useEffect } from "react";
import Link from "next/link";
import Contact from "./Contact";
import { Instagram, LinkedinIcon, Twitter } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    const time = document.getElementById("datetime");

    const timer = setInterval(() => {
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let clock = h + ":" + (m < 10 ? "0" + m : m);
      if (time) {
        time.innerHTML = clock;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full h-auto xl:landscape:h-screen xl:landscape:[clip-path:polygon(0%_0,100%_0%,100%_100%,0_100%)]"
    >
      <div className="relative xl:landscape:fixed bottom-0 w-full h-auto xl:landscape:h-screen flex flex-col font-medium bg-[#f4f3f0] dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 justify-between py-10 sm:py-14 xl:landscape:py-6 overflow-visible xl:landscape:overflow-hidden border-t xl:landscape:border-t-0 border-zinc-200/80 dark:border-zinc-800/80">
        <div className="w-full flex-1 flex items-center justify-center my-auto">
          <Contact className="text-zinc-800 dark:text-zinc-100" />
        </div>

        {/* Bottom Nav */}
        <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-6 items-center px-4 sm:px-8 md:px-12 lg:px-20 justify-between pt-6 mt-6 xl:landscape:mt-2 border-t border-zinc-300/50 dark:border-zinc-800/60 max-w-[1440px] mx-auto">
          <div className="text-lg sm:text-xl font-bold tracking-wider text-zinc-900 dark:text-white">
            <div>WAN HASIB</div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/project" className="hover:text-black dark:hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://www.instagram.com/wanhasib.ala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/wanhasib_ala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:scale-110 transition-transform text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/wanhasib/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="dark:bg-zinc-100 bg-zinc-800 dark:text-black text-white p-1 rounded-md hover:scale-110 transition-transform"
            >
              <LinkedinIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
