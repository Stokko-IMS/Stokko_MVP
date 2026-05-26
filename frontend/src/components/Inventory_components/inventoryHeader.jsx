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
    <div>
      <div>
        <Search size={16} />
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* This chunk of code was suggested from chatGPT & adjusted to fit our props */}
        {search && filteredItems.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-md z-50">
            {" "}
            {/* classname for dropdown searchbar */}
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/inventory/${item.id}`}
                onClick={() => setSearch("")}
              >
                <div>{item.name}</div>
              </Link>
            ))}
          </div>
        )}

        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("low")}>Low stock</button>
          <button onClick={() => setFilter("in")}>In stock</button>
        </div>

        <div>
          <Link to={"/inventory/add"}>Add Item</Link>
        </div>
      </div>
    </div>
  );
}
