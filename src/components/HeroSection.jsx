import { BsCartPlus } from "react-icons/bs";
import { heroSectionData } from "../assets/data/heroSectionData";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (index < heroSectionData.length - 1) {
        setIndex(index + 1);
      }
      else{
        setIndex(0);
      }
    }, 8000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [index]);

  // console.log(index);
  return (
    <div
      className={`w-full h-full ${heroSectionData[index].bgColor} p-4 md:p-10 rounded-xl flex justify-center items-center gap-6 transition-all duration-500`}
    >
      {/* Hero image on mobile screen*/}
      <div className="md:hidden float-right flex-1 justify-center md:justify-end items-end">
        <img
          src={heroSectionData[index].image}
          alt=""
          className="sm:-mr-6 w-full h-auto max-w-[300px] md:max-w-[400px] object-contain"
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-1 flex-col items-start justify-center">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-rose-500">
          {heroSectionData[index].title}
        </p>
        <p className="text-lg sm:text-xl md:text-2xl my-2 text-rose-400">
          {heroSectionData[index].subtitle}
        </p>
        <p className="text-sm my-2 text-gray-500">
          {heroSectionData[index].description}
        </p>
        <button className="bg-gradient-to-r from-rose-500 to-violet-500 py-2 px-5 mt-8 rounded-md text-white hover:from-violet-600 hover:to-rose-600 flex items-center gap-3 group">
          Order Now{" "}
          <BsCartPlus className="text-xl group-hover:translate-x-1 transition-all duration-200" />
        </button>
      </div>
      {/* Hero image */}
      <div className="w-full h-full object-cover md:w-[40%] hidden md:flex flex-2 float-right justify-center md:justify-end items-end">
        <img src={heroSectionData[index].image} alt="" className="h-full"/>
      </div>
    </div>
  );
};

export default HeroSection;
