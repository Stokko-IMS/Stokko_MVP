import { Link } from "react-router-dom";
import Stokko_logo from "../assets/Stokko_logo.png";

export default function PublicNavbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-warehouse/95 px-4 py-3 backdrop-blur md:px-8">
      <Link to="/" className="flex items-center gap-2">
        <img src={Stokko_logo} alt="Stokko Logo" className="h-9 w-auto" />
      </Link>

      <div className="hidden gap-6 text-sm font-bold md:flex">
        <a href="#about" className="hover:text-amber">
          About
        </a>
        <a href="#features" className="hover:text-amber">
          Features
        </a>
        <a href="#footer" className="hover:text-amber">
          Contact
        </a>
      </div>

      <Link to="/login" className="btn-primary">
        Log in
      </Link>
    </nav>
  );
}
