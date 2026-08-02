import ContainerPage from "@/components/ContainerPage";

export const dynamic = "force-static";

export default function SSGPage() {
  const buildTime = new Date().toISOString();
  return (
    <ContainerPage
      title="Static Site Generation Page"
      description="This page is generated at build time."
    >
      <h1>Static Site Generation Page</h1>
      <p>This page is generated at build time.</p>
      <p className="data-label">Build Time</p>
      <p className="data-value">{buildTime}</p>
    </ContainerPage>
  );
}
