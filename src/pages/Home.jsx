import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product/Poduct";
import heroImage from "../assets/image/heroImage/heroImage2.png";
import { BsCartPlus } from "react-icons/bs";
import { PiDress } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { categoryMenu } from "../assets/data/categories";
import Categories from "../components/Categories";

const Home = () => {
  const {
    state: { products },
  } = useProducts();

  return (
    <div className="w-full flex flex-col items-center bg-stone-100 mt-[60px]">
      {/* Hero section */}
      <div className="w-full p-6 h-fit flex justify-center gap-6">
        {/* Side category menu bar */}
        <div className="relative w-[280px] py-2 bg-white drop-shadow-lg rounded-xl z-20">
          {categoryMenu.map((category) => (
            <div className="w-full flex items-center gap-2 py-1 px-3 text-sm hover:bg-gray-100 group">
              <div className="h-[25px] w-[25px] rounded-full bg-gray-200 flex justify-center items-center">
                <PiDress className="text-gray-600" />
              </div>
              {category.category}
              <IoIosArrowForward className="absolute opacity-0 group-hover:opacity-100 right-4 group-hover:right-2 transition-all duration-150" />

              {/* <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-full ml-6 w-[280px] h-full py-2 bg-white drop-shadow-lg rounded-xl ">
                {category.subcategory.map((subcategory) => (
                  <button className="w-full relative flex items-center gap-2 py-1 px-3 text-sm hover:bg-gray-100">
                    <div className="h-[25px] w-[25px] rounded-full bg-gray-200 flex justify-center items-center">
                      <PiDress className="text-gray-600" />
                    </div>
                    <p>{subcategory.subcategoryName}</p>
                    <IoIosArrowForward className="absolute opacity-0 group-hover:opacity-100 right-4 group-hover:right-2 transition-all duration-150" />
                  </button>
                ))}
              </div> */}
            </div>
          ))}
        </div>
        <div className="relative w-[calc(100%-280px)] h-full bg-orange-200 p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hero text section */}
          <div className="w-full h-auto flex flex-col items-start justify-center mr-12">
            <p className="text-5xl font-semibold text-rose-500">
              Easy Commerce
            </p>
            <p className="text-2xl my-2 text-rose-400">
              Great Deal with Quality Product
            </p>
            <p className="text-sm my-2 text-gray-500">
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
              className="-mr-6 w-full h-auto max-w-[300px] md:max-w-[400px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* categories items container */}
      <div className="w-full md:w-[70%] p-2 md:p-0 flex flex-col justify-center items-center my-10">
        <p className="w-full self-start text-3xl font-normal tracking-wide mb-6">Featured Categories:</p>
        <Categories />
      </div>

      <div className="w-[80%] mt-6">
        <p className="w-full self-start text-3xl font-normal tracking-wide mb-6">All Products:</p>
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
