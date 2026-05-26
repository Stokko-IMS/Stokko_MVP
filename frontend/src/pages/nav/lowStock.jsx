import { useState, useEffect } from "react";
import { getLowStockItems } from "../../api/inventory.js";
import { getTransactions } from "../../api/inventoryTransactions.js";
import AlertSummary from "../../components/AlertSummary";
import CriticalAlerts from "../../components/CriticalAlerts";
import ChangeLog from "../../components/ChangeLog";

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

  // Sourced code to save time
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

    // smart lock sorting borrowed from google explanation to save time
    .sort((a, b) => {
      const ratioA = a.quantity / a.low_stock_threshold;
      const ratioB = b.quantity / b.low_stock_threshold;
      return ratioA - ratioB;
    });

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 5);

  if (loading) return <p>Loading alerts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <input
        type="text"
        placeholder="Search alerts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <AlertSummary items={lowStockItems} />

      <CriticalAlerts items={visibleItems} onMute={muteItem} />

      {filteredItems.length > 5 && (
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show less" : `View all ${filteredItems.length} alerts`}
        </button>
      )}

      <ChangeLog transactions={transactions} />
    </main>
  );
}
