import { Link } from "react-router-dom";

export default function AttentionRequired({ lowStock }) {
  return (
    <div>
      {lowStock.length === 0 ? (
        <p>No low stock items to display. Nice!</p>
      ) : (
        lowStock.map((item) => (
          <div key={item.id}>
            <Link to={`/inventory/${item.id}`}>
              <img src="../../assets/item_photo.svg" alt="placeholder photo" />
              <h5>{item.name}</h5>
              <p>{`SKU: ${item.sku}`}</p>
              <p>{`Quantity: ${item.quantity}`}</p>
              <span>Low Stock</span>{" "}
              {/*This will be our low stock badge, i dont know if span is the correct tag to use here*/}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
