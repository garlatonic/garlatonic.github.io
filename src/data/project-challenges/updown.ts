import type { Challenge } from "./types";

export const updownChallenges: Challenge[] = [
  {
    title: "감정 트렌드 시각화 로직 설계",
    problem: "감정별 집계 숫자만으로는 오늘 가장 많이 공유된 감정과 전날 대비 변화를 알아보기 어려웠습니다.",
    solution: "오늘과 어제의 해시태그 데이터를 날짜 범위 기준으로 각각 조회한 뒤, 태그별 랭킹과 증감률을 계산해 시각화용 데이터로 가공했습니다. 이를 통해 실시간 TOP 3 감정과 트렌드 태그를 한눈에 보여줄 수 있었고, 사용자는 커뮤니티 분위기와 감정 흐름 변화를 더 직관적으로 파악할 수 있었습니다.",
    keywords: ["데이터 시각화", "트렌드 태그", "증감률 계산", "Supabase"],
    code: {
      caption: "오늘 가장 많이 쓰인 태그 3개의 전일 대비 증감률 계산",
      source: `const todayRanks = setTrendTagsRank(todayHashtags || [], 3);
const yesterdayRanks = setTrendTagsRank(
  yesterdayHashtags || [],
  yesterdayHashtags?.length ?? 0
);

const calculatePercentageChange = (tag: string, todayCount: number) => {
  const yesterdayItem = yesterdayRanks.find((item) => item.tag === tag);
  const yesterdayCount = yesterdayItem ? yesterdayItem.count : 0;

  if (yesterdayCount === 0) return todayCount > 0 ? "+100%" : "0%";

  const change = ((todayCount - yesterdayCount) / yesterdayCount) * 100;
  const sign = change > 0 ? "+" : "";
  return sign + Math.round(change) + "%";
};

const ranksWithPercentage = todayRanks.map((rank) => ({
  ...rank,
  percentageChange: calculatePercentageChange(rank.tag, rank.count),
}));`,
    },
  },
];
