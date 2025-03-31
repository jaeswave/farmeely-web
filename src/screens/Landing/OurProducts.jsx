import React, { useState } from "react";
import ourProducts from "../../assets/images/ourProducts.png";
import { ourProductsData } from "../../data";

const OurProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="mx-auto px-2 md:px-10 mt-20">
      <h3 className="font-outfit text-[1rem] font-bold text-center">
        OUR PRODUCTS
      </h3>
      <p className="font-urbanist text-center font-bold text-[3rem] mt-2 w-full md:w-[60%] mx-auto leading-[3rem]">
        Innovative Products Designed for Ethical, Interest-Free Banking.
      </p>
      <div className="grid md:grid-cols-3 gap-10 md:gap-7 mt-10 py-10">
        <ul className="text-center text-xs md:text-[1rem] mx-auto md:pt-10 flex md:flex-col gap-5 md:gap-7 cursor-pointer">
          {ourProductsData.map((data, index) => (
            <li
              key={index}
              className={`${
                activeIndex === index
                  ? "underline underline-offset-8 decoration-[#322F69] font-bold  "
                  : "text-gray-700"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {data.title}
            </li>
          ))}
        </ul>
        <div className="order-3 md:order-none object-contain">
          <img
            src={ourProducts}
            alt="our products"
            className=" rounded-lg h-auto w-[85%] mx-auto"
          />
        </div>
        <div className="place-self-center text-center">
          <p className="text-xs md:text-[1rem]">
            {ourProductsData[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
