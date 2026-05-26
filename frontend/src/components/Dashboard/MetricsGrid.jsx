import { AlertTriangle, Package, ShoppingCart } from "lucide-react";

export default function MetricsGrid({ items, orders, lowStock }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="metric-card">
        <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
          <AlertTriangle size={20} /> Low Stock Items
        </p>
        <h3 className="metric-value">{lowStock.length}</h3>
      </div>
      <div className="metric-card">
        <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
          <Package size={20} /> Total Items
        </p>
        <h3 className="metric-value">{items.length}</h3>
      </div>
      <div className="metric-card">
        <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
          <ShoppingCart size={20} /> Total orders
        </p>
        <h3 className="metric-value">{orders.length}</h3>
      </div>
    </div>
  );
}
