import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product/Poduct";
import heroImage from "../assets/image/heroImage/heroImage2.png";
import { BsCartPlus } from "react-icons/bs";
import { PiDress } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { categoryMenu } from "../assets/data/categories";
import Categories from "../components/Categories";
import Slider from "react-slick";
import HeroSection from "../components/HeroSection";
import { heroSectionData } from "../assets/data/heroSectionData";

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
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const settingsHero = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="w-full flex flex-col items-center bg-stone-100 mt-[60px] pb-20">
      {/* Hero section */}
      <div className="w-full p-2 md:p-6 h-fit flex justify-center gap-6">
        {/* Side category menu bar */}
        <div className="hidden lg:block relative w-[280px] py-2 bg-white drop-shadow-lg rounded-xl z-20">
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
        <div className="relative w-full lg:w-[calc(100%-280px)] h-full">
          {/* Hero text section */}
          <Slider {...settingsHero} className="rounded-2xl h-full">
            {heroSectionData &&
              heroSectionData.map((pd) => (
                <HeroSection className="w-full h-full border-2 border-red-300" key={pd.id} hero={pd} />
              ))}
          </Slider>
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
      <div className="w-full p-2 md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Beauty Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "beauty")
              .map((pd) => (
                <div className="h-full p-2 py-6 rounded-lg">
                  <ProductCard key={pd.product_id} product={pd} />
                </div>
              ))}
        </Slider>
      </div>

      {/* clothing products slider */}
      <div className="w-full p-2 md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Clothing Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "clothing")
              .map((pd) => (
                <div className="h-full p-2 py-6 rounded-lg">
                  <ProductCard key={pd.product_id} product={pd} />
                </div>
              ))}
        </Slider>
      </div>

      {/* food products slider */}
      <div className="w-full p-2 md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Food Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "food")
              .map((pd) => (
                <div className="h-full p-2 py-6 rounded-lg">
                  <ProductCard key={pd.product_id} product={pd} />
                </div>
              ))}
        </Slider>
      </div>
      {/* Health products slider */}
      <div className="w-full p-2 md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Health Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "health")
              .map((pd) => (
                <div className="h-full p-2 py-6 rounded-lg">
                  <ProductCard key={pd.product_id} product={pd} />
                </div>
              ))}
        </Slider>
      </div>
      {/* Automotive products slider */}
      <div className="w-full p-2 md:w-[90%] lg:w-[80%]">
        <p className="w-full self-start text-3xl font-normal tracking-wide">
          Automotive Products
        </p>
        <Slider {...settings} className="rounded-2xl">
          {products &&
            products
              .filter((pd) => pd.category === "automotive")
              .map((pd) => (
                <div className="h-full p-2 py-6 rounded-lg">
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
