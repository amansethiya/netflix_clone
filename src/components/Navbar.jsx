import React from "react";
import logo from "../assets/logo.png";
import Search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar min-w-full flex justify-around items-center mt-6">
      <div className="left-nav flex justify-center gap-10 items-center">
        <img src={logo} alt="" className="w-[148px] h-[40px]" />
        <ul className="flex gap-5">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="right-nav flex justify-center gap-5">
        <img src={Search_icon} alt="" className=" w-[15px]  " />
        <p>Children</p>
        <img src={bell_icon} alt="" className=" w-[20px]" />
        <div className="relative group flex gap-3 ">
          <img src={profile_img} alt="" className=" w-[30px] h-[30px] " />
          <img src={caret_icon} alt="" className=" w-[15px]" />
          <div className="absolute top-full mt-3 right-0 w-max bg-[#191919] py-3 px-4 rounded-md shadow-lg z-50 hidden group-hover:block">
            <p className="text-sm cursor-pointer hover:underline whitespace-nowrap">
              Sign out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
