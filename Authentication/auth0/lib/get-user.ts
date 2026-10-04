import { auth } from "@/auth";

export async function getUser() {
  return (await auth())?.user ?? null;
}
