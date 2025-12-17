import React from "react";
import ReactDOM from "react-dom/client";
import { initProducts } from "./products/products.js";
import { CartApp } from "./cart/CartApp.jsx";
import "./styles/styles.css";

initProducts();

ReactDOM.createRoot(document.getElementById("cart-root")).render(
  <React.StrictMode>
    <CartApp />
  </React.StrictMode>
);
