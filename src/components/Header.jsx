// import "useContext" Hook
import { useContext, useState, useEffect } from "react";

// import contexts
import { SidebarContext } from "../contexts/SidebarContext"; // sidebar context
import { CartContext } from "../contexts/CartContext"; // cart context

// import icons
import { BsBag } from "react-icons/bs";

// import link
import { Link } from "react-router-dom";

// import link
import Logo from "../img//logo.svg";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img className="w-[3.5rem]" src={Logo} alt="logo-img" />
          </Link>
        </div>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <span className="bg-red-500 absolute -right-2 -bottom-2 text-[0.75rem] w-[1.125rem] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
