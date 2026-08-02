import ContainerPage from "@/components/ContainerPage";
import CSRDemo from "./CSRDemo";

export default function CSRPage() {
  return (
    <ContainerPage
      title="Client-Side Rendering Example"
      description="This is a simple example of client-side rendering in Next.js."
    >
      <CSRDemo />
    </ContainerPage>
  );
}
