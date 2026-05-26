import { AlertOctagon, TrendingDown, Timer } from "lucide-react";

export default function AlertSummary({ items }) {
  const stockout = items.filter((item) => item.quantity === 0).length;
  const lowStock = items.filter((item) => item.quantity > 0).length;

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div className="metric-card">
        <p className="text-sm text-slate-600">Total alerts</p>
        <h3 className="metric-value">{items.length}</h3>
      </div>
      <div className="metric-card">
        <p className="flex items-center gap-2 text-sm text-slate-600">
          <AlertOctagon size={20} /> Stockout
        </p>
        <h3 className="metric-value">{stockout}</h3>
      </div>
      <div className="metric-card">
        <p className="flex items-center gap-2 text-sm text-slate-600">
          <TrendingDown size={20} />
          Low stock
        </p>
        <h3 className="metric-value">{lowStock}</h3>
      </div>
      <div className="metric-card">
        <p className="flex items-center gap-2 text-sm text-slate-600">
          <Timer size={20} /> Expiring soon
        </p>
        <h3 className="metric-value">0</h3>
      </div>
    </div>
  );
}
