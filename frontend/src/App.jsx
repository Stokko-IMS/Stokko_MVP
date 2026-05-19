import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/nav/Dashboard.jsx";
import Inventory from "./pages/nav/Inventory.jsx";
import LowStock from "./pages/nav/LowStock.jsx";
import Orders from "./pages/nav/Orders.jsx";
import StockTakePage from "./pages/StockTakePage.jsx";
import Transactions from "./pages/Transactions.jsx";
import Error404 from "./pages/Error404.jsx";
import ProductDetails from "./pages/nav/ProductDetails.jsx";
import AddEditItem from "./pages/items/AddEditItem.jsx"; /*add and update included in one page*/
import ContactUs from "./src/pages/contactUs";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

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
        <Route path="/lowStock" element={<LowStock />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/stockTakePage" element={<StockTakePage />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/addEditItems" element={<AddEditItem />} />
      </Route>

      {/* Fallback */}

      <Route path="*" element={<Navigate to="/error404" replace />} />
    </Routes>
  );
}

export default App;
