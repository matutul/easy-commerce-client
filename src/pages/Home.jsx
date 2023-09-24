import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product/Poduct";
import { PiDress } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { categoryMenu } from "../assets/data/categories";
import Categories from "../components/Categories";
import Slider from "react-slick";
import HeroSection from "../components/HeroSection";
import ProductCard2 from "../components/ProductCard2";
import sunScreen from "../assets/image/productImage/sunScreen2.png";
import fashion from "../assets/image/productImage/fashion2.PNG";
import food from "../assets/image/productImage/food.svg";

const Home = () => {
  const {
    state: { products },
  } = useProducts();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full flex flex-col items-center bg-stone-100 mt-[60px] pb-20">
      {/* Hero section */}
      <div className="w-full h-auto md:h-[450px] p-2 md:p-6 flex justify-center gap-6 bg-gray-200">
        {/* Side category menu bar */}
        <div className="hidden lg:block w-[280px] h-full py-2 bg-white drop-shadow-lg rounded-xl z-20 overflow-hidden">
          <div className="w-full h-full overflow-y-auto">
            {categoryMenu.map((category) => (
              <div className="relative w-full flex items-center gap-2 py-1 px-3 text-sm hover:bg-gray-100 group">
                <div className="h-[25px] w-[25px] rounded-full bg-gray-200 flex justify-center items-center">
                  <PiDress className="text-gray-600" />
                </div>
                {category.category}
                <IoIosArrowForward className="absolute opacity-0 group-hover:opacity-100 right-4 group-hover:right-2 transition-all duration-150" />
              </div>
            ))}
          </div>
        </div>
        {/* Hero banner section */}
        <div className="w-full lg:w-[calc(100%-280px)] min-h-full lg:h-full">
          {/* Hero text section */}
          <HeroSection />
        </div>
      </div>

      {/* categories items container */}
      <div className="w-full lg:w-[80%] p-2 lg:p-0 flex flex-col justify-center items-center my-10 ">
        <p className="w-full text-center text-xl font-normal tracking-wide mb-2">
          Featured Categories:
        </p>
        <Categories />
      </div>

      {/* beauty products slider */}
      <div className="w-full md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Beauty Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "beauty")
              .slice(9)
              .map((pd) => (
                <div className="h-full p-1 rounded-lg">
                  <ProductCard2
                    key={pd.product_id}
                    product={pd}
                    img={sunScreen}
                  />
                </div>
              ))}
        </Slider>
      </div>

      {/* clothing products slider */}
      <div className="w-full md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Clothing Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "clothing")
              .slice(9)
              .map((pd) => (
                <div className="h-full p-1 rounded-lg">
                  <ProductCard2
                    key={pd.product_id}
                    product={pd}
                    img={fashion}
                  />
                </div>
              ))}
        </Slider>
      </div>

      {/* food products slider */}
      <div className="w-full md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Food Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "food")
              .slice(9)
              .map((pd) => (
                <div className="h-full p-1 rounded-lg">
                  <ProductCard2 key={pd.product_id} product={pd} img={food}/>
                </div>
              ))}
        </Slider>
      </div>
      {/* Health products slider */}
      <div className="w-full md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Health Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "health")
              .slice(9)
              .map((pd) => (
                <div className="h-full  p-1 rounded-lg">
                  <ProductCard key={pd.product_id} product={pd} />
                </div>
              ))}
        </Slider>
      </div>
      {/* Automotive products slider */}
      <div className="w-full md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Automotive Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "automotive")
              .slice(9)
              .map((pd) => (
                <div className="h-full p-1 rounded-lg">
                  <ProductCard key={pd.product_id} product={pd} />
                </div>
              ))}
        </Slider>
      </div>

      {/* <div className="w-[80%] mt-6">
        <p className="w-full self-start text-3xl font-normal tracking-wide mb-6">
          All Products:
        </p>
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products &&
            products.map((pd) => (
              <ProductCard key={pd.product_id} product={pd} />
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default Home;
