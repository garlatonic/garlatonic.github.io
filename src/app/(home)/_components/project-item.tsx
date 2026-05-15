"use client";
import ProjectInfo from "@/components/common/project-info";

export default function ProjectItem({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (slug: string) => void;
}) {
  return (
    <li
      key={project.slug}
      className="project-item md:w-[80dvw] max-w-350 group"
    >
      <ProjectInfo project={project} onOpenModal={onOpenModal} />
    </li>
  );
}
