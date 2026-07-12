import { products } from "@/lib/products";

export async function GET() {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay
  return Response.json(products);
}
