import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product/Poduct";

const Home = () => {
  const products = useProducts().products;
  console.log("From Home page ==========" + products);
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-stone-50">
      <div className="w-full h-[500px] bg-cyan-900"></div>

      <div className="w-[80%] mt-6">
        <p className="text-4xl font-semibold text-gray-700">All Products:</p>
        <div className="w-full h-auto grid grid-cols-4 gap-5">
          {products &&
            products.map((pd) => (
              <ProductCard key={pd.product_id} product={pd} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
