import { products } from "@/lib/products";
import Link from "next/link";

import { ProductJump } from "@/components/ProductJump";

export default function ProductsPage() {
  return (
    <>
      <div className="grid section">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <h2>{product.name} </h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Link href={`/products/${product.id}`}>View Product</Link>
          </article>
        ))}
      </div>

      <section className="section card">
        <h2>Jump to a Product</h2>
        <ProductJump />
      </section>
    </>
  );
}
