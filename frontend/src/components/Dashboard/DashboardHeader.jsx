import { Link } from "react-router-dom";

export default function DashboardHeader({ search, setSearch, filteredSearch }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Overview of current warehouse metrics</p>
      <div className="relative">
        <input
          type="text"
          placeholder="Search inventory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* This chunk of code was suggested from chatGPT & adjusted to fit our props */}
        {search && filteredSearch.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-md z-50">
            {" "}
            {/* classname for dropdown searchbar */}
            {filteredSearch.map((item) => (
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
      </div>
    </div>
  );
}
