import { faqs } from "../../data";
import { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (id) => {
    setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-urbanist">
          Frequently Ask Questions
        </h2>
      </div>
    

      <div className="mt-6 max-w-6xl mx-auto grid md:flex-col gap-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white shadow-md rounded-md p-4 cursor-pointer"
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-customBlue font-medium">{faq.question}</h3>
              <span className="text-xl">
                {openIndex === faq.id ? "➖" : "➕"}
              </span>
            </div>
            {openIndex === faq.id && (
              <p className="mt-2 transition-all duration-300 ease-in-out">
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






