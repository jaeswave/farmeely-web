import Button from "../../components/Button";
import mobile from "../../assets/images/mobile.png";

const Download = () => {
  return (
    <section className="mt-10 py-10 h-[90vh] w-full flex items-center justify-center font-poppins">
      <div className="w-full bg-join-bg bg-cover bg-center min-h-[70vh] grid md:grid-cols-2 gap-5 md:gap-2 px-10 ">
        <div className="flex item-center justify-center">
          <img src={mobile} alt="mobile" className="w-[60%] h-auto " />
        </div>
        <div className="flex flex-col justify-center text-center md:text-start text-white">
          <h5 className=" font-bold text-[1.5rem] md:text-[2.6rem]">
            Take Farmeely With You
          </h5>
          <p className="mt-2 mb-2 text-[1rem] font-semibold">
            Track groups, get notifications, and manage orders on the go.
          </p>
          <div className="text-center lg:text-start space-y-3 space-x-4 mb-5">
            <Button
              title="Download from Play Store"
              className="bg-customSkyblue"
            />
            <Button
              title="Watch How It Works"
              className="bg-white !text-customLiteGreen "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
