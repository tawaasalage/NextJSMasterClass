import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Performance Page",
  description: "This is the performance page of the SEO advance concepts app.",
};

export default function PerformancePage() {
  return (
    <article>
      <h1>Performance Page</h1>
      <p>This is the performance page content.</p>

      <section className="demo">
        <div className="image-frame">
          <Image
            src="/developer-desk.png"
            alt="Performance Image"
            fill
            sizes="(max-width: 700px) 100vw, 1024px"
          />
        </div>
      </section>
    </article>
  );
}
