"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/** Link that marks itself `aria-current="page"` when the URL is on or under `href`. In-page `#anchors` never match. */
export function NavLink({ href, className, activeClassName, ...props }: ComponentProps<typeof Link> & { href: string; activeClassName: string }) {
  const pathname = usePathname();
  const current = !href.includes("#") && pathname.startsWith(href);
  return <Link href={href} aria-current={current ? "page" : undefined} className={`${className} ${current ? activeClassName : ""}`} {...props} />;
}
