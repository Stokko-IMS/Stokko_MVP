// Boiler plate from AI
import { History } from "lucide-react";

export default function ChangeLog({ transactions }) {
  if (transactions.length === 0) {
    return <p>No stock changes recorded yet.</p>;
  }

  return (
    <section className="card">
      <div className="mb-3 flex items-center gap-2">
        <History size={18} />
        <h2>Change log</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="border-b px-3 py-2 text-left">Item</th>
              <th className="border-b px-3 py-2 text-left">Change</th>
              <th className="border-b px-3 py-2 text-left">Reason</th>
              <th className="border-b px-3 py-2 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td className="border-b px-3 py-2">
                  {t.item_name ?? t.item_id}
                </td>
                <td className="border-b px-3 py-2 font-mono">
                  {t.quantity_change > 0
                    ? `+${t.quantity_change}`
                    : t.quantity_change}
                </td>
                <td className="border-b px-3 py-2">{t.reason}</td>
                <td className="border-b px-3 py-2 font-mono">
                  {new Date(t.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
