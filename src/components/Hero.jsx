import { motion } from "framer-motion";
import Button from "../components/Button";
import { div } from "framer-motion/client";
const Hero = (props) => {
  const {
    title,
    highlight,
    description,
    buttonText,
    showImages = false,
    image1,
    image2,
    backgroundClass,
  } = props;

  return (
    <div
      className={`w-full mx-h-[70vh] p-6 grid place-items-center md:grid-cols-2 items-center ${backgroundClass}`}
    >
      <div className="z-10 w-full md:w-[90%] text-white text-center md:text-start md:ml-10">
        <h1 className="font-urbanist place-self-center text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-loose w-fit">
          {title}{" "}
          <span className="text-customSkyblue italic">{highlight}</span> Way!
        </h1>
        <p className="md:mt-6 md:mb-6 text-base md:text-lg font-outfit">
          {description}
        </p>
        <Button title={buttonText} className="bg-customSkyblue" />
      </div>
      {showImages && (
        <motion.div
          className="mx-w-auto min-h-auto translate-y-4"
          animate={{ opacity: [0.8, 1.5, 2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={image1}
            alt="Hero Image 1"
            className="w-full h-full object_fit object-cover hidden md:block"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
