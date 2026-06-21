// ----------------- 이력서 ------------------

// 각 링크별 아이콘
type DocIconComponent = React.ComponentType<{ className?: string }>;

// 지원자 기본 정보 및 연락처
interface ResumeMetaCommonItem {
  label: string;
  value: string;
}

// 지원자 링크 정보 (GitHub, 블로그, LinkedIn 등)
interface ResumeMetaLinkItem {
  label: string;
  value: string;
  icon?: DocIconComponent;
}

// 지원자 학력 · 교육 정보
interface ResumeEducationItem {
  title: string;
  subtitle: string;
  period: string;
}

// 지원자 자격증 정보
interface ResumeCertificationItem {
  title: string;
  issuer: string;
  date: string;
}

// 지원자 포트폴리오 정보
interface ResumePortfolioItem {
  title: string;
  description: string;
  link: string;
  icon?: DocIconComponent;
  isLink: boolean;
}

// 지원자 경력 직책 정보
interface ResumeCareerPosition {
  team: string;
  grade: string;
  term: string;
}

// 지원자 경력 상세 정보 (담당 업무, 성과...)
interface ResumeResponsibilityItem {
  label: string;
  details: string[];
}

// 지원자 경력 정보
interface ResumeCareerItem {
  company: string;
  position: ResumeCareerPosition;
  period: string;
  responsibilities: ResumeResponsibilityItem[];
}

// 지원자 프로젝트 정보
interface ResumeProjectItem {
  title: string;
  affiliation: string;
  period: string;
  description: string;
  role: string[];
}

// 지원자 자기소개서 대문단 (지원 동기, 성장 과정, 성격의 장단점 등)
interface ResumeIntroductionDetails {
  title: string;
  detail: ResumeIntroductionDetailsItem[];
}

// 지원자 자기소개서 소문단 (각 대문단 내에서 구체적인 경험, 사례 등을 설명)
interface ResumeIntroductionDetailsItem {
  title?: string;
  detail: string[];
}

interface ResumeData {
  name: string;
  slogan: string;
  jobTitle: string;
  meta: {
    common: ResumeMetaCommonItem[];
    links: ResumeMetaLinkItem[];
  };
  simpleIntroduction: string[];
  techStack: string[];
  coreCompetencies: string[];
  education: ResumeEducationItem[];
  certifications: ResumeCertificationItem[];
  portfolio: ResumePortfolioItem[];
  career: ResumeCareerItem[];
  projects: ResumeProjectItem[];
  introductionDetails: ResumeIntroductionDetails[];
}

// ----------------- 경력 기술서 ------------------
/**
 * 회사에서 맡았던 직책 정보
 * @property team 소속 팀명
 * @property grade 직급 (예: 사원, 대리, 과장 등)
 * @property term 고용 형태 (예: 정규직, 계약직 등)
 */
interface CareerPosition {
  team: string;
  grade?: string;
  term?: string;
}

/**
 * 회사에서 달성한 핵심 성과
 * @property title 성과 요약
 * @property details 성과 상세 설명
 * @property techStack 사용 기술 스택
 */
interface CareerKeyAchievement {
  title: string;
  details: string[];
  techStack?: string[];
}

/**
 * 교육과정 프로젝트에서 달성한 성과
 * @property title 성과 요약
 * @property problems 발견한 문제
 * @property solutions 적용한 해결 방법
 * @property results 결과 및 지표
 * @property techStack 사용 기술 스택
 */
interface CareerAchievement {
  title: string;
  problems: string[];
  solutions: string[];
  results: string[];
  techStack?: string[];
}

/**
 * 회사·교육과정에서 진행한 프로젝트 정보
 * @property title 프로젝트명
 * @property period 프로젝트 기간
 * @property description 프로젝트 설명
 * @property responsibilities 프로젝트 내에서 맡은 역할과 구체적인 업무 내용
 * @property achievements 프로젝트를 통해 달성한 주요 성과 (문제 발견 → 해결 방법 적용 → 결과 및 지표)
 * @property techStack 프로젝트에서 사용한 기술 스택
 */
interface CareerProject {
  title: string;
  period: string;
  description: string;
  responsibilities: {
    title: string;
    details: string[];
  }[];
  achievements: Array<string | CareerAchievement>;
  techStack: string[];
}

/**
 * 회사에서의 경력 정보
 * @property company 회사명
 * @property period 근무 기간
 * @property position 맡았던 직책 정보 (팀명, 직급, 고용 형태)
 * @property summary 회사에서의 역할과 업무에 대한 간략한 설명
 * @property responsibilities 회사에서 맡았던 주요 업무와 책임
 * @property keyAchievements 회사에서 달성한 핵심 성과
 * @property projects 회사에서 진행한 프로젝트 정보
 * @property isEducation 교육과정 여부 (true인 경우 교육과정 프로젝트로 간주, false 또는 생략 시 일반 회사 경력으로 간주)
 */
interface Career {
  company: string;
  period: string;
  position: CareerPosition;
  summary: string;
  responsibilities: string[];
  keyAchievements: CareerKeyAchievement[];
  projects: CareerProject[];
  isEducation?: boolean;
}

/**
 * 지원자의 전체 경력 정보
 * @property career 지원자가 경험한 회사 및 교육과정 프로젝트들의 배열
 */
interface CareerData {
  career: Career[];
}
