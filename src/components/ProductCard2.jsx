import { FaStar } from "react-icons/fa";
import { RiPriceTag3Fill } from "react-icons/ri";
import { ActionType } from "../state/productState/ActionType";
import { useProducts } from "../context/product/Poduct";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import productImage from "../assets/image/productImage/sunScreen.jpg";

const ProductCard2 = ({ product }) => {
  const [isAddedToCart, setisAddedToCart] = useState(false);
  const [isAddedToWishList, setisAddedToWishList] = useState(false);
  const {
    state: { cart, wishList },
    dispatch,
  } = useProducts();

  useEffect(() => {
    if (
      cart.find((order) => {
        return order.product.product_id === product.product_id;
      })
    ) {
      setisAddedToCart(true);
    } else {
      setisAddedToCart(false);
    }
    if (
      wishList.find((pd) => {
        return pd.product_id === product.product_id;
      })
    ) {
      setisAddedToWishList(true);
    } else {
      setisAddedToWishList(false);
    }
  }, [cart, wishList]);

  return (
    <div className={`w-[250px] rounded-2xl drop-shadow-xl`}>
      {/* image div */}
      <div className="relative w-full h-[160px] rounded-2xl bg-slate-500 overflow-hidden group">
        <img
          src={productImage}
          alt=""
          className="w-full h-full origin-bottom group-hover:scale-105 transition-all duration-300"
        />
        <p className="absolute top-1 left-1 text-sm flex items-center justify-center px-2 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 gap-1 backdrop-blur-md">
          <FaStar className="text-amber-600" />
          {product.rating}
        </p>
        {/* add to wishlist button; love button */}
        <button
          className="text-2xl absolute bottom-0 left-0 p-2 bg-white rounded-tr-2xl backdrop-blur-md opacity-70 hover:opacity-100"
          onClick={() => {
            dispatch({
              type: isAddedToWishList
                ? ActionType.REMOVE_FROM_WISHLIST
                : ActionType.ADD_TO_WISHLIST,
              payload: isAddedToWishList ? product.product_id : product,
            });
          }}
        >
          {isAddedToWishList ? (
            <AiFillHeart className="text-rose-500" />
          ) : (
            <AiOutlineHeart className="text-rose-500" />
          )}
        </button>
        <button
          className={`text-2xl absolute bottom-0 right-0 rounded-tl-2xl bg-gradient-to-r text-rose-500 p-2 transition-all duration-200 backdrop-blur-md opacity-70 hover:opacity-100 ${
            isAddedToCart
              ? "bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-rose-500"
              : "bg-white"
          }`}
          onClick={() => {
            dispatch({
              type: isAddedToCart
                ? ActionType.REMOVE_FROM_CART
                : ActionType.ADD_TO_CART,
              payload: isAddedToCart ? product.product_id : product,
            });
          }}
        >
          {isAddedToCart ? (
            <PiShoppingCartFill className="text-2xl text-white" />
          ) : (
            <PiShoppingCart className="text-2xl" />
          )}
          {/* <FaCartArrowDown className={`${isAddedToCart && "text-white"}`} /> */}
        </button>
        {/* Sold out tooltip */}
        {!product.availability && (
          <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 opacity-80">
            <p className="px-2 py-1 text-sm rounded-full bg-amber-500 text-rose-700">
              Sold Out
            </p>
          </div>
        )}
      </div>

      {/* products detials div */}
      <div className="w-full py-1 flex flex-col justify-between">
        <p className="flex justify-center items-center px-2 rounded-full border-2 border-white gap-1">
          <RiPriceTag3Fill
            className={`${isAddedToCart ? "text-white" : "text-amber-500"}`}
          />
          {product.price}
        </p>
        <p className="text-md mt-1">{product.product_name}</p>
      </div>
      <div className="w-full h-auto p-3 absolute bottom-0 mb-1">
        <div className="flex justify-between items-center mb-2"></div>
      </div>
    </div>
  );
};

export default ProductCard2;
