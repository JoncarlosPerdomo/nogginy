import React from "react";
import { ColorSelection } from "./ColorSelection";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome, Joncarlos!</h1>
      <h2 id="teamname">nogginy</h2>
      {/* <img
        src={userData.img}
        className="custom"
        alt="Pic"
        width="300"
        height="300"
      /> */}
      <ColorSelection />
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
  );
};

export default Main;