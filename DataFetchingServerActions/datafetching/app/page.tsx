import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

const lessions = [
  {
    id: "01",
    title: "Lession 1",
    href: "/lession-one",
    description: "",
  },
  {
    id: "02",
    title: "Lession 2",
    href: "/lession-two",
    description: "",
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
