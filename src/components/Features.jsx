import { featuresSectionData } from "../data";
import Cards from "./Cards";
const Features = () => {
  return (
    <section className="py-16 px-10 place-items-center" id="features">
      <div className="mx-auto px-7 py-5">
        <h2 className="mb-11 text-3xl font-bold text-customBlack">Features</h2>
        <div className="grid lg:grid-cols-3 gap-5 md:gap-3 ">
          <Cards data={featuresSectionData} />
        </div>
      </div>
    </section>
  );
};

export default Features;
