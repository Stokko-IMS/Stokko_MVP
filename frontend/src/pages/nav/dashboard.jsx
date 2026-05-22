import { useState, useEffect } from "react";
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
    return <p>Loading Dashboard...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
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
