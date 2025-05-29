import { footerLinks } from "../data";
import UseSectionNavigator from "../hooks/UseSectionNavigator";


const Footer = () => {


  const handleNavigate = UseSectionNavigator();

  const handleClick = (path) => {
    handleNavigate(path);
  };
  return (
    <footer className="mt-20 pt-12 px-4 font-poppins">
      <div className="bg-customLiteGreen bg-opacity-[20%] rounded-t-full">
        <div className="mx-auto grid sm:grid-cols-4 gap-4 place-items-center w-[80%]">
          {footerLinks.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="hover:underline"
              onClick={() => handleClick(item.path)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-6 mt-6 p-6 flex flex-col md:flex-row justify-between items-center text-sm">
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
