import { useProducts } from "../context/product/Poduct";

const About = () => {
  const products = useProducts().products;
  console.log("From about page ==========" +products);
  return (
    <div className="w-full min-h-screen bg-stone-50">About</div>
  )
}

export default About