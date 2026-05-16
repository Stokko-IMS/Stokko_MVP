import { apiClient } from "./client.js";

export async function getTransactions() {
  return apiClient(`/transactions`);
}

export async function addTransaction(data) {
  return apiClient(`/transactions`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getTransactionById(id) {
  return apiClient(`/transactions/${id}`);
}
