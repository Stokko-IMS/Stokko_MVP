import { Link } from "react-router-dom";
import Item_photo from "../assets/Item_photo.svg";

export default function AlertRow({ item, onMute }) {
  const isCritical =
    item.quantity === 0 || item.quantity / item.low_stock_threshold < 0.25;

  return (
    <div>
      <div>
        <img src={Item_photo} alt="Item photo placeholder" />
        <p>{item.name}</p>
        <p>SKU: {item.sku}</p>
        <p>
          Stock: {item.quantity} / min: {item.low_stock_threshold}
        </p>
        {isCritical && <span>Critical — immediate action required</span>}
      </div>

      <div>
        {/* <Link to={`/orders/add/${item.item_id}`}>Create Order</Link> */}

        <Link to={`/orders/add/${item.id || item.item_id}`}>Create Order</Link>

        <details>
          <summary>Mute alerts</summary>
          <button onClick={() => onMute(item.item_id, 1)}>1 day</button>
          <button onClick={() => onMute(item.item_id, 7)}>1 week</button>
          <button onClick={() => onMute(item.item_id, 30)}>1 month</button>
        </details>
      </div>
    </div>
  );
}
