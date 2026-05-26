// Ai Solution below -------------->

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItemById, deleteItem } from "../../api/items.js";
import Item_photo from "../../assets/Item_photo.svg";
import { Pencil, Trash2 } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getItem() {
      try {
        const item = await getItemById(id);
        setItem(item);
      } catch (e) {
        console.log(e);
        setError("Failed to load item");
      } finally {
        setLoading(false);
      }
    }
    getItem();
  }, [id]);

  // const handleDelete = async () => {
  //   if (window.confirm("Are you sure?")) {
  //     deleteItem(id);
  //     navigate("/inventory");
  //   }
  // };

  const handleDelete = async () => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteItem(id); // adding await will page reloading before db deletes item - Picked up on google when debugging
        navigate("/inventory");
      } catch (err) {
        console.error("Failed to delete item", err);
      }
    }
  };

  if (loading)
    return (
      <div className="card">
        <p className="animate-pulse text-sm text-slate-500">Loading...</p>
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <main className="grid gap-5">
      <section className="card">
        <div className="item-row">
          <img src={Item_photo} alt="Item placeholder" className="item-img" />

          <div className="min-w-0 flex-1">
            <h1>{item.name}</h1>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>

            <div className="mt-4 grid gap-2 text-sm">
              <p className="font-mono">SKU: {item.sku}</p>
              <p className="font-mono">
                Quantity: {item.quantity} {item.unit}
              </p>
              <p className="font-mono">
                Low Stock Threshold: {item.low_stock_threshold}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="mb-3">Actions</h2>

        <div className="grid gap-2 md:flex">
          <Link to={`/inventory/edit/${id}`} className="btn-primary">
            <Pencil size={16} /> Edit this Item
          </Link>

          <button onClick={handleDelete} className="btn-danger">
            <Trash2 size={16} />
            Delete Item
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
