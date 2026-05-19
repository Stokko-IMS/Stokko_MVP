import { Link } from "react-router";

export default function HomeNavbar() {
  return (
    <nav>
      <img src="../assets/stokkoLogo" alt="Stokko Logo" />
      <div>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#footer">Contact Us</a>
      </div>
      <div>
        <Link to="/login">Log in</Link>
      </div>
    </nav>
  );
}
