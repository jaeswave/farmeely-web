import Card from "../../components/Cards";
import { featuresCardData } from "../../data";

const Features = () => {
  return (
    <section>
      <div className="py-14 mx-auto ">
        <h2 className="font-outfit text-[1rem] font-bold text-center">
          FEATURES
        </h2>
        <p className="font-urbanist text-center font-bold text-[3rem] mt-2 w-full md:w-[60%] mx-auto leading-[3rem]">
          Why Choose Mahfuz for Effortless, Ethical Payments?
        </p>

        <div className="mt-10 px-4 md:px-20">
          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-7">
            {featuresCardData.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="md:hidden px-3 overflow-x-auto no-scrollbar flex gap-3 mx-auto">
            {featuresCardData.map((feature) => (
              <div className="min-w-full " key={feature.id}>
                <Card
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
