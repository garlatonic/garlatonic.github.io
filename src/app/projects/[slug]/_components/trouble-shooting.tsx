import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "./code-block";

export default function TroubleShooting({
  troubleShooting,
  slug,
}: {
  troubleShooting: TroubleShooting;
  slug: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 w-full">
      <div className="lg:col-span-1 space-y-24">
        <div className="sticky top-32 space-y-4 leading-normal">
          <h2 className="text-3xl font-bold uppercase break-keep">
            {troubleShooting.title}
          </h2>
          <div className="h-1 w-12 bg-foreground" />
        </div>
      </div>
      <div className="lg:col-span-2 space-y-20">
        <div className="text-lg leading-relaxed text-foreground/90 ">
          <h3 className="text-xs md:text-sm font-bold tracking-widest text-muted-foreground">문제 정의</h3>
          <p>{troubleShooting.problem}</p>
        </div>
        <Separator />
        <div className="space-y-12">
          <div className="space-y-4 leading-normal">
            <h2 className="text-3xl font-bold uppercase">The Solution</h2>
            <div className="h-1 w-12 bg-foreground" />
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {troubleShooting.solution}
          </p>
          {troubleShooting.codeSnippet && (
            <CodeBlock
              fileName={`${slug}-solution.js`}
              code={troubleShooting.codeSnippet}
            />
          )}
        </div>
      </div>
    </div>
  );
}
