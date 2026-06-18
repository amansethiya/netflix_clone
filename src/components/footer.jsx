import React from "react";

import yt_icon from "../assets/youtube_icon.png";
import x_icon from "../assets/twitter_icon.png";
import insta_icon from "../assets/instagram_icon.png";
import fb_icon from "../assets/facebook_icon.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={yt_icon} alt="" />
        <img src={x_icon} alt="" />
        <img src={insta_icon} alt="" />
        <img src={fb_icon} alt="" />
      </div>
      <ul className="ul">
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
      </ul>
    </div>
  );
};

export default footer;
