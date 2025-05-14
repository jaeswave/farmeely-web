import Button from "../../components/Button";
import Card from "../../components/BenefitCard";
import { benefits } from "../../data";

const accountTypes = [
  {
    title: "Individual Savings Account",
    subtitle: "(Mudarabah Savings)",
    description:
      "An investor customer deposits funds for an unspecified period and shares both the profit and loss based on the pre-agreed ratio.",
  },
  {
    title: "Individual Current Account",
    subtitle: "(Qard Account)",
    description:
      "In this design, qard al Hasan is defined as 'deposits whose repayment in full on demand is guaranteed by the bank'.",
  },
  {
    title: "Term Deposits",
    subtitle: "(Mudarabah)",
    description:
      "Here, the bank receives deposit on Mudarabah principle and invests in Halal (permissible in Islamic Sharia) business for a specified period.",
  },
  {
    title: "Individual Salary Account",
    subtitle: "(Qard)",
    description:
      "This is similar to the individual current account but it operates on the principles of Qard too.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-[#F7F7F7] min-h-screen py-20">
      <div className="mx-auto w-full px-3 md:px-0 md:w-[85%]">
        <h3 className="font-outfit text-[1rem]">P R O D U C T S</h3>
        <div className="md:grid md:grid-cols-[91%_8%] w-full">
          <div>
            <p className="font-urbanist  font-bold text-[3rem] mt-2 leading-[2.5rem] w-full md:w-[70%]">
              Innovative Products Designed for Ethical, Interest-Free Banking.{" "}
            </p>
            <p className="font-urbanist mt-2 text-lg w-full md:w-[70%]">
              At Mahfuz, we don’t just follow trends, we create solutions. Our
              products are designed to meet the user needs: from flexible
              Mudarabah savings plans to ethical financing options, smart
              investment tools, and seamless digital experiences.
            </p>
          </div>

          <Button title="Stay Updated" className=" mt-6 md:mt-10 h-[2.5rem]" />
        </div>
        <div className="grid lg:grid-cols-4 gap-6 p-6 mt-10">
          {accountTypes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 hover:shadow-lg transition-all"
            >
              <h3 className="text-customeBlue text-outfit font-bold text-[1.5rem]">{item.title}</h3>
              <p className="text-lg text-customSkyblue mb-2 font-semibold">
                {item.subtitle}
              </p>
              <p className="text-customBlue text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
