import { Link } from "react-router-dom";
import Item_photo from "../../assets/Item_photo.svg";

export default function CompletedOrders({ completedOrders }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">Completed Orders</h2>
        <span className="badge-good">{completedOrders.length} received</span>
      </div>

      <div className="grid gap-3">
        {completedOrders.length === 0 ? (
          <div className="card">
            <p className="text-sm text-slate-600">
              No completed orders to display.
            </p>
          </div>
        ) : (
          completedOrders.map((order) => (
            <div key={order.id} className="item-card border-l-4 border-l-mint">
              <Link to={`/orders/${order.id}`} className="item-row">
                <img
                  src={Item_photo}
                  alt="placeholder photo"
                  className="item-img"
                />

                <div className="min-w-0 flex-1">
                  <h5 className="font-bold">Order: {order.id}</h5>
                  <p className="font-mono text-xs text-slate-600">
                    Status: {order.status}
                  </p>
                  <span className="badge-good mt-2">Received</span>
                </div>
              </Link>

              <div className="mt-4">
                <Link
                  to={`/orders/${order.id}`}
                  className="btn-secondary w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
