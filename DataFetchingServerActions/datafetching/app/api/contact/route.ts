import { NextResponse } from "next/server";

type ContactRequest = {
  email: string;
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactRequest;

  if (typeof body.email !== "string" || !body.email.includes("@")) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    );
  }

  if (typeof body.message !== "string" || body.message.trim().length < 5) {
    return NextResponse.json(
      { error: "Message must be at least 5 characters long" },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: `Thanks for your message ${body.email}. We will get back to you soon!`,
  });
}
