import React, { useEffect } from "react";
import Player_back from "../assets/back_arrow_icon.png";

const player = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmI3OTE1ODY1NmU1NmQyOTNiZWE5MmMyZDNiNjExZiIsIm5iZiI6MTc4MjA2MDgxMy45NCwic3ViIjoiNmEzODE3MGQ4ZjkyYjM4OGMxZTQ3MGIyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eYjOS0azboA_11Xn_FTbLJynfiOjFIXMEWlnet1B3Tk",
    },
  };


  useEffect() => {()=>{}}


  fetch(
    "https://api.themoviedb.org/3/movie/502356/videos?language=en-US",
    options,
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img
        src={Player_back}
        alt=""
        className="absolute top-5 left-5 w-12 cursor-pointer"
      />
      <iframe
        width="90%"
        height="650px"
        src="https://www.youtube.com/embed/lpx2zFkapIk?si=F_qpB3hHw_Ifor8p"
        title="Trailer"
        className="rounded-[10px]"
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info flex items-center justify-between w-9/10">
        <p className="">Published Date</p>
        <p className="">Name</p>
        <p className="">Type</p>
      </div>
    </div>
  );
};

export default player;
