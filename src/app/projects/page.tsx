import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "프로젝트" };

export default function Projects() {
  return (
    <main id="main-content" className="page-content">
      <h1>프로젝트</h1>
      <ul className="project-list prose">
        {projects.map((project) => (
          <li key={project.slug}>
            <div className="project-title">
              <h2><Link href={`/projects/${project.slug}/`}>{project.title}</Link></h2>
              <span>{project.period}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-stack">{project.stack.join(" · ")}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
