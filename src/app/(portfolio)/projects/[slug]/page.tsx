import * as S from "@/styles/components";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectChallenge from "./ProjectChallenge";
import styles from "./challenge.module.css";

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
    <S.PageContent id="main-content" aria-labelledby="page-title" tabIndex={-1}>
      <S.Heading id="page-title">{project.title}</S.Heading>
      <S.ProjectDetailBody>
        <S.ProjectMeta>{project.category} · {project.period}</S.ProjectMeta>
        <p>{project.description}</p>
        <S.ProjectLinks>
          <a href={project.live} target="_blank" rel="noopener noreferrer">배포 사이트 ↗</a>
          {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
        </S.ProjectLinks>
        <S.ContentSection aria-labelledby="overview-title">
          <h2 id="overview-title">프로젝트 소개</h2>
          {project.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </S.ContentSection>
        <S.ContentSection aria-labelledby="roles-title">
          <h2 id="roles-title">주요 역할</h2>
          <S.RoleList>{project.roles.map((role) => <li key={role}>{role}</li>)}</S.RoleList>
        </S.ContentSection>
        <S.ContentSection aria-labelledby="stack-title">
          <h2 id="stack-title">사용 기술</h2>
          <p>{project.stack.join(" · ")}</p>
        </S.ContentSection>
        <section className={styles.studies} aria-labelledby="challenges-title">
          <h2 id="challenges-title" className={styles.studyHeading}>문제 해결 과정</h2>
          {project.challenges.map((challenge, index) => (
            <ProjectChallenge key={challenge.title} challenge={challenge} titleId={`challenge-${index}-title`} />
          ))}
        </section>
        <S.BackLink><Link href="/projects/" scroll={false}>← 모든 프로젝트</Link></S.BackLink>
      </S.ProjectDetailBody>
    </S.PageContent>
  );
}
