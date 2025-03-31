import Hero from "../../components/Hero";
import { productData } from "../../data";
const ProductHero = () => {
  return <Hero {...productData} />;
};

export default ProductHero;
