type Response = { ref: string; heRef: string };

async function fetchData() {
  const response = await fetch("https://www.sefaria.org/api/texts/random", {
    next: { revalidate: 10 },
  });
  return (await response.json()) as Response;
}

export default async function CachingPage() {
  const data = await fetchData();

  return (
    <section>
      <p>Caching Method 1</p>
      <article>
        <h2>Ref: {data.ref}</h2>
      </article>
    </section>
  );
}
