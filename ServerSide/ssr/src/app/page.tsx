import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero">
        <p className="eyebrow">Welcome to the Home Page</p>
      </div>

      <div className="card-grid">
        <Link className="card" href={"/csr"}>
          CSR
        </Link>
        <Link className="card" href={"/ssr"}>
          SSR
        </Link>
        <Link className="card" href={"/isg"}>
          ISG
        </Link>
        <Link className="card" href={"/ssg"}>
          SSG
        </Link>
        <Link className="card" href={"/hybrid"}>
          Hybrid
        </Link>
      </div>
    </>
  );
}
