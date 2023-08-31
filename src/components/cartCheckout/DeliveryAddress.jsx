import { useForm } from "react-hook-form";

const DeliveryAddress = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <form
        className="w-full bg-gray-600 p-4 flex flex-col gap-1 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="m-0 text-gray-200" htmlFor="firstName">
            First name
          </label>
          <input
            className="border-2 border-transparent bg-gray-500 rounded-md p-1 px-2 w-full text-gray-200 outline-none focus:drop-shadow-md focus:border-b-2 focus:border-b-gray-400"
            label="First name"
            type="text"
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
            {...register("zip", { required: true })}
          />
        </div>
        <div>
          <input
            className="bg-amber-400 rounded-md p-1 px-2 mt-4 font-medium text-gray-700 outline-none focus:drop-shadow-md   focus:border-2 focus:border-b-gray-100"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default DeliveryAddress;
