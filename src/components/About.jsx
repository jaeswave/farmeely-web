import Button from "./Button";
import about from "../assets/images/about.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto px-10 ">
        <div className="grid lg:grid-cols-2 gap-8 px-0 md:px-4">
          <div className="flex justify-center items-center object-contain">
            <img className="w-[80%] h-auto" src={about} alt="" />
          </div>
          <div className=" flex flex-col  justify-center mt-10 text-center lg:text-start">
            <h2 className=" text-2xl lg:text-[3rem] font-bold text-customBlack">
              About MailmeQuran.
            </h2>
            <p className="text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] text-customBlack mt-5">
              MailmeQuran is an app designed to keep you connected to the Quran
              effortlessly. It allows you to choose your preferred leisure time
              and the number of verses you wish to read daily, weekly, or
              monthly. Whether you’re looking to build a consistent habit or
              strengthen your spiritual connection, MailmeQuran ensures that you
              never miss an opportunity to engage with the Quran. With its
              simple and user-friendly interface, the app makes it easy for
              anyone to integrate Quranic reading into their lifestyle. Stay
              inspired, connected, and motivated on your journey with
              MailmeQuran.
            </p>

            <div className="text-center lg:text-start">
              <Link to="/signup">
                <Button
                  title="Sign Up Now"
                  className="mt-8 w-40 bg-inherit  !text-customGreen border-2 border-customGreen"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
