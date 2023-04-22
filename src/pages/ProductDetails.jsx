// import "useContext" Hook
import { useContext } from "react";

// import "useParams" Hook
import { useParams } from "react-router-dom";

// import contexts
import { CartContext } from "../contexts/CartContext"; // cart context
import { ProductContext } from "../contexts/ProductContext"; // product context
import { Header } from "../components";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get product according to the id
  const product = products.find((item) => +item.id === +id);

  if (!product)
    return (
      <>
        <Header />
        <section className="h-screen flex justify-center items-center">
          Loading...
        </section>
      </>
    );

  // destructure product
  const { title, price, description, image } = product;

  return (
    <>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          {/* image & text wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[12.5rem] lg:max-w-sm"
                src={image}
                alt={title}
              />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[1.625rem] font-medium mb-2 max-w-[28.125rem] mx-auto lg:mx-0">
                {title}
              </h1>
              <span className="text-xl text-red-600 font-medium mb-6">
                $ {price}
              </span>
              <p className="mb-8">{description}</p>
              <button
                onClick={() => addToCart(product, id)}
                className="bg-primary py-4 px-8 text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
