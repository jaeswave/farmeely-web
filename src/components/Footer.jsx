const Footer = () => {
  return (
    <footer className="relative bg-[#f2fbf9] pt-12 pb-10 px-4 font-poppins overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto">
        <div className="flex mx-auto justify-between gap-4 w-[60%] text-sm md:text-base">
          <a href="#about">About Us</a>
          <a href="#mission">How It Works</a>
          <a href="#team">FAQs</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="border-t border-gray-300 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          <p>© 2025 Farmeely. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
