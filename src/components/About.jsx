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
          <div className=" flex flex-col  justify-center mt-10 text-center md:text-start">
            <h2 className=" text-3xl md:text-4xl font-bold text-customBlack">
              About MailmeQuran.
            </h2>
            <p className="text-1xl md:text-2xl text-customBlack mt-5">
              Lorem Ipsumis simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div className="text-center md:text-start">
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
