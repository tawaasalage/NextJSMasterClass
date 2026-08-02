import ContainerPage from "@/components/ContainerPage";
import Counter from "./Counter";

export const dynamic = "force-dynamic";

export default function HybridPage() {
  const serverTIme = new Date().toISOString();
  return (
    <ContainerPage
      title="Hybrid Page"
      description="This page is rendered using Server-Side Rendering (SSR) and can also include client-side interactivity."
    >
      <p className="data-label">Server Rendered Time</p>
      <p className="data-value">{serverTIme}</p>

      <Counter />
    </ContainerPage>
  );
}
