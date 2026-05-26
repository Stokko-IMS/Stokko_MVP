import { Link } from "react-router-dom";

export default function OrdersHeader({ search, setSearch, filteredSearch }) {
  return (
    <section className="page-header">
      <div>
        <p className="text-sm text-slate-600">
          Overview of current warehouse orders
        </p>
      </div>

      <div className="relative w-full md:max-w-sm">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && filteredSearch.length > 0 && (
          <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border border-slate-200 bg-white shadow-md">
            {filteredSearch.map((order) => (
              <Link
                key={order.id}
                to={`/orders/${order.id}`}
                onClick={() => setSearch("")}
                className="block px-3 py-2 text-sm hover:bg-slate-100"
              >
                Order: {order.id}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
