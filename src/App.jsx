// import "useContext & useEffect" Hooks
import { useContext, useEffect } from "react";

// import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import { Home, ProductDetails } from "./pages";
import { Footer, Header, Sidebar } from "./components";

// import cartContext
import { CartContext } from "./contexts/CartContext";

const App = () => {
  const { cart, setCart } = useContext(CartContext);

  // set the cart with the local storage
  useEffect(() => {
    if (localStorage.cart) {
      setCart(JSON.parse(localStorage.cart));
    }
  }, [setCart]);

  // local storage
  useEffect(() => {
    setTimeout(() => {
      if (cart.length >= 0) {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }, 100);
  }, [cart]);

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
