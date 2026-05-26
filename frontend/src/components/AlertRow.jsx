import { Link } from "react-router-dom";
import { AlertTriangle, BellOff } from "lucide-react";
import Item_photo from "../assets/Item_photo.svg";

export default function AlertRow({ item, onMute }) {
  const isCritical =
    item.quantity === 0 || item.quantity / item.low_stock_threshold < 0.25;

  return (
    <div className="item-card border-1-4 border-1-amber hover:cursor-pointer">
      <Link to={`/inventory/${item.item_id}`}>
        <div className="item-row">
          <img
            src={Item_photo}
            alt="Item photo placeholder"
            className="item-img"
          />
          <div className="min-w-0 flex-1">
            <p className="font-bold">{item.name}</p>
            <p className="font-mono text-xs text-slate-600 dark:text-slate-300">
              SKU: {item.sku}
            </p>
            <p className="font-mono text-xs text-slate-600 dark:text-slate-300">
              Stock: {item.quantity} / min: {item.low_stock_threshold}
            </p>
            {isCritical && (
              <span className="badge-low mt-2">
                <AlertTriangle size={16} /> Critical — immediate action required
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-4 grid gap-2 md:flex">
        {/* <Link to={`/orders/add/${item.item_id}`}>Create Order</Link> */}

        <Link
          to={`/orders/add/${item.id || item.item_id}`}
          className="btn-primary"
        >
          Create Order
        </Link>

        <details className="rounded-stokko border border-slate-200 dark:border-slate-700 p-2 text-sm">
          <summary className="flex cursor-pointer items-center gap-2 font-bold">
            <BellOff size={14} /> Mute alerts
          </summary>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => onMute(item.item_id, 1)}
              className="btn-secondary dark:bg-white dark:hover:text-deep"
            >
              1 day
            </button>
            <button
              onClick={() => onMute(item.item_id, 7)}
              className="btn-secondary dark:bg-white dark:hover:text-deep"
            >
              1 week
            </button>
            <button
              onClick={() => onMute(item.item_id, 30)}
              className="btn-secondary dark:bg-white dark:hover:text-deep"
            >
              1 month
            </button>
          </div>
        </details>
      </div>
    </div>
  );
}
