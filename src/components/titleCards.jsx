import React, { useEffect, useRef, useState } from "react";
import cardsData from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const titleCards = ({ title, category }) => {
  const [apiData, setapiData] = useState([]);

  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmI3OTE1ODY1NmU1NmQyOTNiZWE5MmMyZDNiNjExZiIsIm5iZiI6MTc4MjA2MDgxMy45NCwic3ViIjoiNmEzODE3MGQ4ZjkyYjM4OGMxZTQ3MGIyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eYjOS0azboA_11Xn_FTbLJynfiOjFIXMEWlnet1B3Tk",
    },
  };

  const handelWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", handelWheel);
  });

  return (
    <div className="titleCards mt-12 mb-7 mr-2">
      <h2 className="mb-2 font-bold text-[22px]">
        {title ? title : "Most Loved By nf Users"}
      </h2>
      <div
        className="card-list overflow-x-auto scrollbar-hide relative flex gap-2.5"
        ref={cardRef}
      >
        {apiData.map((card, index) => {
          return (
            <Link
              to={`/player/${card.id}`}
              className="card relative"
              key={index}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
                className=" min-w-60 rounded-[4px] cursor-pointer"
              />
              <p className="absolute bottom-2.5 right-2.5">
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default titleCards;
