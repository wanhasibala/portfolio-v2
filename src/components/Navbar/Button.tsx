import MagneticEffect from "@/ common/Magnetic";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Button({
  toggleHamburger,
  isActive,
}: {
  toggleHamburger: (status: boolean) => void;
  isActive: boolean;
}) {
  return (
    <>
      <div className="pointer-events-auto absolute right-[2.5%]  z-[51] ">
        <MagneticEffect>
          <div
            onClick={() => toggleHamburger(!isActive)}
            className={cn(
              "bg-black  right-0 m-5 w-16 h-16 rounded-full  cursor-pointer flex flex-col gap-2 items-center justify-center z-20   hover:ring-4 hover:ring- ",
              { "ring-4": isActive }
            )}
          >
            <div
              className={cn(
                "block h-[1px] w-[40%]  bg-white relative transition-transform origin-bottom-right ",
                {
                  "-rotate-45 -translate-y-[5px] -translate-x-[3px] ": isActive,
                }
              )}
            ></div>
            <div
              className={cn(
                "block h-[1px] w-[40%]  bg-white relative transition-transform origin-top-right ",

                {
                  "rotate-45 translate-y-[5px] -translate-x-[3px] h-[3px] ":
                    isActive,
                }
              )}
            ></div>
          </div>
        </MagneticEffect>
      </div>
    </>
  );
}
