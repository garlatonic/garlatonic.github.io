"use client";

import { Bodoni_Moda } from "next/font/google";
import { twMerge } from "tailwind-merge";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni-moda",
  weight: ["500"],
});

export default function SectionTitle({
  className,
  title,
  isSubPage,
  children,
}: {
  className?: string;
  title: string;
  isSubPage?: boolean;
  children?: React.ReactNode;
}) {
  if (isSubPage) {
    return (
      <div className="space-y-10">
        <h2
          className={twMerge(
            "section-title inline-block pr-10 text-3xl font-semibold italic lg:text-5xl",
            bodoniModa.className,
            className,
          )}
        >
          {title}
        </h2>
        {children}
      </div>
    );
  }

  return (
    <div className={twMerge("relative", className)}>
      <h2
        className={twMerge(
          "section-title text-muted bg-background inline-block pr-10 text-5xl font-semibold italic lg:text-8xl",
          bodoniModa.className,
          className,
        )}
      >
        {title}
      </h2>
      <div
        className="bg-muted absolute top-1/2 left-0 -z-1 h-px w-full"
        aria-label="꾸밈"
      />
    </div>
  );
}
