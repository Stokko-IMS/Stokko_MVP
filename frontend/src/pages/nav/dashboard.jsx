import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllItems } from "../../api/items";
import { getLowStockItems } from "../../api/inventory";
import { getOrders } from "../../api/orders";

import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import MetricsGrid from "../../components/Dashboard/MetricsGrid";
import AttentionRequired from "../../components/Dashboard/AttentionRequired";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // location is for the registration successfull message
  // Upon successful registration - success message appears but because reigster page is set to immediatately wipe page and reroute to dashboard
  // useLocation sends success message to dashboard
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(!!location.state?.message);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [itemsData, lowStockData, ordersData] = await Promise.all([
          getAllItems(),
          getLowStockItems(),
          getOrders(),
        ]);

        setItems(itemsData);
        setLowStock(lowStockData);
        setOrders(ordersData);
      } catch (err) {
        console.error(err);
        setError("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  const filteredSearch = search
    ? items
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        )
        .slice(0, 5)
    : [];

  if (loading) {
    return (
      <div className="card">
        <p className="animate-pulse text-sm text-slate-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="grid gap-5">
      {showSuccess && location.state?.message && (
        <div role="alert">
          <p>{location.state.message}</p>
          <button type="button" onClick={() => setShowSuccess(false)}>
            ✕
          </button>
        </div>
      )}

      <DashboardHeader
        filteredSearch={filteredSearch}
        search={search}
        setSearch={setSearch}
      />

      <MetricsGrid lowStock={lowStock} orders={orders} items={items} />

      <AttentionRequired lowStock={lowStock} />
    </main>
  );
}
