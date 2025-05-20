import Button from "../../components/Button";
import HowItWorksCard from "../../components/HowItWorksCard";
import { howItWorksData } from "../../data";
import { motion } from "framer-motion";
const HowItWorks = () => {
  return (
    <section className="relative w-full">
      <div className=" grid md:grid-cols-2 mx-auto h-[60vh] font-poppins text-center md:text-start ">
        <div className=" mx-auto flex flex-col   pt-14 pb-10 bg-customLiteGreen ">
          <div className=" w-[80%] mx-auto text-white">
            <h2 className="text-3xl">HOW FARMEELY WORKS</h2>
            <p className="text-sm mt-6">
              Lorem ipsum dolor sit amet consectetur. Amet convallis volutpat
              massa justo nibh interdum congue. Nunc nullam turpis venenatis
              Lorem ipsum dolor sit..
            </p>
          </div>
        </div>
        <div className=" mx-auto flex flex-col  pt-14 pb-10 bg-[#F6F6F6] ">
          <div className=" w-[80%] mx-auto text-customLiteGreen">
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
      <div className="">
        <div className="absolute w-[80%] left-1/2 -translate-x-1/2 top-1/2 grid md:grid-cols-3 gap-10">
          {howItWorksData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
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
