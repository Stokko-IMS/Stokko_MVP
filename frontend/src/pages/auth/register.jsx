import { useActionState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, tryRegister, isPending] = useActionState(
    async (prevState, formData) => {
      // Extract variables directly matching your backend's requireBody payload
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const contact_number = formData.get("contact_number") || "";

      // Safety filer **NEW ======= checks for weak password with predictable patterns, flags the user during onboarding
      const sequentialPattern = /(abc|123|qwerty|password)/i;
      if (sequentialPattern.test(password)) {
        return {
          message:
            "Password is too predictable. Please avoid sequential sequences like '123' or 'abc'.",
        };
      }
      try {
        // Fires the payload directly to your existing Express route
        await register({ name, email, password, contact_number });
        navigate("/dashboard");
        return null;
      } catch (e) {
        return e.message;
      }
    },
    null,
  );

  // Checks for duplicate emails "already exists"
  const isDuplicateEmail = error?.message?.toLowerCase().includes("exists");

  return (
    <main>
      <h1>Create Your Account</h1>

      <form action={tryRegister}>
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
          Contact Number (Optional)
          <input type="tel" name="contact_number" autoComplete="tel" />
        </label>

        <label>
          Password *
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label>

        {/* Portfolio Security Note */}
        <div>
          <p>
            <strong>🔒 Portfolio Note:</strong> For this MVP capstone, we
            support inclusive password options. Users are responsible for
            choosing strong passwords.
          </p>
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? "Creating account..." : "Register"}
        </button>

        {error && !isDuplicateEmail && <p role="alert">{error.message}</p>}

        {isDuplicateEmail && (
          <p role="alert">
            Email already exists. <Link to="/login">Click here to login.</Link>
          </p>
        )}
      </form>

      <p>
        Already have an account? <Link to="/login">Login here.</Link>
      </p>
    </main>
  );
}
