import { Link } from "react-router-dom";

export default function ApprovedOrders({ approvedOrders }) {
  return (
    <div>
      <h2>Approved Orders</h2>
      <div>
        {approvedOrders.length === 0 ? (
          <p>No approved orders to display.</p>
        ) : (
          approvedOrders.map((order) => (
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
