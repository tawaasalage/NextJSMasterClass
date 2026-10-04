"use client";

import { useEffect, useState } from "react";

export function ApiTester() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [output, setOutput] = useState("Choose an API to see its response.");
  const [pending, setPending] = useState(false);

  async function checkApi(path: string) {
    setPending(true);
    try {
      const response = await fetch(path, { cache: "no-store" });
      const body = await response.json();
      setOutput(
        `GET ${path}\nHTTP ${response.status}\n\n${JSON.stringify(body, null, 2)}`,
      );
    } catch {
      setOutput("Request failed. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="panel">
      <h2>Check API access</h2>
      <p>
        Both roles can use the member API. Only admins can use the admin API.
      </p>
      <div className="button-row">
        <button
          className="button button-dark"
          disabled={pending || !ready}
          onClick={() => checkApi("/api/protected")}
        >
          Test member API
        </button>
        <button
          className="button button-outline"
          disabled={pending || !ready}
          onClick={() => checkApi("/api/admin")}
        >
          Test admin API
        </button>
      </div>
      <div aria-live="polite" aria-busy={pending}>
        <pre>{pending ? "Checking access..." : output}</pre>
      </div>
      <p className="field-hint">
        200 = allowed · 403 = wrong role · 401 = not signed in
      </p>
    </section>
  );
}
