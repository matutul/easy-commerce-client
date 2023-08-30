import footerImage from "../assets/image/footerImage/footer2.svg"

const Footer = () => {
  return (
    <div className="w-full bg-gray-400 pt-11 mt-9 text-white">
      <div className="w-full bg-gray-700 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="sm:col-span-6 md:col-span-4 w-full">
            First column of footer
          </div>
          <div className="sm:col-span-6 md:col-span-4 w-full">
            Second column of footer
          </div>
          <div className="sm:col-span-6 md:col-span-4 w-full">
            Third column of footer
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer