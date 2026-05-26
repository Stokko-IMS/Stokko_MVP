// Ai Solution below -------------->

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItemById, deleteItem } from "../../api/items.js";

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

  if (loading) return <p>loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={`${item.item_photo}`} />
      <p>{item.description}</p>
      <p>{item.sku}</p>
      <p>
        {item.quantity} {item.unit}
      </p>
      <p>{item.low_stock_threshold}</p>
      <Link to={`/inventory/edit/${id}`}>
        <Pencil size={16} /> Edit this Item
      </Link>
      <button onClick={handleDelete}>
        <Trash2 size={16} />
        Delete Item
      </button>
    </div>
  );
};

export default ProductDetails;
