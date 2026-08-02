"use client";
import { useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";

export function ProductJump() {
  const [id, setId] = useState("1");
  const router = useRouter();

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/products/${id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="productId" className="sr-only">
        Product ID:
      </label>
      <input
        type="text"
        id="productId"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Go to Product</button>
    </form>
  );
}
