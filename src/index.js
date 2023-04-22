import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import products context provider
import ProductContextProvider from "./contexts/ProductContext";
// import sidebar context provider
import SidebarContextProvider from "./contexts/SidebarContext";
// import cart context provider
import CartContextProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarContextProvider>
    <CartContextProvider>
      <ProductContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductContextProvider>
    </CartContextProvider>
  </SidebarContextProvider>
);
