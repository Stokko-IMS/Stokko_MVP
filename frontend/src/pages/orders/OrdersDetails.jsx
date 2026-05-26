// AI boiler plate for functionality filled out with our api calls and database schema table info
// ----------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PackageCheck, Trash2, ThumbsUp } from "lucide-react";

import {
  getOrderDetails,
  approveOrder,
  receiveOrder,
  deleteOrder,
} from "../../api/orders";
import Item_photo from "../../assets/Item_photo.svg";

export default function OrdersDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderRows, setOrderRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const data = await getOrderDetails(id);
        setOrderRows(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load order");
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [id]);

  async function handleApprove() {
    try {
      await approveOrder(id);
      navigate("/orders");
    } catch {
      setError("Failed to approve order");
    }
  }

  async function handleReceive() {
    try {
      await receiveOrder(id);
      navigate("/orders");
    } catch {
      setError("Failed to receive order");
    }
  }

  async function handleDelete() {
    try {
      await deleteOrder(id);
      navigate("/orders");
    } catch {
      setError("Failed to delete order");
    }
  }

  if (loading) return (
  <div className="card">
    <p className="animate-pulse text-sm text-slate-500">Loading...</p>
  </div>
);
  if (error) return <p>{error}</p>;
  if (!orderRows.length) return <p>No order found</p>;

  const order = orderRows[0];

  return (
    <main className="grid gap-5">
      <h1>Order Details</h1>

      <section className="card">
        <h2 className="mb-3">Items</h2>

        <div className="grid gap-3">
          {orderRows.map((row) => (
            <div key={row.order_item_id} className="item-card">
              <div className="item-row">
                <img
                  src={Item_photo}
                  alt="Item Photo Placeholder"
                  className="item-img"
                />

                <div>
                  <p className="font-bold">Item: {row.item_name}</p>
                  <p className="text-sm text-slate-600">
                    Description: {row.description}
                  </p>
                  <p className="font-mono text-sm">
                    Ordered Qty: {row.ordered_quantity}
                  </p>
                  <p className="font-mono text-sm">Price: ${row.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="mb-3">Order Info</h2>

        <div className="grid gap-2 text-sm">
          <p>
            <span className="font-bold">ID:</span> {order.id}
          </p>
          <p>
            <span className="font-bold">Supplier:</span> {order.supplier_name}
          </p>
          <p>
            <span className="font-bold">Email:</span> {order.supplier_email}
          </p>
          <p>
            <span className="font-bold">Status:</span>{" "}
            <span className="badge-low">{order.status}</span>
          </p>
        </div>
      </section>

      <section className="card">
        <h2 className="mb-3">Actions</h2>

        <div className="grid gap-2 md:flex">
          <button
            onClick={handleApprove}
            disabled={order.status !== "draft"}
            className="btn-primary"
          >
            <ThumbsUp size={16} /> Approve Order
          </button>

          <button
            onClick={handleReceive}
            disabled={order.status !== "submitted"}
            className="btn-secondary"
          >
            <PackageCheck size={16} />
            Receive Order
          </button>

          <button
            onClick={handleDelete}
            disabled={order.status !== "draft"}
            className="btn-danger"
          >
            <Trash2 size={16} /> Delete Order
          </button>
        </div>
      </section>
    </main>
  );
}
