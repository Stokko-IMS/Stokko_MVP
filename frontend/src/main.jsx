import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </AuthProvider>,
);
