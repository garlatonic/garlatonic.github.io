export const projects: Project[] = [
  {
    number: 1,
    category: "Practical Project",
    slug: "freshjb",
    name: "전북생생장터",
    overview: "지역 특산물 커머스 플랫폼",
    description: [
      "전북생생장터는 전라북도의 지역 특산물을 온라인으로 판매하는 커머스 플랫폼입니다. 지역 농가와 소비자를 연결하는 서비스인 만큼 상품 탐색, 주문, 결제까지의 흐름이 자연스럽고 신뢰감 있게 이어지는 사용자 경험이 중요했습니다.",
      "저는 이 프로젝트에서 React와 @shopby/react-components를 활용해 쇼핑몰 전반의 사용자 화면을 구현하고, PC와 모바일 환경을 모두 고려한 UI 개발을 담당했습니다. 단순한 퍼블리싱을 넘어 실제 사용 흐름 속에서 불편함이 생기지 않도록 화면 구조와 상호작용을 세심하게 다듬는 데 집중했습니다.",
      "특히 NHN Shopby 플랫폼에서 기본적으로 지원하지 않는 기능을 사용자 요구에 맞춰 직접 보완해야 하는 경우가 많았습니다. 복수 배송지 기능, 체험단 게시판 댓글 기능, 장바구니 수량 동기화 문제 등을 해결하며 플랫폼의 한계를 넘어서는 커스텀 프론트엔드 개발 경험을 쌓을 수 있었던 프로젝트입니다.",
    ],
    startDate: "2023.10",
    endDate: "2024.06",
    link: "https://www.freshjb.com",
    githubLink: "",
    thumbnail: "/img/img_freshjb_thumbnail.png",
    detailImages: [],
    skills: ["React", "@shopby/react-components", "NHN Shopby"],
    role: [
      "FE 개발, 웹 퍼블리셔 (2명 중)",
      "쇼핑몰 전체 페이지(PC/Mobile) UI 구현 및 React 컴포넌트 개발 전담",
      "플랫폼 미지원 기능을 사용자 흐름에 맞게 커스텀 개발",
      "주문·게시판·장바구니 영역의 UX 개선 및 기능 안정화",
    ],
    troubleshooting: [
      {
        title: "복수 배송지 기능 커스텀 구현",
        problem:
          "기존 Shopby 플랫폼은 단일 배송지만 지원해 여러 주소로 상품을 보내고 싶은 사용자 요구를 충족하기 어려웠습니다. 주문서, 주문완료, 주문상세까지 주문 플로우 전반에서 배송지 정보가 일관되게 이어져야 했기 때문에 단순 UI 추가만으로는 해결할 수 없는 문제였습니다.",
        solution:
          "주문 흐름 전체를 기준으로 배송지 데이터를 나누고 연결하는 구조를 직접 설계해 복수 배송지 기능을 커스텀 구현했습니다. 주문서, 주문완료, 주문상세 페이지 전반에서 정보가 자연스럽게 이어지도록 화면과 데이터 흐름을 함께 맞추며 사용자 입장에서 복잡함이 느껴지지 않도록 구성했습니다.",
        keywords: ["React", "NHN Shopby", "주문 플로우", "커스텀 기능 개발"],
      },
      {
        title: "헤더 미니카트와 장바구니 수량 불일치 해결",
        problem:
          "헤더의 미니카트에 표시되는 수량과 실제 장바구니 페이지의 수량이 일치하지 않는 문제가 있었습니다. 이 문제는 사용자의 신뢰를 떨어뜨릴 수 있고, 특히 주문 직전 단계에서 혼란을 유발할 수 있다는 점에서 빠른 대응이 필요했습니다.",
        solution:
          "장바구니 상태를 간접적으로 참조하는 대신 장바구니 API를 직접 호출하는 방식으로 데이터를 동기화해 수량 불일치 문제를 해결했습니다. 이를 통해 사용자가 어느 화면에서든 동일한 장바구니 상태를 확인할 수 있도록 안정성을 높였습니다.",
        keywords: ["React", "API 연동", "상태 동기화", "UX 안정성"],
      },
    ],
  },
  {
    number: 2,
    category: "Practical Project",
    slug: "pokemonstore",
    name: "포켓몬스토어 온라인",
    overview: "공식 굿즈 쇼핑몰",
    description: [
      "포켓몬 스토어 온라인은 포켓몬 공식 굿즈를 판매하는 온라인 쇼핑몰로, 브랜드 경험과 상품 탐색의 즐거움이 함께 중요한 서비스였습니다. 저는 이 프로젝트에서 초기 구축 단계의 퍼블리싱을 담당하며 전반적인 사용자 화면을 구현했습니다.",
      "HTML, CSS, JavaScript, jQuery, Handlebars.js 기반의 Shopby SDK 환경에서 전체 페이지의 구조와 스타일을 설계하고, 다양한 운영 요구사항을 실제 화면에 반영하는 작업을 맡았습니다. PC와 모바일을 모두 고려한 퍼블리싱과 함께 브랜드 톤을 해치지 않으면서도 사용성이 유지되도록 디테일을 다듬는 데 집중했습니다.",
      "특히 플랫폼이 기본적으로 제공하지 않는 갤러리형 게시판 UI를 직접 구현했던 점에서 프론트엔드 개발자로서의 첫 시작을 경험할 수 있었습니다. 단순한 리스트 구조로는 브랜드 특성을 살리기 어려웠던 게시판 영역에 Vanilla JavaScript로 카드 형태의 갤러리 UI를 구현해 콘텐츠의 시각적 매력과 탐색성을 모두 높이는 경험을 할 수 있었습니다.",
    ],
    startDate: "2023.09",
    endDate: "2024.07",
    link: "https://www.pokemonstore.co.kr",
    githubLink: "",
    thumbnail: "/img/img_pokemonstore_thumbnail.png",
    detailImages: [],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Handlebars.js",
      "Shopby SDK",
    ],
    role: [
      "웹 퍼블리셔 (2명 중)",
      "쇼핑몰 전체 페이지(PC/Mobile) 퍼블리싱 초기 구축",
      "브랜드 경험을 유지한 커스텀 게시판 UI 구현",
      "접근성 및 기본 SEO 대응, 운영 스크립트 적용",
    ],
    troubleshooting: [
      {
        title: "플랫폼 미지원 갤러리형 게시판 UI 구현",
        problem:
          "기본 게시판 UI만으로는 이벤트 콘텐츠를 브랜드에 맞는 방식으로 보여주기 어려웠습니다. 단순 리스트 구조로는 시각적 매력이 부족했고, 사용자 입장에서도 콘텐츠를 직관적으로 탐색하기 어려웠습니다.",
        solution:
          "Vanilla JavaScript로 갤러리형 게시판 UI를 직접 구현해 상품과 이벤트 이미지를 카드 형태로 노출하도록 구성했습니다. 이를 통해 콘텐츠 가독성과 탐색성을 높이고, 브랜드 특성에 맞는 시각적 경험을 강화했습니다.",
        keywords: ["JavaScript", "Vanilla JS", "게시판 UI", "커스텀 인터랙션"],
      },
    ],
  },
  {
    number: 3,
    category: "DevCourse FE×BE Project",
    slug: "naeconcertbutakhae",
    name: "내 콘서트를 부탁해",
    overview:
      "공연 예매부터 공연 당일 계획 세우기까지, 모든 과정을 관리할 수 있는 올인원 매니지먼트 플랫폼",
    description: [
      "내 콘서트를 부탁해는 공연 일정 관리, 장소 탐색, 이동 동선 계획까지 하나의 흐름으로 연결한 공연 올인원 매니지먼트 플랫폼입니다. 공연을 보기 위해 여러 앱과 메모를 오가야 하는 불편함을 줄이고, 사용자가 더 자연스럽게 일정을 계획할 수 있도록 만드는 것을 목표로 했습니다.",
      "저는 이 프로젝트에서 FE 팀장, Git 총괄, 디자인 리드 역할을 맡아 화면 설계부터 구현, 협업 흐름까지 폭넓게 주도했습니다. 기능을 단순히 구현하는 데서 끝나지 않고, 사용자가 입력 과정에서 느끼는 피로를 줄이고 필요한 정보에 더 빠르게 도달할 수 있는 UX를 만드는 데 집중했습니다.",
      "특히 외출플래너 입력 흐름을 개선하고, 검색 요청을 최적화하며, Tanstack Query를 활용해 캐싱전략을 적용하고 Lighthouse 등 사용자 경험과 기술적 안정성을 함께 끌어올렸습니다. 이 프로젝트는 프론트엔드와 백엔드의 협업으로 진행되었으며 총 8팀 중 2등을 차지했습니다. 백엔드 파트와 협업을 경험할 수 있었고, 초기 렌더링 성능과 SEO 대응까지 고려하며 제품 완성도를 높였던 데브코스 최종 프로젝트입니다.",
    ],
    startDate: "2025.12.03",
    endDate: "2026.01.13",
    link: "https://www.naeconcertbutakhae.shop",
    githubLink:
      "https://github.com/prgrms-web-devcourse-final-project/WEB6_7_codecrete_FE",
    thumbnail: "/img/img_naeconbu_thumbnail.png",
    detailImages: [],
    video: {
      src: "/video/video_naeconbu.mp4",
      type: "video/mp4",
    },
    videoThumbnail: "/img/img_naeconbu_video.png",
    skills: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "TanStack Query",
      "Kakao Map API",
    ],
    role: [
      "FE 팀장 (9명 중 FE 3명)",
      "Git 총괄 / 디자인 총괄",
      "공연 상세 페이지 및 외출플래너, 검색, 마이페이지 설계 및 구현",
      "UX 개선 및 검색 최적화 주도",
      "Tanstack Query 캐싱 전략 적용 및 Lighthouse 성능 개선",
      "백엔드 협업 경험",
    ],
    troubleshooting: [
      {
        title: "외출플래너 입력 과정 단순화",
        problem:
          "외출플래너 기능의 초기 작업 당시 사용자가 식사·이동·대기·기타 타입의 모든 일정을 여러 단계에 걸쳐 반복 입력해야 해 피로도가 높았습니다. 물론 일정의 등록이나 수정, 삭제와 같은 기본적인 기능은 동작했지만 실제 사용 흐름에서는 입력 횟수가 많아 이탈 가능성이 큰 구조였습니다.",
        solution:
          "각 목적지가 있는 일정의 경우 이동 항목이 자동으로 생성되는 방식으로 UX를 재설계해 사용자 입력 횟수를 최소화했습니다. 복잡하게 모든 일정 타입을 등록하는 기존 방식에서 입력 흐름 자체를 다시 설계함으로써 사용자가 더 적은 행동으로 같은 목표를 달성할 수 있도록 개선했습니다.",
        keywords: ["UX 개선", "폼 설계", "사용자 입력 최적화"],
      },
      {
        title: "검색 API 과호출 최적화",
        problem:
          "검색 입력 시 사용자의 타이핑마다 API 요청이 발생해 불필요한 서버 요청이 많아졌고, 네트워크 상황에 따라 응답이 지연되거나 사용자 경험이 떨어질 가능성이 있었습니다.",
        solution:
          "Debounce 기법을 적용해 검색 요청을 제어했고, 평균 API 호출 횟수를 6회에서 1회로 줄여 서버 리소스를 83% 절감했습니다. 이를 통해 사용자는 더 안정적인 검색 경험을 얻고, 서비스는 불필요한 요청을 줄일 수 있었습니다.",
        keywords: ["Debounce", "성능 최적화", "API 요청 제어"],
      },
    ],
  },
  {
    number: 4,
    category: "DevCourse FE Project",
    slug: "updown",
    name: "업다운",
    overview:
      "일상의 감정을 시장 지수처럼 기록·시각화하고, 공감 기반 커뮤니티에서 함께 나누는 감정 기록 서비스",
    description: [
      "업다운 감정시장은 흩어지고 사라지는 일상의 감정을 한 화면에 모아 보여주는 감정 기록 커뮤니티 서비스입니다. 사용자가 하루의 기분을 간단히 기록하면, 이를 차트와 지수로 시각화해 오늘과 최근의 감정 흐름을 한눈에 확인할 수 있도록 설계했습니다.",
      "저는 프로젝트 리더이자 디자인 총괄로 참여해 전체 컨셉과 UI 톤을 정리하고, 커뮤니티·게시글 상세·감정 그래프 등 핵심 화면을 중심으로 기능 구현을 담당했습니다. 게시글, 댓글, 좋아요 같은 커뮤니티 핵심 기능을 안정적으로 구현하면서도, 감정이라는 다소 추상적인 주제를 사용자가 가볍고 자연스럽게 기록할 수 있도록 흐름과 인터렉션을 다듬는 데 집중했습니다.",
      "특히 무한스크롤, 실시간 감정 집계, 태그 클라우드 기반 시각화, 반응형과 다크모드 대응, 공통 컴포넌트 설계를 통해 서비스 완성도를 높였습니다. 이 프로젝트는 프론트엔드 4팀 중 1등을 차지하며, 짧은 기간 안에 팀의 개발 생산성과 사용자 경험을 함께 끌어올리는 데 의미가 있었던 프로젝트입니다.",
    ],
    startDate: "2025.11.05",
    endDate: "2025.11.20",
    link: "https://fe-7-project-3-team-1.vercel.app",
    githubLink: "https://github.com/prgrms-fe-devcourse/FE7-PROJECT3-TEAM-1",
    thumbnail: "/img/img_updown_thumbnail.png",
    detailImages: [
      "/img/img_updown_detail_01.png",
      "/img/img_updown_detail_02.png",
    ],
    video: {
      src: "/video/video_updown.mp4",
      type: "video/mp4",
    },
    videoThumbnail: "/img/img_updown_video.png",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    role: [
      "프로젝트 리더 / 디자인 총괄",
      "커뮤니티·게시글 상세·마이페이지 등 핵심 화면 설계 및 구현",
      "무한스크롤 피드, 감정 지수·트렌드 시각화, 다크모드·반응형 UI 구현",
      "공통 컴포넌트 설계 및 Loading/Empty/Error 상태 UI 구현",
    ],
    troubleshooting: [
      {
        title: "감정 트렌드 시각화 로직 설계",
        problem:
          "감정 데이터는 단순한 숫자나 텍스트 목록만으로 보여줄 경우, 사용자가 현재 커뮤니티의 분위기와 흐름을 빠르게 이해하기 어려웠습니다. 특히 커뮤니티 서비스에서는 '지금 어떤 감정이 많이 공유되고 있는지', '어제와 비교했을 때 감정의 변화는 어떤지'를 직관적으로 전달할 필요가 있었습니다.",
        solution:
          "오늘과 어제의 해시태그 데이터를 날짜 범위 기준으로 각각 조회한 뒤, 태그별 랭킹과 증감률을 계산해 시각화용 데이터로 가공했습니다. 이를 통해 실시간 TOP 3 감정과 트렌드 태그를 한눈에 보여줄 수 있었고, 사용자는 현재 커뮤니티 분위기와 감정 흐름 변화를 더 직관적으로 파악할 수 있었습니다.",
        keywords: ["데이터 시각화", "트렌드 태그", "증감률 계산", "Supabase"],
        codeSnippet: `
export default async function TodayFeels() {
  // 1. 오늘/어제 날짜 범위 계산
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  const yesterdayStart = new Date(todayStart);
  yesterdayStart.setDate(yesterdayStart.getDate() - 1);
  const yesterdayEnd = new Date(todayEnd);
  yesterdayEnd.setDate(yesterdayEnd.getDate() - 1);

  const supabase = await createClient();

  // 2. 오늘/어제 해시태그 데이터 조회
  const { data: todayHashtags } = await supabase
    .from("hashtags")
    .select("content, created_at")
    .gte("created_at", todayStart.toISOString())
    .lte("created_at", todayEnd.toISOString());

  const { data: yesterdayHashtags } = await supabase
    .from("hashtags")
    .select("content, created_at")
    .gte("created_at", yesterdayStart.toISOString())
    .lte("created_at", yesterdayEnd.toISOString());

  // 3. 태그별 랭킹 계산
  const todayRanks = setTrendTagsRank(todayHashtags || [], 3);
  const yesterdayRanks = setTrendTagsRank(
    yesterdayHashtags || [],
    yesterdayHashtags?.length ?? 0
  );

  // 4. 어제 대비 퍼센트 변화 계산
  const calculatePercentageChange = (tag: string, todayCount: number) => {
    const yesterdayItem = yesterdayRanks.find((item) => item.tag === tag);
    const yesterdayCount = yesterdayItem ? yesterdayItem.count : 0;

    if (yesterdayCount === 0) return todayCount > 0 ? "+100%" : "0%";

    const change = ((todayCount - yesterdayCount) / yesterdayCount) * 100;
    const sign = change > 0 ? "+" : "";
    return sign + Math.round(change) + "%";
  };

  // 5. 시각화용 데이터 구조
  const ranksWithPercentage = todayRanks.map((rank) => ({
    ...rank,
    percentageChange: calculatePercentageChange(rank.tag, rank.count),
  }));

  return ranksWithPercentage;
}
        `,
      },
    ],
  },
  {
    number: 5,
    category: "DevCourse FE Project",
    slug: "chickengalaxy",
    name: "치킨갤럭시",
    overview:
      "치킨을 사랑하는, 치킨에 진심인 한국인들을 위한 우주 테마 커뮤니티 서비스",
    description: [
      "치킨갤럭시는 한국인의 소울푸드인 치킨을 중심으로 취향과 의견, 그리고 각자의 <b>치킨 철학</b>을 마음껏 나눌 수 있도록 만든 커뮤니티 서비스입니다. 짧은 기간 안에 검색, 탐색, 반응형 UI까지 갖춘 완성도 있는 서비스를 구현하는 것을 목표로 프로젝트를 진행했습니다.",
      "팀장으로서 프로젝트의 전반적인 방향을 조율하며 Git과 디자인을 총괄했고, 핵심 기능 구현에도 직접 참여했습니다. 특히 사용자가 원하는 글과 정보를 빠르게 찾을 수 있도록 검색 경험을 설계하고, 다양한 데이터·상태 변화 속에서도 서비스가 안정적으로 보이도록 UI를 구성하는 데 집중했습니다.",
      "React Compiler를 선제적으로 도입해 렌더링 성능을 개선하고, 검색 시스템과 상태별 UI 처리를 정교하게 구현했으며, 배포 단계에서 발생한 빌드·환경 오류도 직접 해결했습니다. 기능 구현부터 성능 최적화, 배포 안정성 확보까지 프론트엔드 전반을 폭넓게 다뤄볼 수 있었던 프로젝트입니다.",
      "치킨갤럭시 프로젝트는 총 4명의 프론트엔드 개발자가 함께 진행했으며, 짧은 기간 안에 완성도 있는 서비스를 만들어야 하는 상황에서 <b>사용자 경험</b>과 <b>기술적 안정성</b>을 동시에 챙기는 것이 얼마나 중요한지 다시 한번 깨닫게 해준 경험이었습니다. 팀원들과 함께 문제를 해결해 나가는 과정에서 협업의 가치와 즐거움을 깊이 느낄 수 있었고, 그 결과 프론트엔드 5팀 중 1등 프로젝트로 선정되는 성과도 얻었습니다.",
    ],
    startDate: "2025.10.22",
    endDate: "2025.11.05",
    link: "https://fe-7-project-2-team-3.vercel.app",
    githubLink: "https://github.com/prgrms-fe-devcourse/FE7-PROJECT2-TEAM-3",
    thumbnail: "/img/img_chickengalaxy_thumbnail.png",
    detailImages: [
      "/img/img_chickengalaxy_detail_01.png",
      "/img/img_chickengalaxy_detail_02.png",
      "/img/img_chickengalaxy_detail_03.png",
      "/img/img_chickengalaxy_detail_04.png",
    ],
    video: {
      src: "/video/video_chickengalaxy.mp4",
      type: "video/mp4",
    },
    videoThumbnail: "/img/img_chickengalaxy_video.png",
    skills: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    role: [
      "FE 팀장 (4명 중)",
      "Git 총괄 / 디자인 총괄",
      "프로젝트 전반 방향 조율 및 기반 레이아웃 구현",
      "검색 시스템 설계 전체 구현",
      "성능 최적화 및 상태별 UI 안정성 개선",
    ],
  },
];
