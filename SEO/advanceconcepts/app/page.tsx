import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const topics = [
  { id: 1, title: "Environment Variables", href: "/environment" },
  { id: 2, title: "SEO", href: "/seo" },
  { id: 3, title: "performance", href: "/performance" },
];

export default function Home() {
  return (
    <>
      <p>We have all our lessions</p>
      <section className={"topic-list"}>
        {topics.map((topics) => {
          return (
            <Link key={topics.id} href={topics.href} className={"topic-card"}>
              <h2>{topics.title}</h2>
            </Link>
          );
        })}
      </section>
    </>
  );
}
