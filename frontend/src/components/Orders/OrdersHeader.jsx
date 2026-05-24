import { Link } from "react-router-dom";

export default function OrdersHeader({ search, setSearch, filteredSearch }) {
  return (
    <div>
      {/* <h1>Orders</h1> Orders header located in layout.jsx*/}
      <p>Overview of current warehouse orders</p>
      <div className="relative">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* This chunk of code was suggested from chatGPT & adjusted to fit our props */}
        {search && filteredSearch.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-md z-50">
            {" "}
            {/* classname for dropdown searchbar */}
            {filteredSearch.map((order) => (
              <Link
                key={order.id}
                to={`/orders/${order.id}`}
                onClick={() => setSearch("")}
              >
                <div>Order: {order.id}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
