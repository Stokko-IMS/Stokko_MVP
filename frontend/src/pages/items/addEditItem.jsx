// ---------------------------------AI Solution ----------------------------------

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemById(id);
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure?")) {
      deleteItem(id);
      navigate("/inventory");
    }
  };

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to={`/inventory/edit/${id}`}>Edit this Item</Link>
      <button onClick={handleDelete}>Delete Item</button>
    </div>
  );
};

export default ProductDetails;
