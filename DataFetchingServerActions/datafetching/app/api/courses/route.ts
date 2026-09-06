import { getCourses } from "@/lib/data";

export async function GET() {
  const course = await getCourses();
  return Response.json(course);
}
