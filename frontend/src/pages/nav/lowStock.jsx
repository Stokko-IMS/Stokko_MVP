// import { useState, useEffect } from "react";
// import { getLowStockItems } from "../../api/inventory.js";
// import { getTransactions } from "../../api/inventoryTransactions.js";
// import AlertSummary from "../../components/AlertSummary";
// import CriticalAlerts from "../../components/CriticalAlerts";
// import ChangeLog from "../../components/ChangeLog";

// export default function LowStock() {
//   const [lowStockItems, setLowStockItems] = useState([]);
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAll, setShowAll] = useState(false);
//   const [muted, setMuted] = useState({});
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [lowStockData, transactionsData] = await Promise.all([
//           getLowStockItems(),
//           getTransactions(),
//         ]);
//         setLowStockItems(lowStockData);
//         setTransactions(transactionsData);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load low stock data");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   // Sourced code to save time
//   function muteItem(id, days) {
//     const expiry = new Date();
//     expiry.setDate(expiry.getDate() + days);
//     setMuted((prev) => ({ ...prev, [id]: expiry.toISOString() }));
//   }

//   function isMuted(id) {
//     if (!muted[id]) return false;
//     return new Date(muted[id]) > new Date();
//   }

//   const filteredItems = lowStockItems
//     .filter((item) => !isMuted(item.item_id))
//     .filter((item) => {
//       if (search === "") return true;
//       return item.name.toLowerCase().includes(search.toLowerCase());
//     })

//     // smart lock sorting borrowed from google explanation to save time
//     .sort((a, b) => {
//       const ratioA = a.quantity / a.low_stock_threshold;
//       const ratioB = b.quantity / b.low_stock_threshold;
//       return ratioA - ratioB;
//     });

//   const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 5);

//   if (loading)
//     return (
//       <div className="card">
//         <p className="animate-pulse text-sm text-slate-500">Loading...</p>
//       </div>
//     );
//   if (error) return <p>{error}</p>;

//   return (
//     <main className="grid gap-5">
//       <input
//         type="text"
//         placeholder="Search alerts..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <AlertSummary items={lowStockItems} />

//       <CriticalAlerts items={visibleItems} onMute={muteItem} />

//       {filteredItems.length > 5 && (
//         <button onClick={() => setShowAll(!showAll)} className="btn-secondary">
//           {showAll ? "Show less" : `View all ${filteredItems.length} alerts`}
//         </button>
//       )}

//       <ChangeLog transactions={transactions} />
//     </main>
//   );
// }

// ============================ TEST Matt ========================
import { useState, useEffect } from "react";
import { getLowStockItems } from "../../api/inventory.js";
import { getTransactions } from "../../api/inventoryTransactions.js";
import AlertSummary from "../../components/AlertSummary";
import CriticalAlerts from "../../components/CriticalAlerts";
import ChangeLog from "../../components/ChangeLog";
import { Search } from "lucide-react";

export default function LowStock() {
  const [lowStockItems, setLowStockItems] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [muted, setMuted] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [lowStockData, transactionsData] = await Promise.all([
          getLowStockItems(),
          getTransactions(),
        ]);
        setLowStockItems(lowStockData);
        setTransactions(transactionsData);
      } catch (err) {
        console.error(err);
        setError("Failed to load low stock data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function muteItem(id, days) {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + days);
    setMuted((prev) => ({ ...prev, [id]: expiry.toISOString() }));
  }

  function isMuted(id) {
    if (!muted[id]) return false;
    return new Date(muted[id]) > new Date();
  }

  const filteredItems = lowStockItems
    .filter((item) => !isMuted(item.item_id))
    .filter((item) => {
      if (search === "") return true;
      return item.name.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      const ratioA = a.quantity / a.low_stock_threshold;
      const ratioB = b.quantity / b.low_stock_threshold;
      return ratioA - ratioB;
    });

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 5);

  if (loading)
    return (
      <div className="card">
        <p className="animate-pulse text-sm text-slate-500">Loading...</p>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <main className="grid gap-5">
      {/* 1. Header Block Container */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-white p-4 rounded-stokko border border-slate-200 shadow-sm">
        <div className="flex flex-col gap-1.5 shrink-0 text-left">
          <div className="w-fit border-b-2 border-amber pb-0.5">
            <h1 className="text-xl font-extrabold tracking-tight text-deep m-0 leading-none">
              Stock Alerts
            </h1>
          </div>
          <p className="text-xs text-slate-400 font-medium whitespace-nowrap">
            Immediate actions required for depleted inventory
          </p>
        </div>

        <div className="relative w-full md:flex-1 md:max-w-md md:mx-auto">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search alerts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 w-full"
          />
        </div>
      </div>

      {/* 2. Summary Counter Widgets */}
      <AlertSummary items={lowStockItems} />

      {/* 3. Primary Alerts List */}
      <CriticalAlerts items={visibleItems} onMute={muteItem} />

      {filteredItems.length > 5 && (
        <button onClick={() => setShowAll(!showAll)} className="btn-secondary">
          {showAll ? "Show less" : `View all ${filteredItems.length} alerts`}
        </button>
      )}

      {/* 4. Activity Logs Section Container */}
      <section className="mt-2 text-left">
        <div className="mb-3">
          {/* Matches the text-xl heading size of your Critical Alerts */}
          <h2 className="text-xl font-bold tracking-tight text-deep m-0">
            Stock Activity Ledger
          </h2>
          {/* Clean 4-word UX/UI description */}
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Recent historical stock updates.
          </p>
        </div>

        <ChangeLog transactions={transactions} />
      </section>
    </main>
  );
}
