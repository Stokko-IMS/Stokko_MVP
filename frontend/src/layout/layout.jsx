import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { LayoutDashboard, Package, AlertTriangle, Truck } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import Stokko_logo from "../assets/Stokko_logo.png";

const NAV_ITEMS = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  { path: "/inventory", label: "Inventory", icon: <Package size={18} /> },
  { path: "/lowStock", label: "Low stock", icon: <AlertTriangle size={18} /> },
  { path: "/orders", label: "Orders", icon: <Truck size={18} /> },
];

export default function Layout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = NAV_ITEMS.find((item) =>
    location.pathname.startsWith(item.path),
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="relative hidden md:block">
          <div className="pointer-events-none absolute -inset-5 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.95)_0%,rgba(148,163,184,0.55)_30%,rgba(100,116,139,0.25)_55%,transparent_80%)]" />

          <div className="relative px-3 py-4">
            <img src={Stokko_logo} alt="Stokko logo" className="w-30" />

            <p className="mt-2 text-xs text-slate-300">Inventory management</p>
          </div>
        </div>

        <div className="hidden md:block md:mt-3">
          <ThemeToggle />
        </div>

        <nav className="sidebar-nav md:mt-4" aria-label="Main navigation">
          {NAV_ITEMS.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="hidden md:block btn-primary mt-auto"
        >
          Log out
        </button>
      </aside>

      <div className="w-full">
        <header className="relative sticky top-0 z-40 flex items-center justify-between overflow-hidden bg-deep px-4 py-3 text-white md:hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_50%,rgba(148,163,184,0.55)_0%,rgba(148,163,184,0.28)_22%,rgba(100,116,139,0.12)_42%,transparent_68%)]" />
          <img
            src={Stokko_logo}
            alt="Stokko logo"
            className="relative w-20 p-0 drop-shadow-[0_2px_8px_rgba(15,23,42,0.65)]"
          />

          <div className="relative flex items-center gap-2">
            <div className="w-auto">
              <ThemeToggle />
            </div>

            <button
              onClick={handleLogout}
              className="rounded-stokko bg-amber px-3 py-1 text-sm font-bold text-deep dark:text-slate-100 shadow-md transition hover:bg-amber/90"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="page">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
