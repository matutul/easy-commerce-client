import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useProducts } from "../context/product/Poduct";

const Navbar = () => {
  const {
    state: { cart },
  } = useProducts();
  console.log(cart)
  return (
    <div className="w-full flex justify-center bg-rose-500 fixed top-0 z-30">
      <div className="w-[80%] h-[60px] flex justify-end items-center">
        <Link
          to="/"
          className="mx-6 h-full py-2 flex items-center text-white border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Home
        </Link>
        <Link
          to="/top_rated"
          className="mx-6 h-full py-2 flex items-center text-white border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Top Rated
        </Link>
        <Link
          to="/wish_list"
          className="mx-6 h-full py-2 flex items-center text-white border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Wish List
        </Link>
        <Link
          to="/about"
          className="mx-6 h-full py-2 flex items-center text-white border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          About
        </Link>
        <Link
          to="/cart"
          className="mx-6 h-full py-2 flex items-center text-white border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          {cart.length ? <PiShoppingCartFill className="text-3xl" /> : <PiShoppingCart className="text-3xl" />}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
