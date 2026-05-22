import { resumeData } from "@/data/resume";
import ResumeHeader from "./resume-header";
import DocItem from "./doc-item";
import { QuoteIcon } from "lucide-react";
import ResumeAside from "./resume-aside";
import ResumeContent from "./resume-content";

export default function DocPage({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const data = resumeData;

  return (
    <main
      ref={ref}
      className="max-w-4xl space-y-6 bg-white p-4 text-zinc-900 sm:px-6 sm:py-5 md:px-10 md:py-9 lg:px-14 lg:py-12"
    >
      <div className="mb-10 flex flex-col items-center gap-3">
        <QuoteIcon
          className="size-5 rotate-180 fill-zinc-900 stroke-transparent"
          aria-hidden="true"
        />
        <blockquote
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: data.slogan }}
        />
      </div>
      <ResumeHeader {...data} />
      <div className="grid grid-cols-[210px_1fr] gap-x-10">
        <ResumeAside {...data} />
        <ResumeContent {...data} />
      </div>
    </main>
  );
}
