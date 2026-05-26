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

        {/* <label>
          Password *
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label> */}

        {/* add confirm password post MVP */}

        {/*Eye on / Eye off */}
        <label>
          Password *
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
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

        {error && !isDuplicateEmail && <p role="alert">{error}</p>}

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
