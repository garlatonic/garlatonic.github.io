import * as S from '@/styles/components';
import type { Metadata } from 'next';
import Link from 'next/link';
import { workExperience, education } from '@/data/about';
import { projects } from '@/data/projects';

const competencies = [
  {
    title: '사용자 흐름을 개선하는 프론트엔드 개발',
    description:
      'React와 Next.js로 화면과 기능을 구현합니다. 일정 입력 단계를 단순화하고 검색 과정의 불필요한 API 요청을 줄이는 등, 사용자 흐름과 데이터 처리 과정을 함께 개선해 왔습니다.',
  },
  {
    title: '커머스 UI 구현과 기능 커스터마이징',
    description:
      '3년간 카페24·NHN Shopby 기반 쇼핑몰의 PC·모바일 UI를 구현했습니다. NHN Shopby 프로젝트에서는 요구사항에 맞춰 복수 배송지 주문 흐름과 댓글 기능, 갤러리형 게시판 UI를 개발했습니다.',
  },
  {
    title: '협업과 유지보수를 고려한 개발',
    description:
      '재직 중에는 반복되는 UI와 기능을 공통화하고, Wiki와 코드 컨벤션을 정리해 팀이 함께 참고할 개발 기준을 마련했습니다. 팀 프로젝트에서는 FE 팀장으로 Git 관리와 코드 리뷰, 디자인 기준 정리를 담당했습니다.',
  },
];

const projectSummaries = [
  { slug: 'naeconcertbutakhae' },
  { slug: 'freshjb' },
  { slug: 'pokemonstore' },
];

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
    <S.AboutContent
      id="main-content"
      aria-labelledby="page-title"
      tabIndex={-1}
    >
      <S.Heading id="page-title">About Me</S.Heading>
      <S.Prose>
        <section aria-labelledby="intro-title">
          <S.ScreenReaderHeading as="h2" id="intro-title">
            소개
          </S.ScreenReaderHeading>
          <p>
            안녕하세요. 작은 디테일이 사용 경험을 바꾼다고 믿는 프론트엔드
            개발자 박상아입니다. 디자인의 세부 요소를 꼼꼼하게 구현하는 것은
            물론, 사용자가 마주하는 디테일에 관심이 많습니다. 별도의 설명 없이도
            다음 행동을 쉽게 찾고, 기대한 대로 기능을 사용할 수 있는 화면을
            만드는 데 보람을 느낍니다.
          </p>
          <p>
            현재는 3년간의 웹 퍼블리싱 경험을 바탕으로 글로벌 커머스 플랫폼
            기반의 웹사이트를 개발하고 있습니다. 시각적 완성도뿐 아니라 기능의
            동작과 사용 편의성을 함께 고민하며, 자연스럽고 직관적인 사용 경험을
            만들어가고 있습니다.
          </p>
          <p>
            최근에는 AI를 문서 정리와 코드 이해·검토에 활용하며, 더 효율적인
            업무 방식을 익히고 있습니다.
          </p>
        </section>
        <S.ContentSection aria-labelledby="competencies-title">
          <h2 id="competencies-title">핵심 역량</h2>
          <S.CompetencyList role="list">
            {competencies.map(({ title, description }) => (
              <li key={title}>
                <h3>{title}</h3>
                {': '}
                {description}
              </li>
            ))}
          </S.CompetencyList>
        </S.ContentSection>
        <S.ContentSection aria-labelledby="experience-title">
          <h2 id="experience-title">경력 및 교육</h2>
          <S.CareerList role="list">
            {workExperience.map((experience) => (
              <li key={experience.company}>
                <S.CareerHeading>
                  <h3>{experience.company}</h3>
                  <S.CareerLeader aria-hidden="true" />
                  <S.CareerPeriod>{experience.period}</S.CareerPeriod>
                </S.CareerHeading>
                <S.CareerBody>
                  <S.CareerTasks>
                    {experience.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </S.CareerTasks>
                </S.CareerBody>
              </li>
            ))}
            <li>
              <S.CareerHeading>
                <h3>{education.title}</h3>
                <S.CareerLeader aria-hidden="true" />
                <S.CareerPeriod>
                  {education.period} · {education.status}
                </S.CareerPeriod>
              </S.CareerHeading>
              <S.CareerBody>
                <S.CareerTasks>
                  {education.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </S.CareerTasks>
              </S.CareerBody>
            </li>
          </S.CareerList>
        </S.ContentSection>
        <S.ContentSection aria-labelledby="project-summary-title">
          <h2 id="project-summary-title">
            <Link href="/projects/" scroll={false}>
              프로젝트 요약 <span aria-hidden="true">↗</span>
            </Link>
          </h2>
          <S.CareerList role="list">
            {projectSummaries.map(({ slug }) => {
              const project = projects.find((item) => item.slug === slug)!;
              return (
                <li key={slug}>
                  <S.ProjectSummaryLink href={`/projects/${slug}/`} scroll={false}>
                    <h3>{project.title}</h3>
                    <S.CareerLeader aria-hidden="true" />
                    <S.CareerPeriod>{project.period}</S.CareerPeriod>
                  </S.ProjectSummaryLink>
                </li>
              );
            })}
          </S.CareerList>
        </S.ContentSection>
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
    </S.AboutContent>
  );
}
