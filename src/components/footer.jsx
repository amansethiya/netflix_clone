import React from "react";

import yt_icon from "../assets/youtube_icon.png";
import x_icon from "../assets/twitter_icon.png";
import insta_icon from "../assets/instagram_icon.png";
import fb_icon from "../assets/facebook_icon.png";

const Footer = () => {
  return (
    <footer className="w-full mt-20 px-4 sm:px-6 md:px-10 lg:px-[6%] py-8 text-[#808080]">
      {/* Links */}
      <ul className=" flex flex-col justify-center items-center md:grid sm:grid-cols-3  gap-y-4 gap-x-100 text-sm md:text-base">
        <li className="cursor-pointer hover:text-white transition">
          Audio Description
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Help Center
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Gift Cards
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Media Center
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Investor Relations
        </li>
        <li className="cursor-pointer hover:text-white transition">Jobs</li>
        <li className="cursor-pointer hover:text-white transition">
          Terms of Use
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Privacy Policy
        </li>
        <li className="cursor-pointer hover:text-white transition">
          Legal Notices
        </li>
        <li className="cursor-pointer hover:text-white transition">Cookies</li>
        <li className="cursor-pointer hover:text-white transition">
          Contact Us
        </li>
      </ul>

      {/* Bottom */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-lg md:text-xl font-semibold text-[#666]">
          Netflix India
        </p>

        <div className="flex items-center gap-4">
          <img
            src={yt_icon}
            alt="YouTube"
            className="w-6 sm:w-7 md:w-8 cursor-pointer hover:scale-110 transition"
          />
          <img
            src={x_icon}
            alt="X"
            className="w-6 sm:w-7 md:w-8 cursor-pointer hover:scale-110 transition"
          />
          <img
            src={insta_icon}
            alt="Instagram"
            className="w-6 sm:w-7 md:w-8 cursor-pointer hover:scale-110 transition"
          />
          <img
            src={fb_icon}
            alt="Facebook"
            className="w-6 sm:w-7 md:w-8 cursor-pointer hover:scale-110 transition"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
