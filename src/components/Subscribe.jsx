import subscribe from "../assets/images/subscribe.png";
import Button from "./Button";

const Subscribe = () => {
  return (
    <section className="py-32 px-15">
      <div className="mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex justify-center items-center object-contain">
            <img className="w-[80%] h-auto" src={subscribe} alt="" />
          </div>
          <div className=" flex flex-col  justify-center py-4">
            <h2 className="text-center md:text-start text-3xl md:text-4xl font-bold text-customBlack">
              Subscribe to our Newsletter
            </h2>
            <p className="text-center md:text-start text-1xl md:text-2xl text-customBlack mt-5">
              orem Ipsums simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived no
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-3">
              <input
                className="px-4 py-2 w-full md:w-[55%] rounded-l-lg border border-gray-50"
                type="email"
                placeholder="Enter your email"
              />
              <Button title="Subscribe Now" className="w-full md:w-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
