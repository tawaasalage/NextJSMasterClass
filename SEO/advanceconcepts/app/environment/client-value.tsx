"use client";

export function ClientValue() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://defaulturl.com";
  const dbServer = process.env.DB_SERVER ?? "cannot access DB_SERVER";

  return (
    <div>
      <h3>{baseUrl}</h3>
      <h3>{dbServer}</h3>
    </div>
  );
}
