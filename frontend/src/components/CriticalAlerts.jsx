import AlertRow from "./AlertRow";

export default function CriticalAlerts({ items, onMute }) {
  if (items.length === 0) {
    return <p>No active stock alerts! </p>;
  }

  return (
    <div>
      <h2>Critical stock alerts — immediate action required</h2>
      {items.map((item) => (
        <AlertRow key={item.item_id} item={item} onMute={onMute} />
      ))}
    </div>
  );
}
