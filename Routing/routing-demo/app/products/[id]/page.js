import { getProductById } from "@/lib/products";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    return (
      <>
        <p>Product not found</p>
        <Link href="/products">Back to Products</Link>
      </>
    );
  }

  return (
    <>
      <section className="product-detail">
        <div className="product-image-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
        <p>
          <Link href="/products">Back to Products</Link>
        </p>
      </section>
    </>
  );
}
