import { apiClient } from "./client.js";

export async function getOrders() {
  return apiClient(`/orders`);
}

export async function createOrder(data) {
  return apiClient(`/orders`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getOrderById(id) {
  return apiClient(`/orders/${id}`);
}

export async function deleteOrder(id) {
  return apiClient(`/orders/${id}`, {
    method: "DELETE",
  });
}

export async function approveOrder(id, approval) {
  return apiClient(`/orders/${id}/approve`, {
    method: "PUT",
    body: JSON.stringify(approval),
  });
}

export async function addItemsToOrder(id, itemId) {
  return apiClient(`/orders/${id}/items`, {
    method: "POST",
    body: JSON.stringify(itemId),
  });
}
