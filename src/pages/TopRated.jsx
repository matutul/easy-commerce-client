import ProductCard from "../components/ProductCard"
import { useProducts } from "../context/product/Poduct";

const TopRated = () => {
  const products = useProducts().products;
  const filteredProduct = products.filter(pd => pd.availability == true && pd.rating>3)
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-stone-50">
      <div className="w-full h-[500px] bg-cyan-900"></div>

      <div className="w-[80%] mt-6">
        <p className="text-4xl font-semibold text-gray-700">Popular Products:</p>
        <div className="w-full h-auto grid grid-cols-4 gap-5">
          {filteredProduct &&
            filteredProduct.map((pd) => (
              <ProductCard key={pd.product_id} product={pd} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopRated