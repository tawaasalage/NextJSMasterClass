import { getUser } from "@/lib/get-user";

export async function GET() {
  const user = await getUser();
  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  if (user.role !== "admin") {
    return Response.json({ message: "Forbidden Admin Only" }, { status: 403 });
  }

  return Response.json({
    message: `You are authorized to access this Admin API.`,
  });
}
