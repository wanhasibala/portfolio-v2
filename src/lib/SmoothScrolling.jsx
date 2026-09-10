"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <ScrollToTopOnNavigate />
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
