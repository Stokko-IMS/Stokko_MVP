import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";
import Dashboard from "./pages/nav/dashboard";
import Inventory from "./pages/nav/inventory";
import LowStock from "./pages/nav/lowStock";
import Orders from "./pages/nav/orders";
import StockTakePage from "./pages/stockTakePage";
import Transactions from "./pages/transactions";
import Error404 from "./pages/error404.jsx";
import ProductDetails from "./pages/nav/productDetails";
import AddEditItem from "./pages/items/addEditItem"; /*add and update included in one page*/
import ContactUs from "./pages/contactUs";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/error404" element={<Error404 />} />
      <Route path="/contactUS" element={<ContactUs />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/add" element={<AddEditItem />} />
        <Route path="/inventory/edit/:id" element={<AddEditItem />} />
        <Route path="/inventory/:id" element={<ProductDetails />} />
        <Route path="/lowStock" element={<LowStock />} />
        <Route path="/stockTakePage" element={<StockTakePage />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>

      {/* Fallback */}

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
