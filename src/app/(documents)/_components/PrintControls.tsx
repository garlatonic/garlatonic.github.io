"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PrintControls({ canPrint }: { canPrint: boolean }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!canPrint) {
      function preventPrintShortcut(event: KeyboardEvent) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "p") {
          event.preventDefault();
          window.alert("인쇄·PDF 저장은 개발 환경에서만 사용할 수 있습니다.");
        }
      }

      window.addEventListener("keydown", preventPrintShortcut);
      return () => window.removeEventListener("keydown", preventPrintShortcut);
    }

    if (new URLSearchParams(window.location.search).get("print") !== "1") return;

    let cancelled = false;
    async function printWhenReady() {
      await document.fonts.ready;
      if (!cancelled) window.print();
    }

    if (document.readyState === "complete") void printWhenReady();
    else window.addEventListener("load", printWhenReady, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", printWhenReady);
    };
  }, [canPrint, pathname]);

  if (!canPrint) return null;

  return (
    <button
      type="button"
      className="document-print"
      aria-label="인쇄 · PDF 저장"
      title="인쇄 · PDF 저장"
      onClick={() => window.print()}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" rx="1" />
      </svg>
    </button>
  );
}
