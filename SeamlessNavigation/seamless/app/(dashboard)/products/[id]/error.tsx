"use client";

export default function ProductError({ reset }: { reset: () => void }) {
  return (
    <section className="notice">
      <h1>Error Loading Product</h1>
      <p>There was an error loading the product. Please try again later.</p>
      <button onClick={reset}>Retry</button>
    </section>
  );
}
