import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { education, workExperience } from '@/data/about';
import { projects } from '@/data/projects';
import { coreCompetencies, resumeContact, resumeProjects } from '@/data/resume';
import { GithubIcon, LinkedinIcon, VelogIcon } from './Icons';
import profilePhoto from './profile.jpg';
import styles from './resume.module.css';

export const metadata: Metadata = { title: '이력서' };

const montserrat = Montserrat({ subsets: ['latin'] });
const techStack = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'TanStack Query', 'Zustand'];

const featuredProjects = resumeProjects.map((entry) => {
  const project = projects.find(({ slug }) => slug === entry.slug);
  if (!project) throw new Error(`이력서에 연결한 프로젝트를 찾을 수 없습니다: ${entry.slug}`);
  return { ...entry, title: project.title, period: project.period, live: project.live };
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = 'resume-' + title.toLowerCase().replaceAll(' ', '-');
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className={`${styles.sectionHeading} ${montserrat.className}`}>{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return <ul className={styles.bullets}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function ResumePage() {
  return (
    <div className={styles.resume}>
      <div className={styles.slogan}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        </svg>
        <blockquote>사용자가 자연스럽게 <strong>흐름을 이해할 수 있는 경험</strong>을 만드는 프론트엔드 개발자</blockquote>
      </div>

      <header className={styles.header}>
        <div className={styles.identity}>
          <div>
            <h1 id="page-title">{resumeContact.name}</h1>
            <dl className={styles.contact}>
              <div><dt>주소</dt><dd>인천 부평구</dd></div>
              <div><dt>생년월일</dt><dd>1996.03.07</dd></div>
              <div><dt>이메일</dt><dd><a href={`mailto:${resumeContact.email}`}>{resumeContact.email}</a></dd></div>
            </dl>
            <nav className={styles.profiles} aria-label="외부 프로필 링크">
              <a href="https://github.com/garlatonic" target="_blank" rel="noopener noreferrer" aria-label="GitHub로 이동"><GithubIcon /></a>
              <a href="https://velog.io/@garlatonic" target="_blank" rel="noopener noreferrer" aria-label="블로그로 이동"><VelogIcon /></a>
              <a href="https://www.linkedin.com/in/garlatonic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn으로 이동"><LinkedinIcon /></a>
            </nav>
          </div>
          <Image src={profilePhoto} alt="프로필" width={90} height={120} loading="eager" unoptimized />
        </div>
        <section className={styles.introduction} aria-label="자기소개">
          <p>3년간 커머스 플랫폼 퍼블리셔로 일하며 단순한 화면 구현을 넘어, <strong>사용자가 쉽게 이해하고 사용할 수 있는 기능 설계</strong>의 중요성을 체감했습니다.</p>
          <p>이 경험은 사용자 문제를 <strong>로직과 상태 흐름까지 포함해 해결</strong>해야 한다는 문제의식으로 이어졌고, 이후 React/Next.js 기반 프로젝트에서 사용자 흐름 개선과 데이터 구조 설계를 중심으로 프론트엔드 역량을 확장해 왔습니다.</p>
        </section>
      </header>

      <div className={styles.columns}>
        <div className={styles.skills}>
          <Section title="Core Competencies"><Bullets items={coreCompetencies} /></Section>
          <Section title="Tech Stack">
            <ul className={styles.tags}>{techStack.map((tech) => <li key={tech}><span>{tech}</span></li>)}</ul>
          </Section>
        </div>

        <div className={styles.history}>
          <Section title="Experience">
            {workExperience.map((work) => (
              <article className={styles.entry} key={work.company}>
                <header>
                  <div><h3>{work.company}</h3><p>{work.position}</p></div>
                  <span>{work.period}</span>
                </header>
                <div><h4>담당 업무</h4><Bullets items={work.responsibilities} /></div>
              </article>
            ))}
          </Section>
          <Section title="Projects">
            {featuredProjects.map((project) => (
              <article className={styles.project} key={project.slug}>
                <header>
                  <div><h3>{project.title}</h3><p>{project.affiliation}</p></div>
                  <span>{project.period}</span>
                </header>
                <p>{project.description}</p>
                <div><h4>담당 역할</h4><Bullets items={project.roles} /></div>
              </article>
            ))}
          </Section>
        </div>

        <div className={styles.credentials}>
          <Section title="Education">
            <ul className={styles.qualifications}>
              <li><p>{education.title}</p><p>클라우드 기반 프론트엔드<br />{education.period}</p></li>
              <li><p>조선대학교</p><p>기계공학과·정보통신공학과<br />2015.03 – 2020.02</p></li>
            </ul>
          </Section>
          <Section title="Certificate">
            <ul className={styles.qualifications}>
              <li><p>정보처리기사</p><p>한국산업인력공단 · 2021.06</p></li>
            </ul>
          </Section>
          <Section title="Portfolio">
            <ul className={styles.portfolio}>
              <li><a href="https://garlatonic.github.io" target="_blank" rel="noopener noreferrer"><GithubIcon />GitHub·garlatonic</a></li>
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 3h6v6m0-6L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
                    </svg>
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>

      <section className={styles.essay}>
        <h2>자기소개서</h2>
        <h3>사용자 경험을 설계하는 개발자</h3>
        <p>안녕하세요. 사용자가 서비스를 자연스럽게 이해하고 목적을 달성할 수 있는 경험을 만드는 과정에 가장 큰 흥미를 느끼는 프론트엔드 개발자 박상아입니다.</p>
        <p>3년간 다양한 커머스 플랫폼 구축 업무를 수행하며 사용자가 더 자연스럽게 서비스를 이용할 수 있는 흐름에 집중해왔습니다. 이후 <strong>사용자 불편을 데이터 구조와 상태 흐름 관점에서 분석하고 해결하는 프론트엔드 개발자</strong> 역량을 키워왔습니다.</p>

        <h4>[반복 주문을 하나의 흐름으로 통합한 복수 배송지 기능 구현]</h4>
        <p>재직 당시, 전라북도 중소기업·농가 생산품을 판매하는 커머스 플랫폼 구축 과정에서 고객사로부터 복수 배송지 기능 개발 요청을 받았습니다. 명절 선물 수요가 많은 서비스 특성상 하나의 주문에서 여러 배송지로 상품을 발송해야 했지만, 기존 플랫폼은 주문당 하나의 배송지만 지원해 <strong>사용자가 동일한 주문 과정을 반복해야 하는 불편함</strong>이 있었습니다.</p>
        <p>이를 해결하기 위해 주문서 API를 분석하고, 배송지 구조를 활용해 복수 배송지 기능을 구현했습니다. 특히 동일한 상품을 배송지별로 다른 수량으로 주문할 수 있어 데이터 일관성을 유지하는 것이 중요했습니다. 이에 배송지 단위로 상품 정보를 관리하고, 전체 수량과의 일치 여부를 검증하는 로직을 구현했습니다. 또한 주문서에서 생성된 배송지 정보가 주문 완료, 주문 상세 페이지까지 일관되게 유지되도록 데이터 흐름을 연동했습니다.</p>
        <p>그 결과 사용자는 <strong>배송지 수만큼 반복 주문하던 과정을 하나의 주문으로 처리</strong>할 수 있게 되었고, 고객사의 운영 요구사항 또한 플랫폼 제약 환경 내에서 충족할 수 있었습니다.</p>

        <h4>[사용자 입력 부담을 줄이기 위한 UX 개선]</h4>
        <p>데브코스 파이널 프로젝트에서는 사용자가 장소 일정뿐 아니라 이동 일정까지 직접 생성해야 해 <strong>입력 과정이 복잡하다는 문제</strong>를 발견했습니다. 또한 장소 검색 과정에서 입력값이 변경될 때마다 API가 호출되어 불필요한 네트워크 요청이 반복되고 있었습니다.</p>
        <p>이를 개선하기 위해 장소 일정만 등록하면 이동 일정이 자동 생성되도록 기능을 설계했습니다. 장소 간 구간을 탐지해 이동 일정을 생성하고, TMap API를 활용해 소요시간과 교통수단 정보를 자동으로 반영했습니다. 또한 장소 검색 기능에는 Debounce와 캐싱 전략을 적용해 동일하거나 짧은 간격으로 발생하는 API 요청을 줄였습니다.</p>
        <p>그 결과 일정 생성 과정에서 필요한 사용자 입력 단계를 <strong>약 24%</strong>, 장소 검색 API 호출을 <strong>약 83% 감소</strong>시킬 수 있었습니다. 이를 통해 사용자가 이동 일정 입력에 소요하던 반복 작업을 줄이고, 일정 계획 자체에 집중할 수 있는 경험을 제공했습니다.</p>

        <h4>[협업과 유지보수를 고려하는 개발 방식]</h4>
        <p>재직 당시에는 신규 입사자를 위한 참고 자료가 부족하고 프로젝트마다 구현 방식과 코드 스타일이 달라 <strong>동일한 질문이 반복</strong>되는 경우가 많았습니다. 또한 기존 기능을 참고하기 위해 담당자를 직접 찾아야 하는 등 <strong>특정 인원에게 정보가 집중되는 문제</strong>가 있었습니다.</p>
        <p>이를 개선하기 위해 Wiki 기반 온보딩 문서를 구축하고, 프로젝트 공통 코드 컨벤션과 자주 구현되는 기능에 대한 개발 가이드를 정리했습니다. 특히 신규 인원이 프로젝트 구조와 업무 흐름을 빠르게 이해할 수 있도록 환경 설정, 업무 프로세스, 주요 기능 구현 사례를 체계적으로 문서화했습니다.</p>
        <p>그 결과 신규 인원이 필요한 정보를 <strong>스스로 탐색할 수 있는 환경을 마련</strong>했으며, 반복적인 질문과 정보 탐색에 소요되는 커뮤니케이션 비용을 줄일 수 있었습니다. 이 경험을 통해 개발자는 기능 구현뿐 아니라 팀이 효율적으로 협업할 수 있는 구조를 만드는 역할도 중요하다는 점을 배웠습니다.</p>

        <h4>[앞으로의 목표]</h4>
        <p>앞으로도 <strong>사용자가 서비스를 자연스럽게 이용할 수 있는 경험을 고민하고, 실제 서비스 문제를 구조적으로 해결할 수 있는 프론트엔드 개발자</strong>로 성장하고 싶습니다. 단순히 화면을 구현하는 개발자가 아니라 사용자 흐름과 데이터 구조, 협업 방식까지 함께 고민하며 서비스의 완성도를 높일 수 있는 개발자가 되기 위해 꾸준히 고민하고 성장해나가겠습니다.</p>
      </section>
    </div>
  );
}
