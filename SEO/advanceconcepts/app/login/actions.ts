"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn() {
  const cookieStore = await cookies();
  cookieStore.set("user_token", "authenticated", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  redirect("/dashboard");
}

export async function signOut() {
  const cookieStore = await cookies();
  cookieStore.delete("user_token");
  redirect("/login");
}
