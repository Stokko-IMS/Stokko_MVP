import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function InventoryHeader({
  filteredItems,
  setFilter,
  filter,
  search,
  setSearch,
}) {
  return (
    <div className="grid gap-4">
      <div className="relative">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -transalte-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search by name or SKU"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p1-9"
        />

        {/* This chunk of code was suggested from chatGPT & adjusted to fit our props */}
        {search && filteredItems.length > 0 && (
          <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border-slate-200 bg-white border shadow-md">
            {" "}
            {/* classname for dropdown searchbar */}
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/inventory/${item.id}`}
                onClick={() => setSearch("")}
                className="block px-3 py-2 text-sm hover:bg-slate-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "btn-primary" : "btn-secondary"}
          >
            All
          </button>
          <button
            onClick={() => setFilter("low")}
            className={filter === "low" ? "btn-primary" : "btn-secondary"}
          >
            Low stock
          </button>
          <button
            onClick={() => setFilter("in")}
            className={filter === "in" ? "btn-primary" : "btn-secondary"}
          >
            In stock
          </button>
        </div>

        <div>
          <Link to={"/inventory/add"} className="btn-primary ml-auto">
            Add Item
          </Link>
        </div>
      </div>
    </div>
  );
}
