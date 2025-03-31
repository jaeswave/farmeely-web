import ProductCard from "../../components/ProductCard";
import { products } from "../../data";

const ProductsSection = () => {
  return (
    <section className="mx-auto px-2 md:px-10 mt-20">
      <h3 className="font-outfit text-[1rem] font-bold text-center">
        OUR PRODUCTS
      </h3>
      <p className="font-urbanist text-center font-bold text-[2rem] md:text-[3rem] mt-2 w-full md:w-[60%] mx-auto leading-none md:leading-[3rem]">
        Innovative Products Designed for Ethical, Interest-Free Banking.
      </p>
      <div className="mt-14 w-[85%] place-self-center space-y-[5rem] md:space-y-10">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
