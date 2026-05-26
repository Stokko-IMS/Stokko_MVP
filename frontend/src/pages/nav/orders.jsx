// import { useState, useEffect } from "react";
// import { getOrders } from "../../api/orders.js";

// import OrdersHeader from "../../components/Orders/OrdersHeader";
// import ApprovalNeededOrders from "../../components/Orders/ApprovalNeededOrders";
// import ApprovedOrders from "../../components/Orders/ApprovedOrders";
// import CompletedOrders from "../../components/Orders/CompletedOrders";
// import MetricsGrid from "../../components/Orders/MetricsGrid";

// export default function Orders() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [orders, setOrders] = useState(null);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     async function fetchOrders() {
//       try {
//         const orders = await getOrders();
//         setOrders(orders);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load orders");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchOrders();
//   }, []);

//   const filteredSearch = search
//     ? orders.filter((order) => order.id.toString().includes(search)).slice(0, 5)
//     : [];

//   const approvalNeededOrders =
//     orders?.filter((order) => order.status === "draft") || [];

//   const approvedOrders =
//     orders?.filter((order) => order.status === "submitted") || [];

//   const completedOrders =
//     orders?.filter((order) => order.status === "received") || [];

//   if (loading) {
//     return (
//   <div className="card">
//     <p className="animate-pulse text-sm text-slate-500">Loading...</p>
//   </div>
// );
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <main className="grid gap-5">
//       <OrdersHeader
//         filteredSearch={filteredSearch}
//         search={search}
//         setSearch={setSearch}
//       />

//       <MetricsGrid
//         orders={orders}
//         approvalNeededOrders={approvalNeededOrders}
//         completedOrders={completedOrders}
//       />

//       <ApprovalNeededOrders approvalNeededOrders={approvalNeededOrders} />

//       <ApprovedOrders approvedOrders={approvedOrders} />

//       <CompletedOrders completedOrders={completedOrders} />
//     </main>
//   );
// }

// ======================= TEST Matt =======================================
import { useState, useEffect } from "react";
import { getOrders } from "../../api/orders.js";
import { Search } from "lucide-react";
import { Link } from "react-router-dom"; // Added link support for dropdown results

import ApprovalNeededOrders from "../../components/Orders/ApprovalNeededOrders";
import ApprovedOrders from "../../components/Orders/ApprovedOrders";
import CompletedOrders from "../../components/Orders/CompletedOrders";
import MetricsGrid from "../../components/Orders/MetricsGrid";

export default function Orders() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const orders = await getOrders();
        setOrders(orders);
      } catch (err) {
        console.error(err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  const filteredSearch = search
    ? orders
        ?.filter((order) => order.id.toString().includes(search))
        .slice(0, 5)
    : [];

  const approvalNeededOrders =
    orders?.filter((order) => order.status === "draft") || [];

  const approvedOrders =
    orders?.filter((order) => order.status === "submitted") || [];

  const completedOrders =
    orders?.filter((order) => order.status === "received") || [];

  if (loading) {
    return (
      <div className="card">
        <p className="animate-pulse text-sm text-slate-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="grid gap-5">
      {/* 1. Consistent Header Block */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-white p-4 rounded-stokko border border-slate-200 shadow-sm">
        {/* Left Side Labels */}
        <div className="flex flex-col gap-1.5 shrink-0 text-left">
          <div className="w-fit border-b-2 border-amber pb-0.5">
            <h1 className="text-xl font-extrabold tracking-tight text-deep m-0 leading-none">
              Orders
            </h1>
          </div>
          <p className="text-xs text-slate-400 font-medium whitespace-nowrap">
            Overview of current warehouse orders
          </p>
        </div>

        {/* Center Search Input with Active Navigation Links */}
        <div className="relative w-full md:flex-1 md:max-w-md md:mx-auto">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 w-full"
          />

          {search && filteredSearch.length > 0 && (
            <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-stokko border border-slate-200 bg-white shadow-md text-left">
              {filteredSearch.map((order) => (
                <Link
                  key={order.id}
                  to={`/orders/${order.id}`} // Functional target route matching app structure
                  onClick={() => setSearch("")}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 text-deep font-medium"
                >
                  Order #{order.id}{" "}
                  <span className="text-xs text-slate-400">
                    ({order.status})
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2. Responsive Core Metrics Row Component */}
      <MetricsGrid
        orders={orders}
        approvalNeededOrders={approvalNeededOrders}
        completedOrders={completedOrders}
      />

      {/* 3. Section Data Feeds */}
      <ApprovalNeededOrders approvalNeededOrders={approvalNeededOrders} />
      <ApprovedOrders approvedOrders={approvedOrders} />
      <CompletedOrders completedOrders={completedOrders} />
    </main>
  );
}
