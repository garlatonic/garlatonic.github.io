"use client";

import * as S from "@/styles/components";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <S.TransitionFrame key={pathname}>
      {children}
    </S.TransitionFrame>
  );
}
