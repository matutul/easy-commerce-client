import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { RiPriceTag3Fill } from "react-icons/ri";
// import { Reducer } from "../state/productState/Reducer";
import { ActionType } from "../state/productState/ActionType";
import { useProducts } from "../context/product/Poduct";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { useReducer } from "react";

const ProductCard = ({ product }) => {
  const [isAddedToCart, setisAddedToCart] = useState(false);
  const [isAddedToWishList, setisAddedToWishList] = useState(false);
  const {
    state: { cart, wishList },
    dispatch,
  } = useProducts();

  useEffect(() => {
    if (
      cart.find((pd) => {
        return pd.product_id === product.product_id;
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
    <div
      className={`w-full rounded-2xl ${
        isAddedToCart
          ? "bg-gradient-to-br from-rose-500 to-fuchsia-500 text-white"
          : "bg-white"
      } drop-shadow-2xl group`}
    >
      {/* image div */}
      <div className="w-full h-[160px] rounded-t-2xl bg-slate-500 overflow-hidden">
        <img
          src={product.product_photo}
          alt=""
          className="w-full h-full origin-bottom group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="relative w-full p-3 flex flex-col justify-between">
        {/* products detials div */}
        <div className="mb-20">
          <p className="text-md text-center">{product.product_name}</p>
          {product.availability && (
            <div className="absolute top-0 left-0 -mt-3 -ml-3">
              <p className="px-2 py-0 rounded-full text-xs bg-amber-500 text-rose-700 font-regular">
                Sold Out
              </p>
            </div>
          )}
        </div>
        {/* ordering section div */}
      </div>
      <div className="w-full h-auto p-3 absolute bottom-0 mb-1">
        <div className="flex justify-between items-center mb-2">
          <p className="flex justify-center items-center px-2 rounded-full border-2 border-gradient-to-br from-gray-100 to-gray-300 gap-1">
            <RiPriceTag3Fill
              className={`${isAddedToCart ? "text-white" : "text-amber-500"}`}
            />
            {product.price}
          </p>
          <p className="flex items-center justify-center px-2 rounded-full border-2 border-gradient-to-br from-gray-100 to-gray-300 gap-1">
            <FaStar
              className={`${isAddedToCart ? "text-white" : "text-amber-500"}`}
            />
            {product.rating}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="text-2xl"
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
              <AiFillHeart
                className={`${isAddedToCart ? "text-white" : "text-rose-500"}`}
              />
            ) : (
              <AiOutlineHeart
                className={`${isAddedToCart ? "text-white" : "text-rose-500"}`}
              />
            )}
          </button>

          <button
            className={`${
              isAddedToCart
                ? "bg-white text-rose-700"
                : "bg-gradient-to-r from-rose-500 to-fuchsia-500  text-white hover:from-fuchsia-500 hover:to-rose-500 "
            } float-right rounded-l-full -mr-3 flex gap-2 items-center py-1 px-3 text-sm font-medium hover:pr-10 transition-all duration-200`}
            onClick={() => {
              dispatch({
                type: isAddedToCart
                  ? ActionType.REMOVE_FROM_CART
                  : ActionType.ADD_TO_CART,
                payload: isAddedToCart ? product.product_id : product,
              });
            }}
          >
            <FaCartArrowDown className="text-base" />
            {isAddedToCart ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
