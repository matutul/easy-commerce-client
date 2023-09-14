// import ProductCard from "../components/ProductCard";
import { useState } from "react";
import ProductAtCart from "../components/ProductAtCart";
import { useProducts } from "../context/product/Poduct";
import DeliveryAddress from "../components/cartCheckout/DeliveryAddress";
import PaymentOption from "../components/cartCheckout/PaymentOption";
import { Link } from "react-router-dom";
import TotalPrice from "../components/cartCheckout/TotalPrice";

const Cart = () => {
  const [checkoutPage, setCheckoutPage] = useState(<TotalPrice />);

  const {
    state: { cart },
  } = useProducts();

  return (
    <div className="w-full min-h-screen flex justify-center mt-[60px]">
      <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[80%] p-4 my-6 rounded-3xl">
        <p>Your cart:</p>
        {cart.length ? (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 lg:gap-2">
            <div className="lg:col-span-7 flex flex-col gap-3 mb-2">
              {cart.map((order) => (
                <ProductAtCart
                  key={order.product.product_id}
                  product={order.product}
                  order_quantity={order.order_quantity}
                />
              ))}
            </div>
            <div className="col-span-5 relative">
              {/* <div className="absolute w-[25px] h-fit p-3 top-20 -left-[25px] rounded-l-2xl bg-rose-600 flex flex-col justify-center items-center">
                <div
                  className="w-[15px] h-[30px] rounded-full bg-gray-100 my-1 hover:scale-y-125 transition-all duration-200"
                  onClick={() => setCheckoutPage(<TotalPrice />)}
                ></div>
                <div
                  className="w-[15px] h-[30px] rounded-full bg-gray-100 my-1 hover:scale-y-125 transition-all duration-200"
                  onClick={() => setCheckoutPage(<DeliveryAddress />)}
                ></div>
                <div
                  className="w-[15px] h-[30px] rounded-full bg-gray-100 my-1 hover:scale-y-125 transition-all duration-200"
                  onClick={() => setCheckoutPage(<PaymentOption />)}
                ></div>
              </div> */}
              <div className="w-full">{checkoutPage}</div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-2xl font-medium">The cart is Empty!!</p>
            <Link
              to="/"
              className="text-3xl font-medium bg-rose-500 text-gray-100 p-2 px-10 hover:pt-20 m-4 hover:scale-x-110 rounded-lg transition-all duration-150"
            >
              Shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
