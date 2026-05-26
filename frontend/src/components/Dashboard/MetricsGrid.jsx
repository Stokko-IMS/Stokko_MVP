import { AlertTriangle, Package, ShoppingCart } from "lucide-react";

export default function MetricsGrid({ items, orders, lowStock }) {
  return (
    <div>
      <div>
        <span>Alert Icon</span>
        <p>
          {" "}
          <AlertTriangle size={20} /> Low Stock Items
        </p>
        <h3>{lowStock.length}</h3>
      </div>
      <div>
        <span>Inventory Icon</span>
        <p>
          <Package size={20} /> Total Items
        </p>
        <h3>{items.length}</h3>
      </div>
      <div>
        <span>Cart Icon</span>
        <p>
          <ShoppingCart size={20} /> Total orders
        </p>
        <h3>{orders.length}</h3>
      </div>
    </div>
  );
}
