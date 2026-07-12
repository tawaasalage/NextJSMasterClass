import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          Our Store
        </Link>

        <nav className="nav">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/products">Products</Link>
        </nav>
      </div>
    </header>
  );
}
