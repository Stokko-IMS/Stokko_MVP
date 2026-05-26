import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getItemById, createItem, updateItem } from "../../api/items";
import { Save } from "lucide-react";

{
  /* The structure of this code was given to me by chatGPT
  I filled out the structure to best fit our needs/existing functions */
}
export default function InventoryForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    sku: "",
    quantity: "",
    unit: "",
    low_stock_threshold: "",
  });

  const [loading, setLoading] = useState(isEditMode);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await getItemById(id);

        if (!item) {
          navigate("/inventory");
          return;
        }

        setFormData({
          name: item.name || "",
          description: item.description || "",
          sku: item.sku || "",
          quantity: item.quantity || "",
          unit: item.unit || "",
          low_stock_threshold: item.low_stock_threshold || "",
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (isEditMode) {
      fetchItem();
    }
  }, [id, isEditMode, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...formData,
      quantity: Number(formData.quantity),
      low_stock_threshold: Number(formData.low_stock_threshold),
    };

    try {
      if (isEditMode) {
        await updateItem(id, payload);
      } else {
        await createItem(payload);
      }

      navigate("/inventory");
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  if (loading)
    return (
      <div className="card">
        <p className="animate-pulse text-sm text-slate-500">Loading...</p>
      </div>
    );

  return (
    <main className="grid gap-5">
      <form onSubmit={handleSubmit} className="form-panel">
        <div>
          <h1>{isEditMode ? "Edit Item" : "Add Item"}</h1>
          <p className="mt-1 text-sm text-slate-600">
            {isEditMode
              ? "Update inventory item details."
              : "Create a new inventory item."}
          </p>
        </div>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <label htmlFor="sku">SKU</label>
        <input
          id="sku"
          name="sku"
          type="text"
          value={formData.sku}
          onChange={handleChange}
          placeholder="SKU"
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          min="0"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />

        <label htmlFor="unit">Unit</label>
        <input
          id="unit"
          name="unit"
          type="text"
          value={formData.unit}
          onChange={handleChange}
          placeholder="Unit"
        />

        <label htmlFor="low_stock_threshold">Low Stock Threshold</label>
        <input
          id="low_stock_threshold"
          name="low_stock_threshold"
          type="number"
          min="0"
          value={formData.low_stock_threshold}
          onChange={handleChange}
          placeholder="Low Stock Threshold"
        />

        <button type="submit" disabled={loading} className="btn-primary w-full">
          <Save size={16} />
          {isEditMode ? "Update Item" : "Create Item"}
        </button>
      </form>
    </main>
  );
}
