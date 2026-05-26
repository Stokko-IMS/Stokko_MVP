import { ShoppingCart, Clock, CheckCircle } from "lucide-react";

export default function MetricsGrid({
  orders,
  approvalNeededOrders,
  completedOrders,
}) {
  return (
    <section className="grid gap-3 md:grid-cols-3">
      <div className="metric-card">
        <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
          <ShoppingCart size={20} /> Total Orders
        </p>
        <h3 className="metric-value">{orders.length}</h3>
      </div>
      <div className="metric-card">
        <p className="mb-3 flex items-cetner gap-2 text-sm text-slate-600">
          <Clock size={20} /> Need Aproval Orders
        </p>
        <h3 className="metric-value">{approvalNeededOrders.length}</h3>
      </div>
      <div className="metric-card">
        <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
          <CheckCircle size={20} /> Completed orders
        </p>
        <h3 className="metric-value">{completedOrders.length}</h3>
      </div>
    </section>
  );
}
