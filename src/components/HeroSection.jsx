import Button from "./Button";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";
const HeroSection = () => {
  return (
    <section id="home" className="bg-customGreen bg-opacity-[8%] py-16">
      <div className="mx-auto px-10 py-10 md:px-10 md:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-center gap-10 ">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
            <h1 className="text-[1.7rem] lg:text-[3rem] xl:text-[3.5rem] font-bold text-customBlack leading-[120%] w-full mt-10">
              Stay Connected to the Quran, Every Day.
            </h1>
            <p className="text-1xl lg:text-2xl text-customBlack mt-5">
              Receive Quranic verses, translations, and Tafsir directly in your
              inbox at your preferred time
            </p>

            <div className="text-center md:text-start">
              <Link to="/signup">
                <Button title="Get Started" className="mt-12 w-40" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center bg-customGreen bg-opacity-[25%] rounded-lg p-4 transform skew-x-3 mt-4">
            <img
              className="w-full h-[40vh] lg:h-auto rounded-lg object-cover"
              src={hero}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
