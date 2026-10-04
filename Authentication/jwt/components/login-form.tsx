"use client";
import { useState } from "react";
import { demoUsers, demoPassword } from "@/lib/demo-users";
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        window.location.assign("/dashboard");
      }
    } catch (error) {}
  }

  return (
    <div>
      <h1>Sign IN</h1>
      <div>
        <h2>Pick Your Users</h2>
        {demoUsers.map((user) => (
          <div key={user.id}>
            <button
              onClick={() => {
                setEmail(user.email);
                setPassword(demoPassword);
              }}
            >
              {user.name}
            </button>
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" value={email} />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" value={password} />
          <button type="submit" className="button button-dark">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
