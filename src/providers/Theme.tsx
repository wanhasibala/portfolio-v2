"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";

function FaviconSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    const isDark = resolvedTheme === "dark";
    const bg = isDark ? "%23f4f4f5" : "%2318181b";
    const main = isDark ? "%2318181b" : "%23ffffff";
    const sec = isDark ? "%2371717a" : "%23a1a1aa";

    const svgData = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='${bg}'/><circle cx='40' cy='50' r='16' fill='${main}'/><circle cx='70' cy='50' r='8' fill='${sec}'/></svg>`;

    let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      document.head.appendChild(link);
    }
    link.href = `data:image/svg+xml,${svgData}`;
  }, [resolvedTheme]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <FaviconSync />
      {children}
    </ThemeProvider>
  );
}