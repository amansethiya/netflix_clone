import React, { useEffect, useState } from "react";
import Player_back from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmI3OTE1ODY1NmU1NmQyOTNiZWE5MmMyZDNiNjExZiIsIm5iZiI6MTc4MjA2MDgxMy45NCwic3ViIjoiNmEzODE3MGQ4ZjkyYjM4OGMxZTQ3MGIyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eYjOS0azboA_11Xn_FTbLJynfiOjFIXMEWlnet1B3Tk",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results[0]))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img
        src={Player_back}
        onClick={() => {
          navigate(-2);
        }}
        alt=""
        className="absolute top-5 left-5 w-12 cursor-pointer"
      />
      <iframe
        width="90%"
        height="650px"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        className="rounded-[10px] my-5"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info flex items-center justify-between w-9/10">
        <p className="">{apiData.published_at?.slice(0, 10)}</p>
        <p className="">{apiData.name}</p>
        <p className="">{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
