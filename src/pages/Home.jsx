import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product/Poduct";
import heroImage from "../assets/image/heroImage/heroImage2.png";
import { BsCartPlus } from "react-icons/bs";

const Home = () => {
  const { state:{products}} = useProducts();

  return (
    <div className="w-full flex flex-col items-center bg-stone-50">
      {/* Hero section */}
      <div className="w-full h-fit flex justify-center bg-orange-200">
        <div className="w-[80%] h-full grid grid-cols-1 md:grid-cols-2 py-6 gap-6">
          {/* Hero text section */}
          <div className="w-full h-auto flex flex-col items-start justify-center mr-12">
            <p className="text-5xl font-semibold text-rose-500">Easy Commerce</p>
            <p className="text-2xl my-2 text-rose-400">
              Great Deal with Quality Product
            </p>
            <p className="text-md my-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              ratione itaque dolore facilis fugit sequi cupiditate, dolor
              debitis voluptas incidunt est molestias ex eum repellendus
              perferendis eveniet minus minima accusamus?
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-violet-500 py-2 px-5 mt-8 rounded-md text-white hover:from-violet-600 hover:to-rose-600 flex items-center gap-3 group">
              Order Now{" "}
              <BsCartPlus className="text-xl group-hover:translate-x-1 transition-all duration-200" />
            </button>
          </div>
          {/* Hero image */}
          <div className=" float-right flex justify-center md:justify-end items-end">
            <img
              src={heroImage}
              alt=""
              className="-mr-6 w-full h-auto max-w-[300px] md:max-w-[600px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] mt-6">
        <p className="text-4xl font-semibold text-gray-700">All Products:</p>
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
