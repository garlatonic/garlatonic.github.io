import * as S from "@/styles/components";
import type { Metadata } from "next";
import { Baskervville, Noto_Serif_KR } from "next/font/google";
import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const notoSerif = Noto_Serif_KR({
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
  variable: "--font-noto-serif",
});

const baskervville = Baskervville({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskervville",
});

export const metadata: Metadata = {
  title: { default: "박상아 · SangA Park — Frontend Developer", template: "%s · 박상아" },
  description: "사용자의 편의를 설계하는 프론트엔드 개발자 박상아입니다. 3년간의 웹 퍼블리싱 경험을 바탕으로 사용자 중심의 웹을 만듭니다.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={baskervville.variable + " " + notoSerif.variable}>
      <body>
        <StyledComponentsRegistry>
          <S.SkipLink href="#main-content">본문으로 바로가기</S.SkipLink>
          <S.SiteShell>
            <Header />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </S.SiteShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
