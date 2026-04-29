import React from "react";
import cardsData from "../assets/cards/Cards_data";

const titleCards = () => {
  return (
    <div className="titleCards mt-12 mb-7 mr-2">
      <h2 className="mb-2">Popular On Netflix</h2>
      <div className="card-list overflow-x-auto scrollbar-hide relative flex gap-2.5">
        {cardsData.map((card, index) => {
          return (
            <div className="card relative" key={index}>
              <img
                src={card.image}
                alt=""
                className=" min-w-60 rounded-[4px] cursor-pointer"
              />
              <p className="absolute bottom-2.5 right-2.5">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default titleCards;
