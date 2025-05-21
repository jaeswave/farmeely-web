import Button from "../../components/Button";
import HowItWorksCard from "../../components/HowItWorksCard";
import { howItWorksData } from "../../data";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="relative w-full pb-20 md:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto min-h-[60vh] font-poppins text-center md:text-start">
        <div className="mx-auto flex flex-col pt-14 pb-32 md:pb-10 bg-customLiteGreen">
          <div className="w-[80%] mx-auto text-white">
            <h2 className="text-3xl">HOW FARMEELY WORKS</h2>
            <p className="text-sm mt-6">
              Lorem ipsum dolor sit amet consectetur. Amet convallis volutpat
              massa justo nibh interdum congue. Nunc nullam turpis venenatis
              Lorem ipsum dolor sit..
            </p>
          </div>
        </div>

        <div className="mx-auto flex flex-col pt-14 pb-32 md:pb-10 bg-[#F6F6F6]">
          <div className="w-[80%] mx-auto text-customLiteGreen">
            <p className="text-sm mb-6">
              Lorem ipsum dolor sit amet consectetur. Amet convallis volutpat
              massa justo nibh interdum congue. Nunc nullam turpis venenatis
              Lorem ipsum dolor sit..
            </p>
            <Button
              title="Start Buying Together"
              className="!bg-white border-2 border-customLiteGreen !text-customLiteGreen"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-0">
        <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 -mt-20 md:-mt-32">
          {howItWorksData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{
                duration: 0.6,
                delay: index * 0.2, 
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <HowItWorksCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default HowItWorks;