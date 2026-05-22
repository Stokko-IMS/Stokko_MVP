import { apiClient } from "./client.js";

export async function getInventoryStatus() {
  return apiClient(`/inventory`);
}

export async function getLowStockItems() {
  return apiClient(`/inventory/low-stock`);
}
