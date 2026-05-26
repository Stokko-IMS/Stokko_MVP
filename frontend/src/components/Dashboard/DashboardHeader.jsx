import { Link } from "react-router-dom";

export default function DashboardHeader({ search, setSearch, filteredSearch }) {
  return (
    <div className="page-header">
      {/* <h1>Dashboard</h1> Dashboard header located in layout.jsx*/}
      <p className="text-sm text-slate-600">
        Overview of current warehouse metrics
      </p>
      <div className="relative w-full md:max-w-sm">
        <input
          type="text"
          placeholder="Search inventory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* This chunk of code was suggested from chatGPT & adjusted to fit our props */}
        {search && filteredSearch.length > 0 && (
          <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border border-slate-200 bg-white shadow-md">
            {" "}
            {/* classname for dropdown searchbar */}
            {filteredSearch.map((item) => (
              <Link
                key={item.id}
                to={`/inventory/${item.id}`}
                onClick={() => setSearch("")}
                className="block px-3 py-2 text-sm hover:bg-slate-100"
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
