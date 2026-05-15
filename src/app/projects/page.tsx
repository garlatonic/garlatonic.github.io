import ProjectInfo from "@/components/common/project-info";
import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <main className="py-30">
      <SectionWrapper>
        <SectionTitle
          title="Projects"
          className="projects-section-title"
          isSubPage
        >
          <p className="border-l-4 pl-4 text-sm md:text-base lg:text-lg">
            
            <br />각 프로젝트를 클릭하시면, 상세 내용을 확인할 수 있습니다.
          </p>
        </SectionTitle>
        {projects.map((project) => (
          <ProjectInfo key={project.slug} project={project} isList />
        ))}
      </SectionWrapper>
    </main>
  );
}
