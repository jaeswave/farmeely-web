import BenefitCard from "../../components/BenefitCard";
import { whyChooseData } from "../../data";
const Why = () => {
  return (
    <section className="mx-auto px-2 md:px-10 py-20">
      <h3 className="font-outfit text-[1rem] font-bold text-center">
        Why Choose Mahfuz{" "}
      </h3>
      <p className="font-urbanist text-center font-bold text-[2rem] md:text-[3rem] mt-2 w-full md:w-[60%] mx-auto leading-none md:leading-[3rem]">
        Simple. Ethical. Rewarding.{" "}
      </p>

      <div className="mt-12 grid md:grid-cols-3 px-4 gap-4 md:gap-0">
        {whyChooseData.map((why, index) => (
          <BenefitCard
            key={why.id}
            number={index + 1}
            icon={why.icon}
            title={why.title}
            description={why.description}
            className={`
                ${index === 1 ? "md:border-x-[1px] border-gray-100" : ""},
                ${index === 0 ? "md:rounded-l-lg" : ""} ,
                ${index === whyChooseData.length - 1 ? "md:rounded-r-lg" : ""}
              `}
          />
        ))}
      </div>
    </section>
  );
};

export default Why;
