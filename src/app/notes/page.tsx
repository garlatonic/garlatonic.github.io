import type { Metadata } from "next";

export const metadata: Metadata = { title: "기록" };

export default function Notes() {
  return (
    <main id="main-content" className="page-content">
      <h1>기록</h1>
      <div className="prose">
        <p>개발 기록은 <a href="https://velog.io/@garlatonic">Velog ↗</a>에 남기고 있습니다.</p>
      </div>
    </main>
  );
}
