import { useActionState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // useActionState takes (actionFunction, initialErrorState)
  // It returns [errorMessage, formActionTrigger, isPending]
  const [error, tryLogin, isPending] = useActionState(
    async (prevState, formData) => {
      const email = formData.get("email");
      const password = formData.get("password");
      try {
        await login({ email, password });
        navigate("/dashboard");
        return null;
      } catch (e) {
        return e.message;
      }
    },
    null,
  );

  return (
    <main>
      <h1>Login</h1>

      {/* Error banner on invalid credentials */}
      {error && (
        <div role="alert" style={{ border: "1px solid red", padding: "10px" }}>
          <strong>Login Failed:</strong> {error}
        </div>
      )}

      <form action={tryLogin}>
        <label>
          Email Address *
          <input type="email" name="email" autoComplete="email" required />
        </label>

        <label>
          Password *
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </label>

        {/* Forgot password link (UI only for MVP) */}
        <p>
          <Link to="#" onClick={(e) => e.preventDefault()}>
            Forgot Password?
          </Link>
        </p>

        <button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      <p>
        Don't have an account yet? <Link to="/register">Register here.</Link>
      </p>
    </main>
  );
}
