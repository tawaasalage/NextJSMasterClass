export const metadata = {
  title: "Contact Page",
  description: "This is the contact page of our routing demo application.",
};

export default function ContactPage() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, est.
      </p>

      <section className="grid">
        <article className="card">
          <h2>Our Address</h2>
          <p>123 Main Street, Anytown, USA</p>
        </article>
        <article className="card">
          <h2>Our Contact No</h2>
          <p>+1 (123) 456-7890</p>
        </article>
        <article className="card">
          <h2>Our Email Address</h2>
          <p>info@company.com</p>
        </article>
      </section>
    </>
  );
}
