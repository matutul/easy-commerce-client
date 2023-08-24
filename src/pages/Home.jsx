import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product/Poduct";
import heroImage from "../assets/image/heroImage/heroImage2.png";
import { BsCartPlus } from "react-icons/bs";

const Home = () => {
  const products = useProducts().products;
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-stone-50">
      <div className="w-full h-[500px] flex justify-center bg-cyan-900">
        <div className="w-[80%] grid grid-cols-2 py-6 gap-6">
          <div className="flex flex-col items-start justify-center first-letter mr-12 -mt-20">
            <p className="text-5xl font-semibold text-white">Easy Commerce</p>
            <p className="text-2xl my-2 text-white">
              Great Deal with Quality Product
            </p>
            <p className="text-md my-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              ratione itaque dolore facilis fugit sequi cupiditate, dolor
              debitis voluptas incidunt est molestias ex eum repellendus
              perferendis eveniet minus minima accusamus?
            </p>
            <button className="bg-gradient-to-r from-pink-600 to-violet-700 py-2 px-5 mt-8 rounded-md text-white hover:from-violet-700 hover:to-pink-600 flex items-center gap-3 group">
              Order Now <BsCartPlus className="text-xl group-hover:translate-x-1 transition-all duration-200"/>
            </button>
          </div>
          <div className="flex justify-end items-end">
            <img src={heroImage} alt="" className="-mr-6" />
          </div>
        </div>
      </div>

      <div className="w-[80%] mt-6">
        <p className="text-4xl font-semibold text-gray-700">All Products:</p>
        <div className="w-full h-auto grid grid-cols-4 gap-8">
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
