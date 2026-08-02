export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Marketing</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
