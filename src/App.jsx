// import react router dom
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import pages
import { Home, ProductDetails } from "./pages";

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
