import { LoginButton } from "@/components/login-button";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="panel">
        <h1>Sign In</h1>
        <p>use your Github or Google Account to sign in</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <LoginButton provider="github" />
          <LoginButton provider="google" />
        </div>
      </div>
    </div>
  );
}
