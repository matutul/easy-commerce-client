// import ProductCard from "../components/ProductCard";
import ProductAtCart from "../components/ProductAtCart";
import { useProducts } from "../context/product/Poduct";

const Cart = () => {
  const {
    state: { cart },
  } = useProducts();
  // console.log(cart);
  let totalPrice = 0;
  cart.map((pd) => (totalPrice += pd.price));
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] p-4 my-6 rounded-3xl bg-fuchsia-500">
        {cart &&
          cart.map((product) => (
            <ProductAtCart key={product.id} product={product} />
          ))}
        <div className="w-full">
          <p className="text-lg text-white mr-4 text-right">Total: {totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
