import { concertChallenges } from "./project-challenges/concert";
import { freshjbChallenges } from "./project-challenges/freshjb";
import { pokemonstoreChallenges } from "./project-challenges/pokemonstore";
import { updownChallenges } from "./project-challenges/updown";
import { chickengalaxyChallenges } from "./project-challenges/chickengalaxy";
import type { Challenge } from "./project-challenges/types";

export type Project = {
  slug: string;
  title: string;
  category: string;
  period: string;
  description: string;
  stack: string[];
  live: string;
  repository?: string;
  introduction: string[];
  roles: string[];
  challenges: Challenge[];
};

export const projects: Project[] = [
  {
    slug: "naeconcertbutakhae",
    title: "내 콘서트를 부탁해",
    category: "데브코스 팀 프로젝트",
    period: "2025.12 – 2026.01",
    description: "공연 예매부터 공연 당일 계획 세우기까지, 모든 과정을 관리할 수 있는 올인원 매니지먼트 플랫폼",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "TanStack Query", "Kakao Map API"],
    live: "https://naeconcertbutakhae.shop/",
    repository: "https://github.com/prgrms-web-devcourse-final-project/WEB6_7_codecrete_FE",
    introduction: [
      "내 콘서트를 부탁해는 공연 일정 관리, 장소 탐색, 이동 동선 계획까지 하나의 흐름으로 연결한 공연 올인원 매니지먼트 플랫폼입니다. 공연 하나를 보기 위해 여러 앱과 메모를 오가야 하는 불편함을 해소하고, 사용자가 더 자연스럽게 일정을 계획할 수 있도록 만드는 것을 목표로 했습니다.",
      "FE 팀장, Git 총괄, 디자인 리드 역할을 맡아 화면 설계부터 구현, 협업 흐름까지 폭넓게 주도했습니다. 기능을 단순히 구현하는 데 그치지 않고, 사용자가 입력 과정에서 느끼는 피로를 줄이고 필요한 정보에 더 빠르게 도달할 수 있는 UX를 만드는 데 집중했습니다.",
      "외출플래너 입력 흐름 재설계, Debounce 기반 검색 최적화, TanStack Query 캐싱 전략 적용을 통해 사용자 경험과 기술적 안정성을 함께 끌어올렸습니다. 프론트엔드·백엔드 협업으로 진행된 데브코스 최종 프로젝트로, 초기 렌더링 성능과 SEO 대응까지 고려하며 제품 완성도를 높인 결과 총 8팀 중 2등을 차지했습니다."
    ],
    roles: [
      "FE 팀장 (9명 중 FE 3명)",
      "Git 총괄 / 디자인 총괄",
      "메인 · 공연 상세 · 외출 플래너 · 검색 · 마이페이지 등 핵심 화면 설계 및 구현",
      "플랫폼 전 페이지 레이아웃 · 반응형 · 다크모드 UI 구현",
      "TanStack Query 캐싱 전략 적용 및 Lighthouse 성능 개선",
      "백엔드 협업 경험"
    ],
    challenges: concertChallenges
  },
  {
    slug: "freshjb",
    title: "전북생생장터",
    category: "케이에이치이노베이션",
    period: "2023.10 – 2024.04",
    description: "전북특별자치도 경제통상진흥원에서 운영하는 지역 농가 특산물 온라인 쇼핑몰",
    stack: ["React", "@shopby/react-components", "NHN Shopby"],
    live: "https://freshjb.com/",
    introduction: [
      "전북생생장터는 전북특별자치도의 지역 특산물을 온라인으로 판매하는 커머스 플랫폼입니다. 지역 농가와 소비자를 직접 연결하는 서비스인 만큼, 상품 탐색부터 주문·결제까지의 흐름이 자연스럽고 신뢰감 있게 이어지는 사용자 경험이 중요했습니다.",
      "React와 @shopby/react-components를 활용해 쇼핑몰 전반의 사용자 화면을 구현하고, PC와 모바일 환경을 모두 고려한 UI 개발을 담당했습니다. 단순한 퍼블리싱을 넘어, 실제 사용 흐름 속에서 불편함이 생기지 않도록 화면 구조와 상호작용을 세심하게 다듬는 데 집중했습니다.",
      "특히 고객사의 요구사항 중 NHN Shopby 플랫폼이 기본적으로 지원하지 않는 기능이 많아, 이를 직접 보완해야 하는 상황이 발생했습니다. 복수 배송지 기능, 체험단 게시판 댓글 기능, 장바구니 수량 동기화 문제 등을 해결하며, 플랫폼의 한계를 넘어서는 커스텀 프론트엔드 개발 역량을 키울 수 있었던 프로젝트입니다."
    ],
    roles: [
      "쇼핑몰 전체 페이지(PC/Mobile) UI 구현 및 React 컴포넌트 개발",
      "플랫폼 미지원 기능을 사용자 흐름에 맞게 커스텀 개발하여 고객사 요구사항 충족",
      "복수 배송지별 상품·수량 지정과 수량 검증, 주문상세의 배송지별 내역 표시 구현",
      "체험단 게시판의 댓글 CRUD 구현 및 모달 기반 인터랙션 구현"
    ],
    challenges: freshjbChallenges
  },
  {
    slug: "pokemonstore",
    title: "포켓몬스토어 온라인",
    category: "케이에이치이노베이션",
    period: "2023.09 – 2023.10",
    description: "포켓몬 공식 굿즈를 판매하는 온라인 쇼핑몰",
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "Handlebars.js", "Shopby SDK"],
    live: "https://pokemonstore.co.kr/",
    introduction: [
      "포켓몬 스토어 온라인은 포켓몬 공식 굿즈를 판매하는 온라인 쇼핑몰로, 브랜드 경험과 상품 탐색의 즐거움이 함께 중요한 서비스였습니다. 초기 구축 단계의 퍼블리싱을 전담하며 서비스 전반의 사용자 화면을 설계하고 구현했습니다.",
      "HTML, CSS, JavaScript, jQuery, Handlebars.js 기반의 Shopby SDK 환경에서 전체 페이지의 구조와 스타일을 구성하고, 다양한 운영 요구사항을 실제 화면에 반영했습니다. PC와 모바일을 모두 고려한 퍼블리싱과 함께, 브랜드 톤을 해치지 않으면서도 사용성이 자연스럽게 유지되도록 디테일을 다듬는 데 집중했습니다.",
      "NHN Shopby 서비스가 런칭된 지 얼마 되지 않은 시기에 진행된 프로젝트인 만큼, 플랫폼이 기본적으로 제공하지 않는 갤러리형 게시판 UI를 Vanilla JavaScript로 직접 구현해야 했습니다. 단순한 리스트 구조로는 브랜드 특성을 살리기 어려웠던 게시판 영역에 카드 형태의 갤러리 UI를 설계하고 적용하면서, 콘텐츠의 시각적 매력과 탐색성을 함께 높인 것은 물론 프론트엔드 개발자로서 첫 발걸음을 내디딘 의미 있는 프로젝트였습니다."
    ],
    roles: [
      "쇼핑몰 전체 페이지(PC/Mobile) UI 퍼블리싱 및 반응형 웹 구축",
      "웹 접근성 · 웹 표준 기반 UI 마크업 및 스타일링",
      "운영 요구사항에 맞춘 상품 · 콘텐츠 UI 구성",
      "브랜드 경험을 유지한 커스텀 게시판 UI 구현"
    ],
    challenges: pokemonstoreChallenges
  },
  {
    slug: "updown",
    title: "업다운",
    category: "데브코스 팀 프로젝트",
    period: "2025.11 – 2025.11",
    description: "일상의 감정을 시장 지수처럼 기록·시각화하고, 공감 기반 커뮤니티에서 함께 나누는 감정 기록 서비스",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    live: "https://fe-7-project-3-team-1.vercel.app/",
    repository: "https://github.com/prgrms-fe-devcourse/FE7-PROJECT3-TEAM-1",
    introduction: [
      "업다운 감정시장은 흩어지고 사라지는 일상의 감정을 한 화면에 모아 보여주는 감정 기록 커뮤니티 서비스입니다. 사용자가 하루의 기분을 간단히 기록하면, 이를 차트와 지수로 시각화해 오늘과 최근의 감정 흐름을 한눈에 파악할 수 있도록 설계했습니다.",
      "프로젝트 리더이자 디자인 총괄로 참여해 전체 컨셉과 UI 톤을 정립하고, 커뮤니티·게시글 상세·감정 그래프 등 핵심 화면의 기능 구현을 주도했습니다. 게시글, 댓글, 좋아요 같은 커뮤니티 핵심 기능을 안정적으로 구현하면서도, 감정이라는 추상적인 주제를 사용자가 가볍고 자연스럽게 기록할 수 있도록 흐름과 인터랙션을 세심하게 다듬었습니다.",
      "무한스크롤, 실시간 감정 집계, 태그 클라우드 기반 시각화, 반응형 및 다크모드 대응, 공통 컴포넌트 설계를 통해 서비스의 전반적인 완성도를 높였습니다. 짧은 기간 안에 팀의 개발 생산성과 사용자 경험을 함께 끌어올리며, 프론트엔드 4팀 중 1등을 차지한 프로젝트입니다."
    ],
    roles: [
      "프로젝트 리더 / 디자인 총괄",
      "커뮤니티·게시글 상세·마이페이지 등 핵심 화면 설계 및 구현",
      "무한스크롤 피드, 감정 지수·트렌드 시각화, 다크모드·반응형 UI 구현",
      "공통 컴포넌트 설계 및 Loading/Empty/Error 상태 UI 구현"
    ],
    challenges: updownChallenges
  },
  {
    slug: "chickengalaxy",
    title: "치킨갤럭시",
    category: "데브코스 팀 프로젝트",
    period: "2025.10 – 2025.11",
    description: "치킨을 사랑하는, 치킨에 진심인 한국인들을 위한 우주 테마 커뮤니티 서비스",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    live: "https://fe-7-project-2-team-3.vercel.app/",
    repository: "https://github.com/prgrms-fe-devcourse/FE7-PROJECT2-TEAM-3",
    introduction: [
      "치킨갤럭시는 한국인의 소울푸드인 치킨을 중심으로 취향과 의견, 각자의 치킨 철학을 마음껏 나눌 수 있는 우주 테마 커뮤니티 서비스입니다. 짧은 기간 안에 검색, 탐색, 반응형 UI까지 갖춘 완성도 높은 서비스를 구현하는 것을 목표로 프로젝트를 진행했습니다.",
      "팀장으로서 프로젝트의 전반적인 방향을 조율하고 Git과 디자인을 총괄하며, 핵심 기능 구현에도 직접 참여했습니다. 사용자가 원하는 글과 정보를 빠르게 찾을 수 있도록 검색 경험을 설계하고, 다양한 데이터·상태 변화 속에서도 서비스가 안정적으로 보이도록 UI를 구성하는 데 집중했습니다.",
      "React Compiler를 선제적으로 도입해 렌더링 성능을 개선하고, 검색 시스템과 상태별 UI 처리를 정교하게 구현했으며, 배포 단계에서 발생한 빌드·환경 오류도 직접 해결했습니다. 기능 구현부터 성능 최적화, 배포 안정성 확보까지 프론트엔드 전반을 폭넓게 경험할 수 있었던 프로젝트로, 팀원들과 함께 문제를 해결해 나가는 과정에서 협업의 가치를 깊이 체감하며 프론트엔드 5팀 중 1등 프로젝트로 선정되는 성과를 거두었습니다."
    ],
    roles: [
      "프론트엔드 팀장",
      "Git 총괄 / 디자인 총괄",
      "프로젝트 전반 방향 조율 및 기반 레이아웃 구현",
      "검색 시스템 설계 전체 구현",
      "성능 최적화 및 상태별 UI 안정성 개선"
    ],
    challenges: chickengalaxyChallenges
  }
];
