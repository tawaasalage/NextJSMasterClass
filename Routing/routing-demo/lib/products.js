export const products = [
  {
    id: "1",
    name: "Laptop",
    price: 1200,
    image: "http://localhost:3000/products/laptop.svg",
    description: "A lightweight laptop for study, coding, and presentations.",
  },
  {
    id: "2",
    name: "Headphones",
    price: 150,
    image: "http://localhost:3000/products/headphones.svg",
    description: "Wireless headphones for online classes and focused work.",
  },
  {
    id: "3",
    name: "Notebook",
    price: 8,
    image: "http://localhost:3000/products/notebook.svg",
    description: "A simple notebook for lecture notes and quick sketches.",
  },
  {
    id: "4",
    name: "USB",
    price: 800,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9S45hWMsJ60SaiOj8qcgt1-gkubZaWl6EKTA7_rutb8O5i8OQ-HWGH-z&s=10",
    description: "A simple notebook for lecture notes and quick sketches.",
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
