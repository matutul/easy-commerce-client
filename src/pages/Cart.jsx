import { useProducts } from "../context/product/Poduct";

const Cart = () => {
  const initialState = useProducts();
  console.log(initialState)
  return (
    <div>This is Cart</div>
  )
}

export default Cart