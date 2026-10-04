"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  async function handleSignOut() {
    signOut({ callbackUrl: "/login" });
  }

  return (
    <div>
      <button className="btn btn-outline" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}
