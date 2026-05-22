import DocItemTitle from "./doc-item-title";

export default function DocItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const headingId = `doc-item-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="space-y-2" aria-labelledby={headingId}>
      <DocItemTitle title={title} id={headingId} />
      {children}
    </section>
  );
}
