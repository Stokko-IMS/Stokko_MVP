import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllItems } from "../../api/items";
import InventoryHeader from "../../components/Inventory/InventoryHeader";
import InventoryTable from "../../components/Inventory_components/inventoryTable";

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        const data = await getAllItems();
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchItems();
  }, []);

  // filter here - keep it simple - check logic on filter chips!!

  const filteredItems = items
    .filter((item) => {
      if (filter === "low") return item.quantity <= item.low_stock_threshold;
      if (filter === "in") return item.quantity > item.low_stock_threshold;
      return true;
    })
    .filter((item) => {
      if (search === "") return true;
      const term = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(term) ||
        item.sku.toLowerCase().includes(term)
      );
    });

  return (
    <main>
      <InventoryHeader
        filteredItems={filteredItems}
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />

      <InventoryTable
        items={filteredItems}
        onEdit={(id) => navigate(`/inventory/edit/${id}`)}
      />
    </main>
  );
}
