import React from "react";
import { ColorSelection } from "./ColorSelection";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <h1 className="text-5xl text-white text-center">Welcome, Joncarlos!</h1>
      <h2 className="absolute top-0 left-0 text-white text-2xl">nogginy</h2>
      {/* <img
        src={userData.img}
        className="custom"
        alt="Pic"
        width="300"
        height="300"
      /> */}
      <ColorSelection />
      <div className="text-center">
        <button
          type="button"
          className="button"
          onClick={() => navigate("/nogginy/quiz")}
        >
          Single
        </button>
        <button
          type="button"
          className="button"
          // onClick={() => gameModeHandler("multiplayer")}
        >
          Multiplayer
        </button>
      </div>
    </div>
  );
};

export default Main;
