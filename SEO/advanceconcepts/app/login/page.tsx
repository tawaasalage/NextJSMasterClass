import { signIn } from "./actions";

export default function LoginPage() {
  return (
    <article>
      <h1>Login Page</h1>
      <section className={"demo"}>
        <h2>Create a User session</h2>
        <form action={signIn}>
          <button className="button" type="submit">
            Sign In For This Session
          </button>
        </form>
      </section>
    </article>
  );
}
