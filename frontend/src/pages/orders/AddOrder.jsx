// AI boiler plate for functionality filled out with our api calls and database schema table info
// ----------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getItemById } from "../../api/items";
import { createOrder, addItemsToOrder } from "../../api/orders";
import Item_photo from "../../assets/Item_photo.svg";

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
      console.log("CREATED ORDER:", order);

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

  if (loading)
    return (
      <div className="card">
        <p className="animate-pulse text-sm text-slate-500">Loading...</p>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <main className="grid gap-5">
      <div>
        <h1>Create Order</h1>
        <p className="mt-1 text-sm text-slate-600">
          Generate a supplier order for this inventory item.
        </p>
      </div>

      <section className="card">
        <h2 className="mb-3">Item</h2>

        <div className="item-row">
          <img
            src={Item_photo}
            alt="Item Photo Placeholder"
            className="item-img"
          />

          <div className="min-w-0 flex-1 text-sm">
            <p className="font-bold">{item.name}</p>
            <p className="text-slate-600">{item.description}</p>
            <p className="font-mono">Current Stock: {item.quantity}</p>
            <p className="font-mono">
              Low Stock Threshold: {item.low_stock_threshold}
            </p>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="form-panel">
        <h2>Supplier Info</h2>

        <label htmlFor="supplier_name">Supplier Name</label>
        <input
          name="supplier_name"
          placeholder="Supplier Name"
          value={form.supplier_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="supplier_email">Supplier Email</label>
        <input
          name="supplier_email"
          type="email"
          placeholder="supplier@example.com"
          value={form.supplier_email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          placeholder="Comment...."
          value={form.comment}
          onChange={handleChange}
          required
        />

        <h2 className="pt-2">Order Details</h2>

        <label htmlFor="quantity">Quantity</label>
        <input
          name="quantity"
          type="number"
          min="1"
          value={form.quantity}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          placeholder="Do not include $"
          value={form.price}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-primary w-full">
          Create Order
        </button>
      </form>
    </main>
  );
}
