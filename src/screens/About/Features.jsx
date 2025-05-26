import Card from "../../components/Cards";
import { aboutFeatureData } from "../../data";
import wmfd from "../../assets/images/wmfd.png";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="w-full py-10 bg-gray-200">
      <div className="mt-5 w-[95%] grid lg:grid-cols-2 mx-auto gap-10 px-10 py-10">
        <motion.div
          className="place-items-center pt-5 justify-center flex"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={wmfd}
            alt="feature-image"
            className="max-w-[67%] h-auto"
            whileHover={{ scale: 1.02, rotate: 1 }}
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center font-poppins"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-customLiteGreen">
            What Makes Farmeely Different
          </h2>
          <p className="text-sm mb-10">
            Lorem ipsum dolor sit amet consectetur. Amet commodo arcu non eu
            viverra erat faucibus. Integer sit non tristique sed.
          </p>
          <div className="space-y-5 md:space-y-10">
            {aboutFeatureData.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <Card {...feature} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
