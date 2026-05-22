import { Link } from "react-router-dom";

export default function ApprovalNeededOrders({ approvalNeededOrders }) {
  return (
    <div>
      <h2>Approval Needed</h2>
      <div>
        {approvalNeededOrders.length === 0 ? (
          <p>No orders need approval. Nice!</p>
        ) : (
          approvalNeededOrders.map((order) => (
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
