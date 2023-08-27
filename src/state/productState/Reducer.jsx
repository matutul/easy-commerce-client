import { ActionType } from "./ActionType";
import productData from "../../assets/data/MOCK_DATA.json";

export const InitialState = {
  products: productData,
  cart: [],
  error: false,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
