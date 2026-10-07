# SangA Park · Portfolio

프론트엔드 개발자 박상아의 개인 포트폴리오입니다. 경력과 프로젝트 경험, 문제 해결 과정을 콘텐츠 중심의 미니멀한 화면으로 소개합니다.

[포트폴리오 보기](https://garlatonic.github.io/) · [v2.0.0 릴리즈](https://github.com/garlatonic/garlatonic.github.io/releases/tag/v2.0.0) · [개발 기록](https://velog.io/@garlatonic)

## 페이지 구성

| 페이지 | 내용 |
| --- | --- |
| Home | 간단한 소개와 개발 방향 |
| About | 소개, 역량, 경력, 교육 및 프로젝트 요약 |
| Projects | 프로젝트 목록과 상세 페이지 — 소개, 역할, 기술 스택, 문제 해결 과정 |
| Notes | 개발 기록을 남기는 Velog 연결 |

다양한 화면 크기에 대응하는 레이아웃과 타이포그래피를 적용했습니다. 본문 바로가기, 키보드 포커스, 스크린 리더용 제목, 모션 감소 설정을 지원합니다.

## 기술 스택

- Next.js 16 App Router · React 19 · TypeScript
- styled-components
- `next/font` — Noto Serif KR, Baskervville
- GitHub Actions · GitHub Pages

`output: "export"` 설정으로 정적 사이트를 생성하며, 프로젝트 상세 페이지도 빌드 시 미리 생성합니다.

## 로컬 실행

Node.js 20.9 이상과 npm이 필요합니다.

```bash
npm ci
npm run dev
```

개발 서버 실행 후 [localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

```bash
# 코드 검사
npm run lint

# 프로덕션 빌드 및 정적 파일 생성
npm run build

# GitHub Pages CI와 동일한 Webpack 빌드
npm run build -- --webpack
```

빌드 결과는 `out/`에 생성됩니다. 정적 내보내기 프로젝트이므로 배포 결과를 확인할 때는 `next start` 대신 `out/`을 제공하는 정적 파일 서버를 사용합니다.

## 프로젝트 구조

```text
src/
├── app/                 # 페이지, 공통 레이아웃, 메타데이터
│   ├── about/
│   ├── notes/
│   └── projects/        # 프로젝트 목록 및 [slug] 상세 페이지
├── components/layout/  # 헤더, 푸터, 페이지 전환
├── data/               # 경력·교육 및 프로젝트 콘텐츠
└── styles/             # 전역 스타일, 공통 컴포넌트, 스타일 레지스트리
public/                 # 정적 에셋
.github/workflows/      # GitHub Pages 빌드·배포
```

경력·교육 정보는 `src/data/about.ts`, 프로젝트 정보는 `src/data/projects.ts`에서 관리합니다. 소개 문구는 Home과 About 페이지에서 수정할 수 있습니다.

## 배포

`main` 브랜치에 push하면 GitHub Actions가 정적 사이트를 빌드하고 GitHub Pages에 배포합니다. Actions에서 수동 실행도 가능합니다.

현재 CI에서는 Linux 환경의 Turbopack 폰트 처리 오류를 피하기 위해 `next build --webpack`을 사용합니다. 배포 설정은 [nextjs.yml](.github/workflows/nextjs.yml)에서 확인할 수 있습니다.

v2에서는 기존 `/resume/`, `/career/` 페이지를 제거하고 관련 콘텐츠를 `/about/`으로 통합했습니다. 기존 경로의 자동 리다이렉트는 제공하지 않습니다.

## Codex 활용

이번 포트폴리오 v2는 OpenAI Codex를 활용해 함께 개발했습니다. 구현과 수정 과정에서 Codex의 도움을 받았으며, 변경 사항 검토, 빌드 검증, 커밋 정리, 배포 오류 해결 및 릴리즈 작성에도 활용했습니다.

이 설명은 **이 포트폴리오 사이트의 v2 제작 과정**에 대한 것으로, 사이트에 소개된 개별 프로젝트의 개발 방식을 의미하지 않습니다.
