import type { Metadata } from "next";
import type { ReactNode } from "react";
import PrintControls from "./_components/PrintControls";
import "./documents.css";

export const metadata: Metadata = {
  title: { default: "박상아", template: "%s | 박상아" },
  icons: { icon: "/icon.svg" },
};

export default function DocumentLayout({ children }: { children: ReactNode }) {
  const canPrint = process.env.NODE_ENV === "development";

  return (
    <html lang="ko">
      <body className="document-page" data-printable={canPrint}>
        <main id="main-content" className="document-sheet" aria-labelledby="page-title">
          {children}
        </main>
        <PrintControls canPrint={canPrint} />
      </body>
    </html>
  );
}
