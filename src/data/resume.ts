import GithubIcon from "@/components/common/github-icon";
import LinkedinIcon from "@/components/common/linkedin-icon";
import VelogIcon from "@/components/common/velog-icon";
import { ExternalLinkIcon } from "lucide-react";
import { projects } from "./projects";

const portfolio = projects;

export const resumeData: ResumeData = {
  name: "박상아",
  slogan: "고객의 경험을 <b>화면에 녹여내는</b> 프론트엔드 개발자",
  jobTitle: "Frontend Developer",
  meta: {
    common: [
      {
        label: "주소",
        value: "인천 부평구",
      },
      {
        label: "생년월일",
        value: "1996.03.07",
      },
      {
        label: "이메일",
        value: "sangapark34@naver.com",
      },
    ],
    links: [
      {
        label: "GitHub",
        value: "https://github.com/garlatonic",
        icon: GithubIcon,
      },
      {
        label: "블로그",
        value: "https://velog.io/@garlatonic",
        icon: VelogIcon,
      },
      {
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/garlatonic",
        icon: LinkedinIcon,
      },
    ],
  },
  simpleIntroduction: [
    "3년간 웹 퍼블리셔로 커머스 플랫폼의 다양한 웹사이트를 구축하며, <b>고객의 사용 경험을 고려한 UI 구현과 기능 개선</b>의 중요성을 체감했습니다.",
    "이를 바탕으로 JS 기반 기능 개발과 React/Next.js 프로젝트를 경험하며, <b>사용자 경험을 기능과 로직으로 구현하는 프론트엔드 역량</b>을 확장해 왔습니다.",
  ],
  techStack: [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Liquid",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
  ],
  coreCompetencies: [
    "커머스 플랫폼 기반 UI/UX 구현·개선",
    "JS 기반 기능 확장·인터랙션 구현",
    "사용자 흐름을 고려한 기능 설계·UX 개선",
    "웹 접근성·반응형 실제 서비스 구축·운영",
    "Wiki·컨벤션·Git 전략 기반 협업 개선",
  ],
  education: [
    {
      title: "프로그래머스 데브코스",
      subtitle: "클라우드 기반 프론트엔드",
      period: "2025.07 – 2026.01",
    },
    {
      title: "조선대학교",
      subtitle: "기계공학과·정보통신공학과",
      period: "2015.03 – 2020.02",
    },
  ],
  certifications: [
    {
      title: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2021.06",
    },
  ],
  portfolio: [
    {
      title: "GitHub·garlatonic",
      description: "개인 포트폴리오 사이트",
      link: "https://garlatonic.github.io",
      icon: GithubIcon,
      isLink: true,
    },
    {
      title: portfolio[0].name,
      description: portfolio[0].overview,
      link: portfolio[0].link,
      icon: ExternalLinkIcon,
      isLink: true,
    },
    {
      title: portfolio[1].name,
      description: portfolio[1].overview,
      link: portfolio[1].link,
      icon: ExternalLinkIcon,
      isLink: true,
    },
    {
      title: portfolio[2].name,
      description: portfolio[2].overview,
      link: portfolio[2].link,
      icon: ExternalLinkIcon,
      isLink: true,
    },
  ],
  career: [
    {
      company: "(주)모리엔티드",
      position: {
        team: "글로벌마케팅팀",
        grade: "대리",
        term: "정규직",
      },
      period: "2026.07 – 재직 중",
      responsibilities: [
        {
          label: "담당 업무",
          details: [
            "Shopify 기반 커머스 사이트 구축을 위한 테마 구조 및 커스터마이징 방식 검토",
            "Liquid 및 Section·Block 구조를 활용한 Shopify 테마 기능 구현·테스트",
            "테마별 제공 기능 분석 및 커스터마이징 가능 범위 검토",
            "Shopify 테마 구축 프로세스 및 디자인 시안 전달 가이드 정리",
          ],
        },
      ],
    },
    {
      company: "케이에이치이노베이션",
      position: {
        team: "기술개발팀",
        grade: "사원",
        term: "정규직",
      },
      period: "2022.05 – 2025.04",
      responsibilities: [
        {
          label: "담당 업무",
          details: [
            "작업안내서와 디자인 시안을 기반으로 한 프론트엔드 개발 및 웹 퍼블리싱",
            "기획·디자인 단계에서 기능 동작 검수 및 UI 구현 가능 여부 검토",
            "카페24, NHN Shopby 기반 쇼핑몰 PC/Mobile UI 퍼블리싱 및 반응형 웹 구축",
            "다양한 디바이스·브라우저 환경을 고려한 웹 접근성·웹 표준 기반 UI 구현",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "내 콘서트를 부탁해",
      affiliation: "프로그래머스 데브코스·프론트엔드/백엔드 협업 팀 프로젝트",
      period: "2025.12 – 2026.01",
      description:
        "공연 예매부터 뒤풀이까지 일정을 통합 관리하는 올인원 공연 일정 관리 플랫폼. 프론트엔드·백엔드 협업 프로젝트로, 사용자 흐름 개선과 일정 관리 UX 최적화에 집중",
      role: [
        "FE 팀장 — GitHub 브랜치 전략, 배포 플로우, 프로젝트 문서 관리",
        "공통 컴포넌트·디자인 시스템 기준 정리 / 코드 리뷰·협업 프로세스 운영",
        "메인·공연 상세·외출 플래너·검색·마이페이지 등 핵심 화면 구현 전담",
        "플랫폼 전 페이지 레이아웃·반응형·다크모드 UI 구현",
        "UX 개선 및 성능 최적화",
      ],
    },
    {
      title: "전북생생장터",
      affiliation: "케이에이치이노베이션",
      period: "2023.10 – 2024.04",
      description:
        "전라북도 중소기업·농가 생산품을 판매하는 커머스 플랫폼. NHN Shopby 기반 환경에서 플랫폼 기본 기능만으로 해결되지 않는 요구사항을 분석하고 기능 확장",
      role: [
        "쇼핑몰 전체 페이지(PC/Mobile) UI 구현 및 React 컴포넌트 개발",
        "플랫폼 미지원 기능(복수 배송지·댓글) 설계·구현",
        "배송지 단위 상품 그룹화 구조 설계 → 주문서·주문완료·주문상세 데이터 흐름 연동",
        "체험단 게시판 댓글 CRUD 및 수정 모달 기반 인터랙션 구현",
      ],
    },
    {
      title: "포켓몬 스토어 온라인",
      affiliation: "케이에이치이노베이션",
      period: "2023.09 – 2023.10",
      description:
        "포켓몬 코리아의 공식 커머스 플랫폼. NHN Shopby 기반 환경에서 PC/Mobile 전체 UI 퍼블리싱 및 운영 요구사항에 맞춘 기능 구현",
      role: [
        "쇼핑몰 전체 페이지(PC/Mobile) UI 퍼블리싱 및 반응형 웹 구축",
        "웹 접근성·웹 표준 기반 UI 마크업 및 스타일링",
        "운영 요구사항에 맞춘 상품·이벤트 콘텐츠 UI 구성",
        "Vanilla JS 기반 갤러리형 게시판·카드형 레이아웃·인터랙션 구현",
      ],
    },
  ],
  introductionDetails: [
    {
      title: "",
      detail: [
        {
          title: "고객의 경험을 고려한 커머스 UI 구현",
          detail: [
            "3년간 웹 퍼블리셔로 다양한 커머스 플랫폼의 쇼핑몰을 구축하고 운영하며, 화면의 완성도뿐만 아니라 고객이 실제로 서비스를 이용하는 과정까지 고려해야 한다는 점을 배웠습니다. 이를 계기로 디자인 시안을 구현하는 데 그치지 않고, 고객의 사용 흐름을 고려해 UI와 기능을 구현하는 것을 중요하게 생각해 왔습니다. 기획·디자인 단계의 기능 검토부터 JS 기반 기능 개발까지 업무 범위를 넓혔으며, 이후 React와 Next.js 기반 프로젝트를 통해 사용자 흐름과 로직까지 설계할 수 있는 프론트엔드 역량을 확장했습니다.",
          ],
        },
        {
          title: "플랫폼의 한계를 넘어선 기능 개선",
          detail: [
            "커머스 플랫폼에서 근무하며 <b>플랫폼에서 기본으로 제공하는 기능만으로는 실제 요구사항을 해결하기 어려운 상황</b>을 여러 차례 경험했습니다. 전북생생장터 프로젝트에서는 Shopby에서 지원하지 않는 복수 배송지 기능을 구현하기 위해 배송지별 상품 그룹화 구조를 설계하고, 주문서부터 주문완료·주문상세까지 이어지는 데이터 흐름을 연결했습니다. 이 경험을 통해 주어진 환경과 기능에 맞춰 구현하는 데 그치지 않고, 사용자의 이용 흐름을 기준으로 필요한 기능을 정의하고 플랫폼의 제약 안에서 해결 방법을 찾는 과정의 중요성을 배웠습니다.",
          ],
        },
        {
          title: "협업과 운영을 고려한 개발 방식",
          detail: [
            "실제 서비스에서는 기능을 구현하는 것만큼 <b>누가 작업하더라도 이해하고 유지보수할 수 있는 환경을 만드는 것</b>이 중요하다고 생각합니다. 이전 직장에서는 Wiki 기반 온보딩 문서와 HTML·CSS·JS 코드 컨벤션을 정리하고, 반복적으로 사용하는 기능을 공통 구조로 관리하며 팀원 간 작업 방식의 편차를 줄이고자 했습니다. 이러한 경험을 바탕으로 현재도 개발 과정에서 필요한 기준과 프로세스를 문서화하고, 기획·디자인 단계에서부터 원활하게 협업할 수 있는 방식을 함께 고민하고 있습니다.",
          ],
        },
        {
          title: "지원동기 및 입사 후 목표",
          detail: [
            "커머스 플랫폼에서 고객이 직접 마주하는 화면을 구현하고 기능을 개선해 온 경험을 바탕으로, 최근에는 Shopify와 Liquid를 학습하며 커머스 개발 경험의 범위를 넓혀가고 있습니다. <b>퍼블리싱 전문성을 기반으로 프론트엔드 개발 영역을 확장하면서, 다양한 브랜드의 사용자 경험과 사이트 운영 방식을 함께 개선한다는 데일리앤코의 지향성이 제가 지금까지 쌓아온 경험과 앞으로 발전시키고 싶은 역량에 잘 맞는다고 생각해 지원했습니다.</b> 입사 후에는 다양한 커머스 플랫폼을 다뤄온 경험과 프론트엔드 개발 역량을 바탕으로 안정적인 UI 구현뿐만 아니라, 고객과 운영자 모두에게 더 나은 경험을 제공할 수 있는 개선점을 적극적으로 고민하고 제안하는 개발자로 기여하고 싶습니다.",
          ],
        },
      ],
    },
  ],
};
