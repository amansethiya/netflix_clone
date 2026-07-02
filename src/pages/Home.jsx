import React from "react";
import Navbar from "../components/Navbar";
import TitleCards from "../components/titleCards";

import Hero_img from "../assets/hero_banner.jpg";
import Hero_title from "../assets/hero_title.png";
import Play_icon from "../assets/play_icon.png";
import Info_icon from "../assets/info_icon.png";

const Home = () => {
  return (
    <div className="Home bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <div className="relative">
        <img
          src={Hero_img}
          alt=""
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-auto object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        {/* Caption */}
        <div
          className="
          absolute bottom-5
          sm:bottom-8
          md:bottom-12
          lg:bottom-16
          left-0
          px-4
          sm:px-6
          md:px-10
          lg:px-[6%]
          w-full
        "
        >
          <img
            src={Hero_title}
            alt=""
            className="w-48 sm:w-64 md:w-80 lg:max-w-[420px] mb-4 md:mb-6"
          />

          <p
            className="
            hidden sm:block
            max-w-xl lg:max-w-[700px]
            text-sm md:text-base lg:text-lg
            mb-5 md:mb-8
          "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis labore exercitationem reiciendis?
          </p>

          <div className="flex flex-wrap gap-3 md:gap-5">
            <button className="flex items-center gap-2 md:gap-3 bg-white text-black px-4 md:px-6 py-2 rounded hover:bg-gray-300 transition">
              <img src={Play_icon} alt="" className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Play Now</span>
            </button>

            <button className="flex items-center gap-2 md:gap-3 bg-black/70 text-white px-4 md:px-6 py-2 rounded hover:bg-black transition">
              <img src={Info_icon} alt="" className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">More Info</span>
            </button>
          </div>

          <div className="mt-8 md:mt-12">
            <TitleCards />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-[6%] mt-8 space-y-8">
        <TitleCards title={"Popular Netflix Movies"} category={"popular"} />

        <TitleCards title={"Top Rated Movies"} category={"top_rated"} />

        <TitleCards title={"Coming Soon in 2026"} category={"upcoming"} />
      </div>
    </div>
  );
};

export default Home;
