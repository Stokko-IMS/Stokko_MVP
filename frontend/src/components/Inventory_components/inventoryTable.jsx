import { Link } from "react-router-dom";
import Item_photo from "../../assets/Item_photo.svg";

export default function InventoryTable({ items, onEdit }) {
  if (items.length === 0) {
    return (
      <div>
        <p>No items found.</p>
      </div>
    );
  }
  return (
    <div className="grid gap-3">
      {items.map((item) => {
        const isLowStock = item.quantity <= item.low_stock_threshold;

        return (
          <div
            key={item.id}
            data-low={isLowStock}
            className="item-card border-l-4 border-l-transparent data-[low=true]:border-l-amber"
          >
            <Link
              to={`/inventory/${item.id}`}
              className="item-row block md:flex"
            >
              <img
                src={Item_photo}
                alt="placeholder photo"
                className="item-img"
              />

              <div className="mt-3 min-w-0 flex-1 md:mt-0">
                <h5 className="text-lg font-bold">{item.name}</h5>
                <p className="font-mono text-xs text-slate-600">
                  SKU: {item.sku}
                </p>
                <p className="text-sm text-slate-600">Unit: {item.unit}</p>
                <p className="font-mono text-sm font-bold">
                  Quantity: {item.quantity}
                </p>

                {isLowStock && (
                  <span className="badge-low mt-2">Low Stock</span>
                )}
                {!isLowStock && (
                  <span className="badge-good mt-2">In Stock</span>
                )}
              </div>
            </Link>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => onEdit(item.id)}
                className="btn-secondary flex-1"
              >
                Edit
              </button>

              <Link
                to={`/orders/add/${item.id}`}
                className="btn-primary flex-1"
              >
                Create Order
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
