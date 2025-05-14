import elipse from "../../assets/images/ellipse.png";
import Card from "../../components/Cards";
import { featuresCardData } from "../../data";

const Features = () => {
  return (
    <section>
      <section className="py-14 mx-auto">
        <div className="mx-auto px-4 md:px-20 grid xl:grid-cols-[1fr,2fr] gap-10 lg:gap-20">
          <div>
            <h2 className="font-outfit text-[1rem] font-bold text-center lg:text-start">
              F E A T U R E S
            </h2>
            <p className="font-urbanist text-center lg:text-start  text-[3rem]">
              Why Mahfuz?
            </p>
            <p className="font-outfit text-center lg:text-start text-[2.7rem] leading-none mb-8 font-bold ">
              Effortless, Ethical & Seamless Banking Solution
            </p>
            <p className="font-outfit text-center lg:text-start text-[1rem] mb-5">
              Mahfuz is a complete digital, Non-interest microfinance bank built
              for the unbanked, underbanked, and Gen Z. At Mahfuz, we offer
              ethical, interest free but profit based banking services designed
              for modern day digital lifestyle. From effortless account opening
              to ethical savings and financing, user friendly mobile
              application, seamless transactions and smart investments.
            </p>
            <p>
              Mahfuz is a complete digital, Non-interest microfinance bank built
              for the unbanked, underbanked, and Gen Z. At Mahfuz, we offer
              ethical, interest free but profit based banking services designed
              for modern day digital lifestyle. From effortless account opening
              to ethical savings and financing, user friendly mobile
              application, seamless transactions and smart investments.
            </p>
          </div>

          <div className="px-10 relative">
            <img
              src={elipse}
              alt="ellipse"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1 pointer-events-none"
              
            />
            <div className="grid md:grid-rows-2 md:grid-cols-2 gap-5">
              {featuresCardData.map((feature, index) => (
                <Card
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;




