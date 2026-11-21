import * as S from "@/styles/components";
export default function Home() {
  return (
    <S.HomeContent id="main-content" aria-labelledby="page-title" tabIndex={-1}>
      <S.ScreenReaderHeading id="page-title">SangA Park · Frontend Developer</S.ScreenReaderHeading>
      <p>작은 디테일로 사용 경험을 다듬는 프론트엔드 개발자, 박상아입니다.</p>
      <p>화면 속 작은 요소 하나까지도 의미 있게 설계하여, 사용자가 기술을 의식하지 않고 자연스럽게 몰입할 수 있는 서비스를 만들고자 합니다.</p>
    </S.HomeContent>
  );
}
