import logo from "../assets/images/logo.png";
import Button from "../components/Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useScreenSize from "../hooks/UseScreenSize";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  useScreenSize(setNavOpen);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeMenu = () => {
    setNavOpen(false);
  };
  return (
    <nav className="w-[90%] bg-white rounded-full py-2 mx-auto ">
      <div className="flex justify-between items-center px-3">
        <div className="object-contain">
          <img src={logo} alt="logo" className="w-[50%] md:w-[80%]" />
        </div>

        <div
          className={`space-x-4 lg:space-x-14
          ${
            navOpen
              ? "bg-white flex flex-col items-center absolute top-24 left-0 w-full text-2xl space-y-4 py-8 min-h-[45%]"
              : "hidden md:block"
          }
          `}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about-us" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
          <Link to="/faqs" onClick={closeMenu}>
            FAQs
          </Link>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <Button title="Contact Us" className=" hidden md:block" />
          <span
            className="text-3xl cursor-pointer md:hidden"
            onClick={toggleNav}
          >
            {navOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
