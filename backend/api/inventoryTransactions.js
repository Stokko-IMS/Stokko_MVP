import express from "express";
import requireUser from "../middleware/requireUser.js";
import requireBody from "../middleware/requireBody.js";
import {
  getTransactions,
  getTransactionById,
  addTransaction,
} from "../db/queries/inventoryTransactions.js";

const router = express.Router();

router.use(requireUser);

router.get("/", async (req, res, next) => {
  try {
    const transactions = await getTransactions(req.user.id);
    res.json(transactions);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  requireBody(["item_id", "quantity_change", "reason", "user_id"]),
  async (req, res, next) => {
    try {
      const { item_id, quantity_change, reason, user_id } = req.body;
      const allowedReasons = ["restock", "sale", "waste", "adjustment"];
      if (!allowedReasons.includes(reason)) {
        return res
          .status(400)
          .json({ error: "Invalid reason.", allowed: allowedReasons });
      }
      const transaction = await addTransaction(
        item_id,
        quantity_change,
        reason,
        user_id,
      );
      res.status(201).json(transaction);
    } catch (err) {
      next(err);
    }
  },
);

router.param("id", async (req, res, next, id) => {
  try {
    const transaction = await getTransactionById(id, req.user.id);
    if (!transaction) return res.status(404).json("Transaction not found");
    req.transaction = transaction;
    next();
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res) => {
  res.json(req.transaction);
});

export default router;
