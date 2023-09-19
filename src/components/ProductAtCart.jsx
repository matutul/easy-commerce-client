import { AiOutlineDelete } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useProducts } from "../context/product/Poduct";
import { ActionType } from "../state/productState/ActionType";
import { FaRegMoneyBillAlt, FaRegTimesCircle } from "react-icons/fa";

const ProductAtCart = ({ product, order_quantity }) => {
  const { dispatch } = useProducts();
  return (
    <>
      <div className="w-full flex justify-center drop-shadow-md">
        <div className="relative w-full flex justify-between items-center rounded-2xl bg-slate-200 overflow-hidden">
          <div className="w-full md:w-[calc(100%-55px)] p-3 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-[40%] flex items-center">
              <div className="h-fit">
                <div className="w-[65px] h-[65px] flex justify-center items-center rounded-full bg-slate-500">
                  <img
                    src={product.product_photo}
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="mx-2">
                <p className="text-md">{product.product_name}</p>
                <p className="text-sm">{product.category}</p>
              </div>
            </div>
            <div className="w-full md:w-[60%] flex items-center md:justify-end justify-center md:gap-4">
              <div className="h-[35px] flex items-center m-2 rounded-lg">
                <div className="h-full px-2 flex justify-center items-center bg-gray-400 rounded-l-lg">
                  <FaRegMoneyBillAlt className="text-lg text-white" />
                </div>
                <div className="h-full px-2 flex items-center gap-1 rounded-r-lg bg-slate-300">
                  <p className="text-lg">{product.price}</p>
                  <FaRegTimesCircle />
                  <p className="text-lg">{order_quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-3">
                  <button
                    className="btn bg-gray-400 text-white p-2 w-fit h-fit rounded-md"
                    onClick={() =>
                      dispatch({
                        type: ActionType.INCREASE_QUANTITY,
                        payload: product.product_id,
                      })
                    }
                  >
                    <FiPlus />
                  </button>
                  <button
                    className="btn bg-gray-400 text-white p-2 w-fit h-fit rounded-md"
                    onClick={() =>
                      dispatch({
                        type: ActionType.DECREASE_QUANTITY,
                        payload: product.product_id,
                      })
                    }
                  >
                    <FiMinus />
                  </button>
                </div>
              </div>
              <div className="w-[100px] flex justify-center">
                <p className="text-lg ml-4 w-fit">
                  {(product.price * order_quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <button
            className="w-[55px] h-full absolute right-0 py-1 px-2 bg-red-500 text-white flex justify-center items-center group"
            onClick={() =>
              dispatch({
                type: ActionType.REMOVE_FROM_CART,
                payload: product.product_id,
              })
            }
          >
            <AiOutlineDelete className="text-3xl group-hover:text-2xl transition-all duration-150" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductAtCart;
