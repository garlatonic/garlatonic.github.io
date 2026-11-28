import type { Challenge } from "./types";

export const chickengalaxyChallenges: Challenge[] = [
  {
    title: "React Compiler 도입으로 렌더링 성능 개선",
    problem: "검색어를 입력할 때마다 게시글 목록 전체가 다시 렌더링됐습니다. 컴포넌트가 많아 useMemo와 useCallback을 일일이 적용하기 어려웠습니다.",
    solution: "React Compiler를 도입해 컴파일 단계에서 자동 메모이제이션을 적용했습니다. 수동으로 useMemo/useCallback을 작성하지 않아도 컴포넌트별 불필요한 리렌더링이 방지되어 검색 결과 목록의 반응 속도가 개선되었습니다.",
    keywords: ["React Compiler", "렌더링 최적화", "성능 개선"],
    code: {
      caption: "Vite에서 React Compiler를 적용하기 전과 후의 설정",
      source: `// Before
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

// After: babel-plugin-react-compiler 적용
export default defineConfig({
  plugins: [
    react({ babel: { plugins: ["babel-plugin-react-compiler"] } }),
    tailwindcss(),
  ],
})`,
    },
  },
];
