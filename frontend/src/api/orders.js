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

export async function getOrderDetails(id) {
  return apiClient(`/orders/${id}`);
}

export async function deleteOrder(id) {
  return apiClient(`/orders/${id}`, {
    method: "DELETE",
  });
}

export async function approveOrder(id) {
  return apiClient(`/orders/${id}/approve`, {
    method: "PUT",
  });
}

export async function receiveOrder(id) {
  return apiClient(`/orders/${id}/receive`, {
    method: "PUT",
  });
}

export async function addItemsToOrder(id, data) {
  return apiClient(`/orders/${id}/items`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
