import { BsCartPlus } from "react-icons/bs";

const HeroSection = ({hero}) => {
  return (
    <div className={`w-full h-full ${hero.bgColor} p-4 md:p-10 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-6`}>
      {/* Hero image on mobile screen*/}
      <div className="md:hidden float-right flex justify-center md:justify-end items-end">
        <img
          src={hero.image}
          alt=""
          className="sm:-mr-6 w-full h-auto max-w-[300px] md:max-w-[400px] object-contain"
        />
      </div>
      <div className="w-full h-auto flex flex-col items-start justify-center mr-12">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-rose-500">
          {hero.title}
        </p>
        <p className="text-lg sm:text-xl md:text-2xl my-2 text-rose-400">
          {hero.subtitle}
        </p>
        <p className="text-sm my-2 text-gray-500">
          {hero.description}
        </p>
        <button className="bg-gradient-to-r from-rose-500 to-violet-500 py-2 px-5 mt-8 rounded-md text-white hover:from-violet-600 hover:to-rose-600 flex items-center gap-3 group">
          Order Now{" "}
          <BsCartPlus className="text-xl group-hover:translate-x-1 transition-all duration-200" />
        </button>
      </div>
      {/* Hero image */}
      <div className="hidden md:block float-right flex justify-center md:justify-end items-end">
        <img
          src={hero.image}
          alt=""
          className="sm:-mr-6 w-full h-auto max-w-[300px] md:max-w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
