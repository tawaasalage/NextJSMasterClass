import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data & Actions",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/data-fetching", label: "Data-Fetching" },
  { href: "/api-routes", label: "API Routes" },
  { href: "/caching", label: "Caching" },
  { href: "/server-actions", label: "Server Actions" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav shell">
            <Link className="brand" href={"/"}>
              Fetching Mini Project
            </Link>
            <div className="nav-links">
              {links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main className="shell"> {children}</main>
      </body>
    </html>
  );
}
