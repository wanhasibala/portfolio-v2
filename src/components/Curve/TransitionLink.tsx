"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "./anim";
import React from "react";

export default function TransitionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button className={className || "flex flex-col group gap-5"} onClick={handleClick}>
      {children}
    </button>
  );
}
