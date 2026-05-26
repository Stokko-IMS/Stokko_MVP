// import { Link } from "react-router-dom";

// export default function DashboardHeader({ search, setSearch, filteredSearch }) {
//   return (
//     <div className="page-header">
//       <h1>Dashboard</h1>
//       <p className="text-sm text-slate-600">
//         Overview of current warehouse metrics
//       </p>
//       <div className="relative w-full md:max-w-sm">
//         <input
//           type="text"
//           placeholder="Search inventory..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {/* This chunk of code was suggested from chatGPT & adjusted to fit our props */}
//         {search && filteredSearch.length > 0 && (
//           <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border border-slate-200 bg-white shadow-md">
//             {" "}
//             {/* classname for dropdown searchbar */}
//             {filteredSearch.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/inventory/${item.id}`}
//                 onClick={() => setSearch("")}
//                 className="block px-3 py-2 text-sm hover:bg-slate-100"
//               >
//                 <div>{item.name}</div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// ======================== TEST Matt =======================
import { Link } from "react-router-dom";

export default function DashboardHeader({ search, setSearch, filteredSearch }) {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-white p-4 rounded-stokko border border-slate-200 shadow-sm">
      {/* Left Block: Headings stacked vertically with the amber underline decoration */}
      <div className="flex flex-col gap-1.5 shrink-0 text-left">
        <div className="w-fit border-b-2 border-amber pb-0.5">
          <h1 className="text-xl font-extrabold tracking-tight text-deep m-0 leading-none">
            Dashboard
          </h1>
        </div>
        <p className="text-xs text-slate-400 font-medium whitespace-nowrap">
          Overview of current warehouse metrics
        </p>
      </div>

      {/* Right Block: Centered Search Input Field */}
      <div className="relative w-full md:flex-1 md:max-w-md md:mx-auto">
        <input
          type="text"
          placeholder="Search inventory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />

        {/* Dropdown Auto-Complete Search Results Panel */}
        {search && filteredSearch.length > 0 && (
          <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border border-slate-200 bg-white shadow-md">
            {filteredSearch.map((item) => (
              <Link
                key={item.id}
                to={`/inventory/${item.id}`}
                onClick={() => setSearch("")}
                className="block px-3 py-2 text-sm hover:bg-slate-100 text-deep"
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
