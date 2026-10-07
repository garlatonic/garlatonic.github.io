"use client";

import * as S from "@/styles/components";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, type ReactNode } from "react";

export function scrollToTop() {
  document.getElementById("main-content")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    scrollToTop();
    // Reapply after the router has finished committing the destination page.
    const frame = window.requestAnimationFrame(scrollToTop);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <S.TransitionFrame key={pathname}>
      {children}
    </S.TransitionFrame>
  );
}
