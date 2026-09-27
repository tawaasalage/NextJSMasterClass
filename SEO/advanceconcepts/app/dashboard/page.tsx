import { signOut } from "..//login/actions";

export default function DashboardPage() {
  return (
    <article>
      <h1>Dashboard Page</h1>
      <p>This is the Dashboard page content.</p>
      <section>
        <h2>Authentication State: Authenticated</h2>
        <form action={signOut}>
          <button className="button" type="submit">
            Sign Out
          </button>
        </form>
      </section>
    </article>
  );
}
