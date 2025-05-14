import section2 from "../../assets/images/section2.png";

import Button from "../../components/Button";

const SectionTwo = () => {
  return (
    <div className="w-full min-h-screen py-10 px-4 flex justify-center mb-10">
      <div className="w-[90%] place-self-center grid lg:grid-cols-2 gap-10">
        <div className="place-items-center">
          <img
            src={section2}
            alt="images"
            className="w-[90%] h-auto object-cover"
          />
        </div>

        <div className="w-full py-20 text-center lg:text-start">
          <h2 className="text-2xl md:text-4xl font-bold font-outfit text-customBlue mb-5">
            We are a Digital <br />
            Non-interest <br />
            Microfinance Bank
          </h2>
          <p className=" text-customBlue font-urbanist w-full lg:max-w-[70%] mb-10">
            We set to offer a wide range of financial services to users. It has
            come to revolutionize the way people make payments and manage their
            finances in the country. It will also offer a range of innovative
            products and services that will be designed to meet the needs of
            modern consumers.
          </p>
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
