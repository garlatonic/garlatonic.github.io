"use client";

import * as S from "@/styles/components";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/notes/", label: "Notes" },
];

function scrollToTop() {
  document.getElementById("main-content")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export default function Header() {
  const pathname = usePathname();
  const pendingDestination = useRef<string | null>(null);
  const currentPath = pathname.replace(/\/$/, "") || "/";

  useLayoutEffect(() => {
    if (pendingDestination.current !== currentPath) return;
    pendingDestination.current = null;
    scrollToTop();
  }, [currentPath]);

  function handleNavigate(href: string, event: { preventDefault: () => void }) {
    const destination = href.replace(/\/$/, "") || "/";
    if (destination === currentPath) {
      event.preventDefault();
      pendingDestination.current = null;
      scrollToTop();
    } else {
      pendingDestination.current = destination;
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
