// import { Link } from "react-router-dom";
// import Item_photo from "../../assets/Item_photo.svg";

// export default function InventoryTable({ items, onEdit }) {
//   if (items.length === 0) {
//     return (
//       <div>
//         <p>No items found.</p>
//       </div>
//     );
//   }
//   return (
//     <div className="grid gap-3">
//       {items.map((item) => {
//         const isLowStock = item.quantity <= item.low_stock_threshold;

//         return (
//           <div
//             key={item.id}
//             data-low={isLowStock}
//             className="item-card border-l-4 border-l-transparent data-[low=true]:border-l-amber"
//           >
//             <Link
//               to={`/inventory/${item.id}`}
//               className="item-row block md:flex"
//             >
//               <img
//                 src={Item_photo}
//                 alt="placeholder photo"
//                 className="item-img"
//               />

//               <div className="mt-3 min-w-0 flex-1 md:mt-0">
//                 <h5 className="text-lg font-bold">{item.name}</h5>
//                 <p className="font-mono text-xs text-slate-600">
//                   SKU: {item.sku}
//                 </p>
//                 <p className="text-sm text-slate-600">Unit: {item.unit}</p>
//                 <p className="font-mono text-sm font-bold">
//                   Quantity: {item.quantity}
//                 </p>

//                 {isLowStock && (
//                   <span className="badge-low mt-2">Low Stock</span>
//                 )}
//                 {!isLowStock && (
//                   <span className="badge-good mt-2">In Stock</span>
//                 )}
//               </div>
//             </Link>

//             <div className="mt-4 flex gap-2">
//               <button
//                 onClick={() => onEdit(item.id)}
//                 className="btn-secondary flex-1"
//               >
//                 Edit
//               </button>

//               <Link
//                 to={`/orders/add/${item.id}`}
//                 className="btn-primary flex-1"
//               >
//                 Create Order
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// ================ TEST 1 Matt ==========================
// import React from "react";

// export default function InventoryTable({ items, onEdit }) {
//   return (
//     <div className="grid gap-3 w-full">
//       {items.map((item) => (
//         <div
//           key={item.id || item.sku}
//           className="item-card flex items-center justify-between gap-4 p-3 min-h-[70px]"
//         >
//           {/* LEFT SIDE: Image + Name + Attributes aligned closely together */}
//           <div className="flex items-center gap-4 flex-1">
//             {/* 1. Image */}
//             <img
//               src={item.image || "https://via.placeholder.com/56"}
//               alt={item.name}
//               className="item-img shrink-0"
//             />

//             {/* 2. Content Wrapper: Bundles Title and Meta Attributes together */}
//             <div className="flex items-center gap-10">
//               {/* Product Name */}
//               <h3 className="text-base font-bold text-deep leading-tight whitespace-nowrap">
//                 {item.name}
//               </h3>

//               {/* Meta Attributes (SKU, Unit, Qty) pushed closely to the name */}
//               <div className="flex items-center gap-6 text-xs text-slate-600 shrink-0">
//                 <div>
//                   <span className="font-semibold text-slate-400 font-mono">
//                     SKU:
//                   </span>{" "}
//                   {item.sku}
//                 </div>
//                 <div>
//                   <span className="font-semibold text-slate-400">Unit:</span>{" "}
//                   {item.unit || "N/A"}
//                 </div>
//                 <div>
//                   <span className="font-semibold text-slate-400">Qty:</span>{" "}
//                   <span className="font-mono font-bold text-deep">
//                     {item.quantity}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Status Badge & Amber Action Buttons */}
//           <div className="flex items-center gap-3 shrink-0">
//             {item.quantity <= item.low_stock_threshold ? (
//               <span className="badge-low text-[10px] px-2 py-0.5 shrink-0">
//                 Low Stock
//               </span>
//             ) : (
//               <span className="badge-good text-[10px] px-2 py-0.5 shrink-0">
//                 In Stock
//               </span>
//             )}

//             <div className="flex items-center gap-1.5 shrink-0">
//               <button
//                 onClick={() => onEdit(item.id)}
//                 className="px-2.5 py-1 text-xs font-bold rounded-stokko border border-slate-300 bg-white text-deep hover:bg-slate-50 transition"
//               >
//                 Edit
//               </button>
//               <button className="btn-primary px-2.5 py-1 text-xs font-bold shadow-none hover:scale-100 active:scale-100">
//                 Order
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// ======================== TEST 2 Matt =====================
import React from "react";
import Item_photo from "../../assets/Item_photo.svg";
import { Link } from "react-router-dom";

export default function InventoryTable({ items, onEdit }) {
  return (
    <div className="grid gap-3 w-full hover:cursor-pointer">
      {items.map((item) => (
        <Link to={`/inventory/${item.id}`}>
          <div
            key={item.id || item.sku}
            className="item-card flex flex-row items-center justify-between gap-4 p-3 min-h-[75px] w-full"
          >
            {/* LEFT CONTAINER: Image + (Name & Metadata Group Side-by-Side) */}
            <div className="flex items-center gap-4 min-w-0 flex-1">
              {/* 1. Product Image */}
              <img
                src={Item_photo}
                alt="Item photo placeholder"
                className="item-img shrink-0"
              />

              {/* 2. Content Wrapper: Keeps name and the info column next to each other */}
              <div className="flex flex-row items-start gap-8 min-w-0">
                {/* Product Name */}
                <h3 className="text-sm font-bold text-deep truncate max-w-[140px] pt-0.5">
                  {item.name}
                </h3>

                {/* Meta Attributes: Stacked vertically in column form, to the right of the name */}
                <div className="flex flex-col gap-0.5 text-[11px] text-slate-600 shrink-0">
                  <div>
                    <span className="font-semibold text-slate-400 font-mono">
                      SKU:
                    </span>{" "}
                    {item.sku}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Unit:</span>{" "}
                    {item.unit || "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Qty:</span>{" "}
                    <span className="font-mono font-bold text-deep">
                      {item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTAINER: Status Alert stacked ABOVE Edit/Order actions */}
            <div className="flex flex-col items-end justify-center gap-1.5 shrink-0">
              {/* Low Stock status tag */}
              {item.quantity <= item.low_stock_threshold ? (
                <span className="badge-low text-[9px] px-2 py-0.5">
                  Low Stock
                </span>
              ) : (
                <span className="badge-good text-[9px] px-2 py-0.5">
                  In Stock
                </span>
              )}

              {/* Micro management interactive actions underneath */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onEdit(item.id)}
                  className="px-2 py-1 text-xs font-bold rounded-stokko border border-slate-300 bg-white text-deep hover:bg-deep hover:text-white transition cursor-pointer"
                >
                  Edit
                </button>
                <Link
                  to={`/orders/add/${item.id || item.item_id}`}
                  className="inline-flex items-center justify-center h-8 w-16 text-sm font-medium text-deep bg-amber-500 rounded-md shadow-sm hover:bg-amber-600 transition-colors duration-200 no-underline"
                >
                  Order
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
