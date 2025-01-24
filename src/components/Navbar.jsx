import Button from "./Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "animate.css";
import { handleScroll } from "../utils";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    if (navOpen) setNavOpen(false);
    else {
      setNavOpen(true);
    }
  };
  return (
    <nav className="bg-customWhite text-customBlack px-4 lg:px-10 py-2 fixed top-0 left-0 w-full shadow-md z-10">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-logo">LOGO</div>
        <div
          className={`${
            navOpen
              ? "flex flex-col items-center absolute top-20 left-0 w-full bg-customGreen text-customWhite text-2xl shadow-md space-y-4 py-8 animate__animated animate__bounceInDown "
              : "hidden md:space-x-10 md:block"
          }`}
        >
          <a
            onClick={() => handleScroll("home")}
            className="hover:text-customGreen cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => handleScroll("about")}
            className="hover:text-customGreen cursor-pointer"
          >
            About Us
          </a>
          <a
            onClick={() => handleScroll("features")}
            className="hover:text-customGreen cursor-pointer"
          >
            Features
          </a>
          <a
            onClick={() => handleScroll("contact")}
            className="hover:text-customGreen cursor-pointer"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <Link to="/login">
            <Button title="Login" className="!bg-beige" />
          </Link>
          <Link to="/donate">
            <Button title="Donate" />
          </Link>

          <span className="text-3xl md:hidden" onClick={toggleNav}>
            {navOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
