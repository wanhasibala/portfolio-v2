"use client";

import { cn } from "@/lib/utils";
import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div defaultValue={theme} className="flex gap-2 text-[#171717] dark:text-white">
      <div className={cn("cursor-pointer   dark:bg-zinc-800 p-2 rounded", {"bg-zinc-200" :theme=="light"})}>
        <div onClick={(e) => setTheme("light")}>
          <Sun />
        </div>
      </div>
      <div className={cn("cursor-pointer p-2 rounded  ",{"bg-zinc-600" :theme=="dark"})}>
        <div onClick={(e) => setTheme("dark")}>
          <Moon />
        </div>
      </div>
      <div className={cn("cursor-pointer p-2 rounded   dark:bg-zinc-800", {"bg-zinc-200 dark:bg-zinc-600 " :theme==="system" } )}>
        <div onClick={(e) => setTheme("system")} >
          <Computer />
        </div>
      </div>
    </div>
  );
}
