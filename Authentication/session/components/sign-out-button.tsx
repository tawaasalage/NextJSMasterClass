"use client";

export function SignOutButton() {
  async function handleSignOut() {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to sign out");
      }
      window.location.assign("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <div>
      <button className="btn btn-outline" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}
