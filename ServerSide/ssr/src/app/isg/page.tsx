import ContainerPage from "@/components/ContainerPage";

export const revalidate = 10;

export default function ISGPage() {
  const generated_time = new Date().toISOString();
  return (
    <>
      <ContainerPage
        title="Incremental Site Generation"
        description="This will render the page every 10sec"
      >
        <p>Page Generation Time</p>
        <p>{generated_time}</p>
        <p>Wait over 10sec to get the latest update</p>
      </ContainerPage>
    </>
  );
}
