// Boiler plate from AI
import { History } from "lucide-react";

export default function ChangeLog({ transactions }) {
  if (transactions.length === 0) {
    return <p>No stock changes recorded yet.</p>;
  }

  return (
    <div>
      <History size={18} />
      <h2>Change log</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Change</th>
            <th>Reason</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.item_name ?? t.item_id}</td>
              <td>
                {t.quantity_change > 0
                  ? `+${t.quantity_change}`
                  : t.quantity_change}
              </td>
              <td>{t.reason}</td>
              <td>{new Date(t.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
