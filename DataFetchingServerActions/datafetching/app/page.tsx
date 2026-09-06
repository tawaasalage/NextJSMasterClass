import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

const lessions = [
  {
    id: "01",
    title: "Data Fetching",
    href: "/data-fetching",
    description: "This is about loading data",
  },
  {
    id: "02",
    title: "API Routes",
    href: "api-routes",
    description: "This is about form submission using API Routes",
  },
  {
    id: "03",
    title: "API Caching",
    href: "caching",
    description: "This is about caching API responses",
  },
  {
    id: "04",
    title: "Server Actions",
    href: "server-actions",
    description: "This is about handling server-side actions",
  },
];

export default function Home() {
  return (
    <section className="page hero">
      <div className="lesson-grid">
        {lessions.map((lession) => (
          <Link href={lession.href} key={lession.id} className="lesson-card">
            <span>{lession.id}</span>
            <h2>{lession.title}</h2>
            <p>{lession.description}</p>
            <strong>Open Example</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
