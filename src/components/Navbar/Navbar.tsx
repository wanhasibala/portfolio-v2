"use client";
import MagneticEffect from "@/ common/Magnetic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
// import Button from "./ui/Button";
// import Menu from "./ui/Menu";
// import Magnetic from "../common/Magnetic/Magnetic";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleHamburger = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="fixed z-[999] w-full flex  justify-between px-6 md:px-12 lg:px-20 mt-[30px] items-center  text-secondary-100">
      <MagneticEffect>
        <Link href="/">
          <Image src={"/Logo.png"} height={56} width={56} alt="logo" />
        </Link>
      </MagneticEffect>
      <Button toggleHamburger={toggleHamburger} isActive={!isActive} />
    </nav>
  );
}
