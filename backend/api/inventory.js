import express from "express";
import requireUser from "../middleware/requireUser.js";
import requireBody from "../middleware/requireBody.js";
import {
  initializeStock,
  getInventoryStatus,
} from "../db/queries/inventory.js";
import { getItemById } from "../db/queries/items.js";

const router = express.Router();

router.use(requireUser);

// GET/

router.get("/", async (req, res, next) => {
  try {
    const status = await getInventoryStatus(req.user.id);
    res.json(status);
  } catch (err) {
    next(err);
  }
});

// POST
router.post("/", requireBody(["item_id"]), async (req, res, next) => {
  try {
    const { item_id } = req.body;
    // confirms items and that it belongs to the user *
    const item = await getItemById(item_id, req.user.id);
    if (!item) return res.status(404).json({ error: "Item not found." });

    const record = await initializeStock(item_id, req.user.id);
    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
});

export default router;
