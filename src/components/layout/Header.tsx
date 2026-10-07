"use client";

import * as S from "@/styles/components";

import Link from "next/link";
import { scrollToTop } from "@/components/layout/PageTransition";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/notes/", label: "Notes" },
];

export default function Header() {
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/$/, "") || "/";

  function handleNavigate(href: string, event: { preventDefault: () => void }) {
    const destination = href.replace(/\/$/, "") || "/";
    if (destination === currentPath) {
      event.preventDefault();
      scrollToTop();
    }
  }

  return (
    <S.SiteHeader>
      <S.BrandLink scroll={false} onNavigate={(event) => handleNavigate("/", event)} href="/" aria-label="garlatonic.cv 홈">
        <S.BrandMonogram aria-hidden="true">garlatonic.</S.BrandMonogram>
        {/* <span>garlatonic.cv</span> */}
      </S.BrandLink>
      <S.SiteNav aria-label="주 메뉴">
        {links.map(({ href, label }) => {
          const active = pathname === href.slice(0, -1) || pathname.startsWith(href);
          return <Link key={href} href={href} scroll={false} onNavigate={(event) => handleNavigate(href, event)} aria-current={active ? "page" : undefined}>{label}</Link>;
        })}
      </S.SiteNav>
    </S.SiteHeader>
  );
}
