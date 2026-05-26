<!-- This README structure was made with AI and editted/polished to fit Stokkos needs -->

# Stokko

Stokko is a full-stack inventory management system designed to help small businesses track stock levels, purchase orders, and inventory transactions in real time.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Contributors](#contributors)
- [API Documentation](#api-documentation)
- [Future Improvements](#future-improvements)

---

## Overview

Stokko helps small businesses manage inventory, monitor low-stock items, create purchase orders, and view inventory transaction history from a simple dashboard.

The application is built as a monorepo with separate `backend` and `frontend` folders. The backend is deployed through Render, while the frontend is built with React, Vite, Tailwind CSS, and React Router.

---

## Features

- User registration and login
- JWT-based authentication
- Inventory tracking
- Low-stock alerts
- Purchase order creation and management
- Order approval and receiving workflow
- Inventory transaction logs
- Dashboard metrics
- Search and filter inventory
- Protected frontend routes

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express
- PostgreSQL
- JWT Authentication

### Deployment

- Backend: Render
- Frontend: Netlify planned

---

## Project Structure

```txt
STOKKO_MVP/
├── backend/
│   ├── api/
│   │   ├── inventory.js
│   │   ├── inventoryTransactions.js
│   │   ├── items.js
│   │   ├── orders.js
│   │   └── users.js
│   ├── db/
│   │   ├── queries/
│   │   │   ├── inventory.js
│   │   │   ├── inventoryTransactions.js
│   │   │   ├── items.js
│   │   │   ├── orderItems.js
│   │   │   ├── orders.js
│   │   │   └── users.js
│   │   ├── client.js
│   │   ├── schema.sql
│   │   └── seed.js
│   ├── middleware/
│   │   ├── getUserFromToken.js
│   │   ├── requireBody.js
│   │   └── requireUser.js
│   ├── utils/
│   │   └── jwt.js
│   ├── expressApp.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## Environment Variables

### Backend `.env`

```env
DATABASE_URL=your_database_url_here
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

### Frontend `.env`

```env
VITE_API_URL=your_backend_api_url_here
```

> Important: Never commit real database credentials, JWT secrets, or production environment variables to GitHub.

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd STOKKO_MVP
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4. Start the frontend locally

```bash
npm run dev
```

The backend is currently deployed through Render, so the local frontend can connect to the deployed backend by setting `VITE_API_URL` in the frontend `.env` file.

---

## Contributors

- Brent Trapp
- Matthew Keys

Both contributors were involved in the development and review process for the project. Each line of code was either written or reviewed through pull requests before being merged.

---

# API Documentation

<details>
<summary><strong>Authentication</strong></summary>

Most API routes require a logged-in user. Protected routes use JWT authentication.

After registering or logging in, the backend returns a token:

```json
{
  "token": "jwt-token"
}
```

The frontend should include this token with protected requests:

```txt
Authorization: Bearer jwt-token
```

</details>

---

<details>
<summary><strong>Users Routes</strong></summary>

## Register User

```http
POST /api/users/register
```

Creates a new user account and returns a JWT token.

### Required Body

```json
{
  "name": "Brent Trapp",
  "email": "brent@example.com",
  "password": "password123",
  "contact_number": "555-555-5555"
}
```

### Success Response

```json
{
  "token": "jwt-token"
}
```

---

## Login User

```http
POST /api/users/login
```

Logs in an existing user and returns a JWT token.

### Required Body

```json
{
  "email": "brent@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "token": "jwt-token"
}
```

</details>

---

<details>
<summary><strong>Items Routes</strong></summary>

## Get All Items

```http
GET /api/items
```

Returns all items belonging to the logged-in user.

---

## Get Single Item

```http
GET /api/items/:id
```

Returns one item by ID.

---

## Create Item

```http
POST /api/items
```

Creates a new inventory item and initializes stock tracking.

### Required Body

```json
{
  "name": "Item Name",
  "description": "Item description",
  "sku": "SKU-001",
  "unit": "each",
  "quantity": 25,
  "low_stock_threshold": 5
}
```

---

## Update Item

```http
PUT /api/items/:id
```

Updates an existing item.

---

## Delete Item

```http
DELETE /api/items/:id
```

Deletes an item.

</details>

---

<details>
<summary><strong>Inventory Routes</strong></summary>

## Get Inventory Status

```http
GET /api/inventory
```

Returns inventory records for the logged-in user.

---

## Get Low-Stock Items

```http
GET /api/inventory/low-stock
```

Returns items below their low-stock threshold.

---

## Initialize Inventory Stock

```http
POST /api/inventory
```

Creates an inventory record for an item.

### Required Body

```json
{
  "item_id": 1
}
```

</details>

---

<details>
<summary><strong>Orders Routes</strong></summary>

## Create Order

```http
POST /api/orders
```

Creates a new purchase order.

### Required Body

```json
{
  "supplier_name": "Supplier Name",
  "supplier_email": "supplier@example.com",
  "status": "draft"
}
```

Allowed statuses:

```txt
draft
submitted
received
complete
```

---

## Get All Orders

```http
GET /api/orders
```

Returns all orders for the logged-in user.

---

## Get Order Details

```http
GET /api/orders/:id
```

Returns detailed information for a specific order.

---

## Delete Order

```http
DELETE /api/orders/:id
```

Deletes an order.

---

## Approve Order

```http
PUT /api/orders/:id/approve
```

Approves an order.

---

## Receive Order

```http
PUT /api/orders/:id/receive
```

Marks an order as received.

---

## Add Item to Order

```http
POST /api/orders/:id/items
```

Adds an item to an existing order.

### Required Body

```json
{
  "item_id": 1,
  "quantity": 10,
  "price": 12.99
}
```

</details>

---

<details>
<summary><strong>Transactions Routes</strong></summary>

## Get All Transactions

```http
GET /api/transactions
```

Returns all inventory transactions.

---

## Create Transaction

```http
POST /api/transactions
```

Creates a new inventory transaction.

### Required Body

```json
{
  "item_id": 1,
  "quantity_change": 5,
  "reason": "restock",
  "user_id": 1
}
```

Allowed reasons:

```txt
restock
sale
waste
adjustment
```

---

## Get Single Transaction

```http
GET /api/transactions/:id
```

Returns a single transaction by ID.

</details>

---

<details>
<summary><strong>Endpoint Reference</strong></summary>

```yaml
openapi: 3.0.0
info:
  title: Stokko API
  version: 1.0.0
  description: API documentation for the Stokko inventory management system.

servers:
  - url: /api

paths:
  /users/register:
    post:
      summary: Register a new user

  /users/login:
    post:
      summary: Login a user

  /items:
    get:
      summary: Get all items
    post:
      summary: Create a new item

  /items/{id}:
    get:
      summary: Get one item
    put:
      summary: Update an item
    delete:
      summary: Delete an item

  /inventory:
    get:
      summary: Get inventory status
    post:
      summary: Initialize inventory stock

  /inventory/low-stock:
    get:
      summary: Get low-stock items

  /orders:
    get:
      summary: Get all orders
    post:
      summary: Create a new order

  /orders/{id}:
    get:
      summary: Get order details
    delete:
      summary: Delete an order

  /orders/{id}/approve:
    put:
      summary: Approve an order

  /orders/{id}/receive:
    put:
      summary: Receive an order

  /orders/{id}/items:
    post:
      summary: Add item to order

  /transactions:
    get:
      summary: Get all transactions
    post:
      summary: Create transaction

  /transactions/{id}:
    get:
      summary: Get one transaction
```

</details>

---

## Future Improvements

- Deploy frontend to Netlify
- Add screenshots or demo GIFs
- Add role-based permissions for admin workflows
- Add more detailed dashboard analytics
- Add automated tests
- Add full OpenAPI YAML file as a standalone `openapi.yaml`
