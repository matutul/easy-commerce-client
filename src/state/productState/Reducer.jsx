import { ActionType } from "./ActionType";
import productData from "../../assets/data/MOCK_DATA.json";

export const InitialState = {
  products: productData,
  cart: [],
  wishList: [],
  error: false,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ActionType.REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter((pd) => {
        return pd.product_id !== action.payload;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case ActionType.ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    case ActionType.REMOVE_FROM_WISHLIST: {
      const updatedWishList = state.wishList.filter((pd) => {
        return pd.product_id !== action.payload;
      });
      return {
        ...state,
        wishList: updatedWishList,
      };
    }
    default:
      return state;
  }
};
