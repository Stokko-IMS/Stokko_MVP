import { useActionState, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [error, tryRegister, isPending] = useActionState(
    async (prevState, formData) => {
      // Extract variables directly matching backend's requireBody payload
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const contact_number = formData.get("contact_number") || "";

      // Safety filer **NEW ======= checks for weak password with predictable patterns, flags the user during onboarding
      const sequentialPattern = /(abc|123|qwerty|password)/i;
      if (sequentialPattern.test(password)) {
        return "Too predictable. Avoid easy patterns like '123' or 'abc'.";
      }
      try {
        // Fires the payload directly to existing Express route
        await register({ name, email, password, contact_number });
        navigate("/dashboard", {
          state: { message: "Account created successfully!" },
        });
        return null;
      } catch (e) {
        return e.message;
      }
    },
    null,
  );

  //   // Checks for duplicate emails "already exists"
  const isDuplicateEmail =
    typeof error === "string" && error.toLowerCase().includes("exists");

  return (
    <main className="min-h-screen bg-warehouse px-4 py-10">
      <form action={tryRegister} className="form-panel">
        <div>
          <h1>Create Your Account</h1>
          <p className="mt-1 text-sm text-slate-600">
            Start managing inventory with Stokko.
          </p>
        </div>

        <label>
          Name *
          <input
            type="text"
            name="name"
            placeholder="First and Last name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Email *
          <input type="email" name="email" autoComplete="email" required />
        </label>

        <label>
          Contact Number
          <input type="tel" name="contact_number" autoComplete="tel" />
        </label>

        <label>
          Password *
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              required
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        <div className="rounded-stokko border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
          <p>
            <strong>Portfolio Note:</strong> For this MVP capstone, users are
            responsible for choosing strong passwords.
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="btn-primary w-full"
        >
          {isPending ? "Creating account..." : "Register"}
        </button>

        {error && !isDuplicateEmail && (
          <p role="alert" className="text-sm font-bold text-red-600">
            {error}
          </p>
        )}

        {isDuplicateEmail && (
          <p role="alert" className="text-sm text-red-600">
            Email already exists.{" "}
            <Link to="/login" className="font-bold underline">
              Click here to login.
            </Link>
          </p>
        )}

        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-deep hover:text-amber">
            Login here.
          </Link>
        </p>
      </form>
    </main>
  );
}
