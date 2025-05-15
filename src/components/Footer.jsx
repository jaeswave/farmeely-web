import logo from "../assets/images/logo.png"; 
import mah from "../assets/images/mah.png"; // Assuming you have a logo image in the assets folder

const Footer = () => {
  return (
    <>
      <footer className=" py-10 px-6 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="place-items-center  md:place-items-start w-full md:w-[50%]">
            <div className="w-[25%] px-3">
              <img src={logo} alt="Mahfuz Microfinance" className="w-32 mb-4" />
            </div>
            <p className="text-sm w-full md:w-[45%] text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur. Enim aliquet dui nulla
              vulputate.
            </p>
          </div>
          <div className="grid grid-cols-2 place-items-center space-y-5 md:space-y-0 md:flex  w-full md:w-[50%] md:justify-between">
            <div className="">
              <h3 className="font-semibold text-lg mb-3">Short links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Products
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Wallet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Takaful
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="font-semibold text-lg mb-3">Other pages</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-400 pt-4 text-sm flex flex-col md:flex-row justify-between items-center space-y-0 md:space-y-3">
          <p>
            All rights reserved{" "}
            <a href="#" className="hover:underline font-bold">
              Privacy Policy
            </a>
          </p>
          <p>&copy; 2025 Mahfuz MFB. All rights reserved.</p>
        </div>
      </footer>
      <div className="mt-10 flex justify-center">
        <img src={mah} alt="mahfuz" className="w-auto h-[30vh]" />
      </div>
    </>
  );
};

export default Footer;
