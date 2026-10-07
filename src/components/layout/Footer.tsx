import * as S from "@/styles/components";
export default function Footer() {
  return (
    <S.SiteFooter aria-label="연락처 및 소셜 링크">
      <a href="https://velog.io/@garlatonic" target="_blank" rel="noopener noreferrer">Velog</a>
      <a href="https://www.linkedin.com/in/garlatonic/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/garlatonic" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="mailto:garlatonic@kakao.com">Email</a>
    </S.SiteFooter>
  );
}
