"use client";
import { signIn } from "next-auth/react";

type Provider = "github" | "google";

export function LoginButton({ provider }: { provider: Provider }) {
  async function handleSignIn() {
    try {
      await signIn(provider, { callbackUrl: "/dashboard" });
    } catch (error) {}
  }

  return (
    <button
      className="button button-dark full-width"
      onClick={() => handleSignIn()}
    >
      Sign in with {provider}
    </button>
  );
}
