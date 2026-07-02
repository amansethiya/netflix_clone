import React, { useEffect, useRef } from "react";
import "../index.css";
import logo from "../assets/logo.png";
import Search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { logout } from "../firebase";

const Navbar = () => {
  const navref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add("nav-dark");
      } else {
        navref.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navref}
      className="navbar fixed top-0 left-0 w-full z-50 transition-all duration-300
      flex items-center justify-between
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
      py-3"
    >
      {/* Left */}
      <div className="flex items-center gap-4 lg:gap-10">
        <img
          src={logo}
          alt="Netflix"
          className="w-24 sm:w-28 md:w-32 lg:w-[148px]"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-5 text-sm">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
          <li className="cursor-pointer hover:text-gray-300">Movies</li>
          <li className="cursor-pointer hover:text-gray-300">New & Popular</li>
          <li className="cursor-pointer hover:text-gray-300">My List</li>
          <li className="cursor-pointer hover:text-gray-300">
            Browse by Language
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
        {/* Search */}
        <div className="hidden sm:flex bg-[#00000066] items-center gap-2 rounded-xl px-3 py-2">
          <img src={Search_icon} alt="" className="w-[14px] lg:w-[15px]" />
          <p className="hidden md:block text-[#b7b7b7] text-sm">Search</p>
        </div>

        {/* Mobile Search Icon */}
        <img
          src={Search_icon}
          alt=""
          className="w-5 sm:hidden cursor-pointer"
        />

        {/* Bell */}
        <img
          src={bell_icon}
          alt=""
          className="hidden md:block w-5 cursor-pointer"
        />

        {/* Profile */}
        <div className="relative group flex items-center gap-2 cursor-pointer">
          <img src={profile_img} alt="" className="w-8 h-8 rounded" />

          <img src={caret_icon} alt="" className="hidden sm:block w-3" />

          <div className="absolute top-full right-0 mt-2 hidden group-hover:block bg-[#191919] px-4 py-3 rounded-md shadow-lg">
            <p
              onClick={logout}
              className="text-sm whitespace-nowrap hover:underline"
            >
              Sign out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
