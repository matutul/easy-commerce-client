import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product/Poduct";

const WishList = () => {
  const {
    state: { wishList },
  } = useProducts();
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-stone-50">
      {/* <div className="w-full h-[500px] bg-cyan-900"></div> */}

      <div className="w-[80%] mt-6">
        <p className="text-4xl font-semibold text-gray-700 my-2">
          Favorite Products:
        </p>
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishList &&
            wishList.map((pd) => (
              <ProductCard key={pd.product_id} product={pd} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
