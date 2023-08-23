// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="w-full p-3 rounded-md shadow-md hover:scale-105 transition-all duration-300">
      <img
        src={product.product_photo}
        alt=""
        className="w-full h-[120px] rounded-md bg-slate-500 "
      />
      <p>{product.product_name}</p>
      <div className="flex justify-between">
        <p>{product.price}</p>
        <p>{product.rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
