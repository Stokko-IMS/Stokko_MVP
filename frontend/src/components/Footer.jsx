import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <p>&copy; 2026 Stokko</p>
      <Link to="/contactUs">Contact us</Link>
    </footer>
  );
}
