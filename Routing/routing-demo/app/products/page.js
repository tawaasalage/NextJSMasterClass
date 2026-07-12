import ProductList from "@/components/ProductList";

export const metadata = {
  title: "Products Page",
  description: "This is the products page of our routing demo application.",
};

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <p>Welcome to the products page of our routing demo application.</p>
      <ProductList />
    </div>
  );
}
