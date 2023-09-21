import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useProducts } from "../context/product/Poduct";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {
    state: { cart },
  } = useProducts();
  console.log(cart);
  return (
    <div className="w-full flex justify-center bg-rose-500 fixed top-0 z-30 px-2 sm:px-4 md:px-6">
      <div className="flex w-full h-[60px] justify-end items-center">
        <div className="hidden sm:flex h-full justify-end items-center">
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
            to="/cart"
            className="mx-6 h-full py-2 flex items-center text-white border-b-2 border-transparent hover:border-b-2 hover:border-white"
          >
            {cart.length ? (
              <PiShoppingCartFill className="text-3xl" />
            ) : (
              <PiShoppingCart className="text-3xl" />
            )}
          </Link>
        </div>
        <div className="w-full sm:w-auto flex justify-between sm:justify-end items-center gap-2">
          <div className="relative w-[50px] h-[50px] group">
            <img
              src=""
              alt=""
              className="w-full h-full rounded-full object-fit bg-slate-200"
            />
            <div className="absolute top-[50%] left-0 right-auto sm:right-0 sm:left-auto w-0 h-0 opacity-0 group-hover:w-fit group-hover:h-auto group-hover:opacity-100 flex flex-col justify-center items-start bg-white rounded-md py-1 shadow-md group-hover:top-full transition-all duration-300">
              <Link
                to=""
                className="w-full px-6 text-gray-400 py-1 hover:bg-slate-100"
              >
                Profile
              </Link>
              <Link
                to=""
                className="w-full px-6 text-gray-400 py-1 hover:bg-slate-100"
              >
                Settings
              </Link>
              <Link
                to=""
                className="w-full px-6 text-gray-400 py-1 hover:bg-slate-100"
              >
                Login
              </Link>
            </div>
          </div>
          {/* Menubar on mobile screen */}
          <div
            className="relative sm:hidden self-center"
            onMouseOut={() => setShowMobileMenu(false)}
          >
            <FaBars
              className="sm:hidden text-4xl text-white self-center"
              onClick={() => setShowMobileMenu(true)}
            />
            <div
              className={`absolute top-full right-0 ${
                showMobileMenu ? "flex" : "hidden"
              } w-[150px] h-auto flex-col justify-start items-start bg-white rounded-md shadow-md backdrop-blur-xl backdrop-brightness-200 overflow-hidden`}
            >
              <Link
                to="/"
                className="w-full px-4 py-1 text-gray-400 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/top_rated"
                className="w-full px-4 py-1 text-gray-400 hover:bg-gray-100"
              >
                Top Rated
              </Link>
              <Link
                to="/wish_list"
                className="w-full px-4 py-1 text-gray-400 hover:bg-gray-100"
              >
                Wish List
              </Link>
              <Link
                to="/cart"
                className="w-full px-4 py-1 text-gray-400 hover:bg-gray-100 flex gap-2"
              >
                {cart.length ? (
                  <PiShoppingCartFill className="text-xl" />
                ) : (
                  <PiShoppingCart className="text-xl" />
                )}
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
