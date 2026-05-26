// import { AlertTriangle, Package, ShoppingCart } from "lucide-react";

// export default function MetricsGrid({ items, orders, lowStock }) {
//   return (
//     <div className="grid gap-3 md:grid-cols-3">
//       <div className="metric-card">
//         <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
//           <AlertTriangle size={20} /> Low Stock Items
//         </p>
//         <h3 className="metric-value">{lowStock.length}</h3>
//       </div>
//       <div className="metric-card">
//         <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
//           <Package size={20} /> Total Items
//         </p>
//         <h3 className="metric-value">{items.length}</h3>
//       </div>
//       <div className="metric-card">
//         <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
//           <ShoppingCart size={20} /> Total orders
//         </p>
//         <h3 className="metric-value">{orders.length}</h3>
//       </div>
//     </div>
//   );
// }

// ================================= TEST =============================
import { AlertTriangle, Package, ShoppingCart } from "lucide-react";

export default function MetricsGrid({ items, orders, lowStock }) {
  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {/* Box 1: Low Stock Items */}
      <div className="metric-card flex flex-col justify-center py-3 px-2 sm:p-4 min-w-0">
        <div className="flex flex-row items-center gap-1.5 text-[11px] sm:text-sm text-slate-600 min-w-0 w-full mb-1 sm:mb-2">
          <AlertTriangle
            size={16}
            className="text-amber shrink-0 sm:w-5 sm:h-5"
          />
          <span className="truncate font-medium leading-none">Low Stock</span>
        </div>
        <h3 className="metric-value text-xl sm:text-3xl leading-none font-bold text-deep">
          {lowStock.length}
        </h3>
      </div>

      {/* Box 2: Total Items */}
      <div className="metric-card flex flex-col justify-center py-3 px-2 sm:p-4 min-w-0">
        <div className="flex flex-row items-center gap-1.5 text-[11px] sm:text-sm text-slate-600 min-w-0 w-full mb-1 sm:mb-2">
          <Package
            size={16}
            className="text-slate-400 shrink-0 sm:w-5 sm:h-5"
          />
          <span className="truncate font-medium leading-none">Total Items</span>
        </div>
        <h3 className="metric-value text-xl sm:text-3xl leading-none font-bold text-deep">
          {items.length}
        </h3>
      </div>

      {/* Box 3: Total Orders */}
      <div className="metric-card flex flex-col justify-center py-3 px-2 sm:p-4 min-w-0">
        <div className="flex flex-row items-center gap-1.5 text-[11px] sm:text-sm text-slate-600 min-w-0 w-full mb-1 sm:mb-2">
          <ShoppingCart
            size={16}
            className="text-slate-400 shrink-0 sm:w-5 sm:h-5"
          />
          <span className="truncate font-medium leading-none">Orders</span>
        </div>
        <h3 className="metric-value text-xl sm:text-3xl leading-none font-bold text-deep">
          {orders.length}
        </h3>
      </div>
    </div>
  );
}
