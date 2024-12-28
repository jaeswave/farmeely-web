import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFemale, FaMale } from "react-icons/fa";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMale, setIsMale] = useState(true); // Tracks male/female avatar
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks dropdown menu state

  return (
    <header className="bg-navBg shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center h-16">
        <div className="text-xl font-bold">logo</div>
        <nav className="hidden md:flex space-x-6 text-customGreen">
          <Link to="/dashboard" className="hover:text-customWhite active:text-customWhite active:bg-customGreen">
            Dashboard
          </Link>
          <Link to="/myverse" className="hover:text-gray-200 active:text-customWhite active:bg-customGreen">
            My Verse
          </Link>
          <Link to="/bookmark" className="hover:text-gray-200">
            Bookmark
          </Link>
          <Link to="/donate" className="hover:text-gray-200">
            Donate
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block  justify-center">
            {isMale ? (
              <FaMale className="h-8 w-8 text-white bg-customGreen p-1 rounded-full" />
            ) : (
              <FaFemale className="h-8 w-8 text-white bg-customGreen p-1 rounded-full" />
            )}
          </div>
          <button
            onClick={() => setIsMale(!isMale)}
            className="bg-white text-blue-600 font-bold py-1 px-2 rounded hidden md:block"
          >
            {isMale ? "M" : "F"}
          </button>
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-navBg">
          <div className="flex justify-between items-center p-4">
            <div>
              {isMale ? (
                <FaMale className="h-8 w-8 text-white bg-customGreen p-1 rounded-full" />
              ) : (
                <FaFemale className="h-8 w-8 text-white bg-customGreen p-1 rounded-full" />
              )} 
            </div>
            <h1>OT</h1>
            <button
              onClick={() => setIsMale(!isMale)}
              className="bg-white text-blue-600 font-bold py-1 px-2 rounded mt-2"
            >
              {isMale ? "Male" : "Female"}
            </button>
          </div>
          <nav className="flex flex-col space-y-5 p-7">
            <Link to="/dashboard" className="hover:text-customGreen">
              Dashboard
            </Link>
            <Link to="/myverse" className="hover:text-customGreen">
              My Verse
            </Link>
            <Link to="/bookmark" className="hover:text-customGreen">
              Bookmark
            </Link>
            <Link to="/donate" className="hover:text-customGreen">
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
