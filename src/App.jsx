// import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import { Home, ProductDetails } from "./pages";
import { Footer, Header, Sidebar } from "./components";

const App = () => {
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
