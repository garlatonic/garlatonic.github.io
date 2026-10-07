"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/notes/", label: "Notes" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label="garlatonic.cv 홈">
        <span className="brand-monogram" aria-hidden="true">garlatonic.cv</span>
        <span>garlatonic.cv</span>
      </Link>
      <nav className="site-nav" aria-label="주 메뉴">
        {links.map(({ href, label }) => {
          const active = pathname === href.slice(0, -1) || pathname.startsWith(href);
          return <Link key={href} href={href} aria-current={active ? "page" : undefined}>{label}</Link>;
        })}
      </nav>
    </header>
  );
}
