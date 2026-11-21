import * as S from "@/styles/components";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "프로젝트" };

export default function Projects() {
  return (
    <S.PageContent id="main-content" aria-labelledby="page-title" tabIndex={-1}>
      <S.Heading id="page-title">프로젝트</S.Heading>
      <S.ProjectList role="list">
        {projects.map((project) => (
          <li key={project.slug}>
            <S.ProjectTitle>
              <h2><Link href={`/projects/${project.slug}/`} scroll={false}>{project.title}</Link></h2>
              <span>{project.period}</span>
            </S.ProjectTitle>
            <p>{project.description}</p>
            <S.ProjectStack>{project.stack.join(" · ")}</S.ProjectStack>
          </li>
        ))}
      </S.ProjectList>
    </S.PageContent>
  );
}
