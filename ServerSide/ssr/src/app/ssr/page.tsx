import ContainerPage from "@/components/ContainerPage";

export const dynamic = "force-dynamic";

export default function SSRPage() {
  const time = new Date().toISOString();
  console.log("Server Render Time:", time);

  return (
    
    <ContainerPage
      title="Server-Side Rendering Example"
      description="This is a simple example of server-side rendering in Next.js."
    >
      <p className="data-label">Server Render Time</p>
      <p className="data-value">{time}</p>
    </ContainerPage>
  );
}
