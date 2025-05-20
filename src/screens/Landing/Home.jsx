import Button from "../../components/Button";
import heroIcon from "../../assets/images/hero-icon.png";
import heroImage from "../../assets/images/hero-image.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className=" text-white ">
      <div className="mt-5 w-[95%] grid lg:grid-cols-2 border-2 mx-auto gap-5 bg-hero-bg  bg-cover bg-center bg-black rounded-3xl px-10 pt-16 lg:pt-5">
        <div className=" flex flex-col justify-center font-poppins  pb-5">
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-6  text-center lg:text-start gap-4">
            Group Buying Made Easy with
            <span className="flex items-center  gap-3 justify-center mt-2">
              <img
                src={heroIcon}
                alt="hero-icon"
                className="max-w-[25%] h-auto object-contain"
              />
              <span className="">Farmeely</span>
            </span>
          </h1>

          <p className="mb-5 text-sm lg:text-1xl text-center lg:text-start ">
            loremium, secure, and hassle-free group buying experience. loremium,
            secure, and hassle-free group buying experience.
          </p>
          <div className="text-center lg:text-start space-y-3 space-x-4 ">
            <Button title="Get Started" className="bg-customSkyblue" />
            <Button
              title="Watch How It Works"
              className="bg-white !text-customLiteGreen "
            />
          </div>
        </div>

        <div className="place-items-center pt-5 justify-center hidden lg:block">
          <motion.img
            src={heroImage}
            alt="hero-image"
            className="max-w-[67%] h-auto"
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              rotate: [0, 2, -2, 2, -2, 0],
            }}
            transition={{
              rotate: {
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              x: { duration: 1, type: "spring", stiffness: 50 },
              opacity: { duration: 1 },
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
