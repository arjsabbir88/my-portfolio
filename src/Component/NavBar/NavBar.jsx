import Logo from "@/Custom/Logo/Logo";
import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

const NavBar = () => {
  const links = (
    <>
      <li>
        <Link to="home" smooth={true} duration={500} offset={-70}
        className="tracking-normal hover:tracking-wider transition-all duration-200 hover:text-[#edb24e] hover:underline cursor-pointer">
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500} offset={-70}
        className="tracking-normal hover:tracking-wider transition-all duration-200 hover:text-[#edb24e] hover:underline cursor-pointer">
          About
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={500} offset={-70}
        className="tracking-normal hover:tracking-wider transition-all duration-200 hover:text-[#edb24e] hover:underline cursor-pointer">
          Skills
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500} offset={-70}
        className="tracking-normal hover:tracking-wider transition-all duration-200 hover:text-[#edb24e] hover:underline cursor-pointer">
          Project
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} offset={-70}
        className="tracking-normal hover:tracking-wider transition-all duration-200 hover:text-[#edb24e] hover:underline cursor-pointer">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm max-w-11/12 mx-auto bg-transparent text-white sticky top-1">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="outline px-8 py-2 rounded-xl hover:bg-[#edb24e] hover:text-black transition-all duration-200 cursor-pointer">
          Hire Me!
        </a>
      </div>
    </div>
  );
};

export default NavBar;
