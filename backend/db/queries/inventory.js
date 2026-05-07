import db from "../client.js";

export async function initializeStock(itemId, userId) {
  const sql = `
    INSERT INTO inventory
    (item_id, user_id)
    VALUES
    ($1, $2)
    RETURNING *
    `;

  const {
    rows: [inventoryRecord],
  } = await db.query(sql, [itemId, userId]);
  return inventoryRecord;
}

export async function getInventoryStatus(userId) {
  const sql = `
  SELECT
    i.id AS inventory_id,
      it.id AS item_id,
      it.name,
      it.sku,
      it.unit,
      it.quantity,
      it.low_stock_threshold,
      it.description,
      CASE
        WHEN it.quantity <= it.low_stock_threshold THEN true
        ELSE false
      END AS is_low_stock
    FROM inventory i
    JOIN items it ON i.item_id = it.id
    WHERE i.user_id = $1
    ORDER BY it.name ASC
    `;
  const { rows } = await db.query(sql, [userId]);
  return rows;
}
