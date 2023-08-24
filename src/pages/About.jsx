import { useProducts } from "../context/product/Poduct";

const About = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div className="w-full min-h-screen bg-stone-50">About</div>
  )
}

export default About