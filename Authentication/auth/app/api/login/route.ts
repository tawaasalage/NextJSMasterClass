import { demoPassword, demoUsers } from "@/lib/demo-users";

export async function POST(request: Request) {
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

  return new Response(JSON.stringify({ message: "Login successful" }), {
    headers: { "Content-Type": "application/json" },
  });
}
