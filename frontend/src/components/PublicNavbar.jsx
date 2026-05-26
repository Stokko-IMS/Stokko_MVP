import { Link } from "react-router-dom";
import Stokko_logo from "../assets/Stokko_logo.png";

export default function PublicNavbar() {
  return (
    <nav>
      <img src={Stokko_logo} alt="Stokko Logo" />
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
