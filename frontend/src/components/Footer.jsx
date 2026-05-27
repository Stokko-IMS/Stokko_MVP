import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200 px-4 py-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Stokko</p>
        <Link to="/contactUs" className="font-bold text-deep hover:text-amber">
          Contact us
        </Link>
      </div>
    </footer>
  );
}
