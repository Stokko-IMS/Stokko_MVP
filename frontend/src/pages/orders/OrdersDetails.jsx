// AI boiler plate for functionality filled out with our api calls and database schema table info
// ----------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  if (loading) return <p>Loading order...</p>;
  if (error) return <p>{error}</p>;
  if (!orderRows.length) return <p>No order found</p>;

  const order = orderRows[0];

  return (
    <main>
      <h1>Order Details</h1>
      <section>
        <h2>Items</h2>

        {orderRows.map((row) => (
          <div key={row.order_item_id}>
            <img src={Item_photo} alt="Item Photo Placeholder" />
            <p>Item: {row.item_name}</p>
            <p>Description: {row.description}</p>
            <p>Ordered Qty: {row.ordered_quantity}</p>
            <p>Price: {row.price}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Order Info</h2>
        <p>ID: {order.id}</p>
        <p>Supplier: {order.supplier_name}</p>
        <p>Email: {order.supplier_email}</p>
        <p>Status: {order.status}</p>
      </section>

      <section>
        <h2>Actions</h2>

        <button onClick={handleApprove} disabled={order.status !== "draft"}>
          Approve Order
        </button>
        <button onClick={handleReceive} disabled={order.status !== "submitted"}>
          Receive Order
        </button>
        <button onClick={handleDelete} disabled={order.status !== "draft"}>
          Delete Order
        </button>
      </section>
    </main>
  );
}
