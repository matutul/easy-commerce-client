import { createContext, useContext } from "react";
import productData from "../../assets/data/MOCK_DATA.json";

const ProductContext = createContext();

const Poduct = ({ children }) => {
  let value = {
    products: productData,
    cart: [],
    error: false,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default Poduct;
