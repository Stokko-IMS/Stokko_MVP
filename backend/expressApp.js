import express from "express";

import cors from "cors";
import morgan from "morgan";
import getUserFromToken from "./middleware/getUserFromToken.js";

// Routers -------------------------------------------------------------

import ordersRouter from "./api/orders.js";
import usersRouter from "./api/users.js";
// import orderItemsRouter from "./backend/api/orderItems.js";
import itemsRouter from "./api/items.js";
import inventoryRouter from "./api/inventory.js";
import transactionsRouter from "./api/inventoryTransactions.js";
// import orderItemsRouter from "./backend/api/orderItems.js";
// import other routers here.------------------------------------------

const app = express();

//------ core middleware --------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(getUserFromToken);

// --Routes
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/items", itemsRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/transactions", transactionsRouter);
// add other routers here.

app.use((err, req, res, next) => {
  switch (err.code) {
    // Invalid type
    case "22P02":
      return res.status(400).json(err.message);
    // Unique constraint violation
    case "23505":
      return res
        .status(400)
        .json("Entered Item already exists and can not be added again");
    // Foreign key violation
    case "23503":
      return res.status(400).json(err.detail);
    // Not null violation
    case "23502":
      return res.status(400).json({ error: err.detail });
    default:
      next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json("Sorry! Something went wrong.");
  next();
});

export default app;
