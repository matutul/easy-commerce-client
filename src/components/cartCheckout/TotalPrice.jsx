import { useEffect, useState } from "react";
import { useProducts } from "../../context/product/Poduct";
import DeliveryAddress from "./DeliveryAddress";

const TotalPrice = ({ handleCheckoutPage }) => {
  const [priceInfo, setPriceInfo] = useState({
    subTotal: 0,
    vat: 0,
    shipmentCost: 0,
    total: 0,
  });
  const {
    state: { cart },
  } = useProducts();
  useEffect(() => {
    let subTotal = 0;
    let vat = 0;
    cart.map((order) => {
      subTotal += order.product.price * order.order_quantity;
    });
    vat = (subTotal * 5) / 100;
    setPriceInfo({
      ...priceInfo,
      subTotal,
      vat,
      total: subTotal + priceInfo.shipmentCost + vat,
    });
  }, [cart]);
  return (
    <div className="w-full rounded-2xl bg-gray-200 shadow-lg flex flex-col justify-center items-center pb-5">
      <p className="text-2xl text-center p-5">
        Calculated price for added product
      </p>
      <div className="w-full grid grid-cols-1 divide-y-4 divide-white">
        <div className="w-full p-5">
          <div className="w-full flex justify-between items-center my-2">
            <p>Subtotal</p>
            <p>{priceInfo.subTotal.toFixed(2)}</p>
          </div>
          <div className="w-full flex justify-between items-center my-2">
            <p>VAT</p>
            <p>{priceInfo.vat.toFixed(2)}</p>
          </div>
          <div className="w-full flex justify-between items-center my-2">
            <p>Shipment cost</p>
            <p>{priceInfo.shipmentCost.toFixed(2)}</p>
          </div>
        </div>
        <div className="w-full p-5 flex justify-between items-center">
          <p>Total</p>
          <p>{priceInfo.total.toFixed(2)}</p>
        </div>
      </div>
      <div className="w-full flex justify-start ml-10">
        <button
        className="bg-amber-400 rounded-md p-1 px-5 mt-4 font-medium text-gray-700 outline-none hover:drop-shadow-lg "
          onClick={() =>
            handleCheckoutPage(
              <DeliveryAddress handleCheckoutPage={handleCheckoutPage} />
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TotalPrice;
