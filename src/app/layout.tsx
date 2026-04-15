import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { CustomThemeProvider } from "@/components/custom-theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "garlatonic.cv",
  description: "주니어 프론트엔드 개발자 박상아의 포트폴리오 웹사이트입니다. 다양한 프로젝트 경험과 기술 스택을 통해 사용자 중심의 인터랙티브한 웹 경험을 구현하는 데 집중하고 있습니다.",
  keywords: [
    "프론트엔드 개발자",
    "포트폴리오",
    "웹 개발",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "프로젝트 경험",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={twMerge(notoSansKR.className)}>
        <CustomThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
