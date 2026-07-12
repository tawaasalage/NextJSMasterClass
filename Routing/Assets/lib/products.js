export const products = [
  {
    id: "1",
    name: "Laptop",
    price: 1200,
    image: "/products/laptop.svg",
    description: "A lightweight laptop for study, coding, and presentations.",
  },
  {
    id: "2",
    name: "Headphones",
    price: 150,
    image: "/products/headphones.svg",
    description: "Wireless headphones for online classes and focused work.",
  },
  {
    id: "3",
    name: "Notebook",
    price: 8,
    image: "/products/notebook.svg",
    description: "A simple notebook for lecture notes and quick sketches.",
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
