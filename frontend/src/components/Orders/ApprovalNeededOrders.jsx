import { Link } from "react-router-dom";
import Item_photo from "../../assets/Item_photo.svg";

export default function ApprovalNeededOrders({ approvalNeededOrders }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">Approval Needed</h2>
        <span className="badge-low">{approvalNeededOrders.length} pending</span>
      </div>

      <div className="grid gap-3">
        {approvalNeededOrders.length === 0 ? (
          <div className="card">
            <p className="text-sm text-slate-600">
              No orders need approval. Nice!
            </p>
          </div>
        ) : (
          approvalNeededOrders.map((order) => (
            <div key={order.id} className="item-card border-l-4 border-l-amber">
              <Link to={`/orders/${order.id}`} className="item-row">
                <img
                  src={Item_photo}
                  alt="placeholder photo"
                  className="item-img"
                />

                <div className="min-w-0 flex-1">
                  <h5 className="font-bold">Order: {order.id}</h5>
                  <p className="font-mono text-xs text-slate-600 dark:text-slate-300">
                    Status: {order.status}
                  </p>
                  <span className="badge-low mt-2">Needs Review</span>
                </div>
              </Link>

              <div className="mt-4">
                <Link to={`/orders/${order.id}`} className="btn-primary w-full">
                  Review Order
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
