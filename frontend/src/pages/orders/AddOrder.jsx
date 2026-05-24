// AI boiler plate for functionality filled out with our api calls and database schema table info
// ----------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getItemById } from "../../api/items";
import { createOrder, addItemsToOrder } from "../../api/orders";

export default function AddOrder() {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    supplier_name: "",
    supplier_email: "",
    quantity: 1,
    price: "",
  });

  useEffect(() => {
    async function fetchItem() {
      try {
        const data = await getItemById(itemId);
        setItem(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load item");
      } finally {
        setLoading(false);
      }
    }

    fetchItem();
  }, [itemId]);

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const order = await createOrder({
        supplier_name: form.supplier_name,
        supplier_email: form.supplier_email,
        status: "draft",
      });

      await addItemsToOrder(order.id, {
        item_id: item.id,
        quantity: Number(form.quantity),
        price: Number(form.price),
      });

      navigate("/inventory");
    } catch (err) {
      console.log(err);
      setError("Failed to create order");
    }
  }

  if (loading) return <p>Loading order form...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Create Order</h1>

      <section>
        <h2>Item</h2>
        <img src="../../assets/item_photo.svg" alt="Item Photo Placeholder" />
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
        <p>Current Stock: {item.quantity}</p>
        <p>Low Stock Threshold: {item.low_stock_threshold}</p>
      </section>

      <form onSubmit={handleSubmit}>
        <h2>Supplier Info</h2>

        <input
          name="supplier_name"
          placeholder="Supplier Name"
          value={form.supplier_name}
          onChange={handleChange}
          required
        />

        <input
          name="supplier_email"
          placeholder="Supplier Email"
          value={form.supplier_email}
          onChange={handleChange}
          required
        />

        <h2>Order Details</h2>

        <input
          name="quantity"
          type="number"
          min="1"
          value={form.quantity}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          value={form.price}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Order</button>
      </form>
    </main>
  );
}
