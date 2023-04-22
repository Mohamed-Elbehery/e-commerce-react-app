// import react router dom
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import pages
import { Home, ProductDetails } from "./pages";

// import components
import { Header, Footer } from "./components";

const App = () => {
  // implement the router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </>
    )
  );

  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
