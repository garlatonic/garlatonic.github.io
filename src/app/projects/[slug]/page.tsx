import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return { title: project.title, description: project.description };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="page-content">
      <h1>{project.title}</h1>
      <div className="prose project-detail">
        <p className="project-stack">{project.category} · {project.period}</p>
        <p>{project.description}</p>
        <p className="project-links">
          <a href={project.live}>배포 사이트 ↗</a>
          {project.repository && <a href={project.repository}>GitHub ↗</a>}
        </p>
        <section className="content-section">
          <h2>프로젝트 소개</h2>
          {project.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <section className="content-section">
          <h2>주요 역할</h2>
          <ul className="role-list">{project.roles.map((role) => <li key={role}>{role}</li>)}</ul>
        </section>
        <section className="content-section">
          <h2>사용 기술</h2>
          <p>{project.stack.join(" · ")}</p>
        </section>
        <section className="content-section">
          <h2>Challenge &amp; Solution</h2>
          {project.challenges.map((challenge) => (
            <section className="challenge" key={challenge.title}>
              <h3>{challenge.title}</h3>
              <p><strong>문제 정의</strong><br />{challenge.problem}</p>
              <p><strong>해결 방안</strong><br />{challenge.solution}</p>
            </section>
          ))}
        </section>
        <p className="back-link"><Link href="/projects/">← 모든 프로젝트</Link></p>
      </div>
    </main>
  );
}
