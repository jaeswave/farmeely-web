import Card from '../../components/Cards'
import {featureData} from '../../data'
import featuresImage from "../../assets/images/featuresImage.png";
import { motion } from "framer-motion";


const Features = () => {
  return (
    <section className="w-full py-10 bg-gray-200">
      <div className="mt-5 w-[95%] grid lg:grid-cols-2 mx-auto gap-10 px-10 py-10 ">
        <div className=" flex flex-col justify-center font-poppins ">
          <h2 className="font-poppins\\ text-customLiteGreen ">
            THE PROBLEM WE ARE SOLVING
          </h2>
          <p className="text-sm mb-10">
            Lorem ipsum dolor sit amet consectetur. Amet commodo arcu non eu
            viverra erat faucibus. Integer sit non tristique sed.
          </p>
          <div className="space-y-5 md:space-y-10">
            {featureData.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <Card {...feature} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="place-items-center pt-5 justify-center ">
          <motion.img
            src={featuresImage}
            alt="feature-image"
            className="max-w-[67%] h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotate: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
