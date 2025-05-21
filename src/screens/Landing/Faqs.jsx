import { faqData } from "../../data";
import { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (id) => {
    setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <section className=" py-16 px-6 md:px-16 font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-urbanist">FAQ</h2>
        <p className="mt-2 text-2xl"> Got Questions? We’ve Got Answers</p>
      </div>

      <div className="mt-6 max-w-6xl mx-auto grid md:flex-col gap-6">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="bg-customLiteGreen bg-opacity-[15%] shadow-lg rounded-lg p-4 cursor-pointer"
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-customGreen font-semibold">{faq.question}</h3>
              <span className="text-2xl text-white bg-customGreen rounded-full ">
                {openIndex === faq.id ? "🡅" : "🡇"}
              </span>
            </div>
            {openIndex === faq.id && (
              <p className="bg-white mt-2 transition-all duration-300 ease-in-out">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
