import express from "express";
import requireUser from "../middleware/requireUser.js";
import requireBody from "../middleware/requireBody.js";
import {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
} from "../db/queries/items.js";

import { initializeStock } from "../db/queries/inventory.js";

const router = express.Router();

router.use(requireUser); /*require logged in user, almost forgot*/

router.get("/", async (req, res, next) => {
  try {
    const items = await getAllItems(req.user.id);
    res.json(items);
  } catch (err) {
    next(err);
  }
});

router.param("id", async (req, res, next, id) => {
  try {
    const item = await getItemById(id, req.user.id);
    if (!item) return res.status(404).json({ error: "Item not found!" });
    req.item = item;
    next();
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res) => {
  res.json(req.item);
});

router.post(
  "/",
  requireBody(["name", "sku", "unit", "quantity", "low_stock_threshold"]),
  async (req, res, next) => {
    try {
      const {
        name,
        description,
        sku,
        unit,
        quantity,
        low_stock_threshold,
        item_photo,
      } = req.body;

      const item = await createItem(
        name,
        description || null,
        sku,
        unit,
        quantity,
        low_stock_threshold,
        item_photo || null,
        req.user.id,
      );
      // without initialize stock here, added items wont get tracked immediately.
      // could add to frontend apparently but advised to keep backend to do backend duties
      await initializeStock(item.id, req.user.id);

      res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  },
);

router.put(
  "/:id",
  requireBody(["name", "sku", "unit", "quantity", "low_stock_threshold"]),
  async (req, res, next) => {
    try {
      const {
        name,
        description,
        sku,
        unit,
        quantity,
        low_stock_threshold,
        item_photo,
      } = req.body;

      const updated = await updateItem(
        req.item.id,
        req.user.id,
        name,
        description || null,
        sku,
        unit,
        quantity,
        low_stock_threshold,
        item_photo || null,
      );

      res.json(updated);
    } catch (err) {
      next(err);
    }
  },
);

router.delete("/:id", async (req, res, next) => {
  try {
    await deleteItem(req.item.id, req.user.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

export default router;
