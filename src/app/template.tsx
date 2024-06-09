"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/components/Curve/anim";
import { usePathname, useRouter } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const slug = pathName.split('/').filter(part => part).pop();
  const router = useRouter();
  useEffect(() => {
      animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen flex items-center justify-center bg-white z-50 text-xl  fixed top-0 left-0 text-black"
      >
        <h1 >{slug}</h1>

      </div>
      {children}
    </div>
  );
}