import { AiFillCloseCircle } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useProducts } from "../context/product/Poduct";
import { ActionType } from "../state/productState/ActionType";

const ProductAtCart = ({ product }) => {
  const { dispatch } = useProducts();
  return (
    <>
      {/* <div> */}
      <div className="w-full flex justify-between items-center my-4 py-2 px-3 rounded-full bg-fuchsia-700">
        <div className="w-[40%]">
          <p className="text-white text-lg">{product.product_name}</p>
        </div>
        <div className="flex gap-4">
          <button className="btn bg-amber-400 text-gray-900 px-2 rounded-full">
            <FiMinus />
          </button>
          <button className="btn bg-amber-400 text-gray-900 px-2 rounded-full">
            <FiPlus />
          </button>
          <button
            className="py-1 px-2 rounded-full bg-red-500 text-white flex justify-center items-center gap-1"
            onClick={() =>
              dispatch({
                type: ActionType.REMOVE_FROM_CART,
                payload: product.product_id,
              })
            }
          >
            <AiFillCloseCircle /> Delete
          </button>
        </div>
        <div>
          <p className="text-white text-lg mr-4">{product.price}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProductAtCart;
