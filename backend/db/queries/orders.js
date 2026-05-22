import db from "../client.js";

export async function createOrder(
  supplierName,
  supplierEmail,
  status,
  createdBy,
  approvedBy,
  userId,
) {
  const sql = `
  INSERT INTO orders
    (supplier_name, supplier_email, status, created_by, approved_by, user_id)
  VALUES 
    ($1, $2, $3, $4, $5, $6) RETURNING *
`;
  const {
    rows: [order],
  } = await db.query(sql, [
    supplierName,
    supplierEmail,
    status,
    createdBy,
    approvedBy,
    userId,
  ]);
  return order;
}

export async function approveOrder(approvedBy, id) {
  const sql = `
  UPDATE orders
  SET approved_by = $1, status = 'submitted'
  WHERE id = $2 AND approved_by IS NULL RETURNING * `;
  const {
    rows: [order],
  } = await db.query(sql, [approvedBy, id]);
  return order;
}

// chatGPT helped me with reworking this query to automatically update inventory of an item
// when the status of the order is moved to received.
export async function receiveOrder(id) {
  try {
    await db.query("BEGIN");

    const sql2 = `
  UPDATE orders
  SET status = 'received'
  WHERE id = $1
   AND status = 'submitted'
  RETURNING *`;

    const {
      rows: [order],
    } = await db.query(sql2, [id]);

    if (!order) {
      throw new Error("Order already received or invalid status");
    }

    const sql = `
  UPDATE items
  SET quantity = items.quantity + order_items.quantity
  FROM order_items
  WHERE order_items.item_id = items.id
  AND order_items.order_id = $1`;
    await db.query(sql, [id]);

    await db.query("COMMIT");

    return order;
  } catch (err) {
    await db.query("ROLLBACK");
    throw err;
  }
}

export async function getOrdersByUserId(userId) {
  const sql = `
  SELECT * from orders
  WHERE user_id = $1;`;
  const { rows: orders } = await db.query(sql, [userId]);
  return orders;
}

export async function getOrderById(id, userId) {
  const sql = `
  SELECT * from orders
  WHERE id = $1 AND user_id = $2`;
  const {
    rows: [order],
  } = await db.query(sql, [id, userId]);
  return order;
}

export async function deleteOrder(id) {
  const sql = `
  DELETE FROM orders
  WHERE id = $1 RETURNING *`;
  const {
    rows: [order],
  } = await db.query(sql, [id]);
  return order;
}

export async function getOrderDetails(id, userId) {
  const sql = `
    SELECT
      orders.*,

      order_items.id AS order_item_id,
      order_items.item_id,
      order_items.quantity AS ordered_quantity,
      order_items.price,

      items.name AS item_name,
      items.description,
      items.sku,
      items.unit,
      items.quantity AS current_inventory,
      items.low_stock_threshold,
      items.item_photo

    FROM orders

    JOIN order_items
      ON orders.id = order_items.order_id

    JOIN items
      ON items.id = order_items.item_id

    WHERE orders.id = $1
      AND orders.user_id = $2
  `;

  const { rows } = await db.query(sql, [id, userId]);

  return rows;
}
