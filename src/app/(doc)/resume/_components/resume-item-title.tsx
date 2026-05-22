import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ResumeItemTitle({
  title,
  id,
}: {
  title: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={twMerge(
        "text-3xs text-muted-foreground/70 mb-3 border-b pb-2 leading-none font-medium tracking-widest! uppercase",
        montserrat.className,
      )}
    >
      {title}
    </h2>
  );
}
