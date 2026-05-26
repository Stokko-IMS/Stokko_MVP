import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { LayoutDashboard, Package, AlertTriangle, Truck } from "lucide-react";
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
        <div className="hidden md:block mb-8">
          <img src={Stokko_logo} alt="Stokko logo" className="w-30" />
          <p className="text-xs text-slate-300">Inventory management</p>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
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
          className="hidden md:block btn-primary mt-8"
        >
          Log out
        </button>
      </aside>

      <div className="w-full">
        <header className="sticky top-0 z-40 flex items-center justify-between bg-deep px-4 py-3 text-white md:hidden">
          <img src={Stokko_logo} alt="Stokko logo" className="w-20 p-0" />

          <button
            onClick={handleLogout}
            className="rounded-stokko border border-slate-600 px-3 py-1 text-sm hover:bg-slate-800"
          >
            Logout
          </button>
        </header>

        <main className="page">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
