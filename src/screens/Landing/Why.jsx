import WhyCard from "../../components/WhyCard";
import { whyData } from "../../data";
import whyImage from "../../assets/images/why-image.png";
import { motion } from "framer-motion";

const Why = () => {
  return (
    <section className="w-full py-10 mt-10">
      <div className="mt-5 w-[95%] grid lg:grid-cols-2 mx-auto gap-5 px-10 py-10">
        <motion.div
          className="place-items-center pt-5 justify-center flex"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={whyImage}
            alt="feature-image"
            className="max-w-[90%] h-auto"
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
          <h2 className="text-customLiteGreen">Why Choose Farmeely</h2>
          <p className="text-sm mb-10">
            Lorem ipsum dolor sit amet consectetur. Amet commodo arcu non eu
            viverra erat faucibus. Integer sit non tristique sed.
          </p>
          <div className="space-y-3">
            {whyData.map((items, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <WhyCard {...items} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
