import { demoPassword, demoUsers } from "@/lib/demo-users";
import { NextRequest, NextResponse } from "next/server";
import { deleteSession, createSession } from "@/lib/session";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  const user = demoUsers.find(
    (user) => user.email === email && password === demoPassword,
  );

  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  console.log(
    "Deleting session for user:",
    request.cookies.get("user_session")?.value,
  );
  const existingSession = request.cookies.get("user_session")?.value;
  if (existingSession) {
    await deleteSession(existingSession);
  }
  const response = NextResponse.json({ ok: true });

  response.cookies.set("user_session", await createSession(user.id), {
    httpOnly: true,
    maxAge: 60 * 60,
    sameSite: "lax",
  });

  return response;
}
