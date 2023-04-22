// import "useContext" Hook
import { useContext } from "react";
// import link
import { Link } from "react-router-dom";

// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  // destructure the product
  const { id, image, category, title, price } = product;
  // destructure the cart context
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[18.75rem] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[12.325] mx-auto flex justify-center items-center">
            <img
              className="max-h-[10rem] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => addToCart(product, id)}
            className="flex justify-center items-center text-white w-12 h-12 bg-red-500"
          >
            <BsPlus className="text-3xl" />
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <p className="text-sm capitalize text-gray-500 mb-1">{category}</p>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <p className="font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default Product;
