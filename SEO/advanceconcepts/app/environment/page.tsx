import { ClientValue } from "./client-value";

export default function EnvironmentPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://defaulturl.com";
  const dbServer = process.env.DB_SERVER ?? "cannot access DB_SERVER";

  return (
    <article>
      <ClientValue />
      <h1>Environment Page</h1>
      <h3>Base URL from Environment Variable: {baseUrl}</h3>
      <h3>DB Server from Environment Variable: {dbServer}</h3>
      <p>This is the Environment page content.</p>
    </article>
  );
}
