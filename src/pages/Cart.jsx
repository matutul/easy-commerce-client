// import ProductCard from "../components/ProductCard";
import ProductAtCart from "../components/ProductAtCart";
import { useProducts } from "../context/product/Poduct";

const Cart = () => {
  const {
    state: { cart },
  } = useProducts();
  // console.log(cart);
  let totalPrice = 0;
  cart.map((order) => {
    // console.log(order);
    totalPrice += order.product.price;
  });
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-[80%] p-4 my-6 rounded-3xl">
        <p>Your cart:</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="col-span-8 flex flex-col gap-3">
            {cart &&
              cart.map((order) => (
                <ProductAtCart
                  key={order.product.product_id}
                  product={order.product}
                  order_quantity={order.order_quantity}
                />
              ))}
          </div>
          <div className="col-span-4">
            <div className="w-full"></div>
          </div>
        </div>

        <div className="w-full">
          <p className="text-lg text-white mr-4 text-right">
            Total: {totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
