export default function ProductLoading() {
  return (
    <>
      <h1>Products</h1>
      <p>Loading products...</p>

      <section className="grid">
        <article className="card skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-line wide"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </article>

        <article className="card skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-line wide"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </article>

        <article className="card skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-line wide"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </article>
      </section>
    </>
  );
}
