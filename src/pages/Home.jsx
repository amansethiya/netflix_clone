import React from "react";
import Navbar from "../components/Navbar";
import TitleCards from "../components/titleCards";
import Hero_img from "../assets/hero_banner.jpg";
import Hero_title from "../assets/hero_title.png";
import Play_icon from "../assets/play_icon.png";
import Info_icon from "../assets/info_icon.png";
import Footer from "../components/footer ";

const Home = () => {
  return (
    <div className="Home ">
      <Navbar />
      <div className="hero">
        <img src={Hero_img} alt="" className="w-full " />
        <div className="hero-caption absolute pl-[6%] bottom-0  w-full ">
          <img src={Hero_title} alt="" className="w-11/12 mb-8 max-w-[420px]" />
          <p className="max-w-[700px] text-[17px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis labore exercitationem reiciendis?
          </p>
          <div className="hero-btns flex gap-10">
            <button className="hover:bg-[#c2c2c2] cursor-pointer flex gap-3 items-center  px-4 py-1 rounded-[5px] bg-white text-black">
              <img src={Play_icon} alt="" className="w-5 h-5" />
              Play Now
            </button>
            <button className="hover:bg-[#272727] cursor-pointer flex gap-3 items-center  px-4 py-1 rounded-[5px] bg-black text-white">
              <img src={Info_icon} alt="" className="w-5 h-5" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="moreCards ml-10">
        <TitleCards title={"Only On Netflix"} />
        <TitleCards title={"1930 to 2000 movies"} />
        <TitleCards title={"Newly Lunched Movies"} />
        <TitleCards title={"Comming Soon in 2026"} />
      </div>
    </div>
  );
};

export default Home;
