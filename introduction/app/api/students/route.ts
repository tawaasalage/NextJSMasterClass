import { NextResponse } from "next/server";

export async function GET() {
  const students = [
    { id: 1, name: "Michael Brown" },
    { id: 2, name: "Emily Davis" },
    { id: 3, name: "Daniel Wilson" },
  ];
  return NextResponse.json(students);
}
