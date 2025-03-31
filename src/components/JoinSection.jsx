import React from "react";
import Button from "./Button";

const JoinSection = () => {
  return (
    <section className="py-10 h-[90vh] flex items-center justify-center"> 
      <div className=" bg-join-bg bg-cover bg-center rounded-lg w-[85%] mx-auto h-[65vh] px-5 py-10">
        <div className="flex flex-col justify-center h-full">
          <h5 className="text-white font-urbanist text-center font-bold text-[2rem] md:text-[2.6rem] w-full md:w-[50%] mx-auto leading-none md:leading-[3rem]">
            Join Thousands Already Banking the Mahfuz Way.
          </h5>
          <p className="text-white font-outfit mt-2 mb-2 mx-auto text-[1rem] font-semibold text-center">
            Open your wallet today and experience seamless, ethical digital
            finance.
          </p>
          <Button title="Stay Updated" className="bg-customSkyblue" />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
