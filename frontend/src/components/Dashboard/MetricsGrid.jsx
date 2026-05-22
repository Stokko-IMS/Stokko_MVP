export default function MetricsGrid({ items, orders, lowStock }) {
  return (
    <div>
      <div>
        <span>Alert Icon</span>
        <p>Low Stock Items</p>
        <h3>{lowStock.length}</h3>
      </div>
      <div>
        <span>Inventory Icon</span>
        <p>Total Items</p>
        <h3>{items.length}</h3>
      </div>
      <div>
        <span>Cart Icon</span>
        <p>Total orders</p>
        <h3>{orders.length}</h3>
      </div>
    </div>
  );
}
