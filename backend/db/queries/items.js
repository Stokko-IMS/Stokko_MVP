import db from "../client.js";

export async function createItem(
  name,
  description,
  sku,
  unit,
  quantity,
  lowStockThreshold,
  userId,
) {
  const sql = `
    INSERT INTO items
    (name, description, sku, unit, quantity, low_stock_threshold, user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `;

  const {
    rows: [item],
  } = await db.query(sql, [
    name,
    description,
    sku,
    unit,
    quantity,
    lowStockThreshold,
    userId,
  ]);
  return item;
}

// read and view all items
export async function getAllItems(userId) {
  const sql = `
  SELECT * FROM items
  WHERE user_id = $1
  ORDER BY created_at DESC
  `;
  const { rows: items } = await db.query(sql, [userId]);
  return items;
}

// export async function getItems() {
//   const sql = `
// SELECT * FROM items
// `;
//   const { rows: items } = await db.query(sql);
//   return items;
// } ****would get all items from EVERY USER in the DB - big no!

export async function getItemById(id, userId) {
  const sql = `
    SELECT * FROM items WHERE id = $1 AND user_id = $2
    `;
  const {
    rows: [item],
  } = await db.query(sql, [id, userId]);
  return item;
}

export async function updateItem(
  id,
  userId,
  name,
  description,
  sku,
  unit,
  quantity,
  lowStockThreshold,
) {
  // MUST RE-ADD ITEM_PHOTO TO QUERY WHEN ITEM PHOTO ADDING GETS FIGURED OUT //
  const sql = `
  UPDATE items
  SET
  name = $1,
  description = $2,
  sku = $3,
  unit = $4,
  quantity = $5,
  low_stock_threshold = $6
  WHERE id = $7 AND user_id = $8
  RETURNING *
  `;
  const {
    rows: [item],
  } = await db.query(sql, [
    name.toLowerCase(),
    description,
    sku,
    unit,
    quantity,
    lowStockThreshold,
    id,
    userId,
  ]);
  return item;
}

export async function deleteItem(id, userId) {
  const sql = `
  DELETE FROM items
  WHERE id = $1 AND user_id = $2
  RETURNING *
  `;
  const {
    rows: [item],
  } = await db.query(sql, [id, userId]);
  return item;
}
