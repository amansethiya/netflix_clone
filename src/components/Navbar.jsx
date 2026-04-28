import React from "react";
import logo from "../assets/logo.png";
import Search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="right-nav">
        <img src={Search_icon} alt="" />
        <p>Children</p>
        <img src={bell_icon} alt="" />

        <img src={profile_img} alt="" />
        <img src={caret_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
