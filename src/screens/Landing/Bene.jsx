import bene from "../../assets/images/bene.png";
import checkmark from "../../assets/icons/checkmark.png";
import customerService from "../../assets/icons/customerService.png";
import voltage from "../../assets/icons/voltage.png";

const Bene = () => {
  return (
    <section className=" min-h-screen py-20 mb-20">
      <div className="mx-auto w-full bg-[#002D62] text-white px-3 md:px-0">
        <div className="relative w-full">
          <div className="w-[80%] mx-auto h-[70vh] pt-16 ">
            <h3 className="items-center md:items-start flex justify-center md:justify-start font-outfit text-[1rem]">
              B E N E F I T S
            </h3>

            <p className=" items-center md:items-start font-urbanist text-[3rem] mt-2 leading-[2.5rem] w-full md:w-[50%]">
              Empowering You with <b>Ethical, Secure, and Seamless </b>{" "}
              Financial Freedom.{" "}
            </p>
            <img
              src={bene}
              alt="images"
              className="hidden xl:block w-[50%] absolute top-[-26%] right-[0%]"
            />
          </div>
          <div className="grid place-self-center md:grid-cols-3 gap-6 lg:absolute w-[80%] top-[70%] left-[10%]">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-start">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <img src={checkmark} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Ethical & Interest-Free Banking
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-start">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <img src={voltage} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Competitive Profit Returns (Mudaraba)
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-start">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <img src={customerService} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Human Support
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bene;
