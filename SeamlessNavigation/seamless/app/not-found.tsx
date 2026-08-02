import Link from "next/link";

export default function GlobalNotFoundPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go Home</Link>
      </section>
    </main>
  );
}
