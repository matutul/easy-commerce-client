import footerImage from "../assets/image/footerImage/footer2.svg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-400 pt-11 mt-9 text-white">
      <div className="w-full bg-gray-700 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="sm:col-span-6 md:col-span-4 w-full">
            <p className="text-xl cursor-default text-gray-300">
              Top Categories
            </p>
            <div className="grid grid-cols-2">
              <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
                Beauty
              </p>
              <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
                Cloths
              </p>
              <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
                Foods
              </p>
              <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
                Health
              </p>
              <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
                Electronics
              </p>
              <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
                Automotive
              </p>
            </div>
          </div>
          <div className="sm:col-span-6 md:col-span-4 w-full">
            <p className="text-xl cursor-default text-gray-300">Helps</p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Delivery
            </p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Returns
            </p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Secure Payments
            </p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Track an order
            </p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Contact us
            </p>
          </div>
          <div className="sm:col-span-6 md:col-span-4 w-full">
            <p className="text-xl cursor-default text-gray-300">About us</p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Careers
            </p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Terms & Conditions of Sales
            </p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Privacy Policy
            </p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Responsibility
            </p>
            <p className="text-xl cursor-default text-gray-300 mt-4"> FEEDBACK</p>
            <p className="text-sm my-1 font-extralight cursor-default text-gray-300">
              Leave a feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
