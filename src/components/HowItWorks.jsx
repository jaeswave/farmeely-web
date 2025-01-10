import { howItWorksData } from "../data";

const HowItWorks = () => {
  return (
    <section className="py-10">
      <div className="mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 md:gap- place-items-center">
          <div className="max-w-[70%]">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-customBlack leading-relaxed text-center md:text-start ">  
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker.
            </p>
          </div>

          <div className="space-y-6 w-[70%]">
            {howItWorksData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <h3 className="text-xl font-semibold mb-1">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
