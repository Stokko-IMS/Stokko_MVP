import { ShoppingCart, Clock, CheckCircle } from "lucide-react";

export default function MetricsGrid({
  orders,
  approvalNeededOrders,
  completedOrders,
}) {
  return (
    <div>
      <div>
        <span>Orders Icon</span>
        <p>
          <ShoppingCart size={20} /> Total Orders
        </p>
        <h3>{orders.length}</h3>
      </div>
      <div>
        <span>Orders Icon</span>
        <p>
          <Clock size={20} /> Need Aproval Orders
        </p>
        <h3>{approvalNeededOrders.length}</h3>
      </div>
      <div>
        <span>Orders Icon</span>
        <p>
          <CheckCircle size={20} /> Completed orders
        </p>
        <h3>{completedOrders.length}</h3>
      </div>
    </div>
  );
}
