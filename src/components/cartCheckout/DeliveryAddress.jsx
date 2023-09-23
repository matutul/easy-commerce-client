import { useForm } from "react-hook-form";
import TotalPrice from "./TotalPrice";
import PaymentOption from "./PaymentOption";
import { useProducts } from "../../context/product/Poduct";
import { ActionType } from "../../state/productState/ActionType";
import { useEffect } from "react";

const DeliveryAddress = ({ handleCheckoutPage }) => {
  const { register, handleSubmit } = useForm();
  const {
    state: { payInfo },
    dispatch,
  } = useProducts();
useEffect(()=>{
  const shipmentAddress = payInfo;
}, [])
  const onSubmit = (data) => {
    dispatch({ type: ActionType.ADD_SHIPMENT_ADDRESS, payload: data });
    handleCheckoutPage(
      <PaymentOption handleCheckoutPage={handleCheckoutPage} />
    );
  };

  return (
    <div className="w-full">
      <form
        className="w-full bg-gray-600 p-4 flex flex-col gap-1 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-2xl tracking-wide text-white self-center">
          Shipping Address
        </p>
        <div>
          <label className="m-0 text-gray-200" htmlFor="firstName">
            First name
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="First name"
            type="text"
            defaultValue={payInfo?.firstName}
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        <div>
          <label className="m-0 text-gray-200" htmlFor="lastName">
            Last name
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="Last name"
            type="text"
            defaultValue={payInfo?.lastName}
            {...register("lastName", { required: true })}
          />
        </div>
        <div>
          <label className="m-0 text-gray-200" htmlFor="lastName">
            Email
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="Email"
            type="email"
            defaultValue={payInfo?.email}
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label className="m-0 text-gray-200" htmlFor="address">
            Address
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="address"
            type="text"
            defaultValue={payInfo?.address}
            {...register("address", { required: true })}
          />
        </div>
        <div>
          <label className="m-0 text-gray-200" htmlFor="address2">
            Address 2 <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="address"
            type="text"
            defaultValue={payInfo?.address2}
            {...register("address2", { required: false })}
          />
        </div>
        <div>
          <label className="m-0 text-gray-200" htmlFor="country">
            Country
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="country"
            type="text"
            defaultValue={payInfo?.country}
            {...register("country", { required: true })}
          />
        </div>
        <div>
          <label className="m-0 text-gray-200" htmlFor="state">
            State
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="state"
            type="text"
            defaultValue={payInfo?.state}
            {...register("state", { required: true })}
          />
        </div>
        <div>
          <label className="m-0 text-gray-200" htmlFor="city">
            City
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="city"
            type="text"
            defaultValue={payInfo?.city}
            {...register("city", { required: true })}
          />
        </div>
        <div>
          <label className="m-0 text-gray-200" htmlFor="zip">
            Zip
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="zip"
            type="text"
            defaultValue={payInfo?.zip}
            {...register("zip", { required: true })}
          />
        </div>
        {/* <div>
          <input
            className="bg-amber-400 rounded-md p-1 px-2 mt-4 font-medium text-gray-700 outline-none focus:drop-shadow-md   focus:border-2 focus:border-b-gray-100"
            type="submit"
          />
        </div> */}
        <div className="w-full flex justify-center">
          <button
            className="bg-gray-800 rounded-l-md p-1 px-2 mt-4 font-medium text-gray-200 outline-none hover:drop-shadow-lg"
            onClick={() =>
              handleCheckoutPage(
                <TotalPrice handleCheckoutPage={handleCheckoutPage} />
              )
            }
          >
            Go back
          </button>
          <button
            className="bg-amber-400 rounded-r-md p-1 px-5 mt-4 font-medium text-gray-700 outline-none hover:drop-shadow-lg"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryAddress;
