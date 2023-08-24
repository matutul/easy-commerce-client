export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state.cart = [...state.cart, action.payload];
      return state;
    default:
      return state;
  }
};
