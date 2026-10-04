import { NextRequest, NextResponse } from "next/server";
import { deleteSession } from "@/lib/session";

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete("jwt_token");
  return response;
}
