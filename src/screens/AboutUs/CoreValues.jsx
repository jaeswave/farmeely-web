import Card from "../../components/Cards";
import { ourValuesData } from "../../data";

const CoreValues = () => {
  return (
    <section>
      <div className="py-14 mx-auto ">
        <h2 className="font-outfit text-[1rem] font-bold text-center">
          OUR CORE VALUES
        </h2>
        <p className="font-urbanist text-center font-bold text-2xl md:text-[3rem] mt-2 w-full md:w-[60%] mx-auto leading-[3rem]">
          Guided by Principles, Driven by Purpose{" "}
        </p>

        <div className="mt-10 px-4 md:px-20">
          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-7">
            {ourValuesData.map((value, index) => (
              <Card
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>

          <div className="md:hidden px-3 overflow-x-auto no-scrollbar flex gap-3 mx-auto">
            {ourValuesData.map((value) => (
              <div className="min-w-full" key={value.id}>
                <Card
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
