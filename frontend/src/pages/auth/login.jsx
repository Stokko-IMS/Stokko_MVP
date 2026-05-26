import { useState, useActionState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../contexts/authContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    <main className="min-h-screen bg-warehouse px-4 py-10">
      <form action={tryLogin} className="form-panel">
        <div>
          <h1>Login</h1>
          <p className="mt-1 text-sm text-slate-600">
            Access your Stokko inventory dashboard.
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-stokko border border-red-300 bg-red-50 p-3 text-sm text-red-700"
          >
            <strong>Login Failed:</strong> {error}
          </div>
        )}

        <label>
          Email Address *
          <input type="email" name="email" autoComplete="email" required />
        </label>

        <label>
          Password *
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        <p className="text-right text-sm">
          <Link
            to="#"
            onClick={(e) => e.preventDefault()}
            className="font-bold text-deep hover:text-amber"
          >
            Forgot Password?
          </Link>
        </p>

        <button
          type="submit"
          disabled={isPending}
          className="btn-primary w-full"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-slate-600">
          Don't have an account yet?{" "}
          <Link to="/register" className="font-bold text-deep hover:text-amber">
            Register here.
          </Link>
        </p>
      </form>
    </main>
  );
}
