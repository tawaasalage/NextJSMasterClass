import { getProduct } from "@/lib/products";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <article className="card">
      <p className="eyebrow">Product ID: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Price: ${product.price}</p>
      <p className="lead">Product Description: {product.description}</p>
      <Link href="/products">Back to Products</Link>
    </article>
  );
}
