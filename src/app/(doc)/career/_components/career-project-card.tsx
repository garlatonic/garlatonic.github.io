import CareerAchievementBlock from "./career-achievement-block";

type CareerProjectCardProps = {
  project: {
    title: string;
    period: string;
    description: string;
    responsibilities: {
      title: string;
      details: string[];
    }[];
    achievements: Array<
      | string
      | {
          title: string;
          problems: string[];
          solutions: string[];
          results: string[];
        }
    >;
  };
  isEducation?: boolean;
};

export default function CareerProjectCard({
  project,
  isEducation,
}: CareerProjectCardProps) {
  return (
    <article className="space-y-4 border border-zinc-200 bg-zinc-50/60 p-4">
      <header className="flex items-baseline justify-between gap-3 border-b border-zinc-200 pb-3">
        <h4 className="flex-1 text-xs font-bold">{project.title}</h4>
        <p className="text-3xs text-muted-foreground">{project.period}</p>
      </header>
      <p className="text-2xs text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      <section className="space-y-2">
        <h5 className="text-3xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
          담당 업무
        </h5>
        {project.responsibilities.map((r) => (
          <section key={r.title} className="space-y-1.5">
            <h6 className="text-2xs font-medium">{r.title}</h6>
            <ul className="text-2xs space-y-0.5 leading-relaxed text-zinc-700">
              {r.details.map((d, idx) => (
                <li
                  key={idx}
                  className="before:mr-1 before:content-['-']"
                >
                  {d}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
      <section className="space-y-2">
        <h5 className="text-3xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
          성과
        </h5>
        {!isEducation && (
          <ul className="text-2xs space-y-0.5 leading-relaxed text-zinc-700">
            {project.achievements.map((a, idx) => (
              <li
                key={idx}
                dangerouslySetInnerHTML={{ __html: a }}
                className="before:mr-1 before:content-['-']"
              />
            ))}
          </ul>
        )}
        {isEducation && (
          <div className="space-y-4">
            {project.achievements.map((a, idx) => {
              if (typeof a === "string") {
                return null;
              }

              return (
                <CareerAchievementBlock key={idx} achievement={a} />
              );
            })}
          </div>
        )}
      </section>
    </article>
  );
}
