import { AlertOctagon, TrendingDown, Timer } from "lucide-react";

export default function AlertSummary({ items }) {
  const stockout = items.filter((item) => item.quantity === 0).length;
  const lowStock = items.filter((item) => item.quantity > 0).length;

  return (
    <div>
      <div>
        <p>Total alerts</p>
        <h3>{items.length}</h3>
      </div>
      <div>
        <p>
          <AlertOctagon size={20} /> Stockout
        </p>
        <h3>{stockout}</h3>
      </div>
      <div>
        <p>
          <TrendingDown size={20} />
          Low stock
        </p>
        <h3>{lowStock}</h3>
      </div>
      <div>
        <p>
          <Timer size={20} /> Expiring soon
        </p>
        <h3>0</h3>
      </div>
    </div>
  );
}
