import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "소개" };

const skills = [
  ["코어", "React, TypeScript, Next.js, JavaScript"],
  ["상태 관리", "TanStack Query, Zustand"],
  ["폼 관리", "React Hook Form, Zod"],
  ["스타일링", "Tailwind CSS, shadcn/ui, Styled-Components"],
  ["형상 관리", "Git, GitHub"],
  ["협업 도구", "Notion, Figma, Slack, Photoshop, Swagger"],
];

export default function About() {
  return (
    <main id="main-content" className="page-content">
      <h1>Sanga Park · 박상아</h1>
      <div className="prose intro">
        <p>사용자의 편의를 설계하는 프론트엔드 개발자입니다.</p>
        <p>
          3년간의 웹 퍼블리싱 경험을 통해 사용자 경험이 서비스의 품질을 결정한다는 것을 배웠습니다.
          이제는 주니어 프론트엔드 개발자로서 기술적 완성도와 사용자 중심의 관점을 함께 고민하며,
          더 자연스럽고 직관적인 사용 경험을 만드는 데 집중하고 있습니다.
        </p>
        <p>
          화면 속 작은 요소 하나까지도 의미 있게 설계하여,
          사용자가 기술을 의식하지 않고 자연스럽게 몰입할 수 있는 서비스를 만들고자 합니다.
        </p>
        <p>
          직접 참여한 작업은 <Link href="/projects/">프로젝트</Link>에서,
          개발 기록은 <a href="https://velog.io/@garlatonic">Velog</a>에서 확인하실 수 있습니다.
          <a href="https://github.com/garlatonic"> GitHub</a>와{" "}
          <a href="https://www.linkedin.com/in/garlatonic/">LinkedIn</a>에서도 저를 찾으실 수 있고,
          연락은 <a href="mailto:garlatonic@kakao.com">이메일</a>로 부탁드립니다.
        </p>
        <section className="content-section" aria-labelledby="skills-title">
          <h2 id="skills-title">기술 스택</h2>
          <dl className="skills-list">
            {skills.map(([label, items]) => (
              <div key={label}><dt>{label}</dt><dd>{items}</dd></div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  );
}
