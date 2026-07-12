import Link from "next/link";

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();

  return products;
}

export default async function ProductList() {
  const products = await getProducts();

  console.log("Fetched products:", products);

  return (
    <section className="grid">
      {products.map((product) => {
        return (
          <article key={product.id} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="card-image"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <Link className="button" href={`/products/${product.id}`}>
              View Details
            </Link>
          </article>
        );
      })}
    </section>
  );
}
