import { apiClient } from "./client.js";

export async function getInventoryStatus() {
  return apiClient(`/inventory`);
}
