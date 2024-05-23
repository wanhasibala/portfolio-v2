"use client";
import Magnetic from "@/ common/Magnetic";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Button from "./ui/Button";
// import Menu from "./ui/Menu";
// import Magnetic from "../common/Magnetic/Magnetic";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleHamburger = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="fixed z-10   w-full   flex  justify-between px-[80px] mt-[30px] items-center  text-secondary-100">
        {/* <Magnetic> */}

      <Link href="/">
        <Image src={"/Logo.png"} height={56} width={56} alt="logo" />
      </Link>
        {/* </Magnetic> */}
      <div>right nav</div>
    </nav>
  );
}
