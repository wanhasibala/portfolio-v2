"use client";

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
    <div defaultValue={theme} className="flex gap-2 ">
      <div className="cursor-pointer text-white  dark:bg-zinc-800">
        <div onClick={(e) => setTheme("light")}>
          <Sun />
        </div>
      </div>
      <div className="cursor-pointer text-white  dark:bg-zinc-800">
        <div onClick={(e) => setTheme("dark")}>
          <Moon />
        </div>
      </div>
      <div className="cursor-pointer text-white  dark:bg-zinc-800">
        <div onClick={(e) => setTheme("auto")}>
          <Computer />
        </div>
      </div>
    </div>
  );
}
