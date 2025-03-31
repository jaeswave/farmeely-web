import React from "react";
import Button from "../../components/Button";
import BenefitCard from "../../components/BenefitCard";
import { benefits } from "../../data";
import benefitsImg from "../../assets/images/benefitsImg.png";

const Benefits = () => {
  return (
    <section className="bg-[#F7F7F7] min-h-screen py-20">
      <div className="mx-auto w-full px-3 md:px-0 md:w-[85%]">
        <h3 className="font-outfit text-[1rem] font-bold">BENEFITS</h3>
        <div className="md:grid md:grid-cols-[91%_8%] w-full">
          <p className="font-urbanist  font-bold text-[2rem] mt-2 leading-[2.5rem] w-full md:w-[60%]">
            Empowering You with Ethical, Secure, and Seamless Financial Freedom.
          </p>
          <Button title="Stay Updated" className=" mt-6 md:mt-10 h-[2.5rem]" />
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4 md:gap-0">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              number={index + 1}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              // className={index === 1 ? "}
              className={`
                ${index === 1 ? "md:border-x-[1px] border-gray-100" : ""}
                ${index === 0 ? "md:rounded-l-lg" : ""} 
                ${index === benefits.length - 1 ? "md:rounded-r-lg" : ""}
              `}
            />
          ))}
        </div>

        <div className="mt-10 w-full ">
          <img
            src={benefitsImg}
            alt="Smiling person"
            className="h-auto w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
