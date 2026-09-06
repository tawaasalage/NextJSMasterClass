"use client";

import { SubmitEvent, useState } from "react";

type APIResponse = { message: string; error: string };

export function ContactForm() {
  const [result, setResult] = useState<APIResponse>({ message: "", error: "" });

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: form.get("email"),
        message: form.get("message"),
      }),
    });

    const data = (await response.json()) as APIResponse;
    setResult(data);
  }
  return (
    <form className="panel form-card" onSubmit={handleSubmit}>
      <label>Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your email Address"
        required
      />

      <label>Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Write a short Message"
        required
        minLength={1}
      />

      <button type="submit">POST TO API</button>

      {result.message && <p className="success">{result.message}</p>}
      {result.error && <p className="error">{result.error}</p>}
    </form>
  );
}
