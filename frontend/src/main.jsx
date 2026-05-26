import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
);
