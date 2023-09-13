import { PiDress } from "react-icons/pi";
import { categoryMenu } from "../assets/data/categories";

const Categories = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {categoryMenu &&
        categoryMenu.map((category) => (
          <div className="w-full p-4 flex flex-col justify-center items-center rounded-lg bg-white drop-shadow-sm hover:drop-shadow-md cursor-default hover:scale-105 transition-all duration-150">
            <div className="w-full flex justify-center mb-2">
              <PiDress className="text-gray-600 text-4xl" />
            </div>
            <p className="text-sm">{category.category}</p>
          </div>
        ))}
    </div>
  );
};

export default Categories;
