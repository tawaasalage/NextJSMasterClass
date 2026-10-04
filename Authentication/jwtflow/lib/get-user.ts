import { cookies } from "next/headers";
import { getTokenUser } from "./jwt";
export async function getUser() {
  const value = (await cookies()).get("jwt_token")?.value as string;
  return getTokenUser(value);
}
