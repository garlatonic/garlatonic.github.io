import * as S from "@/styles/components";
export default function Home() {
  return (
    <S.HomeContent id="main-content" aria-labelledby="page-title" tabIndex={-1}>
      <S.ScreenReaderHeading id="page-title">SangA Park · Frontend Developer</S.ScreenReaderHeading>
      <p>사용자의 편의를 설계하는 프론트엔드 개발자, 박상아입니다.</p>
      <p>3년간의 웹 퍼블리싱 경험을 바탕으로 자연스러운 사용자 경험을 만듭니다.</p>
    </S.HomeContent>
  );
}
