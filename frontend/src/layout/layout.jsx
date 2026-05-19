import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const NAV_ITEMS = [
  { path: "/dashboard", label: "Dashboard", icon: "ti-layout-dashboard" },
  { path: "/inventory", label: "Inventory", icon: "ti-package" },
  { path: "/lowStock", label: "Low stock", icon: "ti-alert-triangle" },
  { path: "/orders", label: "Orders", icon: "ti-truck" },
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
    <div>
      <aside>
        <div>
          <p>STOKKO</p>
          <p>Inventory management</p>
        </div>

        <nav aria-label="Main navigation">
          {NAV_ITEMS.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <button onClick={handleLogout}>Log out</button>
      </aside>

      <div>
        <header>
          <h1>{currentPage?.label ?? "Stokko"}</h1>
          <button aria-label="Notifications">Notifications</button>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
