import { cookies } from "next/headers";
import { getSessionUser } from "./session";

export async function getUser() {
  const sessionId = (await cookies()).get("user_session")?.value;
  return getSessionUser(sessionId || "");
}
