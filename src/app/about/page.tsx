import * as S from "@/styles/components";
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '소개' };

const skills = [
  ['Core', 'React, Next.js, TypeScript, JavaScript'],
  ['State', 'TanStack Query, Zustand'],
  ['Forms', 'React Hook Form, Zod'],
  ['Styling', 'Tailwind CSS, shadcn/ui, styled-components'],
  ['Tools', 'Git, GitHub, Figma'],
];

export default function About() {
  return (
    <S.PageContent id="main-content" aria-labelledby="page-title" tabIndex={-1}>
      <S.Heading id="page-title">SangA Park · 박상아</S.Heading>
      <S.Prose>
        <section aria-labelledby="intro-title">
          <S.ScreenReaderHeading as="h2" id="intro-title">소개</S.ScreenReaderHeading>
          <p>사용자의 편의를 설계하는 프론트엔드 개발자입니다.</p>
          <p>
            3년간의 웹 퍼블리싱 경험을 통해 사용자 경험이 서비스의 품질을
            결정한다는 것을 배웠습니다. 이제는 주니어 프론트엔드 개발자로서
            기술적 완성도와 사용자 중심의 관점을 함께 고민하며, 더 자연스럽고
            직관적인 사용 경험을 만드는 데 집중하고 있습니다.
          </p>
          <p>
            화면 속 작은 요소 하나까지도 의미 있게 설계하여, 사용자가 기술을
            의식하지 않고 자연스럽게 몰입할 수 있는 서비스를 만들고자 합니다.
          </p>
        </section>
        <S.ContentSection aria-labelledby="skills-title">
          <h2 id="skills-title">Tech Stack</h2>
          <S.SkillsList>
            {skills.map(([label, items]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{items}</dd>
              </div>
            ))}
          </S.SkillsList>
        </S.ContentSection>
      </S.Prose>
    </S.PageContent>
  );
}
