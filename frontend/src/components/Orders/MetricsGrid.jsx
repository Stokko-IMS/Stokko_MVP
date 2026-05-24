export default function MetricsGrid({
  orders,
  approvalNeededOrders,
  completedOrders,
}) {
  return (
    <div>
      <div>
        <span>Orders Icon</span>
        <p>Total Orders</p>
        <h3>{orders.length}</h3>
      </div>
      <div>
        <span>Orders Icon</span>
        <p>Need Aproval Orders</p>
        <h3>{approvalNeededOrders.length}</h3>
      </div>
      <div>
        <span>Orders Icon</span>
        <p>Completed orders</p>
        <h3>{completedOrders.length}</h3>
      </div>
    </div>
  );
}
