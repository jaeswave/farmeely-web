import React from "react";
import Button from "./Button";

const Hero = (props) => {
  const { title, description, buttonText, backGround } = props;
  return (
    <div className="p-3">
      <section
        className={`${backGround} rounded-lg relative bg-cover h-[100vh] md:min-h-[130vh] w-full pt-4 px-4 md:px-0`}
      >
        <div className="text-white place-self-center md:place-self-start text-center md:text-start mx-auto md:w-1/2 mt-[30%] md:mt-[18%] md:ml-[7%]">
          <h1 className="font-urbanist text-[3rem] md:text-[4.5rem] font-semibold leading-none">
            {title}
          </h1>
          <p className="text-1xl md:text-[1.19rem] mt-10 md:mt-4 font-outfit md:w-[75%]">
            {description}
          </p>
          <Button
            title={buttonText}
            className="!bg-customSkyblue mt-8 md:mt-4"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
