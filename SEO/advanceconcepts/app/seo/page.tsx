import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is the SEO Page",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  openGraph: {
    title: "Metadata Title",
    description: "Metadata Description",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metadata Twitter Title",
    description: "Metadata Twitter Description",
  },
};

export default function SEOPage() {
  return (
    <article>
      <h1>SEO Page</h1>

      <p>This is the SEO page content.</p>
    </article>
  );
}
