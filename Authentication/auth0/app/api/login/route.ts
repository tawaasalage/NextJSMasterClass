import { demoPassword, demoUsers } from "@/lib/demo-users";
import { NextRequest, NextResponse } from "next/server";
import { deleteSession, createSession } from "@/lib/session";
import { createToken } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const user = demoUsers.find((user) => user.email === email);

  if (!user || password !== demoPassword) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const respose = NextResponse.json({ ok: true });
  respose.cookies.set("jwt_token", await createToken(user), {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60, // 1 hour
  });

  return respose;
}
