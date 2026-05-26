// import { ShoppingCart, Clock, CheckCircle } from "lucide-react";

// export default function MetricsGrid({
//   orders,
//   approvalNeededOrders,
//   completedOrders,
// }) {
//   return (
//     <section className="grid gap-3 md:grid-cols-3">
//       <div className="metric-card">
//         <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
//           <ShoppingCart size={20} /> Total Orders
//         </p>
//         <h3 className="metric-value">{orders.length}</h3>
//       </div>
//       <div className="metric-card">
//         <p className="mb-3 flex items-cetner gap-2 text-sm text-slate-600">
//           <Clock size={20} /> Need Aproval Orders
//         </p>
//         <h3 className="metric-value">{approvalNeededOrders.length}</h3>
//       </div>
//       <div className="metric-card">
//         <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
//           <CheckCircle size={20} /> Completed orders
//         </p>
//         <h3 className="metric-value">{completedOrders.length}</h3>
//       </div>
//     </section>
//   );
// }

// ================ TEST MAtt ======================
import { ShoppingCart, Clock, CheckCircle } from "lucide-react";

export default function MetricsGrid({
  orders,
  approvalNeededOrders,
  completedOrders,
}) {
  return (
    <section className="grid grid-cols-3 gap-3 w-full">
      {/* Box 1: Total Orders */}
      <div className="metric-card flex flex-col justify-center py-3 px-2 sm:p-4 min-w-0">
        <div className="flex flex-row items-center gap-1.5 min-w-0 w-full mb-1 sm:mb-2">
          <ShoppingCart
            size={16}
            className="text-slate-400 shrink-0 sm:w-5 sm:h-5"
          />
          <span className="badge-good bg-slate-100 text-slate-600 text-[10px] sm:text-xs px-2 py-0.5 shrink-0 truncate font-bold">
            Total Orders
          </span>
        </div>
        <h3 className="metric-value text-xl sm:text-3xl leading-none font-bold text-deep text-left">
          {orders?.length || 0}
        </h3>
      </div>

      {/* Box 2: Need Approval Orders */}
      <div className="metric-card flex flex-col justify-center py-3 px-2 sm:p-4 min-w-0">
        <div className="flex flex-row items-center gap-1.5 min-w-0 w-full mb-1 sm:mb-2">
          <Clock size={16} className="text-amber shrink-0 sm:w-5 sm:h-5" />
          <span className="badge-low text-[10px] sm:text-xs px-2 py-0.5 shrink-0 truncate font-bold">
            Pending
          </span>
        </div>
        <h3 className="metric-value text-xl sm:text-3xl leading-none font-bold text-deep text-left">
          {approvalNeededOrders?.length || 0}
        </h3>
      </div>

      {/* Box 3: Completed Orders */}
      <div className="metric-card flex flex-col justify-center py-3 px-2 sm:p-4 min-w-0">
        <div className="flex flex-row items-center gap-1.5 min-w-0 w-full mb-1 sm:mb-2">
          <CheckCircle
            size={16}
            className="text-emerald-500 shrink-0 sm:w-5 sm:h-5"
          />
          <span className="bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs px-2 py-0.5 shrink-0 truncate font-bold rounded-full">
            Completed
          </span>
        </div>
        <h3 className="metric-value text-xl sm:text-3xl leading-none font-bold text-deep text-left">
          {completedOrders?.length || 0}
        </h3>
      </div>
    </section>
  );
}
