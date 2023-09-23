import { ActionType } from "./ActionType";
import productData from "../../assets/data/MOCK_DATA.json";

export const InitialState = {
  products: productData,
  cart: [],
  wishList: [],
  error: false,
  payInfo: {},
};

export const Reducer = (state, action) => {
  switch (action.type) {
    // add to cart action
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, order_quantity: 1 }],
      };
    // remove from cart action
    case ActionType.REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter((order) => {
        return order.product.product_id !== action.payload;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    // add to wishlist action
    case ActionType.ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    // remove from wishlist action
    case ActionType.REMOVE_FROM_WISHLIST: {
      const updatedWishList = state.wishList.filter((pd) => {
        return pd.product_id !== action.payload;
      });
      return {
        ...state,
        wishList: updatedWishList,
      };
    }
    // order quantity increase action
    case ActionType.INCREASE_QUANTITY: {
      const updatedCart = state.cart;
      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedCart[i].product.product_id == action.payload) {
          updatedCart[i].order_quantity += 0.5;
          break;
        }
      }
      // console.log(updatedCart);
      return {
        ...state,
        cart: [...updatedCart],
      };
    }
    // order quantity decrease action
    case ActionType.DECREASE_QUANTITY: {
      const updatedCart = [...state.cart];
      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedCart[i].product.product_id == action.payload) {
          if (updatedCart[i].order_quantity > 1) {
            updatedCart[i].order_quantity -= 0.5;
          }
          break;
        }
      }
      // console.log(updatedCart);
      return {
        ...state,
        cart: [...updatedCart],
      };
    }
    // Payment info add to state
    case ActionType.ADD_SHIPMENT_ADDRESS:
      return { ...state, payInfo: action.payload };
    default:
      return state;
  }
};
