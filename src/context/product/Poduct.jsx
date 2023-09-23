import { createContext, useContext, useReducer } from "react";
// import productData from "../../assets/data/MOCK_DATA.json";
import { InitialState, Reducer } from "../../state/productState/Reducer";

const ProductContext = createContext();

const Poduct = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  let value = {
    state,
    dispatch,
  }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default Poduct;
