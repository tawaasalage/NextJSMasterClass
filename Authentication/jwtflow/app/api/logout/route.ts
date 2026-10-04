import { NextRequest, NextResponse } from "next/server";
import { deleteSession } from "@/lib/session";

export async function POST(request: NextRequest) {
  await deleteSession(request.cookies.get("user_session")?.value || "");
  const response = new NextResponse(JSON.stringify({ ok: true }));
  response.cookies.delete("user_session");
  return response;
}
