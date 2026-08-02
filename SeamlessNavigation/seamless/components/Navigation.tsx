"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/abc", label: "ABC" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="nav-list">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.href}
              className={`nav-link${isActive ? "active" : ""}`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
        <a href="/abc" rel="noopener noreferrer">
          Manual
        </a>
      </ul>
    </nav>
  );
}
