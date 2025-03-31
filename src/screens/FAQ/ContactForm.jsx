import Button from "../../components/Button";
import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";

const ContactForm = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-urbanist text-customBlue text-3xl md:text-[3rem] font-bold ">
          Get in Touch
        </h2>
        <p className="font-urbanist mt-2">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
          molestie vel.
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Name *"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone number *"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>

          <Button title="SEND" className="w-full" />
        </form>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <div className="flex items-center gap-6">
            <img src={phone} alt="phone" />
            <div>
              <p className="font-bold">PHONE</p>
              <p className="font-semibold">08022330044</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src={email} alt="email" />
            <div>
              <p className="font-bold">EMAIL</p>

              <a
                href="mailto:info@mahfuz.com.ng"
                className="text-indigo-600 font-medium"
              >
                info@mahfuz.com.ng
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
