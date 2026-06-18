import React from "react";

import yt_icon from "../assets/youtube_icon.png";
import x_icon from "../assets/twitter_icon.png";
import insta_icon from "../assets/instagram_icon.png";
import fb_icon from "../assets/facebook_icon.png";

const footer = () => {
  return (
    <div className="footer p-8 max-w-full items-center mt-20 ">
      <ul className="ul grid grid-cols-3 gap-4 mb-8 list-none text-center">
        <li className="">Audio Description</li>
        <li className="">Help Center</li>
        <li className="">Gift Card</li>
        <li className="">Media Center</li>
        <li className="">Investor Relation</li>
        <li className="">Jobs</li>
        <li className="">Terms of Use</li>
        <li className="">Privacy Policy</li>
        <li className="">Legal Notic </li>
        <li className="">Cookies</li>
        <li className="">Contact Us</li>
      </ul>

      <div className=" flex flex-row justify-around my-3 mx-auto items-center">
        <p className="text-xl font-bold text-[#666]">Netflix India</p>

        <div className="footer-icon flex gap-5  ">
          <img src={yt_icon} alt="" className="w-8 cursor-pointer" />
          <img src={x_icon} alt="" className="w-8 cursor-pointer" />
          <img src={insta_icon} alt="" className="w-8 cursor-pointer" />
          <img src={fb_icon} alt="" className="w-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default footer;
