import PCard from "../../components/Pcard";
import {prducts} from "../../data";

const ProductsSection = () => {
  return (
    <section className="mx-auto px-4 md:px-10 mt-20">
      <h3 className="font-outfit text-[2.5rem] font-bold text-center">
        Ethical banking made simple
      </h3>
      <p className="font-urbanist text-center text-[1.2rem] mt-2 w-full md:w-[60%] mx-auto">
        At Mahfuz, we believe doing the right thing should be effortless. That’s
        why we make ethical banking easy for everyone with transparent, interest
        free services, smart digital tools, and a customer first approach.{" "}
      </p>
      <div className="mt-14 space-y-20">
        {prducts.map((product, index) => (
          <PCard key={index} {...product} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
