import { apiClient } from "./client.js";

export async function getAllItems() {
  return apiClient("/items");
}

export async function getItemById(id) {
  return apiClient(`/items/${id}`);
}

export async function createItem(data) {
  return apiClient(`/items`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateItem(id, data) {
  return apiClient(`/items/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteItem(id) {
  return apiClient(`/items/${id}`, {
    method: "DELETE",
  });
}
