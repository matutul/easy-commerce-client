const ProductAtCart = ({ product }) => {
  return (
    <>
      {/* <div> */}
      <div className="w-full flex justify-between items-center my-4 py-2 px-3 rounded-full bg-fuchsia-700">
        <div className="w-[40%]">
          <p className="text-white text-lg">{product.product_name}</p>
        </div>
        <div className="flex gap-4">
          <button className="btn bg-white text-gray-400 px-2 rounded-lg">-</button>
          <button className="btn bg-white text-gray-400 px-2 rounded-lg">+</button>
        </div>
        <div>
          <p className="text-white text-lg mr-4">{product.price}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProductAtCart;
