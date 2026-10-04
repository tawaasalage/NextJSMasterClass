import { getUser } from "@/lib/get-user";

export async function GET() {
  const user = await getUser();
  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  return Response.json({
    message: `You are authorized to access this API.`,
  });
}
