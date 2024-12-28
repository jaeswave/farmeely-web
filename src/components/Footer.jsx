import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footerBg text-white py-11 px-">
      <div className="container mx-auto px-10 ">
        <div className="grid md:grid-cols-3 space-x-5 space-y-6 md:space-y-0">
          <div className="flex flex-col items-center lg:items-start ">
            <div className="mb-4">LOGO</div>
            <p className="text-sm max-w-60 text-center md:text-start">
              Lorem ipsum dolor amet, lorem ipsum dolore amet lorem ipsum dolor
              amet noddi dnjsdklds jdskdspmkldkmckmnm kslds slddsldsld l
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center ">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">+2338096542356</p>
            <p className="text-sm">info@MailmeQuran.com</p>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center text-sm ">
        <p>&copy; 2024 @ MailmeQuran</p>
      </div>
    </footer>
  );
};

export default Footer;
