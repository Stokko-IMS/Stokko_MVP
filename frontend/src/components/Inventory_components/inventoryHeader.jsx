// import { Link } from "react-router-dom";
// import { Search } from "lucide-react";

// export default function InventoryHeader({
//   filteredItems,
//   setFilter,
//   filter,
//   search,
//   setSearch,
// }) {
//   return (
//     <div className="grid gap-4">
//       <div className="relative">
//         <Search
//           size={16}
//           className="pointer-events-none absolute left-3 top-1/2 -transalte-y-1/2 text-slate-400"
//         />
//         <input
//           type="text"
//           placeholder="Search by name or SKU"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p1-9"
//         />

//         {/* This chunk of code was suggested from chatGPT & adjusted to fit our props */}
//         {search && filteredItems.length > 0 && (
//           <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border-slate-200 bg-white border shadow-md">
//             {" "}
//             {/* classname for dropdown searchbar */}
//             {filteredItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/inventory/${item.id}`}
//                 onClick={() => setSearch("")}
//                 className="block px-3 py-2 text-sm hover:bg-slate-100"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}

//         <div className="flex flex-wrap gap-2">
//           <button
//             onClick={() => setFilter("all")}
//             className={filter === "all" ? "btn-primary" : "btn-secondary"}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setFilter("low")}
//             className={filter === "low" ? "btn-primary" : "btn-secondary"}
//           >
//             Low stock
//           </button>
//           <button
//             onClick={() => setFilter("in")}
//             className={filter === "in" ? "btn-primary" : "btn-secondary"}
//           >
//             In stock
//           </button>
//         </div>

//         <div>
//           <Link to={"/inventory/add"} className="btn-primary ml-auto">
//             Add Item
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// ===================== TEST TEST ====================================
// import { Link } from "react-router-dom";
// import { Search } from "lucide-react";

// export default function InventoryHeader({
//   filteredItems,
//   setFilter,
//   filter,
//   search,
//   setSearch,
// }) {
//   return (
//     <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full bg-white p-4 rounded-stokko border border-slate-200 shadow-sm">
//       {/* Controls Container: Packs Search & Filters together on the left/center */}
//       <div className="flex flex-col gap-3 sm:flex-row sm:items-center flex-1 max-w-3xl">
//         {/* Search Bar Wrapper */}
//         <div className="relative flex-1 min-w-[240px]">
//           <Search
//             size={16}
//             className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//           />
//           <input
//             type="text"
//             placeholder="Search by name or SKU"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="pl-9 w-full"
//           />

//           {/* Autocomplete Dropdown Search Results */}
//           {search && filteredItems.length > 0 && (
//             <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border-slate-200 bg-white border shadow-md">
//               {filteredItems.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={`/inventory/${item.id}`}
//                   onClick={() => setSearch("")}
//                   className="block px-3 py-2 text-sm hover:bg-slate-100"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Filter Selection Chips */}
//         <div className="flex flex-wrap gap-2">
//           <button
//             onClick={() => setFilter("all")}
//             className={filter === "all" ? "btn-primary" : "btn-secondary"}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setFilter("low")}
//             className={filter === "low" ? "btn-primary" : "btn-secondary"}
//           >
//             Low stock
//           </button>
//           <button
//             onClick={() => setFilter("in")}
//             className={filter === "in" ? "btn-primary" : "btn-secondary"}
//           >
//             In stock
//           </button>
//         </div>
//       </div>

//       {/* Action Block: Pushed completely to the far right side */}
//       <div className="shrink-0">
//         <Link to={"/inventory/add"} className="btn-primary">
//           Add Item
//         </Link>
//       </div>
//     </div>
//   );
// }

// ========================= TEST 2 ===================================
// import { Link } from "react-router-dom";
// import { Search } from "lucide-react";

// export default function InventoryHeader({
//   filteredItems,
//   setFilter,
//   filter,
//   search,
//   setSearch,
// }) {
//   return (
//     <div className="flex flex-row items-center justify-between gap-4 w-full bg-white p-4 rounded-stokko border border-slate-200 shadow-sm no-wrap">
//       {/* Left side: Search input expands to fill space */}
//       <div className="relative flex-1 min-w-[140px]">
//         <Search
//           size={16}
//           className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//         />
//         <input
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="pl-9 w-full"
//         />

//         {/* Dropdown search results */}
//         {search && filteredItems.length > 0 && (
//           <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border-slate-200 bg-white border shadow-md">
//             {filteredItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/inventory/${item.id}`}
//                 onClick={() => setSearch("")}
//                 className="block px-3 py-2 text-sm hover:bg-slate-100"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Center: Filter Chips stay strictly on one line, scrollable if screens get tiny */}
//       <div className="flex flex-row items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none shrink-0">
//         <button
//           onClick={() => setFilter("all")}
//           className={`${filter === "all" ? "btn-primary" : "btn-secondary"} px-2.5 py-1.5 text-xs`}
//         >
//           All
//         </button>
//         <button
//           onClick={() => setFilter("low")}
//           className={`${filter === "low" ? "btn-primary" : "btn-secondary"} px-2.5 py-1.5 text-xs`}
//         >
//           Low stock
//         </button>
//         <button
//           onClick={() => setFilter("in")}
//           className={`${filter === "in" ? "btn-primary" : "btn-secondary"} px-2.5 py-1.5 text-xs`}
//         >
//           In stock
//         </button>
//       </div>

//       {/* Right side: Add Item Action button */}
//       <div className="shrink-0">
//         <Link
//           to={"/inventory/add"}
//           className="btn-primary px-3 py-1.5 text-xs whitespace-nowrap"
//         >
//           + Add
//         </Link>
//       </div>
//     </div>
//   );
// }

// ============================TEST Matt ==================================

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
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-white p-4 rounded-stokko border border-slate-200 shadow-sm">
      {/* 1. Left Block: Headings stacked with consistent amber underline */}
      <div className="flex flex-col gap-1.5 shrink-0 text-left">
        <div className="w-fit border-b-2 border-amber pb-0.5">
          <h1 className="text-xl font-extrabold tracking-tight text-deep m-0 leading-none">
            Inventory
          </h1>
        </div>
        <p className="text-xs text-slate-400 font-medium whitespace-nowrap">
          Manage and monitor your warehouse stock levels
        </p>
      </div>

      {/* 2. Middle Block: Centered Search Input Field */}
      <div className="relative w-full md:flex-1 md:max-w-md md:mx-auto">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search inventory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 w-full"
        />

        {/* Dropdown Auto-Complete Search Results */}
        {search && filteredItems.length > 0 && (
          <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border border-slate-200 bg-white shadow-md">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/inventory/${item.id}`}
                onClick={() => setSearch("")}
                className="block px-3 py-2 text-sm hover:bg-slate-100 text-deep"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* 3. Right Block: Interactive actions row. Forces ALL buttons on a single row line */}
      <div className="flex flex-row items-center justify-between md:justify-end gap-3 w-full md:w-auto shrink-0">
        {/* Filter Chips Grouped Together */}
        <div className="flex flex-row items-center gap-1.5">
          <button
            onClick={() => setFilter("all")}
            className={`${filter === "all" ? "btn-primary" : "btn-secondary"} px-3 py-1.5 text-xs font-bold`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("low")}
            className={`${filter === "low" ? "btn-primary" : "btn-secondary"} px-3 py-1.5 text-xs font-bold`}
          >
            Low stock
          </button>
          <button
            onClick={() => setFilter("in")}
            className={`${filter === "in" ? "btn-primary" : "btn-secondary"} px-3 py-1.5 text-xs font-bold`}
          >
            In stock
          </button>
        </div>

        {/* Add Button: Sits in line on the far right */}
        <div className="shrink-0 md:ml-2">
          <Link
            to={"/inventory/add"}
            className="btn-primary block text-center px-4 py-1.5 text-xs font-bold whitespace-nowrap"
          >
            + Add
          </Link>
        </div>
      </div>
    </div>
  );
}
