import { Link } from "react-router-dom";

export default function InventoryTable({ items, onEdit }) {
  if (items.length === 0) {
    return (
      <div>
        <p>No items found.</p>
      </div>
    );
  }
  return (
    <div>
      {items.map((item) => {
        const isLowStock = item.quantity <= item.low_stock_threshold;

        return (
          <div key={item.id} data-low={isLowStock}>
            <Link to={`/inventory/${item.id}`}>
              <img src="../../assets/item_photo.svg" alt="placeholder photo" />
              <h5>{item.name}</h5>
              <p>{`SKU: ${item.sku}`}</p>
              <p>{`Unit: ${item.unit}`}</p>
              <p>{`Quantity: ${item.quantity}`}</p>

              {isLowStock && <span>Low Stock</span>}
            </Link>

            <div>
              <button onClick={() => onEdit(item.id)}>Edit</button>
              <Link to={`/orders/add`}>Create Order</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
