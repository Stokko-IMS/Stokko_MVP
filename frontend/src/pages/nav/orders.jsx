import { useState, useEffect } from "react";
import { getOrders } from "react";

export default function Orders() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState(null);
}
