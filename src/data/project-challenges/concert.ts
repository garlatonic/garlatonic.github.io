import type { Challenge } from "./types";
import plannerFormBefore from "./planner-form-before.webp";
import plannerFormAfter from "./planner-form-after.webp";
import plannerBefore from "./planner-before.webp";
import plannerAfter from "./planner-after.webp";
import lighthouseBefore from "./concert-lighthouse-before.webp";
import lighthouseAfter from "./concert-lighthouse-after.webp";

export const concertChallenges: Challenge[] = [
  {
    title: "외출플래너 입력 과정 단순화",
    problem: "공연과 식당을 등록한 뒤에도 사용자는 두 장소 사이의 이동을 직접 입력해야 했습니다.",
    solution: "장소 사이의 이동 구간을 자동으로 연결해 같은 정보를 반복해서 입력하는 부담을 줄였습니다. 마우스 클릭이나 키보드 입력처럼 사용자가 직접 하는 조작을 한 단계로 세고, 개선 전후의 평균 입력 횟수를 비교했습니다.",
    keywords: ["UX 개선", "폼 설계", "사용자 입력 최적화"],
    comparisons: [
      {
        title: "외출플래너 타임라인과 일정 입력 폼",
        before: [
          {
            src: plannerBefore,
            caption: "장소만 기록된 타임라인",
            detail: "팀 QA에서 공연과 식당을 등록하고도 두 장소 사이의 이동 일정을 다시 만들어야 해 번거롭다는 피드백을 받았습니다.",
            alt: "공연 카드 바로 아래에 착한집밥 식사 카드가 이어지는 타임라인"
          },
          {
            src: plannerFormBefore,
            caption: "이동 탭에서 출발지·목적지·이동 수단을 직접 입력",
            detail: "예를 들어 ‘대기 → 이동 → 식사’ 일정을 완성하는 데 총 21회의 입력이 필요했습니다.",
            alt: "새로운 일정 추가 창에서 이동 탭을 선택하고 출발 일정, 도착 일정, 이동 수단을 입력하는 화면"
          }
        ],
        after: [
          {
            src: plannerAfter,
            caption: "장소 사이에 이동 카드 자동 추가",
            detail: "두 장소를 등록하면 이동 카드에 경로와 예상 소요시간이 표시됩니다. 대중교통을 이용할 때는 제시된 세 가지 선택지 중 하나를 골라 경로를 확정합니다.",
            alt: "공연과 식당 사이에 도보 1분·106m 경로와 경로 확정 버튼이 추가된 타임라인",
            highlight: { left: "12.1%", top: "34.5%", width: "81.1%", height: "31.9%" }
          },
          {
            src: plannerFormAfter,
            caption: "이동 탭을 없앤 일정 입력 폼",
            detail: "같은 ‘대기 → 이동 → 식사’ 일정을 16회 입력으로 완성했습니다. 기존 21회에서 5회 줄어 이 예시의 감소율은 23.8%입니다.",
            alt: "이동 탭이 사라진 일정 추가 창에서 식사를 선택하고 주변 식당을 검색한 화면"
          }
        ]
      }
    ],
    metrics: [{ label: "사용자 입력 단계", value: "약 24% 감소" }],
    code: {
      caption: "선택한 경로를 이동 일정으로 저장",
      source: `const confirmMutation = useMutation({
  mutationFn: () => {
    const transportData = transformTransportSchedule(fromSchedule, toSchedule, {
      selectedRoute: selectedTransitRoute,
      carRouteSummary: carData,
      walkRouteSummary: walkData,
    });
    return createPlanSchedule({ planId, scheduleData: transportData });
  },
});`
    }
  },
  {
    title: "검색 API 과호출 최적화",
    problem: "장소 검색창에 글자를 입력할 때마다 API 요청이 발생했습니다. 사용자가 검색어를 완성하는 동안 중간 검색어까지 조회해 서버 부하가 커지고 응답이 늦어질 수 있었습니다.",
    solution: "검색창에는 입력한 글자를 즉시 표시하고, 검색 요청에는 디바운스를 적용했습니다. 새 입력이 들어오면 이전 타이머를 취소하고, 마지막 입력 후 500ms가 지났을 때 장소를 조회합니다.",
    keywords: ["Debounce", "성능 최적화", "API 요청 제어"],
    metrics: [{ label: "장소 검색 API 평균 호출 횟수", value: "6회 → 1회 (약 83% 감소)" }],
    code: {
      caption: "마지막 입력 후 500ms가 지나면 장소 조회",
      source: `const debouncedTerm = useDebounce(term, 500)

const { results, isLoading } = useSearchPlace(
  debouncedTerm,
  defaultCoords,
  scheduleType
)`
    }
  },
  {
    title: "TanStack Query 캐싱 전략 적용",
    problem: "홈에서는 공연 목록을 먼저 조회하고 공연별 티켓팅 플랫폼 정보를 받은 다음 슬라이더를 그렸습니다. 요청이 순서대로 끝나기를 기다려야 해 첫 화면에 공연이 보이기까지 수초가 걸렸습니다.",
    solution: "변경이 드문 공연·아티스트 목록의 캐시 유효 시간을 1시간으로 설정했습니다. 홈 상단에 표시할 공연 목록은 서버에서 미리 조회하고 TanStack Query 캐시를 클라이언트에 전달해 슬라이더가 첫 렌더링에서 데이터를 재사용하도록 했습니다.",
    keywords: ["TanStack Query", "캐싱 전략", "성능 최적화", "SEO 개선"],
    comparisons: [
      {
        title: "Lighthouse로 측정한 홈 화면",
        before: [
          {
            src: lighthouseBefore,
            caption: "캐싱 적용 전 성능 점수 60점",
            alt: "Lighthouse 성능 60점, FCP 2.1초, LCP 28.9초를 기록한 측정 화면"
          }
        ],
        after: [
          {
            src: lighthouseAfter,
            caption: "캐싱과 프리페치 적용 후 성능 점수 68점",
            alt: "Lighthouse 성능 68점, FCP 1.2초, LCP 16.2초를 기록한 측정 화면"
          }
        ]
      }
    ],
    metrics: [
      { label: "Lighthouse 성능 점수", value: "60점 → 68점" },
      { label: "첫 콘텐츠 표시 시간 (FCP)", value: "2.1초 → 1.2초" },
      { label: "가장 큰 콘텐츠 표시 시간 (LCP)", value: "28.9초 → 16.2초" }
    ],
    code: {
      caption: "미리 조회한 공연 목록을 슬라이더에 전달",
      source: `export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(concertQueries.upcoming("UPCOMING", 0, 21));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UpcomingSlider />
    </HydrationBoundary>
  );
}`
    }
  }
];
