import femaleImg from "../../assets/images/femaleImg.png";
import maleImg from "../../assets/images/maleImg.png";
import scaleIcon from "../../assets/images/scaleIcon.png";
import halalIcon from "../../assets/images/halalIcon.png";
import Button from "../../components/Button";

const SectionTwo = () => {
  return (
    <div className="w-full min-h-screen py-10 px-4 flex justify-center">
      <div className="w-[90%] place-self-center border-2 grid md:grid-cols-2 gap-10">
        <div className="relative w-[50%] border-2 min-h-[80vh] ">
          <img
            src={femaleImg}
            alt="female"
            className="w-[60%] h-auto rounded-full object-cover z-10"
          />

          <img
            src={maleImg}
            alt="male"
            className="mx-w-[60%] h-auto rounded-full object-cover absolute bottom-0 right-[50px] top-[300px] z-10"
          />

          <img
            src={scaleIcon}
            alt="icon"
            className="absolute right-0 top-1/4 w-[30%] h-auto rounded-full bg-white p-2 shadow-md"
          />

          <img
            src={halalIcon}
            alt="halal"
            className="absolute left-10 bottom-[30px] w-12 h-12 rounded-full bg-white p-2 shadow-md"
          />
        </div>

        <div className="w-[50%] border- text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-customBlue leading-snug">
            We are a Digital <br />
            Non-interest <br />
            Microfinance Bank
          </h2>
          <p className="mt-4 text-customBlue max-w-md">
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
