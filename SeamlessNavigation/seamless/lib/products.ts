export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 23,
    description: "This is the first product.",
  },
  {
    id: "2",
    name: "Product 2",
    price: 30,
    description: "This is the second product.",
  },
  {
    id: "3",
    name: "Product 3",
    price: 35,
    description: "This is the third product.",
  },
];

export async function getProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  if (id == "error") {
    throw new Error("Simulated error for product with id 'error'");
  }
  return products.find((product) => product.id === id);
}
