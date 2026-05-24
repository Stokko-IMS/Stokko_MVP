import { Link } from "react-router-dom";

export default function CompletedOrders({ completedOrders }) {
  return (
    <div>
      <h2>Completed Orders</h2>
      <div>
        {completedOrders.length === 0 ? (
          <p>No completed orders to display.</p>
        ) : (
          completedOrders.map((order) => (
            <div key={order.id}>
              <Link to={`/orders/${order.id}`}>
                <img
                  src="../../assets/item_photo.svg"
                  alt="placeholder photo"
                />
                <h5>Order: {order.id}</h5>
                <p>Status: {order.status}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
