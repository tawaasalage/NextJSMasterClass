import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];
  return NextResponse.json(users);
}
