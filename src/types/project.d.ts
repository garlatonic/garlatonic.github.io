/**
 * 프로젝트 비디오 정보
 * @property src 비디오 파일 경로 또는 URL
 * @property type 비디오 MIME 타입 (예: "video/mp4")
 */
interface ProjectVideo {
  src: string;
  type: string;
}

/**
 * 트러블슈팅 이미지 정보
 * @property before 문제 상황을 보여주는 이미지 경로 또는 URL
 * @property after 해결된 상황을 보여주는 이미지 경로 또는 URL
 */
interface TroubleShootingImage {
  before: string;
  after: string;
}

/**
 * 트러블슈팅 정보
 * @property title 트러블슈팅 제목
 * @property problem 문제 상황
 * @property solution 해결 방법
 * @property keywords 핵심 키워드 목록 (선택 사항)
 * @property codeSnippet 문제 해결에 사용된 코드 스니펫 (선택 사항)
 * @property images 문제 상황과 해결된 상황을 보여주는 이미지 정보 목록 (선택 사항)
 */
interface TroubleShooting {
  title: string;
  problem: string;
  solution: string;
  keywords?: string[];
  codeSnippet?: string;
  images?: TroubleShootingImage[];
}

/**
 * 프로젝트 정보
 * @property number 프로젝트 번호 (예: 1, 2, 3, ...)
 * @property category 프로젝트 카테고리 (예: "실무 프로젝트", "데브코스 파이널 프로젝트", "데브코스 FE 팀 프로젝트")
 * @property slug 프로젝트 고유 ID (예: "freshjb", "pokemonstore")
 * @property name 프로젝트 이름
 * @property overview 한 줄 개요
 * @property description 상세 설명 문단 목록
 * @property startDate 프로젝트 시작 날짜 (예: "2023.10")
 * @property endDate 프로젝트 종료 날짜 (예: "2024.06" 또는 "현재")
 * @property link 배포 링크
 * @property githubLink GitHub 링크
 * @property thumbnail 썸네일 이미지 경로 또는 URL
 * @property detailImages 상세 페이지에서 사용할 이미지 경로 또는 URL 목록
 * @property skills 사용 기술 스택
 * @property role 맡은 역할 및 주요 기여
 * @property troubleshooting 트러블슈팅 목록 (선택 사항)
 * @property video 프로젝트 관련 비디오 정보 (선택 사항)
 * @property videoThumbnail 비디오 썸네일 이미지 경로 또는 URL (선택 사항)
 */
interface Project {
  number: number;
  category: string;
  slug: string;
  name: string;
  overview: string;
  description: string[];
  startDate: string;
  endDate: string;
  link: string;
  githubLink: string;
  thumbnail: string;
  detailImages: string[];
  skills: string[];
  role: string[];
  troubleshooting?: TroubleShooting[];
  video?: ProjectVideo;
  videoThumbnail?: string;
}
