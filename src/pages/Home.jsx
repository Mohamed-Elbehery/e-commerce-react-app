// import context
import { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import { Footer, Header, Hero, Product, Sidebar } from "../components";

const Home = ({ children }) => {
  // get products from context
  const { products } = useContext(ProductContext);
  // get only men's & women's clothing category
  const filteredProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );

  return (
    <>
      <Header />
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[2rem] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Home;
