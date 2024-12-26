import { useState } from "react";
import { faqData } from "../data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        <div className="space-y-4 grid lg:grid-rows-3 w-full">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-customGreen bg-opacity-[8%] rounded-lg shadow-2xl p-4 border border-gray-200"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-2xl font-semibold text-customGreen">
                  {faq.question}
                </h3>
                <div className="h-12 w-12 flex items-center justify-center rounded-full  bg-customGreen">
                  <span
                    className={`transition-transform transform ${
                      activeIndex === index ? "rotate-45" : "rotate-0"
                    } text-customWhite font-bold text-2xl`}
                  >
                    +
                  </span>
                </div>
              </div>
              {activeIndex === index && (
                <div className="p-10 bg-white">
                  <p className="text-lg font-medium mt-6">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
