import { useState, useEffect } from "react";
import { getOrders } from "../../api/orders.js";

import OrdersHeader from "../../components/Orders/OrdersHeader";
import ApprovalNeededOrders from "../../components/Orders/ApprovalNeededOrders";
import ApprovedOrders from "../../components/Orders/ApprovedOrders";
import CompletedOrders from "../../components/Orders/CompletedOrders";
import MetricsGrid from "../../components/Orders/MetricsGrid";

export default function Orders() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const orders = await getOrders();
        setOrders(orders);
      } catch (err) {
        console.error(err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  const filteredSearch = search
    ? orders.filter((order) => order.id.toString().includes(search)).slice(0, 5)
    : [];

  const approvalNeededOrders =
    orders?.filter((order) => order.status === "draft") || [];

  const approvedOrders =
    orders?.filter((order) => order.status === "submitted") || [];

  const completedOrders =
    orders?.filter((order) => order.status === "received") || [];

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
      <OrdersHeader
        filteredSearch={filteredSearch}
        search={search}
        setSearch={setSearch}
      />

      <MetricsGrid
        orders={orders}
        approvalNeededOrders={approvalNeededOrders}
        completedOrders={completedOrders}
      />

      <ApprovalNeededOrders approvalNeededOrders={approvalNeededOrders} />

      <ApprovedOrders approvedOrders={approvedOrders} />

      <CompletedOrders completedOrders={completedOrders} />
    </main>
  );
}
