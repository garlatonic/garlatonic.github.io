import * as S from "@/styles/components";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "기록" };

export default function Notes() {
  return (
    <S.PageContent id="main-content" aria-labelledby="page-title" tabIndex={-1}>
      <S.Heading id="page-title">기록</S.Heading>
      <S.Prose>
        <p>개발 기록은 <a href="https://velog.io/@garlatonic" target="_blank" rel="noopener noreferrer">Velog ↗</a>에 남기고 있습니다.</p>
      </S.Prose>
    </S.PageContent>
  );
}
