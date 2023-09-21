import { PiDress } from "react-icons/pi";
import { categoryMenu } from "../assets/data/categories";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  return (
    <div
      className={`relative w-full h-auto px-6 py-2 bg-rose-300 rounded-full overflow-hidden shadow-md`}
      // onMouseDown={(e) => {
      //   setIsDragging(true);
      //   setStartX(e.pageX - e.currentTarget.offsetLeft);
      //   setScrollLeft(e.currentTarget.scrollLeft);
      // }}
      // onMouseLeave={() => setIsDragging(false)}
      // onMouseUp={() => setIsDragging(false)}
      // onMouseMove={(e) => {
      //   if (!isDragging) return;
      //   e.preventDefault();
      //   const x = e.pageX - e.currentTarget.offsetLeft;
      //   const walk = (x - startX) * 2;
      //   e.currentTarget.scrollLeft = scrollLeft - walk;
      // }}
    >
      <div className="absolute left-0 top-0 text-xl text-rose-300 flex justify-center items-center bg-rose-500 z-10 w-[20px] h-full">
        <IoIosArrowBack />
      </div>
      <div className="absolute right-0 top-0 text-xl text-rose-300 flex justify-center items-center bg-rose-500 z-10 w-[20px] h-full">
        <IoIosArrowForward />
      </div>
      {/* {categoryMenu &&
        categoryMenu.map((category) => (
          <div className="w-full p-4 flex flex-col justify-center items-center rounded-lg bg-white drop-shadow-sm hover:drop-shadow-md cursor-default hover:scale-105 transition-all duration-150">
            <div className="w-full flex justify-center mb-2">
              <PiDress className="text-gray-600 text-4xl" />
            </div>
            <p className="text-sm">{category.category}</p>
          </div>
        ))} */}
      {/* <div> */}
      <div
        className={`w-full flex gap-2 overflow-x-hidden overflow-hidden ${isDragging ? "cursor-grabbing" : ""}
      `}
        onMouseDown={(e) => {
          setIsDragging(true);
          setStartX(e.pageX - e.currentTarget.offsetLeft);
          setScrollLeft(e.currentTarget.scrollLeft);
        }}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX - e.currentTarget.offsetLeft;
          const walk = (x - startX) * 2;
          e.currentTarget.scrollLeft = scrollLeft - walk;
        }}
      >
        {categoryMenu &&
          categoryMenu.map((category) => (
            <div
              className={`w-auto px-2 py-1 flex flex-nowrap justify-center items-center rounded-full bg-white drop-shadow-sm hover:drop-shadow-md cursor-default hover:scale-105 transition-all duration-100 ${
                isDragging ? "cursor-grabbing" : ""
              }`}
            >
              <div className="w-full flex justify-center items-center">
                <PiDress className="text-gray-600 text-2xl" />
              </div>
              <p className="whitespace-nowrap">{category.category}</p>
            </div>
          ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Categories;
