"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/components/Curve/anim";
import { usePathname, useRouter } from "next/navigation";



export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
      animatePageIn();
  }, []);

  return (
    <div>
<div
        id="banner-1"
        className="min-h-screen bg-neutral-950 dark:bg-neutral-200 z-50 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 dark:bg-neutral-200 z-50 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 dark:bg-neutral-200 z-50 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 dark:bg-neutral-200 z-50 fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  );
}