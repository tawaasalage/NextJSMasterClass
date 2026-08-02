import Link from "next/link";

type ContainerPageProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ContainerPage({
  title,
  description,
  children,
}: ContainerPageProps) {
  return (
    <section className="demo-container">
      <Link href={"/"} className="back-link">
        Back to Home
      </Link>
      <div className="demo-card">
        <h1 className="demo-title">{title}</h1>
        <p className="demo-description">{description}</p>
      </div>
      <div className="demo-output">{children}</div>
    </section>
  );
}
