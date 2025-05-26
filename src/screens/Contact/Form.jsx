import { BsEnvelopeArrowDown } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import Button from "../../components/Button";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData, setIsSubmitting, setFormData);
  };

  return (
    <div className="py-10">
      <div className="container mx-auto md:px-12 lg:px-20 grid  py-5 ">
        <div className="grid md:grid-cols-2 px-8 gap-5">
          <div className="place-self-center">
            <h3 className="text-3xl font-bold text-customLiteGreen">Reach Out to Us</h3>
            <p className="max-w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Viverra elit amet aenean
              massa et iaculis in bibendum.
            </p>
            <div className="mb-4 mt-8">
              <BsEnvelopeArrowDown className="inline-block mr-2" />
              <a
                href="mailto:helloWorld@gmail.com"
                className="hover:underline"
              >
                helloWorld@gmail.com
              </a>
            </div>
            <div className="mb-4 mt-8">
              <FaPhoneVolume className="inline-block mr-2" />
              <span>+2348022440045</span>
            </div>
          
          </div>
          <div className="place-self-center w-full border-4 border-black/15 rounded-lg bg-gray-100 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="w-full p-4 rounded border border-gray-600 focus:outline-none focus:border-customGreen"
                  placeholder="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  className="w-full p-4 rounded border border-gray-600 focus:outline-none focus:border-customGreen"
                  placeholder="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="w-full h-40 p-2 rounded border border-gray-600 focus:outline-none focus:border-customGreen"
                  rows="5"
                  placeholder="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                title={isSubmitting ? "Sending..." : "Send Message"}
                type="submit"
                disabled={isSubmitting}
                className="!bg-customLiteGreen !text-white !w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
