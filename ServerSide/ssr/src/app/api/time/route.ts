export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    { time: new Date().toISOString() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
