import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const handleclick = () => {
    settoggle(!toggle);
  };
  console.log(toggle);
  return (
    <nav className="flex justify-between items-center w-full h-[60px] bg-[#14182c] fixed">
      <div className="flex-1">
        <p className="text-[red] text-3xl font-bold mx-10 italic">RM.</p>
      </div>
      <ul className="text-gray-300 md:flex md:items-center md:justify-between  mx-8 hidden">
        <Link to="hero" smooth={true} offset={-50} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} offset={-50} duration={500}>
          <li>About</li>
        </Link>
        <Link to="skills" smooth={true} offset={-50} duration={500}>
          <li>Skills</li>
        </Link>
        <Link to="projects" smooth={true} offset={-50} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="contacts" smooth={true} offset={-50} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      {/* Hamburger */}

      <div onClick={handleclick} className="z-10 text-white mx-4 md:hidden">
        {!toggle ? <FaBars></FaBars> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !toggle
            ? "hidden"
            : "absolute top-[0] left-[0] bg-[#14182c] w-full h-screen text-gray-300 flex flex-col justify-center items-center md:hidden"
        }
      >
        <Link
          onClick={handleclick}
          to="hero"
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li className="py-6">Home</li>
        </Link>
        <Link
          onClick={handleclick}
          to="about"
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li className="py-6">About</li>
        </Link>
        <Link
          onClick={handleclick}
          to="skills"
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li className="py-6">Skills</li>
        </Link>
        <Link
          onClick={handleclick}
          to="projects"
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li className="py-6">Projects</li>
        </Link>

        <Link
          onClick={handleclick}
          to="contacts"
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li className="py-6">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
